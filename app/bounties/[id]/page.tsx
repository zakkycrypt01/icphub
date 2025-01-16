'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { fetchBounties } from "@/actions/fetchbounty";
import { useEffect } from 'react'
import { fetchBountyById } from '@/actions/fetchbountybyid'

interface Bounty {
  bountyid: string;
  title: string;
  description: string;
  reward: string;
  deadline: string;
  skills: string[];
  instructions: string;
}


export default function BountyDetailPage() {
  const [params, setParams] = useState<{ bountyid: string }>({ bountyid: '' });
  const [bounty, setBounty] = useState<Bounty | null>(null);
  console.log(params.bountyid);
  useEffect(() => {
    const fetchBounty = async () => {
      const foundbounty: Bounty = await fetchBountyById(params.bountyid);
      setBounty(foundbounty);
    };
    fetchBounty();
  }, [params.bountyid]);
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
                  placeholder="your link"
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

