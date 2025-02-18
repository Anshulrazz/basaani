import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import logo from "../public/logo.png"


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        <Link href="/" className="flex items-center mr-6 space-x-2">
          <Image src={logo} alt="logo" className="overflow-hidden rounded-full" height={50} width={150} />
        </Link>
        <nav className="flex items-center flex-1 space-x-6 text-sm font-medium">
          <Link href="/solutions" className="transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="/industries" className="transition-colors hover:text-primary">
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Contact
          </Button>
          <Button size="sm">Login</Button>
        </div>
      </div>
    </header>
  )
}

