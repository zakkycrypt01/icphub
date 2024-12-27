import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const bounties = [
  {
    id: 1,
    title: "Develop a DeFi Dashboard",
    description: "Create a user-friendly dashboard for tracking DeFi investments across multiple protocols.",
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
    description: "Develop a decentralized social media platform with end-to-end encryption.",
    reward: "10000 ICP",
    deadline: "2024-05-30",
    skills: ["Motoko", "React", "Cryptography"]
  }
]

export default function BountiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Available Bounties</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bounties.map((bounty) => (
            <Card key={bounty.id}>
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
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={`/bounties/${bounty.id}/apply`}>Apply</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/bounties/${bounty.id}/submit`}>Submit</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

