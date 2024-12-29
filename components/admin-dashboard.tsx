
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BountyForm } from "@/components/bounty-form"

export function AdminDashboard() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true)
  const [applications, setApplications] = useState([
    { id: 1, name: 'John Doe', type: 'Talent', role: 'Developer', status: 'Pending' },
    { id: 2, name: 'Jane Smith', type: 'Talent', role: 'Content Writer', status: 'Approved' },
    { id: 3, name: 'Acme Inc.', type: 'Company', status: 'Pending' },
  ])

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
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="postBounty">Post Bounty</TabsTrigger>
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

