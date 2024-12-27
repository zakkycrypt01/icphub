'use client'

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function SubmitBountyPage({ params }: { params: { id: string } }) {
  const [submission, setSubmission] = useState({
    name: "",
    email: "",
    submissionUrl: "",
    description: "",
    additionalNotes: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the submission to your backend
    console.log("Bounty submission:", submission)
    alert("Submission received successfully!")
    // Reset form after submission
    setSubmission({
      name: "",
      email: "",
      submissionUrl: "",
      description: "",
      additionalNotes: ""
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Submit Bounty #{params.id}</h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Bounty Submission</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={submission.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={submission.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="submissionUrl">Submission URL</Label>
                <Input 
                  id="submissionUrl" 
                  name="submissionUrl" 
                  type="url" 
                  value={submission.submissionUrl} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={submission.description} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="additionalNotes">Additional Notes</Label>
                <Textarea 
                  id="additionalNotes" 
                  name="additionalNotes" 
                  value={submission.additionalNotes} 
                  onChange={handleChange} 
                />
              </div>
              <Button type="submit" className="w-full">Submit Bounty</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

