'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const bounties = [
  {
    id: 1,
    title: "Develop a DeFi Dashboard",
    description: "Create a user-friendly dashboard for tracking DeFi investments across multiple protocols on the Internet Computer.",
    reward: "5000 ICP",
    deadline: "2024-03-31",
    skills: ["React", "TypeScript", "DeFi"],
    instructions: "Build a responsive web application using React and TypeScript. The dashboard should connect to various DeFi protocols on the Internet Computer and display real-time data on investments, yields, and portfolio performance."
  },
  {
    id: 2,
    title: "Smart Contract Auditing Tool",
    description: "Build an automated tool for auditing smart contracts on the Internet Computer.",
    reward: "7500 ICP",
    deadline: "2024-04-15",
    skills: ["Rust", "Motoko", "Smart Contracts"],
    instructions: "Develop a command-line tool using Rust that can analyze Motoko smart contracts. The tool should identify common vulnerabilities, check for best practices, and provide a detailed report on potential issues and optimizations."
  },
  {
    id: 3,
    title: "Decentralized Social Media Platform",
    description: "Develop a decentralized social media platform with end-to-end encryption for the Nigerian market.",
    reward: "10000 ICP",
    deadline: "2024-05-30",
    skills: ["Motoko", "React", "Cryptography"],
    instructions: "Create a full-stack application using Motoko for the backend and React for the frontend. Implement end-to-end encryption for all user communications, ensure data is stored on the Internet Computer, and design a user interface tailored for the Nigerian market."
  }
]

export default function BountyDetailPage({ params }: { params: { id: string } }) {
  const bounty = bounties.find(b => b.id === parseInt(params.id))
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<string[]>([])
  const [submission, setSubmission] = useState({
    link: '',
    description: '',
    walletAddress: ''
  })

  if (!bounty) {
    return <div>Bounty not found</div>
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      setComments([...comments, comment])
      setComment('')
    }
  }

  const handleSubmissionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submission:', submission)
    // Here you would typically send the submission to your backend
    alert('Submission received!')
    setSubmission({ link: '', description: '', walletAddress: '' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
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
            <h3 className="text-xl font-semibold mb-2">Instructions</h3>
            <p className="mb-4">{bounty.instructions}</p>
            
            <h3 className="text-xl font-semibold mb-2">Submit Your Work</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="link">Submission Link</Label>
                <Input 
                  id="link" 
                  name="link" 
                  value={submission.link} 
                  onChange={handleSubmissionChange} 
                  placeholder="https://github.com/yourusername/your-repo"
                  required 
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={submission.description} 
                  onChange={handleSubmissionChange} 
                  placeholder="Briefly describe your submission"
                  required 
                />
              </div>
              <div>
                <Label htmlFor="walletAddress">ICP Wallet Address (Principal ID)</Label>
                <Input 
                  id="walletAddress" 
                  name="walletAddress" 
                  value={submission.walletAddress} 
                  onChange={handleSubmissionChange} 
                  placeholder="Your ICP wallet address"
                  required 
                />
              </div>
              <Button type="submit" className='bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]'>Submit</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCommentSubmit} className="mb-4 ">
              <Textarea 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                placeholder="Add a comment"
                className="mb-2"
              />
              <Button type="submit" className='bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]'>Post Comment</Button>
            </form>
            <div className="space-y-2">
              {comments.map((c, index) => (
                <div key={index} className="p-2 bg-secondary rounded">
                  {c}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

