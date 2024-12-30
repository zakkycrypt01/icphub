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
  isAdmin: boolean
}

export function EditableEventDetails({ initialDetails, isAdmin }: EditableEventDetailsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [details, setDetails] = useState<EventDetails>(initialDetails)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    // Here you would typically send the updated details to your backend
    console.log('Saving updated details:', details)
    setIsEditing(false)
  }

  return (
    <div className="mt-8 bg-secondary rounded-lg p-6 max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Next Meetup</h3>
        <>
          <p className="mb-2"><strong>Date:</strong> {details.date}</p>
          <p className="mb-2"><strong>Time:</strong> {details.time}</p>
          <p className="mb-4"><strong>Topic:</strong> {details.topic}</p>
          <Button asChild className="w-full bg-transparent hover:bg-gray-700 text-[#A5B9D0] border-2 border-[#A5B9D0]">
            <Link href="/join-meetup">
              Join Meetup
            </Link>
          </Button>
        </>
    </div>
  )
}

