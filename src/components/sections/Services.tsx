"use client"

import Image from "next/image"
import { ArrowRightCircle } from "lucide-react"

export default function Services() {
    const services = [
        {
            title: "Wooden Houses Construction",
            description:
                "At Wooden Houses Kenya, we specialize in crafting high-quality, sustainable wooden houses that...",
            image: "/services/house.jpg",
            link: "/services",
        },
        {
            title: "General Carpentry",
            description:
                "We provide top-quality carpentry services, specializing in custom woodwork that...",
            image: "/services/furniture.jpg",
            link: "/services",
        },
    ]

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2
                    className="text-4xl font-bold mb-12 text-left lg:text-center"
                    style={{ color: "#8B5E3C" }}
                >
                    Our Services
                </h2>


                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
                        >
                            {/* IMAGE */}
                            <div className="relative w-full h-[280px]">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="p-6">
                                <h3
                                    className="text-2xl font-bold mb-4"
                                    style={{ color: "#8B5E3C" }}
                                >
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* READ MORE */}
                                <a
                                    href={service.link}
                                    className="inline-flex items-center gap-2 font-semibold text-lg transition-all"
                                    style={{ color: "#8B5E3C" }}
                                >
                                    Read More
                                    <ArrowRightCircle
                                        size={22}
                                        style={{ color: "#8B5E3C" }}
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
