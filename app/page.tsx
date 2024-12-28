import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl py-5 md:text-5xl lg:text-6xl/none bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
                  IC Nomads - powered by ICP Hub Nigeria
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  IC Nomads are ICP Hub Nigeria's full-fledged members, comprising of founders, devs, creatives, and content creators dedicated to shaping the Internet Computer ecosystem.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 items-center space-y-2 sm:space-y-0">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/signup">
                    Become an IC Nomad
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Generate PFP Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Generate your own nomad PFP to join the movement!</h2>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/mint-pfp">
                  Mint IC Nomad PFP
                </Link>
              </Button>
            </div>
          </div>
        </section>


        {/* Weekly Meetup Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Weekly Community Meetup</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get ready to dive into the world of ICP with our weekly community meetup happening every Monday 5:30 PM to 7:00 PM WAT
              </p>
              <p className="font-bold">Live on Google Meet</p>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's hangout, connect, learn, and have a blast with fellow enthusiasts. Whether you're a seasoned pro or just starting out, there's something for everyone.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/set-reminder">
                  Set a reminder here
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2024 ICP Hub Nigeria. All rights reserved.
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

