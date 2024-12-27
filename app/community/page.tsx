import { Header } from "@/components/header"
import { CommunityContent } from "@/components/community-content"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">ICP Hub Sahara Community</h1>
        <CommunityContent />
      </main>
    </div>
  )
}

