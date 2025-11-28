"use client"

import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    ArrowRight,
    ArrowUp,
} from "lucide-react"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className="relative w-full text-white overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/footer.jpg"
                    alt="Footer Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* OVERLAY FOR READABILITY */}
            <div className="relative z-10 bg-black/40 w-full py-24">

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">

                    {/* COLUMN 1 — ADDRESS */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6" style={{ color: "#C49A6C" }}>
                            Address
                        </h3>

                        <div className="flex items-start gap-3 mb-4">
                            <MapPin size={22} style={{ color: "#C49A6C" }} />
                            <p className="text-white/90">Naivasha, Kenya</p>
                        </div>

                        <div className="flex items-start gap-3 mb-4">
                            <Phone size={22} style={{ color: "#C49A6C" }} />
                            <p className="text-white/90">+254 716 111 187 / +254 789 104 438</p>
                        </div>

                        <div className="flex items-start gap-3 mb-4">
                            <Mail size={22} style={{ color: "#C49A6C" }} />
                            <p className="text-white/90">info@woodenhouseskenya.com</p>
                        </div>

                        {/* SOCIAL ICONS */}
                        <div className="flex items-center gap-4 mt-6">
                            <Link href="#" className="hover:scale-110 transition-all">
                                <Facebook size={24} style={{ color: "#C49A6C" }} />
                            </Link>
                            <Link href="#" className="hover:scale-110 transition-all">
                                <Instagram size={24} style={{ color: "#C49A6C" }} />
                            </Link>
                            <Link href="#" className="hover:scale-110 transition-all">
                                <Twitter size={24} style={{ color: "#C49A6C" }} />
                            </Link>
                            <Link href="#" className="hover:scale-110 transition-all">
                                <Youtube size={24} style={{ color: "#C49A6C" }} />
                            </Link>
                        </div>
                    </div>

                    {/* COLUMN 2 — QUICK LINKS */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6" style={{ color: "#C49A6C" }}>
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-white/90 text-lg">
                            <li>
                                <Link href="/" className="group flex items-center gap-2 hover:text-[#C49A6C] transition">
                                    <span>Home</span>
                                    <ArrowRight
                                        size={18}
                                        className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                                        style={{ color: "#C49A6C" }}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="group flex items-center gap-2 hover:text-[#C49A6C] transition">
                                    <span>About Us</span>
                                    <ArrowRight
                                        size={18}
                                        className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                                        style={{ color: "#C49A6C" }}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="group flex items-center gap-2 hover:text-[#C49A6C] transition">
                                    <span>Services</span>
                                    <ArrowRight
                                        size={18}
                                        className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                                        style={{ color: "#C49A6C" }}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="group flex items-center gap-2 hover:text-[#C49A6C] transition">
                                    <span>Projects</span>
                                    <ArrowRight
                                        size={18}
                                        className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                                        style={{ color: "#C49A6C" }}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="group flex items-center gap-2 hover:text-[#C49A6C] transition">
                                    <span>Gallery</span>
                                    <ArrowRight
                                        size={18}
                                        className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                                        style={{ color: "#C49A6C" }}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="group flex items-center gap-2 hover:text-[#C49A6C] transition">
                                    <span>Contact Us</span>
                                    <ArrowRight
                                        size={18}
                                        className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                                        style={{ color: "#C49A6C" }}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMN 3 — NEWSLETTER */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6" style={{ color: "#C49A6C" }}>
                            Newsletter
                        </h3>

                        <p className="text-white/90 mb-5">
                            Subscribe for our newsletters
                        </p>

                        <Input
                            type="email"
                            placeholder="Your email"
                            className="mb-4 bg-white/90 text-black placeholder-black/60"
                        />

                        <Button
                            className="w-full font-semibold"
                            style={{
                                background: "#8B5E3C",
                                color: "white",
                            }}
                        >
                            Subscribe
                        </Button>
                    </div>

                </div>

                {/* SEPARATOR */}
                <div className="w-full mt-16 border-t border-white/20"></div>

                {/* COPYRIGHT & SCROLL TO TOP */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-6 px-6 max-w-7xl mx-auto gap-4">
                    <p className="text-center sm:text-left text-white/80 text-sm">
                        © 2025 Wooden Houses Kenya, All Right Reserved.
                    </p>

                    {/* SCROLL TO TOP BUTTON */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 bg-[#8B5E3C] hover:bg-[#C49A6C] text-white px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                        <span className="font-semibold text-sm">Back to Top</span>
                        <ArrowUp
                            size={18}
                            className="transform group-hover:-translate-y-1 transition-transform duration-300"
                        />
                    </button>
                </div>
            </div>

        </footer>
    )
}