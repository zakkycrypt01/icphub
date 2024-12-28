'use client'

import { cn } from "@/lib/utils"
import { Home, Briefcase, Users2, User, Link } from 'lucide-react'
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
    label: 'Community',
    icon: Users2,
    href: '/community',
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
    <nav className="flex justify-between items-center gap-6 md:gap-8">
      {routes.map((route) => (
        <NextLink
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
            pathname === route.href ? route.color : "text-muted-foreground"
          )}
        >
          <route.icon className="h-4 w-4" />
          <span className="hidden md:block">{route.label}</span>
        </NextLink>
      ))}
    </nav>
  )
}



