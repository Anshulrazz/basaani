"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlane, FaHotel, FaCar, FaPassport, FaRoute, FaConciergeBell } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
const services = [
  {
    title: "Flight & Hotel Bookings",
    description: "Seamless flight and hotel reservations at the best prices. We compare thousands of options to find the best deals for your trip.",
    icon: <FaPlane className="text-blue-500 text-5xl" />,
  },
  {
    title: "Customized Travel Planning",
    description: "Tailored itineraries to match your preferences. Whether it's adventure, relaxation, or cultural experiences, we craft the perfect trip for you.",
    icon: <FaRoute className="text-green-500 text-5xl" />,
  },
  {
    title: "Visa Assistance",
    description: "Hassle-free visa processing services to make your international travel smooth and stress-free.",
    icon: <FaPassport className="text-red-500 text-5xl" />,
  },
  {
    title: "Car Rentals & Transportation",
    description: "Reliable car rentals and private transfers to ensure comfortable travel wherever you go.",
    icon: <FaCar className="text-orange-500 text-5xl" />,
  },
  {
    title: "Concierge & Special Requests",
    description: "From private tours to restaurant reservations, we handle all your special requests for a luxurious travel experience.",
    icon: <FaConciergeBell className="text-purple-500 text-5xl" />,
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
          🌍 Our Travel Services
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12" data-aos="fade-up">
          We provide premium travel services to ensure a smooth and unforgettable journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center" data-aos="fade-up">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-3">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold text-gray-800" data-aos="fade-up">Ready to Plan Your Trip?</h3>
          <p className="text-gray-600 mb-6" data-aos="fade-up">Get in touch with us for personalized travel services.</p>
          <Button size="lg" className="px-8 py-4 text-lg" data-aos="fade-up">Contact Us</Button>
        </div>
      </div>
    </div>
          <Footer/>
          </>
  );
}
