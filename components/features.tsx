const features = [
  {
    name: "Personalized Travel Plans",
    description: "Tailor-made itineraries to suit your preferences and budget.",
    icon: Brain,
  },
  {
    name: "Global Destinations",
    description: "Explore a wide range of destinations across the globe with our expert guidance.",
    icon: Cloud,
  },
  {
    name: "Secure Bookings",
    description: "Your travel bookings are safe and secure with our trusted platform.",
    icon: Shield,
  },
  {
    name: "24/7 Customer Support",
    description: "Get assistance anytime, anywhere with our dedicated support team.",
    icon: Zap,
  },
  {
    name: "Exclusive Deals",
    description: "Access special deals and discounts available only to our customers.",
    icon: Brain,
  },
  {
    name: "Travel Insurance",
    description: "Comprehensive travel insurance plans for a worry-free journey.",
    icon: Shield,
  },
]

import { Brain, Cloud, Shield, Zap } from "lucide-react"
import { Button } from "./ui/button"

export default function Features() {
  return (
    <section className="container py-12 space-y-6 md:py-16">
      <div className="mx-auto text-left">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Why Choose Basaani Limited</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Experience the art of travel with Basaani Travels Pvt. Ltd. Your one-stop-shop for all travel needs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="relative p-8 overflow-hidden border rounded-lg bg-background">
            <div className="flex items-center gap-4">
              <feature.icon className="w-8 h-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

