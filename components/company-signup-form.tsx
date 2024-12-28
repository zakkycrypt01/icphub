'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function CompanySignupForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPersonName: '',
    email: '',
    phoneNumber: '',
    website: '',
    description: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Company form submitted:', formData)
    // Reset form or show success message
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="companyName">Company Name</Label>
        <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="contactPersonName">Contact Person Name</Label>
        <Input id="contactPersonName" name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} required />
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
        <Label htmlFor="website">Website</Label>
        <Input id="website" name="website" type="url" value={formData.website} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="description">Company Description</Label>
        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <Button type="submit">Submit Application</Button>
    </form>
  )
}

