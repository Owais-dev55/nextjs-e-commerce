"use client"

import { CartContext } from "@/Utilities/Context"
import Link from "next/link"
import { useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { SearchDropdown } from "../FrequentComponent/SearchDropdown"
import Image from "next/image"
import { auth } from "@/firebase/config"
import { onAuthStateChanged, signOut } from "firebase/auth"
import avator from "@/public/image/avator image.jpg"
import type { User } from "firebase/auth"

const Navbar = () => {
  const { count } = useContext(CartContext)
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/ProductListpage", label: "Shop" },
    { href: "/About", label: "About" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
  ]

  // Check if the device is a tablet (iPad Mini or iPad Air)
  useEffect(() => {
    const checkTablet = () => {
      // iPad Mini and iPad Air typically have widths between 768px and 1024px
      const width = window.innerWidth
      setIsTablet(width >= 768 && width <= 1024)
    }

    checkTablet()
    window.addEventListener("resize", checkTablet)
    return () => window.removeEventListener("resize", checkTablet)
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Error signing out: ", error)
    }
  }

  if (loading) return null

  return (
    <nav className="w-full bg-[#111827] bg-opacity-95 backdrop-blur-md shadow-lg border-b border-[#2C2F36] text-white font-[Inter] z-50">
      {/* Main navbar container */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-xl sm:text-2xl font-semibold tracking-wide text-[#E5E7EB] uppercase">VogueAura</div>
        </Link>

        {/* Search bar - hidden on mobile, visible on desktop */}
        <div className={`${isTablet || isOpen ? "hidden" : "hidden xl:flex"} flex-grow justify-center max-w-md mx-4`}>
          <SearchDropdown />
        </div>

        {/* Navigation links - hidden on mobile and tablet, visible on desktop */}
        <ul className="hidden xl:flex space-x-8 text-[15px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-3 py-1 transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#E5E7EB] font-medium border-b border-[#E5E7EB]"
                    : "text-gray-400 hover:text-[#E5E7EB]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* User actions - hidden on mobile and tablet, visible on desktop */}
        <div className="hidden xl:flex items-center space-x-6">
          <Link href="/WishList" className="text-gray-400 hover:text-[#E5E7EB] transition-all">
            <i className="fas fa-heart text-lg"></i>
          </Link>

          <Link href="/Cart" className="relative text-gray-400 hover:text-[#E5E7EB] transition-all">
            <i className="fas fa-shopping-bag text-lg"></i>
            <span className="absolute -top-2 -right-2 bg-[#E5E7EB] text-black text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {count}
            </span>
          </Link>

          {user ? (
            <div className="flex items-center space-x-3">
              <Image
                src={user.photoURL || avator}
                alt="User Avatar"
                width={36}
                height={36}
                className="rounded-full border border-[#E5E7EB]"
              />
              <button onClick={handleSignOut} className="text-sm text-[#E5E7EB] hover:text-gray-300 transition-all">
                Sign out
              </button>
            </div>
          ) : (
            <Link href="/signin" className="text-[#E5E7EB] hover:text-gray-300 text-sm transition-all">
              Login
            </Link>
          )}
        </div>

        {/* Mobile/Tablet Menu Button - visible on mobile and tablet */}
        <button
          className="xl:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-[#111827] border-t border-[#2C2F36] shadow-lg p-4">
          {/* Search shown in dropdown for mobile and tablet */}
          <div className="w-full mb-4">
            <SearchDropdown />
          </div>

          {/* Navigation links in dropdown */}
          <ul className={`mt-4 space-y-2 ${isTablet ? "grid grid-cols-3 gap-2 space-y-0" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 px-3 text-center transition-all duration-300 ${
                    pathname === link.href
                      ? "text-[#E5E7EB] font-medium border-b border-[#E5E7EB]"
                      : "text-gray-400 hover:text-[#E5E7EB]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action buttons in dropdown */}
          <div className="flex justify-center space-x-6 mt-6">
            <Link href="/WishList" className="text-gray-400 hover:text-[#E5E7EB] transition-all">
              <i className="fas fa-heart text-lg"></i>
            </Link>

            <Link href="/Cart" className="relative text-gray-400 hover:text-[#E5E7EB] transition-all">
              <i className="fas fa-shopping-bag text-lg"></i>
              <span className="absolute -top-2 -right-2 bg-[#E5E7EB] text-black text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                {count}
              </span>
            </Link>
          </div>

          {/* User profile in dropdown */}
          {user ? (
            <div className="flex flex-row items-center justify-center mt-6">
              <Image
                src={user.photoURL || avator}
                alt="User Avatar"
                width={36}
                height={36}
                className="rounded-full border border-[#E5E7EB]"
              />
              <button
                onClick={handleSignOut}
                className="ml-3 text-sm text-[#E5E7EB] hover:text-gray-300 transition-all"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="mt-6 text-center">
              <Link href="/signin" className="text-[#E5E7EB] hover:text-gray-300 text-sm transition-all">
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar

