import Image from "next/image";
import imag from './image.png'
import imag1 from './img1.png'
import imag2 from './img2.png'
import Navbar from "@/components/navbar";
export default function About() {
    return (
        <>
        <Navbar/>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 py-4 mt-6 md:flex-row">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-serif"> Gallary</h2>
                <p className="mt-4 font-serif text-muted-foreground sm:text-lg">
                    Explore our collection of stunning images that showcase the beauty of our destinations.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
                <div className="relative">
                    <Image
                        src={imag}
                        alt="About Us"
                        className="rounded-lg shadow-lg"
                        width={640}
                        height={480}
                    />
                </div>
                <div className="relative">
                    <Image
                        src={imag1}
                        alt="About Us"
                        className="rounded-lg shadow-lg"
                        width={640}
                        height={480}
                    />
                </div>
                <div className="relative">
                    <Image
                        src={imag2}
                        alt="About Us"
                        className="rounded-lg shadow-lg"
                        width={640}
                        height={480}
                    />
                </div>
            </div>
        </div>
        </>
    );
}


