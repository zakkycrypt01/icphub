"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Trophy, ChevronLeft, ChevronRight, Diamond } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

type LeaderboardItem = {
  id: number
  user: string
  avatar: string
  dailyScore: number
  weeklyScore: number
}

type League = {
  name: string
  color: string
  icon: string
  data: LeaderboardItem[]
}

const leagues: League[] = [
  {
    name: "Diamond League",
    color: "bg-cyan-400",
    icon: "💎",
    data: [
      {
        id: 1,
        user: "Daksh",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250119-202314_WhatsApp.jpg-oIIP4qr5ALg5wssXe3us1iqNdyTPqx.jpeg",
        dailyScore: 11579,
        weeklyScore: 80000,
      },
      { id: 2, user: "Negash", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 10000, weeklyScore: 75000 },
      { id: 3, user: "Ли", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 10000, weeklyScore: 72000 },
    ],
  },
  {
    name: "Gold League",
    color: "bg-yellow-400",
    icon: "🏆",
    data: [
      { id: 1, user: "Mohamad", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 9500, weeklyScore: 65000 },
      {
        id: 2,
        user: "Jacksonkat",
        avatar: "/placeholder.svg?height=40&width=40",
        dailyScore: 9000,
        weeklyScore: 62000,
      },
      { id: 3, user: "Nazrul", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 8800, weeklyScore: 60000 },
    ],
  },
  {
    name: "Sandstone League",
    color: "bg-orange-400",
    icon: "🏆",
    data: [
      { id: 1, user: "Alex", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 7500, weeklyScore: 50000 },
      { id: 2, user: "Maria", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 7000, weeklyScore: 48000 },
      { id: 3, user: "John", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 6800, weeklyScore: 46000 },
    ],
  },
  {
    name: "Silver League",
    color: "bg-gray-400",
    icon: "🥈",
    data: [
      { id: 1, user: "Sarah", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 5500, weeklyScore: 38000 },
      { id: 2, user: "Mike", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 5000, weeklyScore: 35000 },
      { id: 3, user: "Emma", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 4800, weeklyScore: 33000 },
    ],
  },
  {
    name: "Bronze League",
    color: "bg-amber-700",
    icon: "🥉",
    data: [
      { id: 1, user: "David", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 3500, weeklyScore: 24000 },
      { id: 2, user: "Lisa", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 3000, weeklyScore: 21000 },
      { id: 3, user: "Tom", avatar: "/placeholder.svg?height=40&width=40", dailyScore: 2800, weeklyScore: 19000 },
    ],
  },
]

export function ActivityFeed() {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly">("daily")
  const [currentLeagueIndex, setCurrentLeagueIndex] = useState(0)

  const currentLeague = leagues[currentLeagueIndex]

  const navigateLeague = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentLeagueIndex((current) => (current === 0 ? leagues.length - 1 : current - 1))
    } else {
      setCurrentLeagueIndex((current) => (current === leagues.length - 1 ? 0 : current + 1))
    }
  }

  const sortedData = [...currentLeague.data].sort((a, b) =>
    timeframe === "daily" ? b.dailyScore - a.dailyScore : b.weeklyScore - a.weeklyScore,
  )

  return (
    <Card className="bg-[#1a2234] text-white">
      <div className="flex flex-col items-center p-6">
        <div className="flex items-center justify-between w-full mb-6">
          <button
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            onClick={() => navigateLeague("prev")}
          >
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </button>
          <div className="relative">
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center relative", currentLeague.color)}>
              <span className="text-3xl">{currentLeague.icon}</span>
              <div className={cn("absolute inset-0 blur-lg -z-10 opacity-20", currentLeague.color)} />
            </div>
          </div>
          <button
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            onClick={() => navigateLeague("next")}
          >
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-6">{currentLeague.name}</h2>

        <div className="flex rounded-full bg-gray-800/50 p-1 mb-6 w-full max-w-md">
          <button
            className={cn(
              "flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
              timeframe === "daily" ? "bg-gray-700 text-white" : "text-gray-400",
            )}
            onClick={() => setTimeframe("daily")}
          >
            Daily
          </button>
          <button
            className={cn(
              "flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
              timeframe === "weekly" ? "bg-gray-700 text-white" : "text-gray-400",
            )}
            onClick={() => setTimeframe("weekly")}
          >
            Weekly
          </button>
        </div>

        <div className="w-full space-y-4">
          {sortedData.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between w-full py-2">
              <div className="flex items-center gap-4">
                <span className="w-6 text-gray-400">{index + 1}</span>
                <Avatar className="w-10 h-10">
                  <AvatarImage src={item.avatar} alt={item.user} />
                  <AvatarFallback>{item.user[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{item.user}</span>
              </div>
              <div className="flex items-center gap-2">
                <Diamond className="w-5 h-5 text-blue-400" />
                <span className="font-medium">
                  {timeframe === "daily" ? item.dailyScore.toLocaleString() : item.weeklyScore.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

