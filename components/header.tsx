import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/logo.png"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-950/80">
      <div className="container relative flex h-16 items-center justify-center">
        <Link href="/" className="flex items-center gap-2 text-center">
          <Image
            src={logo}
            alt="ICP Hub Nigeria"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-bold text-lg">
          IC NOMADS
          </span>
        </Link>
        <div className="absolute right-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

