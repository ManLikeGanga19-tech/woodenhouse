"use client"

import Image from "next/image"
import { ShieldCheck, Brush, MessageSquare, Headset } from "lucide-react"

export default function WhyChooseUs() {
    const features = [
        "Superior Quality",
        "A Green Approach",
        "On-time and On-budget Delivery",
        "Personalized Service",
        "Wide Selection of Models",
    ]

    const gridItems = [
        { title: "Quality Services", icon: <ShieldCheck size={32} style={{ color: "#8B5E3C" }} /> },
        { title: "Creative Designers", icon: <Brush size={32} style={{ color: "#8B5E3C" }} /> },
        { title: "Free Consultation", icon: <MessageSquare size={32} style={{ color: "#8B5E3C" }} /> },
        { title: "Customer Support", icon: <Headset size={32} style={{ color: "#8B5E3C" }} /> },
    ]

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT — TEXT */}
                <div className="flex flex-col">

                    {/* Header */}
                    <h2
                        className="text-4xl font-bold mb-8 text-left"
                        style={{ color: "#8B5E3C" }}
                    >
                        Why Choose Us
                    </h2>

                    {/* Feature list with custom brown bullet points */}
                    <ul className="space-y-3 mb-14">
                        {features.map((item, index) => (
                            <li
                                key={index}
                                className="text-gray-700 text-lg font-medium flex items-start gap-3"
                            >
                                {/* BROWN BULLET */}
                                <span
                                    className="mt-2.5 w-3 h-3 rounded-full"
                                    style={{ backgroundColor: "#8B5E3C" }}
                                ></span>

                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* GRID — 4 items */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-10">
                        {gridItems.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center">

                                <div className="mb-3">
                                    {item.icon}
                                </div>

                                <h3
                                    className="text-xl font-semibold"
                                  
                                >
                                    {item.title}
                                </h3>

                            </div>
                        ))}
                    </div>

                </div>

                {/* RIGHT — IMAGE */}
                <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/why.jpg"
                        alt="Why Choose Us - Wooden Houses Kenya"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

            </div>
        </section>
    )
}
