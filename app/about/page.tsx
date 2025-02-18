import Image from "next/image";
import Link from "next/link";
import imag from '../../public/image.png'
export default function About() {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight tracking-tight">
            About Us
          </h1>
          <p className="text-lg">
            Basaani Travels is a travel company that specializes in providing
            unique and authentic travel experiences to our customers. We
            believe that travel should be more than just a vacation, it should
            be a journey of discovery and exploration.
          </p>
          <p className="text-lg">
            Our team of experienced travel professionals are dedicated to
            providing exceptional service and ensuring that every detail of your
            trip is taken care of. We are passionate about travel and are
            committed to making your travel dreams a reality.
          </p>
          <p className="text-lg">
            Whether you are looking for a romantic getaway, a family vacation,
            or an adventure of a lifetime, we have the knowledge and expertise
            to make it happen. Contact us today to start planning your next
            trip.
          </p>
          <Link href="/contact">
            <p className="text-lg font-bold text-primary-600 hover:text-primary-700">
              Contact Us
            </p>
          </Link>
        </div>
        <div className="relative">
          <Image
            src={imag}
            alt="About Us"
            className="rounded-lg shadow-lg"
            width={640}
            height={480}
          />
        </div>
      </div>
    </div>
  );
}


