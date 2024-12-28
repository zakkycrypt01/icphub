import { Header } from "@/components/header"
import { SignupOptions } from "@/components/signup-options"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Become an IC Nomad</h1>
        <SignupOptions />
      </main>
    </div>
  )
}

