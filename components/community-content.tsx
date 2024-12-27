import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TextIcon as Telegram, Twitter, Facebook, Linkedin, Github } from 'lucide-react'

const socialLinks = [
  { name: 'Telegram', icon: Telegram, url: 'https://t.me/icphubsahara' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ICPHubSahara' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/ICPHubSahara' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/icphubsahara' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/ICPHubSahara' },
]

export function CommunityContent() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {socialLinks.map((link) => (
        <Card key={link.name}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <link.icon className="h-6 w-6" />
              {link.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                Join our {link.name} Community
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

