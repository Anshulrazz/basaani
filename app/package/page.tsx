"use client"

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
const tourPackages = [
  {
    id: 1,
    title: "Romantic Getaway",
    type: "honeymoon",
    description: "A perfect honeymoon package for newlyweds",
    image: "https://media.istockphoto.com/id/1256296335/photo/a-romantic-couple-on-summer-vacation-enjos-the-sunset-over-the-mediterranean-sea-by-the-pool.jpg?s=612x612&w=0&k=20&c=FJurmc0CUMEpoAdRIUfJ2rHIOM-gYs-V5MM_0PoOJtQ=",
    price: 2499,
    duration: "7 days",
    rating: 4.8,
    reviews: 120,
    highlights: ["Luxury resort", "Private beach dinner", "Spa treatments"],
  },
  {
    id: 2,
    title: "Mountain Explorer",
    type: "adventure",
    description: "A thrilling adventure in the mountains",
    image: "https://img.freepik.com/premium-photo/three-hikers-mountaintop-sunrise-sky-is-brilliant-orange-pink-mountains-are-silhouetted-against-it_14117-531011.jpg?w=360",
    price: 1899,
    duration: "5 days",
    rating: 4.7,
    reviews: 95,
    highlights: ["Hiking trails", "Camping under the stars", "Whitewater rafting"],
  },
  {
    id: 3,
    title: "Family Fun Week",
    type: "family",
    description: "A week full of activities for the whole family",
    image: "https://www.newdelhiairport.in/src/images/family-on-summer-vacation-at-beach.jpg",
    price: 3299,
    duration: "6 days",
    rating: 4.9,
    reviews: 150,
    highlights: ["Theme park access", "Wildlife safari", "Cultural tours"],
  },
];

export default function TourPackages() {
  const [filter, setFilter] = useState("all");

  const filteredPackages =
    filter === "all" ? tourPackages : tourPackages.filter((pkg) => pkg.type === filter);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
        <div className='flex flex-row'>
        <DotLottieReact
                  src="https://lottie.host/b6e8d392-007c-45b9-98f8-080cd2954d59/MlvtZWOtv0.lottie"
                    loop
                    autoplay
                    style={{
                        height: "400px",
                        width: "600px",
                        border: 0,
                        filter: "drop-shadow(2px 2px 14px #DC26)",
                    }} data-aos="fade-left"
                />
                <div className='mt-18'>
                    <h1 className="text-3xl mt-2">Your Dream Vacation Starts Here ✈️🌍 <br/>
Explore the World, One Destination at a Time<br/>
Adventure Awaits – Where Will You Go Next?<br/>
Unforgettable Journeys, Tailored for You<br/>
Discover. Explore. Experience.<br/>
Let’s Plan Your Perfect Getaway!</h1>
                </div>
        </div>
    <div>

    </div>
      <div className="flex justify-left space-x-3 mb-6">
        <Button onClick={() => setFilter("all")} variant={filter === "all" ? "default" : "outline"}>
          All
        </Button>
        <Button onClick={() => setFilter("honeymoon")} variant={filter === "honeymoon" ? "default" : "outline"}>
          Honeymoon
        </Button>
        <Button onClick={() => setFilter("adventure")} variant={filter === "adventure" ? "default" : "outline"}>
          Adventure
        </Button>
        <Button onClick={() => setFilter("family")} variant={filter === "family" ? "default" : "outline"}>
          Family
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <Card key={pkg.id} className="flex flex-col shadow-lg overflow-hidden">
            <Image src={pkg.image} alt={pkg.title} width={300} height={200} className="w-full h-40 object-cover" />
            <CardHeader className="p-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{pkg.title}</CardTitle>
                <Badge>{pkg.type}</Badge>
              </div>
              <CardDescription className="text-sm mt-1">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="px-3 pb-3">
              <p className="text-xl font-semibold text-green-600">${pkg.price}</p>
              <p className="text-sm text-gray-600">Duration: {pkg.duration}</p>
              <div className="flex items-center text-yellow-500 text-sm mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill={i < Math.floor(pkg.rating) ? "currentColor" : "none"} strokeWidth={1.5} />
                ))}
                <span className="text-gray-500 ml-1">({pkg.reviews} reviews)</span>
              </div>
              <h3 className="font-semibold text-sm mt-2">Highlights:</h3>
              <ul className="list-disc list-inside text-xs text-gray-700">
                {pkg.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-3">
              <Button className="w-full">Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
