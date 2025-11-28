"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
    Menu,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    X,
} from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { DialogTitle } from "@radix-ui/react-dialog"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const isActive = (path: string) => pathname === path

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white">

            {/* TOP BAR */}
            <div className="w-full bg-brand-brownDark text-brand-white text-sm py-2.5 px-6 flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <Phone size={16} style={{ color: "#C49A6C" }} />
                        <span className="font-medium group-hover:text-brand-brownLight transition-colors duration-200">
                            +254 789 104 438
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-2 group cursor-pointer">
                        <Mail size={16} style={{ color: "#C49A6C" }} />
                        <span className="font-medium group-hover:text-brand-brownLight transition-colors duration-200">
                            info@woodenhouses.co.ke
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center gap-2 group cursor-pointer">
                        <MapPin size={16} style={{ color: "#C49A6C" }} />
                        <span className="font-medium group-hover:text-brand-brownLight transition-colors duration-200">
                            Naivasha, Kenya
                        </span>
                    </div>
                </div>

                {/* Right Social Icons — FORCE BROWN */}
                <div className="flex items-center gap-3">
                    <Link href="#" className="hover:scale-110 transition-all">
                        <Facebook size={18} style={{ color: "#8B5E3C" }} />
                    </Link>
                    <Link href="#" className="hover:scale-110 transition-all">
                        <Instagram size={18} style={{ color: "#8B5E3C" }} />
                    </Link>
                    <Link href="#" className="hover:scale-110 transition-all">
                        <Twitter size={18} style={{ color: "#8B5E3C" }} />
                    </Link>
                    <Link href="#" className="hover:scale-110 transition-all">
                        <Youtube size={18} style={{ color: "#8B5E3C" }} />
                    </Link>
                </div>

            </div>

            {/* MAIN NAV */}
            <div className={`w-full bg-white transition-all duration-300 ${scrolled ? "shadow-lg border-b border-gray-200" : "shadow-md"}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/woodenhouse.png"
                            alt="WoodenHouses Kenya Logo"
                            width={180}
                            height={60}
                            className="h-12 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10 text-gray-700 font-semibold">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/about", label: "About" },
                            { href: "/services", label: "Services" },
                            { href: "/projects", label: "Projects" },
                            { href: "/gallery", label: "Gallery" },
                            { href: "/contact", label: "Contact Us" },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                    color: isActive(item.href)
                                        ? "#8B5E3C"
                                        : "inherit",
                                }}
                                className={`hover:text-brand-brown relative pb-1`}
                            >
                                {item.label}
                                {isActive(item.href) && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-brown" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE MENU */}
                    <Sheet>
                        <SheetTrigger className="md:hidden p-2">
                            <Menu size={28} style={{ color: "#8B5E3C" }} />
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="bg-white p-0 w-[300px] shadow-2xl border-l-4 border-brand-brown"
                        >
                            <VisuallyHidden>
                                <DialogTitle>Navigation Menu</DialogTitle>
                            </VisuallyHidden>

                            {/* Mobile Menu Header */}
                            <div className="bg-linear-to-r from-brand-brownDark to-brand-brown p-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <Menu size={20} style={{ color: "white" }} />
                                    </div>
                                    <span className="text-white font-bold text-lg">Menu</span>
                                </div>
                                <SheetClose className="text-white p-2">
                                    <X size={24} style={{ color: "white" }} />
                                </SheetClose>
                            </div>

                            {/* MOBILE LINKS — FORCE ACTIVE WHITE TEXT */}
                            <div className="p-6 flex flex-col gap-2">
                                {[
                                    { href: "/", label: "Home" },
                                    { href: "/about", label: "About" },
                                    { href: "/services", label: "Services" },
                                    { href: "/projects", label: "Projects" },
                                    { href: "/gallery", label: "Gallery" },
                                    { href: "/contact", label: "Contact Us" },
                                ].map((item) => (
                                    <SheetClose asChild key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`py-3.5 px-5 rounded-xl flex items-center gap-3 transition-all`}
                                            style={{
                                                background: isActive(item.href)
                                                    ? "#8B5E3C"
                                                    : "transparent",
                                                color: isActive(item.href)
                                                    ? "white"
                                                    : "#555",
                                            }}
                                        >
                                            <span>{item.label}</span>
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>

                        </SheetContent>
                    </Sheet>

                </div>
            </div>

        </nav>
    )
}
