'use client'

import { Header } from "@/components/header"
import { BountyForm } from "@/components/bounty-form"

export default function CompanyPostBountyPage() {
  const handlePostBounty = (bountyData: any) => {
    console.log('Company posted bounty:', bountyData)
    // Here you would typically send this data to your backend
    alert('Bounty posted successfully!')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Post a New Bounty</h1>
        <BountyForm onSubmit={handlePostBounty} />
      </main>
    </div>
  )
}

