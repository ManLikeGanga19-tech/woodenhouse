"use client"

import { useState } from "react"
import Image from "next/image"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    MapPin,
    Calendar,
    Home,
    Ruler,
    CheckCircle2,
    X,
    ChevronLeft,
    ChevronRight,
    Maximize2
} from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
    // Filter categories
    const categories = [
        "All Projects",
        "Wooden Houses",
        "Commercial Buildings",
        "Furniture & Carpentry",
        "Outdoor Structures",
    ]

    // Project data with detailed info
    const projects = [
        {
            id: 1,
            title: "Off-the-Grid Cottage in Nanyuki",
            category: "Wooden Houses",
            location: "Nanyuki, Kenya",
            year: "2024",
            size: "120 sqm",
            duration: "3 months",
            description: "A sustainable off-grid wooden cottage featuring solar power, rainwater harvesting, and natural ventilation systems. Perfect retreat in the highlands.",
            features: ["Solar Power", "Rainwater Harvesting", "Natural Ventilation", "Eco-friendly Materials"],
            mainImage: "/projects/off-nanyuki.jpg",
            gallery: ["/projects/off-nanyuki.jpg", "/projects/off-nanyuki.jpg", "/projects/off-nanyuki.jpg"]
        },
        {
            id: 2,
            title: "Holiday Home, Naivasha",
            category: "Wooden Houses",
            location: "Naivasha, Kenya",
            year: "2024",
            size: "180 sqm",
            duration: "4 months",
            description: "Luxurious lakeside holiday home with panoramic views, spacious deck, and modern amenities. Designed for comfortable family getaways.",
            features: ["Lakeside View", "Spacious Deck", "Modern Kitchen", "3 Bedrooms"],
            mainImage: "/projects/holiday.jpg",
            gallery: ["/projects/holiday.jpg", "/projects/holiday.jpg", "/projects/holiday.jpg"]
        },
        {
            id: 3,
            title: "Staff Meeting Room, Taita",
            category: "Commercial Buildings",
            location: "Taita Taveta, Kenya",
            year: "2023",
            size: "80 sqm",
            duration: "2 months",
            description: "Professional meeting facility with conference seating for 50 people. Climate-controlled and acoustically optimized.",
            features: ["Conference Setup", "Air Conditioning", "Acoustic Panels", "Audio-Visual Ready"],
            mainImage: "/projects/staff.jpg",
            gallery: ["/projects/staff.jpg", "/projects/staff.jpg", "/projects/staff.jpg"]
        },
        {
            id: 4,
            title: "Custom Kitchen Fittings",
            category: "Furniture & Carpentry",
            location: "Nairobi, Kenya",
            year: "2024",
            size: "25 sqm",
            duration: "3 weeks",
            description: "Bespoke kitchen cabinetry with custom island, pull-out storage, and premium wood finish. Maximized storage and functionality.",
            features: ["Custom Island", "Soft-Close Drawers", "Premium Finish", "Maximized Storage"],
            mainImage: "/projects/kitchen.jpg",
            gallery: ["/projects/kitchen.jpg", "/projects/kitchen.jpg", "/projects/kitchen.jpg"]
        },
        {
            id: 5,
            title: "Foldable Garden Chairs",
            category: "Furniture & Carpentry",
            location: "Nairobi, Kenya",
            year: "2024",
            size: "N/A",
            duration: "1 week",
            description: "Handcrafted foldable chairs for outdoor use. Weather-resistant finish and ergonomic design for maximum comfort.",
            features: ["Foldable Design", "Weather Resistant", "Ergonomic", "Lightweight"],
            mainImage: "/projects/fold-chair.jpg",
            gallery: ["/projects/fold-chair.jpg", "/projects/fold-chair.jpg", "/projects/fold-chair.jpg"]
        },
        {
            id: 6,
            title: "Garden Benches Collection",
            category: "Outdoor Structures",
            location: "Karen, Nairobi",
            year: "2023",
            size: "N/A",
            duration: "2 weeks",
            description: "Elegant outdoor benches crafted from treated timber. Perfect for gardens, parks, and public spaces.",
            features: ["Treated Timber", "UV Protected", "Comfortable Seating", "Durable Construction"],
            mainImage: "/projects/garden.jpg",
            gallery: ["/projects/garden.jpg", "/projects/garden.jpg", "/projects/garden.jpg"]
        },
    ]

    const [activeCategory, setActiveCategory] = useState("All Projects")
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Filter projects
    const filteredProjects =
        activeCategory === "All Projects"
            ? projects
            : projects.filter((p) => p.category === activeCategory)

    // Lightbox navigation
    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
            )
        }
    }

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
            )
        }
    }

    const openLightbox = (project: typeof projects[0], imageIndex: number = 0) => {
        setSelectedProject(project)
        setCurrentImageIndex(imageIndex)
    }

    const closeLightbox = () => {
        setSelectedProject(null)
        setCurrentImageIndex(0)
    }

    return (
        <div className="min-h-screen bg-white w-full max-w-full overflow-hidden">

            {/* ======================== PAGE HEADER ======================== */}
            <div className="relative w-full py-8 sm:py-12 border-b border-gray-200 overflow-hidden">
                <Image
                    src="/projects/projects-header.jpg"
                    alt="Projects Background"
                    fill
                    className="object-cover object-center"
                    priority
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <h1
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                        style={{ color: "#C49A6C" }}
                        data-aos="fade-down"
                    >
                        Our Projects & Gallery
                    </h1>

                    <Breadcrumb>
                        <BreadcrumbList className="text-white/90 text-sm sm:text-base">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="hover:text-[#C49A6C] transition">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator className="text-white/90" />

                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href="/projects"
                                    className="text-[#C49A6C] font-medium"
                                >
                                    Projects
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* ======================== PAGE CONTENT ======================== */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">

                {/* INTRO */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Explore our portfolio of completed projects across Kenya. From residential wooden houses
                        to commercial buildings and custom carpentry, each project showcases our commitment to
                        quality, sustainability, and innovative design.
                    </p>
                </div>

                {/* STATS SECTION */}
                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {[
                        { number: "37+", label: "Completed Projects" },
                        { number: "56+", label: "Happy Clients" },
                        { number: "8+", label: "Years Experience" },
                        { number: "100%", label: "Satisfaction Rate" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 sm:p-8 bg-gray-50 rounded-xl shadow-md border border-gray-100"
                            data-aos="zoom-in"
                            data-aos-delay={300 + index * 100}
                        >
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ color: "#8B5E3C" }}>
                                {stat.number}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* FILTER BUTTONS */}
                <div
                    className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center"
                    data-aos="fade-up"
                >
                    {categories.map((cat, index) => (
                        <Button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            variant="outline"
                            className="px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold border-2 transition-all hover:scale-105"
                            style={{
                                background: activeCategory === cat ? "#8B5E3C" : "white",
                                color: activeCategory === cat ? "white" : "#8B5E3C",
                                borderColor: "#8B5E3C",
                            }}
                            data-aos="zoom-in"
                            data-aos-delay={index * 50}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* PROJECTS GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            onClick={() => openLightbox(project)}
                        >
                            {/* Image */}
                            <div className="relative w-full h-[220px] sm:h-60 md:h-[260px] overflow-hidden">
                                <Image
                                    src={project.mainImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                    <Maximize2
                                        size={40}
                                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span
                                        className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full"
                                        style={{ background: "#FFF5E6", color: "#8B5E3C" }}
                                    >
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-[#8B5E3C] transition-colors">
                                    {project.title}
                                </h3>

                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} style={{ color: "#8B5E3C" }} />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} style={{ color: "#8B5E3C" }} />
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA SECTION */}
                <div data-aos="fade-up" className="text-center py-16 sm:py-20">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: "#8B5E3C" }}>
                        Have a Project in Mind?
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10">
                        Let's discuss your vision and create something extraordinary together.
                        Our team is ready to bring your wooden construction dreams to life.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="px-8 py-6 text-base sm:text-lg font-semibold shadow-lg hover:scale-105 transition-all"
                            style={{ background: "#8B5E3C", color: "white" }}
                        >
                            <Link href="/contact">Start Your Project</Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="px-8 py-6 text-base sm:text-lg font-semibold border-2 hover:scale-105 transition-all"
                            style={{ borderColor: "#8B5E3C", color: "#8B5E3C" }}
                        >
                            <Link href="/services">View Services</Link>
                        </Button>
                    </div>
                </div>

            </div>

            {/* ======================== LIGHTBOX MODAL ======================== */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6"
                    onClick={closeLightbox}
                >
                    <div
                        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all"
                        >
                            <X size={24} style={{ color: "#8B5E3C" }} />
                        </button>

                        {/* Image Section */}
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100">
                            <Image
                                src={selectedProject.gallery[currentImageIndex]}
                                alt={selectedProject.title}
                                fill
                                className="object-cover"
                            />

                            {/* Navigation Arrows */}
                            {selectedProject.gallery.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all"
                                    >
                                        <ChevronLeft size={24} style={{ color: "#8B5E3C" }} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all"
                                    >
                                        <ChevronRight size={24} style={{ color: "#8B5E3C" }} />
                                    </button>
                                </>
                            )}

                            {/* Image Counter */}
                            <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/70 text-white rounded-full text-sm">
                                {currentImageIndex + 1} / {selectedProject.gallery.length}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 sm:p-8 md:p-10">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span
                                    className="text-sm font-semibold px-4 py-1.5 rounded-full"
                                    style={{ background: "#FFF5E6", color: "#8B5E3C" }}
                                >
                                    {selectedProject.category}
                                </span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: "#8B5E3C" }}>
                                {selectedProject.title}
                            </h2>

                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                                {selectedProject.description}
                            </p>

                            {/* Project Details Grid */}
                            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin size={20} style={{ color: "#8B5E3C" }} />
                                        <span className="text-sm font-semibold text-gray-600">Location</span>
                                    </div>
                                    <p className="text-gray-800 font-medium">{selectedProject.location}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Calendar size={20} style={{ color: "#8B5E3C" }} />
                                        <span className="text-sm font-semibold text-gray-600">Year</span>
                                    </div>
                                    <p className="text-gray-800 font-medium">{selectedProject.year}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Ruler size={20} style={{ color: "#8B5E3C" }} />
                                        <span className="text-sm font-semibold text-gray-600">Size</span>
                                    </div>
                                    <p className="text-gray-800 font-medium">{selectedProject.size}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Home size={20} style={{ color: "#8B5E3C" }} />
                                        <span className="text-sm font-semibold text-gray-600">Duration</span>
                                    </div>
                                    <p className="text-gray-800 font-medium">{selectedProject.duration}</p>
                                </div>
                            </div>

                            {/* Features */}
                            <div>
                                <h3 className="text-xl font-bold mb-4" style={{ color: "#8B5E3C" }}>
                                    Key Features
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {selectedProject.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <CheckCircle2 size={20} style={{ color: "#8B5E3C" }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Gallery Thumbnails */}
                            {selectedProject.gallery.length > 1 && (
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h3 className="text-lg font-bold mb-4" style={{ color: "#8B5E3C" }}>
                                        Gallery
                                    </h3>
                                    <div className="flex gap-3 overflow-x-auto pb-2">
                                        {selectedProject.gallery.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentImageIndex(i)}
                                                className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${i === currentImageIndex
                                                        ? 'border-[#8B5E3C] scale-105'
                                                        : 'border-gray-300 hover:border-[#8B5E3C]'
                                                    }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${selectedProject.title} ${i + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    className="flex-1 py-6 text-lg font-semibold shadow-lg hover:scale-105 transition-all"
                                    style={{ background: "#8B5E3C", color: "white" }}
                                >
                                    <Link href="/contact">Request Similar Project</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="flex-1 py-6 text-lg font-semibold border-2 hover:scale-105 transition-all"
                                    style={{ borderColor: "#8B5E3C", color: "#8B5E3C" }}
                                >
                                    <Link href="/services">View Services</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}