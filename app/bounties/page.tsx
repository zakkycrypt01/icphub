'use client'

import { Header } from "@/components/header"
import { BountyList } from "@/components/bounty-list"

export default function BountiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Discover Bounties & Gigs</h1>
        <BountyList />
      </main>
    </div>
  )
}

