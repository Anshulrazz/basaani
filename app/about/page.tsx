'use client'
import Image from "next/image";
import Link from "next/link";
import imag from '../../public/image.png'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

// Add the icons you want for the services section (using lucide-react)
import { Car, Airplay, Hotel, Mountain } from 'lucide-react';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary-600" data-aos="fade-right">
              About Us
            </h1>
            <p className="text-lg" data-aos="fade-right">
              Basaani Travels is a travel company that specializes in providing
              unique and authentic travel experiences to our customers. We
              believe that travel should be more than just a vacation, it should
              be a journey of discovery and exploration.
            </p>
            <p className="text-lg" data-aos="fade-right">
              Our team of experienced travel professionals are dedicated to
              providing exceptional service and ensuring that every detail of your
              trip is taken care of. We are passionate about travel and are
              committed to making your travel dreams a reality.
            </p>
            <p className="text-lg mb-6" data-aos="fade-right">
              Whether you are looking for a romantic getaway, a family vacation,
              or an adventure of a lifetime, we have the knowledge and expertise
              to make it happen. Contact us today to start planning your next
              trip.
            </p>
            <br />
            <Link
              href="/contact"
              className="px-6 py-2 font-semibold text-black transition duration-300 bg-white rounded-lg hover:bg-white"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Contact Us
            </Link>
          </div>
          <div className="relative" data-aos="fade-left">
            <Image
              src={imag}
              alt="About Us"
              className="rounded-lg shadow-lg"
              width={640}
              height={480}
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-primary-600" data-aos="fade-up">
            Our Mission
          </h2>
          <p className="text-lg mt-4" data-aos="fade-up">
            Our mission is to inspire and facilitate transformative travel experiences that connect people with cultures,
            nature, and themselves. Through personalized itineraries, we aim to provide each traveler with the journey of a lifetime.
          </p>
        </div>

        {/* Services Section with Icons */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 p-6 bg-primary-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2" data-aos="fade-up">
            <div className="text-primary-600 text-4xl">
              <Car />
            </div>
            <h3 className="text-xl font-semibold">Custom Travel Planning</h3>
            <p className="text-lg">
              We create tailor-made itineraries to suit your interests and budget, ensuring every detail is perfectly planned.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-primary-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2" data-aos="fade-up">
            <div className="text-primary-600 text-4xl">
              <Airplay />
            </div>
            <h3 className="text-xl font-semibold">Group Tours</h3>
            <p className="text-lg">
              Join our guided group tours and explore new destinations with fellow travelers in a fun and social atmosphere.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-primary-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2" data-aos="fade-up">
            <div className="text-primary-600 text-4xl">
              <Hotel />
            </div>
            <h3 className="text-xl font-semibold">Luxury Travel</h3>
            <p className="text-lg">
              Indulge in luxury travel experiences, including first-class accommodations, private tours, and exclusive access to events.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-primary-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2" data-aos="fade-up">
            <div className="text-primary-600 text-4xl">
              <Mountain />
            </div>
            <h3 className="text-xl font-semibold">Adventure Travel</h3>
            <p className="text-lg">
              From mountain treks to scuba diving, we offer thrilling adventures that push the boundaries of your travel experience.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-primary-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2" data-aos="fade-up">
            <div className="text-primary-600 text-4xl">
              <Mountain />
            </div>
            <h3 className="text-xl font-semibold">Adventure Travel</h3>
            <p className="text-lg">
              From mountain treks to scuba diving, we offer thrilling adventures that push the boundaries of your travel experience.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-primary-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2" data-aos="fade-up">
            <div className="text-primary-600 text-4xl">
              <Mountain />
            </div>
            <h3 className="text-xl font-semibold">Adventure Travel</h3>
            <p className="text-lg">
              From mountain treks to scuba diving, we offer thrilling adventures that push the boundaries of your travel experience.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-primary-600" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <div className="space-y-6 mt-6" data-aos="fade-up">
            <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg italic">
                "Basaani Travels helped us plan the perfect vacation! The itinerary was customized to our needs and everything was seamless. We had an unforgettable experience!"
              </p>
              <p className="text-lg font-semibold mt-2">– Sarah & James, New York</p>
            </div>
            <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg italic">
                "I had the most amazing adventure with Basaani Travels! The team took care of every detail, and I felt like I was in great hands throughout the trip."
              </p>
              <p className="text-lg font-semibold mt-2">– Michael, London</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}