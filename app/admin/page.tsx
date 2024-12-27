'use client'

import { useState } from "react"
import { Header } from "@/components/header"
import { AdminBountyForm } from "@/components/admin-bounty-form"
import { AdminAuth } from "@/components/admin-auth"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
        {isAuthenticated ? (
          <AdminBountyForm />
        ) : (
          <AdminAuth onAuth={() => setIsAuthenticated(true)} />
        )}
      </main>
    </div>
  )
}

