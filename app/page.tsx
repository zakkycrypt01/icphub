"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { EditableEventDetails } from "@/components/editable-event-details";
import Link from "next/link";
import { useEffect, useState } from "react";

function GlowingOrb({ delay = 0 }) {
  return (
    <div
      className="fixed rounded-full blur-3xl opacity-20"
      style={{
        animation: `move ${20 + delay}s infinite`,
        background: `radial-gradient(circle at center, 
          ${["#818cf8", "#34d399", "#f472b6"][Math.floor(Math.random() * 3)]}, 
          transparent)`,
        width: "40vw",
        height: "40vw",
        transform: `translate(${Math.random() * 100}%, ${
          Math.random() * 100
        }%)`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default function Home() {
  const isAdmin = true;
  const [mounted, setMounted] = useState(false);

  const initialEventDetails = {
    date: "Monday, July 3, 2023",
    time: "5:30 PM - 7:00 PM WAT",
    topic: "Introduction to Internet Computer Protocol",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />
        <GlowingOrb delay={0} />
        <GlowingOrb delay={5} />
        <GlowingOrb delay={10} />
      </div>

      {/* Grain overlay */}
      <div className="fixed inset-0 opacity-20 bg-noise" />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                    <span className="inline-block animate-title bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      IC Nomads
                    </span>
                    <span className="block text-white/90 mt-2">
                      where community meets innovation ⚡
                    </span>
                  </h1>
                  <p className="mx-auto max-w-[700px] text-indigo-200/60 md:text-xl mt-6">
                    A platform for founders, devs, creatives, and content
                    creators shaping the Internet Computer ecosystem.
                  </p>
                </div>
                <div className="space-x-4 mt-8">
                  <Button
                    asChild
                    className="relative group px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl hover:shadow-[0_0_30px_-5px] hover:shadow-indigo-500/50 transition-all duration-300"
                  >
                    <Link href="/signup">
                      <span className="relative z-10 text-lg">
                        Become an IC Nomad
                      </span>
                      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Generate PFP Section */}
          <section className="py-12">
            <div className="container px-4 md:px-6">
              <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-[0_0_50px_-20px] shadow-purple-500/20">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Generate your own nomad PFP
                  </h2>
                  <Button
                    asChild
                    className="relative group px-6 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:shadow-[0_0_30px_-5px] hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <Link href="/mint-pfp">Mint IC Nomad PFP</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Weekly Meetup Section */}
          <section className="py-12">
            <div className="container px-4 md:px-6">
              <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-[0_0_50px_-20px] shadow-pink-500/20">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
                    Weekly Community Meetup
                  </h2>
                  <div className="max-w-[900px] space-y-4">
                    <p className="text-indigo-200/60 md:text-xl/relaxed">
                      Get ready to dive into the world of ICP with our weekly
                      community meetup happening every Monday
                    </p>
                    <p className="font-bold text-xl text-white/90">
                      Live on Google Meet
                    </p>
                    <p className="text-indigo-200/60 md:text-xl/relaxed">
                      Let's hangout, connect, learn, and have a blast with
                      fellow enthusiasts.
                    </p>
                  </div>
                  <Button
                    asChild
                    className="relative group px-6 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:shadow-[0_0_30px_-5px] hover:shadow-pink-500/30 transition-all duration-300"
                  >
                    <Link href="/set-reminder">Set a reminder here</Link>
                  </Button>
                </div>
              </div>
              <div className="mt-12">
                <EditableEventDetails initialDetails={initialEventDetails} />
              </div>
            </div>
          </section>
        </main>
      </div>

      <style jsx>{`
        @keyframes move {
          0% {
            transform: translate(10%, 10%);
          }
          25% {
            transform: translate(60%, 30%);
          }
          50% {
            transform: translate(30%, 60%);
          }
          75% {
            transform: translate(60%, 30%);
          }
          100% {
            transform: translate(10%, 10%);
          }
        }

        .animate-title {
          background-size: 200% auto;
          animation: titleGradient 8s linear infinite;
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
          filter: contrast(120%) brightness(100%);
        }

        @keyframes titleGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
