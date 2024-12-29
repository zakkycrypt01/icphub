// 'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type BountyFormProps = {
  onSubmit: (bounty: BountyData) => void
}

type BountyData = {
  title: string
  description: string
  reward: string
  deadline: string
  skills: string
}

export function BountyForm({ onSubmit }: BountyFormProps) {
  const [bounty, setBounty] = useState<BountyData>({
    title: '',
    description: '',
    reward: '',
    deadline: '',
    skills: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBounty({ ...bounty, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(bounty)
    setBounty({ title: '', description: '', reward: '', deadline: '', skills: '' })
  }

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
          <Button type="submit">Post Bounty</Button>
        </form>
      </CardContent>
    </Card>
  )
}

