"use client"

import Image, { type StaticImageData } from "next/image"
import { motion } from "framer-motion"

import logo1 from "@/public/image/Brand-logo1.png"
import logo2 from "@/public/image/Brand-logo2.png"
import logo3 from "@/public/image/Brand-logo3.png"
import logo4 from "@/public/image/Brand-logo4.png"
import logo5 from "@/public/image/Brand-logo5.png"
import logo6 from "@/public/image/Brand-logo6.png"

// Base logos
const baseLogos = [logo1, logo2, logo3, logo4, logo5, logo6]

// Function to create a shuffled array with no consecutive duplicates
const createNonRepeatingShuffle = (logos: StaticImageData[], count: number) => {
  const result: StaticImageData[] = []

  while (result.length < count) {
    const shuffled = [...logos].sort(() => Math.random() - 0.5)

    // Only add if it doesn't start with the last logo of the result (no duplicates together)
    if (result.length === 0 || result[result.length - 1] !== shuffled[0]) {
      result.push(...shuffled)
    }
  }

  return result.slice(0, count)
}

// Generate 3 full sets of non-repeating shuffled logos
const allLogos = createNonRepeatingShuffle(baseLogos, baseLogos.length * 4)

const BrandLogos = () => {
  return (
    <div className="bg-[#FAFAFA] py-8 sm:py-12 md:py-16 overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="relative w-full">
          <motion.div
            className="flex w-max items-center gap-8 sm:gap-12 md:gap-16"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="w-[130px] h-10 md:w-[150px] md:h-10 lg:w-[170px] lg:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Brand logo ${index + 1}`}
                  width={175}
                  height={45}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BrandLogos

