'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const bounties = [
  {
    id: 1,
    title: "Develop a DeFi Dashboard",
    description: "Create a user-friendly dashboard for tracking DeFi investments across multiple protocols on the Internet Computer.",
    reward: "5000 ICP",
    deadline: "2024-03-31",
    skills: ["React", "TypeScript", "DeFi"]
  },
  {
    id: 2,
    title: "Smart Contract Auditing Tool",
    description: "Build an automated tool for auditing smart contracts on the Internet Computer.",
    reward: "7500 ICP",
    deadline: "2024-04-15",
    skills: ["Rust", "Motoko", "Smart Contracts"]
  },
  {
    id: 3,
    title: "Decentralized Social Media Platform",
    description: "Develop a decentralized social media platform with end-to-end encryption for the Nigerian market.",
    reward: "10000 ICP",
    deadline: "2024-05-30",
    skills: ["Motoko", "React", "Cryptography"]
  }
]

export function BountyList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {bounties.map((bounty) => (
        <Link href={`/bounties/${bounty.id}`} key={bounty.id}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>{bounty.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{bounty.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-green-600 dark:text-green-400">{bounty.reward}</span>
                <span className="text-sm text-muted-foreground">Deadline: {bounty.deadline}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {bounty.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

