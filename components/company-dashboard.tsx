"use client";

import { useState, useEffect, useCallback } from "react";
import { postBounty } from "@/actions/postbounty";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchCompanyBounty } from "@/actions/fetchcompanybounty";
import useTelegramData from './telegramData';
import { fetchCompanyData as fetchCompanyDataAction} from '@/actions/fetchcompanydata';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BountyForm } from "@/components/bounty-form";

type Bounty = {
  bountyid: string;
  title: string;
  reward: string;
  applicants: number;
  description?: string;
  companyname?: string;
  deadline?: string;
  postedby?: string;
  skills?: string;
  status: "ongoing" | "in-review" | "completed";
};

export function CompanyDashboard() {
  const [showBountyForm, setShowBountyForm] = useState(false);
  const [bounties, setBounties] = useState<Bounty[]>([]);
  const telegramData = useTelegramData();

const fetchCompanyData = useCallback(async () => {
  if (!telegramData) {
    console.log("Telegram data is missing.");
    return { companyname: '', usertype: '' };
  }

  try {
    const telegramId = telegramData.telegram_id?.toString() || '';
    const fetchedProfile = await fetchCompanyDataAction(telegramId);
    return {
      companyname: fetchedProfile?.companyname || '',
      usertype: fetchedProfile?.usertype || ''
    };
  } catch (error) {
    console.error("Error fetching company data:", error);
    return { companyname: '', usertype: '' };
  }
}, [telegramData]);

useEffect(() => {
  const fetchAndLogCompanyData = async () => {
    const { companyname, usertype } = await fetchCompanyData();
    console.log("Fetched company data:", { companyname, usertype });
    const companyBounties = await fetchCompanyBounty(companyname);
    setBounties(companyBounties);
  };

  if (telegramData) {
    fetchAndLogCompanyData();
  }
}, [telegramData, fetchCompanyData]);

  

  
  const handlePostBounty = async (bountyData: any) => {
    const newBounty: Bounty = {
      bountyid: bountyData.bountyid,
      description: bountyData.description,
      companyname: bountyData.companyname,
      skills: bountyData.skills,
      deadline: bountyData.deadline,
      postedby: bountyData.postedby,
      title: bountyData.title,
      reward: `${bountyData.reward} ICP`,
      applicants: 0,
      status: "ongoing",
    };
    setBounties([...bounties, newBounty]);
    setShowBountyForm(false);
    console.log("newBounty :>> ", newBounty);
    const response = await postBounty(newBounty);
    console.log("response :>> ", response);
  };

  const handleCloseBounty = (bountyid: string) => {
    setBounties(
      bounties.map((bounty) =>
        bounty.bountyid === bountyid.toString()
          ? { ...bounty, status: "in-review" }
          : bounty
      )
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Company Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            className="bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]"
            onClick={() => setShowBountyForm(!showBountyForm)}
          >
            {showBountyForm ? "Cancel" : "Post New Bounty"}
          </Button>
          {showBountyForm && <BountyForm onSubmit={handlePostBounty} />}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Bounties</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Reward</TableHead>
                <TableHead>Applicants</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bounties.map((bounty, index) => (
                <TableRow key={`${bounty.bountyid}-${index}`}>
                  <TableCell>{bounty.title}</TableCell>
                  <TableCell>{bounty.reward}</TableCell>
                  <TableCell>{bounty.applicants}</TableCell>
                  <TableCell>{bounty.status}</TableCell>
                  <TableCell>
                    {bounty.status === "ongoing" && (
                      <Button
                        className="bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]"
                        onClick={() => handleCloseBounty(bounty.bountyid)}
                      >
                        Close Bounty
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
