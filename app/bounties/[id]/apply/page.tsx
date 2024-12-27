'use client'

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ApplyForBountyPage({ params }: { params: { id: string } }) {
  const [application, setApplication] = useState({
    name: "",
    email: "",
    proposal: "",
    timeline: "",
    compensation: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplication({ ...application, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the application to your backend
    console.log("Bounty application:", application)
    alert("Application submitted successfully!")
    // Reset form after submission
    setApplication({
      name: "",
      email: "",
      proposal: "",
      timeline: "",
      compensation: ""
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Apply for Bounty #{params.id}</h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Bounty Application</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={application.name} 
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
                  value={application.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="proposal">Proposal</Label>
                <Textarea 
                  id="proposal" 
                  name="proposal" 
                  value={application.proposal} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Estimated Timeline</Label>
                <Input 
                  id="timeline" 
                  name="timeline" 
                  value={application.timeline} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="compensation">Requested Compensation</Label>
                <Input 
                  id="compensation" 
                  name="compensation" 
                  value={application.compensation} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

