"use client";

import { cn } from "@/lib/utils";
import { Home, Briefcase, Activity, User, Link } from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    hoverBg: "hover:bg-sky-500/10",
  },
  {
    label: "Earn",
    icon: Briefcase,
    href: "/bounties",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    hoverBg: "hover:bg-pink-500/10",
  },
  {
    label: "Activity",
    icon: Activity,
    href: "/activity",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    hoverBg: "hover:bg-green-500/10",
  },
  {
    label: "Profile",
    icon: User,
    href: "/profile",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    hoverBg: "hover:bg-purple-500/10",
  },
  {
    label: "Invite",
    icon: Link,
    href: "/invite",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    hoverBg: "hover:bg-yellow-500/10",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50">
      <div className="container max-w-lg mx-auto px-4">
        <div
          className={cn(
            "flex justify-between items-center p-4 rounded-3xl backdrop-blur-md",
            "shadow-lg shadow-gray-500/20 dark:shadow-black/40",
            "bg-white/90 dark:bg-purple-900/20"
          )}
        >
          {routes.map((route) => (
            <NextLink
              key={route.href}
              href={route.href}
              className="relative group"
            >
              <div
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200",
                  pathname === route.href
                    ? `${route.bgColor} ${route.color}`
                    : "text-gray-600 dark:text-gray-400",
                  pathname !== route.href && route.hoverBg,
                  "hover:scale-110"
                )}
              >
                <route.icon
                  className={cn(
                    "h-6 w-6 transition-transform duration-200",
                    "group-hover:scale-110"
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-medium transition-all duration-200",
                    pathname === route.href
                      ? "opacity-100"
                      : "opacity-70 group-hover:opacity-100"
                  )}
                >
                  {route.label}
                </span>
                {pathname === route.href && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-current" />
                )}
              </div>
            </NextLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
