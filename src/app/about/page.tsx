"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white w-full">

            {/* PAGE HEADER */}
            <div className="relative w-full py-12 border-b border-gray-200 overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <Image
                    src="/about/about.jpg"   // ensure this exists inside /public
                    alt="About Background"
                    fill
                    className="object-cover object-center"
                    priority
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto px-6">

                    {/* TITLE */}
                    <h1
                        className="text-4xl font-bold mb-4"
                        style={{ color: "#C49A6C" }}
                    >
                        About Us
                    </h1>

                    {/* BREADCRUMB */}
                    <Breadcrumb>
                        <BreadcrumbList className="text-white/90">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="hover:text-[#C49A6C] transition">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator className="text-white/90" />

                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href="/about"
                                    className="text-[#C49A6C] font-medium"
                                >
                                    About Us
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                </div>
            </div>

            {/* PAGE CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-12">
                    Welcome to Wooden Houses Kenya. We specialize in crafting sustainable,
                    beautiful, and long-lasting wooden structures tailored for East African
                    climates.
                    <br /><br />
                    Below, we will showcase our full story, mission, vision, values, and the
                    craftsmanship that sets us apart.
                </p>

                {/* PLACEHOLDER FOR DYNAMIC CONTENT */}
                <div className="border border-dashed border-gray-300 rounded-xl p-10 text-center text-gray-500">
                    <p>Dynamic About Page Content Will Go Here</p>
                </div>
            </div>

        </div>
    )
}
