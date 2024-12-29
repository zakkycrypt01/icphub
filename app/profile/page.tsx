'use client'

import { useState, useEffect } from 'react'
import { Header } from "@/components/header"
import { ProfileForm } from "@/components/profile-form"
import { CompanyDashboard } from "@/components/company-dashboard"

type UserType = 'talent' | 'company' | null

export default function ProfilePage() {
  const [userType, setUserType] = useState<UserType>(null)

  useEffect(() => {
    // In a real application, you would fetch the user type from your backend or local storage
    const fetchUserType = async () => {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      // For demonstration, we're randomly setting the user type
      setUserType(Math.random() > 0.5 ? 'talent' : 'company')
    }

    fetchUserType()
  }, [])

  if (userType === null) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {userType === 'talent' ? 'Your Profile' : 'Company Dashboard'}
        </h1>
        {userType === 'talent' ? <ProfileForm /> : <CompanyDashboard />}
      </main>
    </div>
  )
}

