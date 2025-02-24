"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlane, FaCar, FaPassport, FaRoute, FaConciergeBell, FaLeaf, FaCheckCircle, FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Services array with all requested facets
const services = [
    {
        title: "Flight & Hotel Bookings",
        description: "Seamless flight and hotel reservations at the best prices. We compare thousands of options to find the perfect deals for your trip, ensuring comfort and convenience.",
        icon: <FaPlane className="text-blue-500 text-5xl" />,
    },
    {
        title: "Customized Travel Planning",
        description: "Tailored itineraries to match your preferences, including adventure, relaxation, or cultural experiences. We craft the perfect trip with personalized recommendations.",
        icon: <FaRoute className="text-green-500 text-5xl" />,
    },
    {
        title: "Visa Assistance",
        description: "Hassle-free visa processing services to ensure smooth and stress-free international travel. Our experts guide you every step of the way.",
        icon: <FaPassport className="text-red-500 text-5xl" />,
    },
    {
        title: "Car Rentals & Transportation",
        description: "Reliable car rentals and private transfers for comfortable travel, with eco-friendly vehicle options available to suit your journey.",
        icon: <FaCar className="text-orange-500 text-5xl" />,
    },
    {
        title: "Concierge & Special Requests",
        description: "From private tours to restaurant reservations, we handle all your special requests for a luxurious and bespoke travel experience.",
        icon: <FaConciergeBell className="text-purple-500 text-5xl" />,
    },
    {
        title: "Sustainable Travel Options",
        description: "Eco-friendly travel solutions, including green accommodations and low-impact transportation, for a planet-conscious journey.",
        icon: <FaLeaf className="text-teal-500 text-5xl" />,
    },
];

// Why Choose Us features
const whyChooseUs = [
    { title: "Expert Guidance", description: "Our team of travel specialists offers insider knowledge for every destination." },
    { title: "24/7 Support", description: "Round-the-clock assistance to ensure your trip goes smoothly." },
    { title: "Best Price Guarantee", description: "Competitive pricing with no hidden fees, tailored to your budget." },
];

// Testimonials
const testimonials = [
    { name: "Sarah M.", text: "The customized itinerary was spot-on! Every detail was perfect.", rating: 5 },
    { name: "James T.", text: "Visa assistance made my trip stress-free. Highly recommend!", rating: 4 },
    { name: "Emma L.", text: "Loved the eco-friendly options. Great service!", rating: 5 },
];

// FAQs
const faqs = [
    { question: "How do I book a trip?", answer: "Simply contact us via the button below, and we’ll guide you through the process." },
    { question: "What’s included in sustainable travel options?", answer: "Eco-friendly lodging, carbon-offset flights, and green transportation choices." },
    { question: "Can you handle last-minute bookings?", answer: "Yes, we specialize in flexible and urgent travel arrangements." },
];

export default function ServicesPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // State for FAQ accordion
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <Navbar />
            <div className="">
                {/* Hero Section */}
                <section className="min-h-screen py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800" data-aos="fade-up">
                            🌍 Our Travel Services
                        </h1>
                        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up">
                            We provide premium travel services to ensure a smooth and unforgettable journey, tailored to your unique needs and desires.
                        </p>
                        {/* Services Grid */}
                        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="relative p-8 overflow-hidden border rounded-lg bg-background"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <p className="w-8 h-8" >{service.icon}</p>
                                    <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
                                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-16">
                            <h3 className="text-xl font-semibold text-gray-800" data-aos="fade-up">
                                Ready to Plan Your Trip?
                            </h3>
                            <p className="text-gray-600 mb-6" data-aos="fade-up">
                                Get in touch with us for personalized travel services that make your journey extraordinary.
                            </p>
                            <Button size="lg" className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700" data-aos="fade-up">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 ">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800" data-aos="fade-up">
                            Why Choose Us?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {whyChooseUs.map((feature, index) => (
                                <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <FaCheckCircle className="text-blue-500 text-4xl mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600 mt-2">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800" data-aos="fade-up">
                            What Our Clients Say
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className=" p-6 rounded-xl shadow-lg text-center"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex justify-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-xl" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                                    <p className="text-gray-800 font-semibold mt-4">{testimonial.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800" data-aos="fade-up">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4 max-w-3xl mx-auto">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border rounded-lg p-4 cursor-pointer"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                                        {faq.question}
                                        <span>{openFaq === index ? "−" : "+"}</span>
                                    </h3>
                                    {openFaq === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="py-16  text-white text-center">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
                            Start Your Journey Today
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up">
                            Whether it’s a weekend getaway or a global adventure, we’re here to make it happen. Let’s plan your dream trip together!
                        </p>
                        <Button size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100" data-aos="fade-up">
                            Get Started
                        </Button>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}