"use client"

import { useEffect, useState, useRef } from "react"
import SocialCards from "@/Component/SocialCards/SocialCards"

const VideoPage = () => {
  const details = [
    {
      title: "15K",
      description: "Happy Customers",
    },
    {
      title: "150K",
      description: "Monthly Visitors",
    },
    {
      title: "15",
      description: "Countries  Worldwide",
      width: "177px",
    },
    {
      title: "100+",
      description: "Top Partners",
    },
  ]

  const [counters, setCounters] = useState(details.map(() => 0))
  const statsRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const getNumericValue = (title: string) => {
    return Number.parseInt(title.replace(/[^0-9]/g, ""))
  }

  const getSuffix = (title: string) => {
    return title.replace(/[0-9]/g, "")
  }

  useEffect(() => {
    if (hasAnimated) return

    const startCounters = () => {
      const targetValues = details.map((detail) => getNumericValue(detail.title))

      const duration = 2000
      const steps = 50
      const stepTime = duration / steps

      let currentStep = 0

      const interval = setInterval(() => {
        currentStep++

        if (currentStep <= steps) {
          const progress = currentStep / steps
          setCounters(targetValues.map((target) => Math.floor(target * progress)))
        } else {
          setCounters(targetValues)
          clearInterval(interval)
        }
      }, stepTime)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounters()
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 lg:py-16">
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <div key={index} className="text-center flex flex-col items-center justify-center">
              <h1 className="font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight tracking-[0.2px] text-[#1A1A1A] mb-2">
                {counters[index]}
                {getSuffix(detail.title)}
              </h1>
              <h5
                className="font-bold text-sm sm:text-base leading-6 tracking-[0.1px] text-[#4A4A4A]"
                style={{ maxWidth: detail.width }}
              >
                {detail.description}
              </h5>
            </div>
          ))}
        </div>
      </div>

      {/* Second part - Enhanced for all devices */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-12 lg:py-16">
        <div className="flex flex-col items-center">
          <div className="text-center w-full max-w-[633px] mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <h2 className="font-bold tracking-[0.2px] text-3xl sm:text-4xl md:text-[36px] lg:text-[40px] leading-tight mb-3 sm:mb-4 text-[#1A1A1A]">
              Meet Our Team
            </h2>
            <p className="font-normal tracking-[0.2px] text-sm sm:text-base leading-relaxed text-[#4A4A4A] max-w-[90%] sm:max-w-[80%] md:max-w-[469px] mx-auto">
              Seamless sound and reliable power—no more low battery, no more tangled wires. Stay connected, stay
              unstoppable.
            </p>
          </div>

          {/* SocialCards wrapper with responsive padding */}
          <div className="w-full">
            <SocialCards />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPage
