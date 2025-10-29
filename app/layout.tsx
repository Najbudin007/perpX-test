import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ErrorBoundary } from "@/components/error-boundary"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PrepX - AI Trading Bot",
  description:
    "Advanced AI-powered trading bot for cryptocurrency markets. Automated trading with intelligent risk management and real-time analytics.",
  generator: "PrepX",
  keywords: ["AI trading", "cryptocurrency", "trading bot", "automated trading", "crypto trading"],
  authors: [{ name: "PrepX Team" }],
  creator: "PrepX",
  publisher: "PrepX",
  robots: "index, follow",
  openGraph: {
    title: "PrepX - AI Trading Bot",
    description: "Advanced AI-powered trading bot for cryptocurrency markets",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrepX - AI Trading Bot",
    description: "Advanced AI-powered trading bot for cryptocurrency markets",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense
          fallback={
            <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center px-6 relative overflow-hidden">
              {/* Background gradient circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#8759ff]/20 to-[#2c2146]/30 blur-xl animate-pulse"></div>
              </div>

              {/* Main content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                {/* Logo/Icon */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8759ff] to-[#A855F7] flex items-center justify-center animate-spin">
                    <div className="w-8 h-8 bg-white rounded-sm"></div>
                  </div>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-[#8759ff]/30 animate-ping"></div>
                </div>

                {/* PrepX Title */}
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-[#8759ff] to-[#A855F7] bg-clip-text text-transparent">
                    PrepX AI
                  </h1>
                  <p className="text-[#b4b4b4] text-sm animate-pulse">Loading...</p>
                </div>
              </div>
            </div>
          }
        >
          <ErrorBoundary>{children}</ErrorBoundary>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
