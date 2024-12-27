import { Header } from "@/components/header"
import { InviteContent } from "@/components/invite-content"

export default function InvitePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <InviteContent />
      </main>
    </div>
  )
}

