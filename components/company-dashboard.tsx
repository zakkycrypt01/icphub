"use client";

import { useState } from "react";
import { postBounty } from "@/actions/postbounty";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  bountyid: number;
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
  const [bounties, setBounties] = useState<Bounty[]>([
    {
      bountyid: 1,
      title: "DeFi Dashboard",
      reward: "5000 ICP",
      applicants: 3,
      status: "ongoing",
    },
    {
      bountyid: 2,
      title: "Smart Contract Audit",
      reward: "7500 ICP",
      applicants: 1,
      status: "in-review",
    },
    {
      bountyid: 3,
      title: "NFT Marketplace",
      reward: "10000 ICP",
      applicants: 0,
      status: "completed",
    },
  ]);

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

  const handleCloseBounty = (bountyid: number) => {
    setBounties(
      bounties.map((bounty) =>
        bounty.bountyid === bountyid
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
