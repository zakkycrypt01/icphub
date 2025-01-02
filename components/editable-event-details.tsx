'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

type EventDetails = {
  date: string
  time: string
  topic: string
}

type EditableEventDetailsProps = {
  initialDetails: EventDetails
}

export function EditableEventDetails({ initialDetails }: EditableEventDetailsProps) {
  const [details, setDetails] = useState<EventDetails>(initialDetails)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  return (
    <div className="mt-8 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto border border-gray-200/50 dark:border-gray-800/50">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Next Meetup</h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Date:</strong> {details.date}</p>
      <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Time:</strong> {details.time}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300"><strong>Topic:</strong> {details.topic}</p>
      <Button asChild className="w-full bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]">
        <Link href="/join-meetup">
          Join Meetup
        </Link>
      </Button>
    </div>
  )
}

