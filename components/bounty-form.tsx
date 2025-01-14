'use client'

import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useTelegramData from './telegramData';
import { fetchCompanyData as fetchCompanyDataAction } from '@/actions/fetchcompanydata';

type BountyFormProps = {
  onSubmit: (bounty: BountyData) => void;
};

type BountyData = {
  title: string;
  description: string;
  reward: string;
  deadline: string;
  skills: string;
  companyname: string;
  postedby: string;
  bountyid: string;
};

export function BountyForm({ onSubmit }: BountyFormProps) {
  const telegramData = useTelegramData();

  const [bounty, setBounty] = useState<BountyData>({
    title: '',
    description: '',
    reward: '',
    deadline: '',
    skills: '',
    companyname: '',
    postedby: '',
    bountyid: uuidv4(),
  });

  const fetchCompanyData = useCallback(async () => {
    if (!telegramData) {
      console.log("Telegram data is missing.");
      return { companyname: '', usertype: '' };
    }
  
    try {
      const fetchedProfile = await fetchCompanyDataAction(telegramData?.telegram_id?.toString() || '');
      return {
        companyname: fetchedProfile?.companyname || '',
        usertype: fetchedProfile?.usertype || ''
      };
    } catch (error) {
      console.log("Error fetching company data:", error);
      return { companyname: '', usertype: '' };
    }
  }, [telegramData]);
  
  useEffect(() => {
    const initializeBounty = async () => {
      const { companyname, usertype } = await fetchCompanyData();
      setBounty((prev) => ({
        ...prev,
        companyname: companyname || telegramData?.username || '',
        postedby: usertype || '',
      }));
    };
  
    if (telegramData) initializeBounty();
  }, [telegramData, fetchCompanyData]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBounty({ ...bounty, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (parseFloat(bounty.reward) <= 0) {
      alert("Reward must be greater than zero.");
      return;
    }

    onSubmit(bounty);
    console.log(bounty);
    setBounty((prev) => ({
      ...prev,
      title: '',
      description: '',
      reward: '',
      deadline: '',
      skills: '',
      bountyid: uuidv4(), // Generate a new ID for each bounty.
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Post a New Bounty</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={bounty.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={bounty.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="reward">Reward (in ICP)</Label>
            <Input
              id="reward"
              name="reward"
              type="number"
              value={bounty.reward}
              onChange={handleChange}
              required
              min="0"
            />
          </div>
          <div>
            <Label htmlFor="deadline">Deadline</Label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              value={bounty.deadline}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="skills">Required Skills (comma-separated)</Label>
            <Input
              id="skills"
              name="skills"
              value={bounty.skills}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            className="w-full bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]"
            type="submit"
          >
            Post Bounty
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
