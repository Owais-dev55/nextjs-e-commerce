"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Initialize the particle animation
    const canvas = document.getElementById("particle-canvas") as HTMLCanvasElement
    if (canvas) {
      initParticles(canvas)
    }
  }, [])

  // Particle animation function
  const initParticles = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      requestAnimationFrame(animateParticles)
    }

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

    createParticles()
    animateParticles()
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black ">
      {/* Particle background */}
      <canvas id="particle-canvas" className="absolute inset-0 z-0"></canvas>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/30 to-black/30 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
        {/* Animated badge */}
        <div
          className={`px-4 py-1 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <span className="text-white/80 text-sm font-medium">Premium Audio & Power Solutions</span>
        </div>

        {/* Main heading with animation */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{
            textShadow: "0 0 40px rgba(0, 30, 60, 0.8)",
            fontWeight: 800,
          }}
        >
          <span className="block">Immerse in</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Sound & Power</span>
        </h1>

        {/* Subheading with animation */}
        <p
          className={`text-xl md:text-2xl text-gray-300 text-center max-w-3xl mb-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Experience crystal-clear audio with our premium earbuds and AirPods, and never run out of power with our
          sleek, high-capacity power banks.
        </p>

        {/* Product hint with animation */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="px-4 py-2 bg-navy-800/50 backdrop-blur-sm rounded-full text-white/90 text-sm">
            Wireless Earbuds
          </span>
          <span className="px-4 py-2 bg-navy-800/50 backdrop-blur-sm rounded-full text-white/90 text-sm">
            Premium AirPods
          </span>
          <span className="px-4 py-2 bg-navy-800/50 backdrop-blur-sm rounded-full text-white/90 text-sm">
            Fast-Charging Power Banks
          </span>
        </div>

        {/* CTA buttons with animations */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Link href="/ProductListpage">
            <button
              className="px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-bold rounded-lg shadow-lg hover:shadow-navy-500/50 transform hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: "0 10px 25px -5px rgba(0, 30, 60, 0.5)" }}
            >
              Shop Collection
            </button>
          </Link>
          <Link href="terms-of-services">
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transform hover:-translate-y-1 transition-all duration-300">
              Watch Demo <i className="ml-2">▶</i>
            </button>
          </Link>
        </div>
        </div>

      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="rgba(0, 30, 60, 0.3)"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave"
          ></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0) translateZ(0) scaleY(1);
          }
          50% {
            transform: translateX(-25%) translateZ(0) scaleY(0.8);
          }
          100% {
            transform: translateX(-50%) translateZ(0) scaleY(1);
          }
        }
        .animate-wave {
          animation: wave 15s infinite linear;
        }
      `}</style>
    </div>
  )
}

