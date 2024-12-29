import { Header } from "@/components/header"
import { BountyGigTabs } from "@/components/bounty-gig-tabs"

export default function BountiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Discover Bounties & Gigs</h1>
        <BountyGigTabs />
      </main>
    </div>
  )
}

