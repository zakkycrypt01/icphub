import { Header } from "@/components/header"
import { ProjectsGrid } from "@/components/projects-grid"
import { CommunityMembers } from "@/components/community-members"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
                  Building the Future of Web3 in Sahara
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join our vibrant community of developers, entrepreneurs, and innovators shaping the future of the Internet Computer in the Sahara region.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <Link href="/bounties">
                    Explore Bounties <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/community">
                    Join Community
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover innovative projects built by our community members on the Internet Computer.
              </p>
            </div>
            <div className="mx-auto mt-8">
              <ProjectsGrid />
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Community</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the talented individuals building the future of Web3 in the Sahara region.
              </p>
            </div>
            <div className="mx-auto mt-8">
              <CommunityMembers />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2024 ICP Hub Sahara. All rights reserved.
          </p>
          <nav className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

