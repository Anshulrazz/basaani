'use client'

import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
const destinations = [
    {
        title: "Bali, Indonesia",
        country: "🇮🇩",
        description: "A paradise known for pristine beaches, lush rice terraces, and vibrant culture. Perfect for surfers, nature lovers, and spiritual seekers.",
        attractions: [
            "Uluwatu Temple & Sunset Cliff",
            "Ubud’s Sacred Monkey Forest",
            "Nusa Penida’s Crystal Clear Waters"
        ],
        bestTime: "☀️ April - October (Dry Season)",
        image: "https://assets.architecturaldigest.in/photos/60083bf51b516d492c3aaa2a/16:9/w_2560%2Cc_limit/Bali-villa-Uluwatu-SAOTA-1366x768.jpg"
    },
    {
        title: "Santorini, Greece",
        country: "🇬🇷",
        description: "Famous for white-washed buildings, stunning sunsets, and breathtaking Aegean Sea views. Ideal for romantic getaways.",
        attractions: [
            "Oia’s Sunset Viewpoints",
            "Red Beach & Black Sand Beach",
            "Ancient Ruins of Akrotiri"
        ],
        bestTime: "🌅 April - November (Warm & Pleasant)",
        image: "https://res.cloudinary.com/enchanting/q_70,f_auto,w_600,h_400,c_fit/ymt-web/2023/01/600x400-Santorini20Greece20Sunset.jpg"
    },
    {
        title: "Kyoto, Japan",
        country: "🇯🇵",
        description: "Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
        attractions: [
            "Fushimi Inari-taisha Shrine",
            "Arashiyama Bamboo Grove",
            "Kinkaku-ji (Golden Pavilion)"
        ],
        bestTime: "🌸 March - May & October - November (Cherry Blossom & Autumn)",
        image: "https://www.japan-guide.com/g18/3909_top.jpg"
    },
    {
        title: "Maui, Hawaii, USA",
        country: "🇺🇸",
        description: "Famous for its stunning beaches, the sacred ʻĪao Valley, and the scenic Hana Highway.",
        attractions: [
            "Haleakalā National Park",
            "Road to Hana",
            "Maui Ocean Center"
        ],
        bestTime: "🌴 April - May & September - November (Pleasant Weather)",
        image: "https://windows10spotlight.com/wp-content/uploads/2018/02/3c2206a159586f87b50f34eed1f9fe99.jpg"
    }
];

export default function DestinationsPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: true,
            offset: 120,
        });
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className='flex flex-row'>
                                <div className="p-4 rounded-lg mt-16 ml-3 text-2xl" data-aos='fade-up'>
                                    <ul className="space-y-2">                      
                                            <li className="flex items-center gap-2">
                                                <span className="text-blue-600">✓</span>
                                                <span className="text-gray-700">Where Will Your Next Adventure Take You? 🌍✈️</span>
                                            </li>
                                            <li  className="flex items-center gap-2">
                                                <span className="text-blue-600">✓</span>
                                                <span className="text-gray-700">Explore Breathtaking Destinations Across the Globe!</span>
                                            </li>
                                            <li  className="flex items-center gap-2">
                                                <span className="text-blue-600">✓</span>
                                                <span className="text-gray-700">Unveiling the World's Most Stunning Getaways!</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-blue-600">✓</span>
                                                <span className="text-gray-700">Your Passport to Unforgettable Experiences!</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-blue-600">✓</span>
                                                <span className="text-gray-700">Let’s Turn Your Travel Dreams Into Reality!</span>
                                            </li>
                                    </ul>
                                </div>   
          
                <DotLottieReact
                 src="https://lottie.host/e6787638-c3e7-4bd9-8d5b-de6425dada73/VZB6AT2m4K.lottie"
                    loop
                    autoplay
                    style={{
                        height: "400px",    
                        width: "600px",
                        border: 0,
                        filter: "drop-shadow(2px 2px 14px #DC26)",
                    }} data-aos="fade-left" 
                />
            </div>
            <main className="max-w-7xl mx-auto px-4 py-16">
                {destinations.map((dest, index) => (
                    <section key={dest.title} className="mb-20">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                            <div className="md:w-1/2 relative h-96 rounded-xl overflow-hidden shadow-xl" data-aos="fade-up">
                                <Image
                                    src={dest.image}
                                    alt={dest.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 space-y-6">
                                <div className="flex items-center gap-4" data-aos='fade-up'>
                                    <h2 className="text-3xl font-bold text-gray-800">{dest.title}</h2>
                                    <span className="text-3xl">{dest.country}</span>
                                </div>
                                <p className="text-lg text-gray-600" data-aos="fade-up">{dest.description}</p>
                                <div className="p-4 rounded-lg border-2" data-aos='fade-up'>
                                    <h3 className="text-xl font-semibold mb-3">Top Attractions</h3>
                                    <ul className="space-y-2">
                                        {dest.attractions.map(attr => (
                                            <li key={attr} className="flex items-center gap-2">
                                                <span className="text-blue-600">✓</span>
                                                <span className="text-gray-700">{attr}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-orange-100 p-4 rounded-lg" data-aos='fade-up'>
                                    <p className="font-semibold text-orange-800">
                                        Best Time to Visit: {dest.bestTime}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </main>
            <Footer />
        </div>
    );
}