'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function EditProfileForm() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    walletAddress: "0x1234...5678",
    skills: "Motoko, React, Solidity",
    bio: "Passionate about building decentralized applications and contributing to the Web3 ecosystem."
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated profile to your backend
    console.log("Updated profile:", profile)
    // Redirect to profile page or show success message
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" value={profile.name} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={profile.email} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="walletAddress">Wallet Address</Label>
        <Input id="walletAddress" name="walletAddress" value={profile.walletAddress} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="skills">Skills (comma separated)</Label>
        <Input id="skills" name="skills" value={profile.skills} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" name="bio" value={profile.bio} onChange={handleChange} />
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  )
}

