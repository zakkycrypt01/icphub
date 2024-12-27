import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Globe } from 'lucide-react'

const projects = [
  {
    title: "DeFi Platform",
    description: "Decentralized finance platform built on the Internet Computer.",
    tags: ["DeFi", "Motoko", "React"],
    links: {
      github: "https://github.com/example/defi",
      live: "https://example.com"
    }
  },
  {
    title: "NFT Marketplace",
    description: "Trade unique digital assets on the Internet Computer.",
    tags: ["NFT", "TypeScript", "Next.js"],
    links: {
      github: "https://github.com/example/nft",
      live: "https://example.com"
    }
  },
  {
    title: "Social Platform",
    description: "Decentralized social network for the Sahara region.",
    tags: ["Social", "Rust", "Vue"],
    links: {
      github: "https://github.com/example/social",
      live: "https://example.com"
    }
  }
]

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.title} className="flex flex-col">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                  <Github className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" className="gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

