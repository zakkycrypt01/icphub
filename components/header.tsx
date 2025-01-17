import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

export function Header() {
  return (
    <header className="sticky top-4 z-50 w-[95%] mx-auto rounded-2xl bg-white/90 dark:bg-gray-950/90 border border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-gray-500/10 dark:shadow-black/20 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-950/80 transition-transform duration-300 hover:translate-y-1 hover:shadow-xl">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3 text-center group"
          aria-label="IC Nomads - Home"
        >
          <Image
            src={logo}
            alt="IC Nomads Logo"
            width={40}
            height={40}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg font-extrabold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            IC NOMADS
          </span>
        </Link>

        {/* Navigation and Theme Toggle */}
        <div className="flex items-center gap-6">
          {/* Optional Navigation Links */}
          <nav className="hidden sm:flex gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
