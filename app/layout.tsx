import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Basaani Travels - Explore the World with Us",
  description: "Basaani Travels offers unforgettable travel experiences, customized tours, and hassle-free bookings for your next adventure.",
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

