import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="images/logo.png"
            alt="ICP Hub Sahara"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="hidden font-bold sm:inline-block">
            ICP Hub Sahara
          </span>
        </Link>
        <MainNav />
        <ThemeToggle />
      </div>
    </header>
  )
}
