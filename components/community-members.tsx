import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Globe } from 'lucide-react'

const members = [
  {
    name: "Alex Johnson",
    role: "Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    skills: ["Motoko", "React", "TypeScript"],
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    name: "Sarah Williams",
    role: "Designer",
    avatar: "/placeholder.svg?height=40&width=40",
    skills: ["UI/UX", "Figma", "Web Design"],
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    name: "Michael Brown",
    role: "Product Manager",
    avatar: "/placeholder.svg?height=40&width=40",
    skills: ["Strategy", "Agile", "Leadership"],
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  }
]

export function CommunityMembers() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <Card key={member.name}>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {member.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={member.social.github} className="text-muted-foreground hover:text-primary">
                <Github className="h-4 w-4" />
              </a>
              <a href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={member.social.website} className="text-muted-foreground hover:text-primary">
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

