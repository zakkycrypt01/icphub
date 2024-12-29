'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type LeaderboardItem = {
  id: number
  user: string
  score: number
}

const inviteLeaderboard: LeaderboardItem[] = [
  { id: 1, user: 'Alice', score: 15 },
  { id: 2, user: 'Bob', score: 12 },
  { id: 3, user: 'Charlie', score: 10 },
  { id: 4, user: 'David', score: 8 },
  { id: 5, user: 'Eve', score: 6 },
]

const bountyLeaderboard: LeaderboardItem[] = [
  { id: 1, user: 'Frank', score: 5 },
  { id: 2, user: 'Grace', score: 4 },
  { id: 3, user: 'Henry', score: 3 },
  { id: 4, user: 'Ivy', score: 2 },
  { id: 5, user: 'Jack', score: 1 },
]

function LeaderboardTable({ data }: { data: LeaderboardItem[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Rank</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.user}</TableCell>
            <TableCell>{item.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function ActivityFeed() {
  const [activeTab, setActiveTab] = useState("invite")

  return (
    <Card>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="invite">Invite Leaderboard</TabsTrigger>
          <TabsTrigger value="bounty">Bounty Leaderboard</TabsTrigger>
        </TabsList>
        <CardContent className="pt-6">
          <TabsContent value="invite">
            <LeaderboardTable data={inviteLeaderboard} />
          </TabsContent>
          <TabsContent value="bounty">
            <LeaderboardTable data={bountyLeaderboard} />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}

