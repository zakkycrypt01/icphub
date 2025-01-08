'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import useTelegramData from "@/components/telegramData"


interface TelegramData {
  telegram_id: string;
}

export function InviteContent() {
  const [inviteLink, setInviteLink] = useState("")
  const telegramData = useTelegramData();
  const [invitees, setInvitees] = useState([
    { id: 1, name: "Alice Smith", email: "alice@example.com", status: "Joined" },
    { id: 2, name: "Bob Johnson", email: "bob@example.com", status: "Pending" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "Joined" },
  ])

  const referralId = telegramData?.telegram_id;
  
  const generateInviteLink = () => {
    return setInviteLink(`https://t.me/ICPHubNigeria_bot/ICPHUBsahara?startapp=${referralId}`)
  }

  return (
    <Tabs defaultValue="generate">
      <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-blue-200 to-pink-200 dark:from-blue-800 dark:to-pink-800">
        <TabsTrigger value="generate">Generate Invite</TabsTrigger>
        <TabsTrigger value="invitees">Invitees</TabsTrigger>
      </TabsList>
      <TabsContent value="generate">
        <Card>
          <CardHeader>
            <CardTitle>Generate Invite Link</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="inviteLink">Invite Link</Label>
                <div className="flex space-x-2">
                  <Input id="inviteLink" value={inviteLink} readOnly />
                  <Button className="bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]" onClick={generateInviteLink}>Generate</Button>
                </div>
              </div>
              {inviteLink && (
                <Button className="w-full bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]" onClick={() => navigator.clipboard.writeText(inviteLink)}>
                  Copy Link
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="invitees">
        <Card>
          <CardHeader>
            <CardTitle>Invitees</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invitees.map((invitee) => (
                  <TableRow key={invitee.id}>
                    <TableCell>{invitee.name}</TableCell>
                    <TableCell>{invitee.email}</TableCell>
                    <TableCell>{invitee.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

