import { Header } from "@/components/header"
import { ActivityFeed } from "@/components/activity-feed"

export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">IC Nomads Activity</h1>
        <ActivityFeed />
      </main>
    </div>
  )
}

