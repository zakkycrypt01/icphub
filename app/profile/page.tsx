import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-muted-foreground">Web3 Developer</p>
              </div>
            </div>
            <div className="space-y-2">
              <p><strong>Email:</strong> john.doe@example.com</p>
              <p><strong>Wallet Address:</strong> 0x1234...5678</p>
              <p><strong>Skills:</strong> Motoko, React, Solidity</p>
              <p><strong>Bio:</strong> Passionate about building decentralized applications and contributing to the Web3 ecosystem.</p>
            </div>
            <div className="mt-6">
              <Link href="/profile/edit">
                <Button>Edit Profile</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

