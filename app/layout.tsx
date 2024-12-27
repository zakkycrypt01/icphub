import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ICP Hub Sahara',
  description: 'Building the future of Web3 in the Sahara region',
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
      <body className={`${inter.className} bg-background`}>
        <div className="min-h-screen bg-[url('/placeholder.svg')] bg-cover bg-center bg-fixed">
          <div className="min-h-screen bg-background/80 backdrop-blur-sm">
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
      </body>
    </html>
  )
}
