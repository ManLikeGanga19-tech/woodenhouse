"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Projects() {
    // FILTER CATEGORIES
    const categories = [
        "All",
        "Wooden Houses Construction",
        "General Carpentry",
    ]

    // PROJECT DATA
    const projects = [
        { title: "Off-the-grid cottage in Nanyuki", category: "Wooden Houses Construction", image: "/projects/off-nanyuki.jpg" },
        { title: "Kitchen Fittings", category: "General Carpentry", image: "/projects/kitchen.jpg" },
        { title: "Holiday Home, Naivasha", category: "Wooden Houses Construction", image: "/projects/holiday.jpg" },
        { title: "Foldable Chairs", category: "General Carpentry", image: "/projects/fold-chair.jpg" },
        { title: "Staff Meeting Room, Taita", category: "Wooden Houses Construction", image: "/projects/staff.jpg" },
        { title: "Garden Benches", category: "General Carpentry", image: "/projects/garden.jpg" },
    ]

    const [activeCategory, setActiveCategory] = useState("All")

    // FILTERED RESULTS
    const filtered =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory)

    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE */}
                <h2
                    className="text-4xl font-bold mb-10 text-left lg:text-center"
                    style={{ color: "#8B5E3C" }}
                >
                    Our Projects
                </h2>

                {/* FILTER BUTTONS — SHADCN BUTTON */}
                <div className="flex flex-wrap items-center gap-4 mb-12 justify-start lg:justify-center">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            variant="outline"
                            className="px-6 py-2  text-lg font-semibold border transition-all"
                            style={{
                                background: activeCategory === cat ? "#8B5E3C" : "white",
                                color: activeCategory === cat ? "white" : "#8B5E3C",
                                borderColor: "#8B5E3C",
                            }}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* PROJECT GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filtered.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
                        >
                            {/* IMAGE */}
                            <div className="relative w-full h-[230px]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-5">
                                <h4
                                    className="font-semibold text-sm mb-2"
                                    style={{ color: "#8B5E3C" }}
                                >
                                    {project.category}
                                </h4>

                                <h3 className="text-xl font-bold text-gray-800">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
