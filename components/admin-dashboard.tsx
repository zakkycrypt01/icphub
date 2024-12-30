'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BountyForm } from "@/components/bounty-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type EventDetails = {
  date: string
  time: string
  topic: string
}

export function AdminDashboard() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true)
  const [applications, setApplications] = useState([
    { id: 1, name: 'John Doe', type: 'Talent', role: 'Developer', status: 'Pending' },
    { id: 2, name: 'Jane Smith', type: 'Talent', role: 'Content Writer', status: 'Approved' },
    { id: 3, name: 'Acme Inc.', type: 'Company', status: 'Pending' },
  ])
  const [eventDetails, setEventDetails] = useState<EventDetails>({
    date: "Monday, July 3, 2023",
    time: "5:30 PM - 7:00 PM WAT",
    topic: "Introduction to Internet Computer Protocol"
  })

  const handleToggleRegistration = () => {
    setIsRegistrationOpen(!isRegistrationOpen)
    // Here you would typically update this state in your backend
  }

  const handleUpdateStatus = (id: number, newStatus: string) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ))
    // Here you would typically update this status in your backend
  }

  const handlePostBounty = (bountyData: any) => {
    console.log('Admin posted bounty:', bountyData)
    // Here you would typically send this data to your backend
    alert('Bounty posted successfully!')
  }

  const handleEventDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value })
  }

  const handleSaveEventDetails = () => {
    console.log('Saving updated event details:', eventDetails)
    // Here you would typically send the updated details to your backend
    alert('Event details updated successfully!')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Registration Portal</h2>
        <div className="flex items-center space-x-2">
          <Switch
            checked={isRegistrationOpen}
            onCheckedChange={handleToggleRegistration}
          />
          <span>{isRegistrationOpen ? 'Open' : 'Closed'}</span>
        </div>
      </div>

      <Tabs defaultValue="applications">
        <TabsList className='grid w-full grid-cols-2 bg-gradient-to-r from-blue-200 to-pink-200 dark:from-blue-800 dark:to-pink-800'>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="postBounty">Post Bounty</TabsTrigger>
          <TabsTrigger value="eventDetails">Event Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applications">
          <ApplicationsTable 
            applications={applications} 
            onUpdateStatus={handleUpdateStatus} 
          />
        </TabsContent>
        <TabsContent value="postBounty">
          <BountyForm onSubmit={handlePostBounty} />
        </TabsContent>
        <TabsContent value="eventDetails">
          <Card>
            <CardHeader>
              <CardTitle>Edit Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => { e.preventDefault(); handleSaveEventDetails(); }} className="space-y-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    name="date"
                    value={eventDetails.date}
                    onChange={handleEventDetailsChange}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    name="time"
                    value={eventDetails.time}
                    onChange={handleEventDetailsChange}
                  />
                </div>
                <div>
                  <Label htmlFor="topic">Topic</Label>
                  <Input
                    id="topic"
                    name="topic"
                    value={eventDetails.topic}
                    onChange={handleEventDetailsChange}
                  />
                </div>
                <Button className='bg-transparent hover:bg-gray-700 text-[#A5B9D0] border-2 border-[#A5B9D0]' type="submit">Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ApplicationsTable({ applications, onUpdateStatus }: { 
  applications: any[], 
  onUpdateStatus: (id: number, status: string) => void 
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app) => (
          <TableRow key={app.id}>
            <TableCell>{app.name}</TableCell>
            <TableCell>{app.type}</TableCell>
            <TableCell>{app.role || 'N/A'}</TableCell>
            <TableCell>{app.status}</TableCell>
            <TableCell>
              <Button 
              className='w-full bg-transparent hover:bg-gray-700 text-[#A5B9D0] border-2 border-[#A5B9D0]'
                onClick={() => onUpdateStatus(app.id, app.status === 'Approved' ? 'Pending' : 'Approved')}
              >
                {app.status === 'Approved' ? 'Unapprove' : 'Approve'}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

