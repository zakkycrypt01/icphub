'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Status = 'ongoing' | 'completed' | 'in-review'

type Item = {
  id: number
  title: string
  description: string
  reward: string
  deadline: string
  skills: string[]
  postedBy: 'admin' | 'company'
  companyName?: string
  status: Status
}

type BountyListProps = {
  items: Item[]
}

export function BountyList({ items }: BountyListProps) {
  const getStatusColor = (status: Status) => {
    switch (status) {
      case 'ongoing':
        return 'bg-blue-500'
      case 'completed':
        return 'bg-green-500'
      case 'in-review':
        return 'bg-yellow-500'
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link href={`/bounties/${item.id}`} key={item.id}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{item.title}</span>
                <Badge className={`${getStatusColor(item.status)} text-white`}>
                  {item.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-green-600 dark:text-green-400">{item.reward}</span>
                <span className="text-sm text-muted-foreground">Deadline: {item.deadline}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Badge variant={item.postedBy === 'admin' ? 'default' : 'outline'}>
                  {item.postedBy === 'admin' ? 'Admin' : item.companyName}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

