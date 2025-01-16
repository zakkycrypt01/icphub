'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BountyList } from "@/components/bounty-list"
import { StatusFilter } from "@/components/status-filter"
import { fetchBountyById } from '@/actions/fetchbountybyid'
import { fetchBounties } from '@/actions/fetchbounty'


type Status = 'ongoing' | 'completed' | 'in-review'

type Item = {
  bountyid: number
  title: string
  description: string
  reward: string
  deadline: string
  skills: string[]
  postedBy: 'admin' | 'company'
  companyname?: string
  status: Status
}

// const bounties: Item[] = [
//   {
//     id: 1,
//     title: "Develop a DeFi Dashboard",
//     description: "Create a user-friendly dashboard for tracking DeFi investments across multiple protocols on the Internet Computer.",
//     reward: "5000 ICP",
//     deadline: "2024-03-31",
//     skills: ["React", "TypeScript", "DeFi"],
//     postedBy: 'admin',
//     status: 'ongoing'
//   },
//   {
//     id: 2,
//     title: "Smart Contract Auditing Tool",
//     description: "Build an automated tool for auditing smart contracts on the Internet Computer.",
//     reward: "7500 ICP",
//     deadline: "2024-04-15",
//     skills: ["Rust", "Motoko", "Smart Contracts"],
//     postedBy: 'company',
//     companyname: 'TechCorp',
//     status: 'in-review'
//   },
//   {
//     id: 3,
//     title: "ICP Wallet Browser Extension",
//     description: "Develop a browser extension for managing ICP tokens and interacting with dapps.",
//     reward: "6000 ICP",
//     deadline: "2024-02-28",
//     skills: ["JavaScript", "Browser Extensions", "Cryptography"],
//     postedBy: 'admin',
//     status: 'completed'
//   },
// ]


const gigs: Item[] = [
  {
    bountyid: 1,
    title: "Create Educational Content on ICP",
    description: "Develop a series of educational articles or videos explaining the basics of Internet Computer Protocol.",
    reward: "500 ICP",
    deadline: "2024-02-28",
    skills: ["Content Creation", "Technical Writing", "Video Editing"],
    postedBy: 'admin',
    status: 'ongoing'
  },
  {
    bountyid: 2,
    title: "Design ICP-themed NFT Collection",
    description: "Create a unique collection of NFTs inspired by the Internet Computer ecosystem.",
    reward: "1000 ICP",
    deadline: "2024-03-15",
    skills: ["Graphic Design", "NFT", "Creativity"],
    postedBy: 'company',
    companyname: 'ArtBlock',
    status: 'in-review'
  },
  {
    bountyid: 3,
    title: "Community Management for ICP Nigeria",
    description: "Manage and grow the ICP Nigeria community on various social media platforms.",
    reward: "800 ICP",
    deadline: "2024-01-31",
    skills: ["Community Management", "Social Media", "Content Creation"],
    postedBy: 'admin',
    status: 'completed'
  },
]

export function BountyGigTabs() {
  const [activeTab, setActiveTab] = useState("bounties")
  const [activeFilter, setActiveFilter] = useState<Status | 'all'>('all')
  const [bounties, setBounties] = useState<Item[]>([])
  useEffect(() => {
    const getBounties = async () => {
      const bounties = await fetchBounties()
      console.log(bounties);
      setBounties(bounties)
    }
    getBounties()
  }, [])

  const filterItems = (items: Item[]) => {
    if (activeFilter === 'all') return items
    return items.filter(item => item.status === activeFilter)
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-blue-200 to-pink-200 dark:from-blue-800 dark:to-pink-800">
        <TabsTrigger value="bounties">Bounties</TabsTrigger>
        <TabsTrigger value="gigs">Gigs</TabsTrigger>
      </TabsList>
      <div className="my-4">
        <StatusFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      <TabsContent value="bounties">
        <BountyList items={filterItems(bounties)} />
      </TabsContent>
      <TabsContent value="gigs">
        <BountyList items={filterItems(gigs)} />
      </TabsContent>
    </Tabs>
  )
}

