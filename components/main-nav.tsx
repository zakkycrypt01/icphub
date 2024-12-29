'use client'

import { cn } from "@/lib/utils"
import { Home, Briefcase, Activity, User, Link } from 'lucide-react'
import NextLink from "next/link"
import { usePathname } from "next/navigation"

const routes = [
  {
    label: 'Home',
    icon: Home,
    href: '/',
    color: "text-sky-500"
  },
  {
    label: 'Bounties',
    icon: Briefcase,
    href: '/bounties',
    color: "text-pink-500"
  },
  {
    label: 'Activity',
    icon: Activity,
    href: '/activity',
    color: "text-green-500"
  },
  {
    label: 'Profile',
    icon: User,
    href: '/profile',
    color: "text-purple-500"
  },
  {
    label: 'Invite',
    icon: Link,
    href: '/invite',
    color: "text-yellow-500"
  }
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {routes.map((route) => (
            <NextLink
              key={route.href}
              href={route.href}
              className={cn(
                "flex flex-col items-center gap-1 p-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href ? route.color : "text-muted-foreground"
              )}
            >
              <route.icon className="h-5 w-5" />
              <span className="text-xs">{route.label}</span>
            </NextLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

