"use client"
import { Paintbrush, PackageCheck, MessageSquare, Headset, ArrowRight } from "lucide-react"

export default function Steps() {
    const items = [
        {
            number: "01",
            title: "Creative Designers",
            icon: <Paintbrush size={32} style={{ color: "#8B5E3C" }} />,
        },
        {
            number: "02",
            title: "Quality Products",
            icon: <PackageCheck size={32} style={{ color: "#8B5E3C" }} />,
        },
        {
            number: "03",
            title: "Free Consultation",
            icon: <MessageSquare size={32} style={{ color: "#8B5E3C" }} />,
        },
        {
            number: "04",
            title: "Customer Support",
            icon: <Headset size={32} style={{ color: "#8B5E3C" }} />,
        },
    ]

    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* GRID ON SMALL SCREENS, FLEX ON LARGE */}
                <div className="grid grid-cols-2 gap-10 lg:flex lg:flex-row lg:items-center lg:justify-between">

                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-6 justify-center">

                            {/* Icon + Text */}
                            <div className="flex flex-col items-center text-center">
                                {item.icon}

                                <span
                                    className="font-extrabold text-3xl mt-3"
                                    style={{ color: "#8B5E3C" }}
                                >
                                    {item.number}
                                </span>

                                <h3
                                    className="text-xl font-semibold mt-1"
                                >
                                    {item.title}
                                </h3>
                            </div>

                            {/* Arrow ONLY on desktop & NOT after last item */}
                            {index !== items.length - 1 && (
                                <ArrowRight
                                    size={36}
                                    className="hidden lg:block"
                                    style={{ color: "#8B5E3C" }}
                                />
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
