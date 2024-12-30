import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { EditableEventDetails } from "@/components/editable-event-details"
import Link from 'next/link'

export default function Home() {
  const isAdmin = true // This is just for demonstration purposes

  const initialEventDetails = {
    date: "Monday, July 3, 2023",
    time: "5:30 PM - 7:00 PM WAT",
    topic: "Introduction to Internet Computer Protocol"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-[#6A85F1] to-[#C572EF] bg-clip-text text-transparent">
                  IC Nomads - where community meets innovation ⚡
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A platform for founders, devs, creatives, and content creators shaping the Internet Computer ecosystem.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-6">
                <Button asChild className="bg-transparent hover:bg-gray-700 text-[#A5B9D0] border-2 border-[#A5B9D0]">
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
              <Button asChild className="bg-transparent hover:bg-gray-700 text-[#A5B9D0] border-2 border-[#A5B9D0]">
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
              <Button asChild className="bg-transparent hover:bg-gray-700 text-[#A5B9D0] border-2 border-[#A5B9D0]">
                <Link href="/set-reminder">
                  Set a reminder here
                </Link>
              </Button>
            </div>
          </div>
          <EditableEventDetails initialDetails={initialEventDetails} />
        </section>
      </main>
    </div>
  )
}

