"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT — IMAGE */}
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/about.jpg"
                        alt="About Wooden Houses Kenya"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* RIGHT — TEXT CONTENT */}
                <div className="flex flex-col">

                    <h2
                        className="text-4xl font-bold mb-6"
                        style={{ color: "#8B5E3C" }}
                    >
                        About Us
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                        Wooden Houses Kenya has since 2016 grown and developed into one of the
                        largest provider of specialized wood products within Kenya and boasts
                        of extensive experience in supplying substantial buildings such as
                        residential houses, offices, recreational rooms and classrooms, and
                        has participated in numerous large-scale engineering projects
                        throughout Kenya.
                    </p>

                    {/* STATS */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mb-10">

                        {/* Happy Clients */}
                        <div className="flex items-center gap-4">
                            <Users size={42} style={{ color: "#8B5E3C" }} />

                            <div className="flex flex-col">
                                <span
                                    className="text-4xl font-extrabold"
                                    style={{ color: "#8B5E3C" }}
                                >
                                    56
                                </span>
                                <p className="text-gray-700 text-lg font-medium">
                                    Happy Clients
                                </p>
                            </div>
                        </div>

                        {/* Projects Done */}
                        <div className="flex items-center gap-4">
                            <CheckCircle size={42} style={{ color: "#8B5E3C" }} />

                            <div className="flex flex-col">
                                <span
                                    className="text-4xl font-extrabold"
                                    style={{ color: "#8B5E3C" }}
                                >
                                    37
                                </span>
                                <p className="text-gray-700 text-lg font-medium">
                                    Projects Done
                                </p>
                            </div>
                        </div>

                    </div>

                    <Button
                        asChild
                        className="inline-flex items-center justify-center w-auto self-start px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-all duration-300"
                        style={{
                            background: "#8B5E3C",
                            color: "white",
                        }}
                    >
                        <Link href="/about">Explore More</Link>
                    </Button>



                </div>

            </div>
        </section>
    )
}
