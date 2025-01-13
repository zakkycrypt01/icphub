'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {registerCompany} from "@/actions/registerCompany"
import useTelegramData from "@/components/telegramData"
import {useRouter} from 'next/navigation'

export function CompanySignupForm() {
  const telegramData = useTelegramData();
  const Router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '',
    contactname: '',
    email: '',
    phonenum: '',
    website: '',
    description: '',
    telegramId: ''
  });

  const [error, setError] = useState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (telegramData) {
      setFormData((prevData) => ({
        ...prevData,
        telegramId: telegramData?.telegram_id?.toString() || "",
        contactname: telegramData?.username?.toString() || "",
      }));
      }
    }, [telegramData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Here you would typically send the form data to your backend
    const response = await registerCompany(formData)
    if (response.error) {
      setError(response.error);
    } else{
      Router.push("/profile");
    }
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
        <Input id="contactPersonName" name="contactPersonName" value={formData.contactname} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="phonenum">Phone Number</Label>
        <Input id="phonenum" name="phonenum" value={formData.phonenum} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="website">Website</Label>
        <Input id="website" name="website" type="url" value={formData.website} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="description">Company Description</Label>
        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="telegramId">Telegram ID</Label>
        <Input id="telegramId" name="telegramId" value={formData.telegramId} onChange={handleChange} required readOnly/>
      </div>
      <Button type="submit" className='bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]'>Submit Application</Button>
    </form>
  )
}

