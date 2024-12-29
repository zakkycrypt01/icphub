'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BountyForm } from "@/components/bounty-form"

type Bounty = {
  id: number
  title: string
  reward: string
  applicants: number
  status: 'Open' | 'Closed' | 'Completed'
}

export function CompanyDashboard() {
  const [showBountyForm, setShowBountyForm] = useState(false)
  const [bounties, setBounties] = useState<Bounty[]>([
    { id: 1, title: "DeFi Dashboard", reward: "5000 ICP", applicants: 3, status: 'Open' },
    { id: 2, title: "Smart Contract Audit", reward: "7500 ICP", applicants: 1, status: 'Closed' },
    { id: 3, title: "NFT Marketplace", reward: "10000 ICP", applicants: 0, status: 'Open' },
  ])

  const handlePostBounty = (bountyData: any) => {
    const newBounty: Bounty = {
      id: bounties.length + 1,
      title: bountyData.title,
      reward: `${bountyData.reward} ICP`,
      applicants: 0,
      status: 'Open'
    }
    setBounties([...bounties, newBounty])
    setShowBountyForm(false)
  }

  const handleCloseBounty = (id: number) => {
    setBounties(bounties.map(bounty => 
      bounty.id === id ? { ...bounty, status: 'Closed' } : bounty
    ))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Company Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Button className='bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]' onClick={() => setShowBountyForm(!showBountyForm)}>
            {showBountyForm ? 'Cancel' : 'Post New Bounty'}
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
              {bounties.map((bounty) => (
                <TableRow key={bounty.id}>
                  <TableCell>{bounty.title}</TableCell>
                  <TableCell>{bounty.reward}</TableCell>
                  <TableCell>{bounty.applicants}</TableCell>
                  <TableCell>{bounty.status}</TableCell>
                  <TableCell>
                    {bounty.status === 'Open' && (
                      <Button className='bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]' onClick={() => handleCloseBounty(bounty.id)}>
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
  )
}

