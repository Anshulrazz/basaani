import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Basaani Travels - Best Travel Agency for Tours & Vacation Packages",
  description: "Discover top travel destinations with Basaani Travels. Book customized tours, holiday packages, and hassle-free travel experiences worldwide.",
  keywords: "travel agency, tour packages, holiday deals, best travel agency, customized tours, vacation planning, Basaani Travels",
  author: "Basaani Travels",
  robots: "index, follow",
  ogTitle: "Basaani Travels - Your Trusted Travel Partner",
  ogDescription: "Plan your dream vacation with Basaani Travels. Affordable tour packages, seamless bookings, and expert travel guidance.",
  ogImage: "https://s3.ca-central-1.amazonaws.com/logojoy/logos/213256524/whiteBgColor.png",
  ogUrl: "https://www.basaani.com",
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playwright+IN:wght@100..400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}

