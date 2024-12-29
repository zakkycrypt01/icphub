
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function AdminBountyForm() {
  const [bounty, setBounty] = useState({
    title: "",
    description: "",
    reward: "",
    deadline: "",
    skills: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBounty({ ...bounty, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the new bounty to your backend
    console.log("New bounty:", bounty)
    // Reset form after submission
    setBounty({
      title: "",
      description: "",
      reward: "",
      deadline: "",
      skills: ""
    })
    alert("Bounty added successfully!")
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add New Bounty</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title" 
              name="title" 
              value={bounty.title} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              name="description" 
              value={bounty.description} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="space-y-2">
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
          <div className="space-y-2">
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
          <div className="space-y-2">
            <Label htmlFor="skills">Required Skills (comma-separated)</Label>
            <Input 
              id="skills" 
              name="skills" 
              value={bounty.skills} 
              onChange={handleChange} 
              required 
            />
          </div>
          <Button type="submit" className="w-full">Add Bounty</Button>
        </form>
      </CardContent>
    </Card>
  )
}

