'use client'

import Navbar from "@/components/navbar"
import Features from "@/components/features"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { useEffect, useState } from "react"
import AOS from 'aos';
import { BrandCollaboration } from "@/components/partner"
import ic1 from "../public/flight.png"
import ic2 from "../public/hotels.png"
import ic3 from "../public/bus.png"
import ic4 from "../public/car.png"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      offset: 120,
    });
  }, []);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };
  const icons = [
    {
      name: "Flight",
      image: ic1,
      link: '/flight',
    },
    {
      name: "Hotel",
      image: ic2,
      link : '/hotel'
    },
    {
      name: "Bus",
      image: ic3,
      link:'/bus'
    },
    {
      name: "Car",
      image: ic4,
      link:'/car'
    },
  ]


  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "Basaani Travels made our honeymoon unforgettable! Every detail was perfectly arranged.",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      text: "The best travel agency I've worked with. Their local guides are exceptional.",
      rating: 5
    },
    {
      name: "Amina Bello",
      location: "Lagos, Nigeria",
      text: "Seamless experience from booking to return. Highly recommended!",
      rating: 5
    }
  ];

  const destinations = [
    {
      name: "Zanzibar Beaches",
      image: "https://www.flightcentre.co.za/sites/flightcentre.co.za/files/beaches-of-zanzibar-header-image.jpg",
      description: "Pristine white sands and crystal-clear waters of the Indian Ocean"
    },
    {
      name: "Serengeti Safari",
      image: "https://wildlifesafaritanzania.com/wp-content/uploads/2020/12/4-Days-Serengeti-Ngorongoro-Wildlife-Safari.jpg",
      description: "Witness the Great Migration in Tanzania's iconic national park"
    },
    {
      name: "Mount Kilimanjaro",
      image: "https://samuelsongallery.com/wp-content/uploads/2016/03/Kilimanjaro-Sunrise-8x12.jpg",
      description: "Conquer Africa's highest peak with expert guides"
    },
    {
      name: "Ngorongoro Crater",
      image: "https://africaadventurevacations.com/wp-content/uploads/2022/06/How-big-is-the-Ngorongoro-Crater-1.jpg",
      description: "Explore the world's largest intact volcanic caldera"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <div
          id="booking"
          className="relative h-screen bg-center bg-cover"
          style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp4854991.jpg')" }}
        >
          <div className="absolute inset-0 bg-slate-300 bg-opacity-15"></div>
          <div className="absolute left-0 transform -translate-y-1/2 top-1/2">
            <div className="container px-4 mx-auto">
              <div className="flex flex-row gap-5 pb-6">
                {icons.map((icon, index) => (
                  <Link href={icon.link} >
                    <Image src={icon.image} alt={icon.name} width={70} height={70} className="p-3 rounded-sm bg-slate-300" />
                  </Link>
                ))}
              </div>
              <div className="flex justify-start">
                <div className="w-full max-w-5xl p-6 bg-white rounded-md shadow-lg">
                  <form>
                    <div className="flex flex-row -mx-2">
                      {/* Destination */}
                      <div className="w-full px-2 mb-4 md:w-1/4">
                        <label className="text-sm font-medium text-black">Boarding Point</label>
                        <input
                          type="text"
                          placeholder="Country, ZIP, city..."
                          className="w-full py-2 text-lg text-black border-b border-gray-300 focus:outline-none"
                        />
                      </div>
                      <div className="w-full px-2 mb-4 md:w-1/4">
                        <label className="text-sm font-medium text-black">Destination Point</label>
                        <input
                          type="text"
                          placeholder="Country, ZIP, city..."
                          className="w-full py-2 text-lg text-black border-b border-gray-300 focus:outline-none"
                        />
                      </div>
                      {/* Check In & Check Out */}
                      <div className="flex flex-wrap w-full px-2 mb-4 md:w-1/2">
                        <div className="w-1/2 pr-2">
                          <label className="text-sm font-medium text-black">Departure Date</label>
                          <input
                            type="date"
                            required
                            className="w-full py-2 text-lg text-gray-400 border-b border-gray-300 focus:outline-none"
                          />
                        </div>
                        <div className="w-1/2 pl-2">
                          <label className="text-sm font-medium text-black">Return Date</label>
                          <input
                            type="date"
                            required
                            className="w-full py-2 text-lg text-gray-400 border-b border-gray-300 focus:outline-none"
                          />
                        </div>
                      </div>
                      {/* Submit Button */}
                      <div className="flex items-end w-full px-2 md:w-1/4">
                        <Link
                          href="/contact"
                          className="px-6 py-3 font-semibold text-white transition duration-300 bg-black rounded-lg hover:bg-black"
                        >
                          Check Availblity
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <section className="py-24">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl" data-aos="fade-right">
                  Experience Travel Like Never Before
                </h2>
                <p className="mb-6 text-lg text-gray-600" data-aos="fade-right" data-aos-delay="200">
                  Discover unique destinations, amazing cultures, and tailored experiences for you. Let Basaani Travels guide you through your next adventure with personalized service and exceptional value.
                </p>
                <Link
                  href="/contact"
                  className="px-6 py-3 font-semibold text-black transition duration-300 bg-white rounded-lg hover:bg-white"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex justify-center" data-aos="fade-left">
                <img
                  src="https://wallpaperaccess.com/full/1431622.jpg"
                  alt="Travel"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <Features />

        {/* Popular Destinations */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl" data-aos="fade-up">
              Popular Destinations
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {destinations.map((dest, index) => (
                <motion.div
                  key={dest.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ y: -10 }}
                  className="overflow-hidden border-2 border-gray-100 rounded-lg shadow-lg"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    width={400}
                    height={300}
                    className="object-cover h-48"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-semibold">{dest.name}</h3>
                    <p className="text-gray-600">{dest.description}</p>
                    <Link
                      href="/destinations"
                      className="inline-block mt-4 text-blue-600 hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BrandCollaboration />

        {/* Testimonials */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl" data-aos="fade-up">
              What Our Travelers Say
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="p-6 border-2 border-gray-100 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="py-24 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Subscribe to Basaani Travels</h2>
            <p className="mb-8 text-lg md:text-xl">
              Stay updated with the latest travel deals, offers, and updates from Royal Jat Travels. Enter your email below to subscribe to our newsletter.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <div className="relative w-full md:w-auto">
                <input
                  type="phone"
                  placeholder="Enter your Phone No..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none"
                  required
                />
              </div>
              <button type="submit" className="px-6 py-3 font-bold transition bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600">
                Subscribe
              </button>
            </form>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 font-medium text-green-400"
              >
                Thank you for subscribing! 🎉
              </motion.p>
            )}
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  )
}