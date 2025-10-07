"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface ShowcaseProjectProps {
    image: string
    image2?: string  // Optional second image
    title: string
    button: string
    link: string
    paragraphs: string[]
}

export default function ShowcaseProject({ image, image2, title, button, link, paragraphs }: ShowcaseProjectProps) {
    const containerRef = useRef<HTMLDivElement>(null)
  
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Different parallax speeds for each image
    const image1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
    const image2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"])
    
    // Opacity changes as you scroll through the section
    const containerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])

    return (
        <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-center items-center py-24 px-8 overflow-hidden"
        >

            {/* Background Image - Primary image */}
            <motion.div 
            className="absolute inset-0 z-0"
            style={{
            opacity: containerOpacity,
            y: image1Y,
            }}>
                <Image
                src={image}
                alt={`${title} - Primary`}
                fill
                className="object-cover"
                priority
                />
            </motion.div>

            {/* Second Image - Overlaps with the first one */}
            {image2 && (
                <motion.div 
                className="absolute z-[1] pointer-events-none"
                style={{ 
                    opacity: containerOpacity,
                    y: image2Y,
                    // Position in bottom-right
                    right: "-10%",
                    bottom: "-5%",
                    width: "60%",
                    height: "50%"
                }}>
                    <Image
                    src={image2}
                    alt={`${title} - Secondary`}
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    priority
                    />
                </motion.div>
            )}

            {/* Content layer takes priority */}
            <div className="relative z-10 max-w-4xl w-full">
                {/* Title and link */}
                <motion.h2
                className="text-center mb-16"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}>
                    {/* Title */}
                    <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
                        <span className="bg-gradient-to-b from-white to-green-600 bg-clip-text text-transparent">
                        {title}
                        </span>
                    </div>
                    
                    {/* Link */}
                    <a rel="noopener noreferrer"
                    className="
                    inline-block mt-6 px-6 py-3 
                    bg-gradient-to-b from-green-600 to-blue-600 
                    text-white font-semibold text-xl 
                    rounded-xl shadow-lg 
                    hover:from-green-500 hover:to-blue-500 
                    hover:scale-105 hover:shadow-2xl 
                    transition-all duration-300 ease-out"
                    href={link}>
                        {button}
                    </a>
                </motion.h2>
            
                <div className="space-y-8">
                    {paragraphs.map((p, i) => (
                    <motion.div
                    key={i}
                    className="relative group"
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ 
                        duration: 0.6, 
                        delay: i * 0.2,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true, margin: "-50px" }}>
                        
                    {/* Gives shadows to each paragraph block */}
                    {/* It isn't a straight shadow, it's meant to look kinda like there's a flashlight shining from the right */}
                    {/* AKA the shadow on the left is longer, while the shadow on the right is shorter. */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/80 to-black/60 blur-2xl transform scale-110" />
                    
                    {/* Main content container */}
                    <div className="relative bg-black/85 backdrop-blur-xl rounded-2xl p-8 md:p-10 
                                shadow-2xl border border-white/10 
                                hover:border-blue-500/30 hover:bg-black/90
                                transition-all duration-500 transform hover:scale-[1.02]">
                                    
                        {/* Decorative gradient thingy on hover */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                                    from-transparent via-blue-500 to-transparent opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-500" />
                    
                        <p className="text-lg md:text-xl leading-relaxed text-gray-100 font-light">
                            {p}
                        </p>
                    </div>
                </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}