import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'
import './globals.css'
import { MainNav } from "@/components/main-nav"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ICP Hub Nigeria',
  description: 'Building the future of Web3 in Nigeria through active community engagement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js?56"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} bg-background flex flex-col min-h-screen`}>
        <div className="flex-grow bg-[url('/placeholder.svg')] bg-cover bg-center bg-fixed">
          <div className="min-h-full bg-background/80 backdrop-blur-sm pb-16">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
        </div>
        <MainNav />
      </body>
    </html>
  )
}

