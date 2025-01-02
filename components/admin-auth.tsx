
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function AdminAuth({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a very basic check. In a real app, you'd want to use proper authentication.
    if (password === "admin123") {
      onAuth()
    } else {
      alert("Incorrect password")
    }
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Admin Authentication</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <Button type="submit" className="w-full bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]">Login</Button>
        </form>
      </CardContent>
    </Card>
  )
}

