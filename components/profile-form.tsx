'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type UserProfile = {
  name: string
  email: string
  bio: string
  telegramHandle: string
  twitterHandle: string
  icpWalletAddress: string
}

type BountySubmission = {
  id: number
  title: string
  status: 'pending' | 'approved' | 'rejected'
  submittedAt: string
}

const initialProfile: UserProfile = {
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'Passionate about blockchain and the Internet Computer',
  telegramHandle: '@johndoe',
  twitterHandle: '@johndoe',
  icpWalletAddress: 'abcdef123456'
}

const bountySubmissions: BountySubmission[] = [
  { id: 1, title: 'DeFi Dashboard', status: 'approved', submittedAt: '2024-03-10' },
  { id: 2, title: 'Smart Contract Auditing Tool', status: 'pending', submittedAt: '2024-03-15' },
]

export function ProfileForm() {
  const [profile, setProfile] = useState<UserProfile>(initialProfile)
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Profile updated:', profile)
    setIsEditing(false)
    // Here you would typically send the profile data to your backend
    alert('Profile updated successfully!')
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={profile.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={profile.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  name="bio" 
                  value={profile.bio} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="telegramHandle">Telegram Handle</Label>
                <Input 
                  id="telegramHandle" 
                  name="telegramHandle" 
                  value={profile.telegramHandle} 
                  onChange={handleChange} 
                />
              </div>
              <div>
                <Label htmlFor="twitterHandle">Twitter Handle</Label>
                <Input 
                  id="twitterHandle" 
                  name="twitterHandle" 
                  value={profile.twitterHandle} 
                  onChange={handleChange} 
                />
              </div>
              <div>
                <Label htmlFor="icpWalletAddress">ICP Wallet Address</Label>
                <Input 
                  id="icpWalletAddress" 
                  name="icpWalletAddress" 
                  value={profile.icpWalletAddress} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          ) : (
            <div className="space-y-4">
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Bio:</strong> {profile.bio}</p>
              <p><strong>Telegram:</strong> {profile.telegramHandle}</p>
              <p><strong>Twitter:</strong> {profile.twitterHandle}</p>
              <p><strong>ICP Wallet:</strong> {profile.icpWalletAddress}</p>
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bounty Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {bountySubmissions.map(submission => (
              <li key={submission.id} className="flex justify-between items-center">
                <span>{submission.title}</span>
                <div>
                  <Badge 
                    variant={submission.status === 'approved' ? 'default' : 
                             submission.status === 'rejected' ? 'destructive' : 'secondary'}
                  >
                    {submission.status}
                  </Badge>
                  <span className="ml-2 text-sm text-muted-foreground">{submission.submittedAt}</span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

