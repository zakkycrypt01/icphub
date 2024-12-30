// 'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function TalentSignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    telegramHandle: '',
    twitterProfile: '',
    proofOfWork: '',
    role: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Talent form submitted:', formData)
    // Reset form or show success message
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="telegramHandle">Telegram Handle</Label>
        <Input id="telegramHandle" name="telegramHandle" value={formData.telegramHandle} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="twitterProfile">Twitter Profile Handle</Label>
        <Input id="twitterProfile" name="twitterProfile" value={formData.twitterProfile} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="proofOfWork">Proof of Work</Label>
        <Textarea id="proofOfWork" name="proofOfWork" value={formData.proofOfWork} onChange={handleChange} required />
      </div>
      <div>
        <Label>Role</Label>
        <RadioGroup onValueChange={(value: string) => setFormData({ ...formData, role: value })} required>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="developer" id="developer" />
            <Label htmlFor="developer">Developer/Engineer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="videoCreator" id="videoCreator" />
            <Label htmlFor="videoCreator">Video Creator</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="contentWriter" id="contentWriter" />
            <Label htmlFor="contentWriter">Content Writer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="graphicDesigner" id="graphicDesigner" />
            <Label htmlFor="graphicDesigner">Graphic Designer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="communityBuilder" id="communityBuilder" />
            <Label htmlFor="communityBuilder">Community Builder</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="nftArtist" id="nftArtist" />
            <Label htmlFor="nftArtist">NFT/Digital Artist</Label>
          </div>
        </RadioGroup>
      </div>
      <Button className='bg-transparent hover:bg-gray-700 text-[#A5B9D0] border-2 border-[#A5B9D0]' type="submit">Submit Application</Button>
    </form>
  )
}

