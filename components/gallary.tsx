'use client'

import { Button } from "./ui/button"

export default function Gallary() {
    return (
        <section className="container py-12 space-y-6 md:py-16">
            <div className="flex flex-col items-center justify-between gap-4 mt-6 md:flex-row">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-serif"> Gallary</h2>
                <p className="mt-4 text-muted-foreground sm:text-lg">
                    Explore our collection of stunning images that showcase the beauty of our destinations.
                </p>
                <Button size="lg">View Gallery</Button>
            </div>
        </section>
    )
}
