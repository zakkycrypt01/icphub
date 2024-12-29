'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TalentSignupForm } from "@/components/talent-signup-form"
import { CompanySignupForm } from "@/components/company-signup-form"

export function SignupOptions() {
  const [selectedOption, setSelectedOption] = useState<'talent' | 'company' | null>(null)

  return (
    <div className="max-w-4xl mx-auto">
      {!selectedOption ? (
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="cursor-pointer" onClick={() => setSelectedOption('talent')}>
            <CardHeader>
              <CardTitle>Sign up as Talent</CardTitle>
              <CardDescription>For developers, creators, and community builders</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className='bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]'>Choose Talent</Button>
            </CardContent>
          </Card>
          <Card className="cursor-pointer" onClick={() => setSelectedOption('company')}>
            <CardHeader>
              <CardTitle>Sign up as Company</CardTitle>
              <CardDescription>For businesses and organizations</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className='bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]'>Choose Company</Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <>
          <Button onClick={() => setSelectedOption(null)} className="mb-4">Back to Options</Button>
          {selectedOption === 'talent' ? <TalentSignupForm /> : <CompanySignupForm />}
        </>
      )}
    </div>
  )
}

