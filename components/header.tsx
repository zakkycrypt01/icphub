import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/logo.png"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex justify-center items-center h-16">
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

