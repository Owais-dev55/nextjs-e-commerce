"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./Navbar.css";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ProductListpage", label: "Product" },
  { href: "/Pricing", label: "Pricing" },
  { href: "/Contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-2xl text-[#252B42]">
              VogueAura
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/LoginForm"
              className="font-bold text-sm text-[#23A6F0]"
            >
              Login
            </Link>
            <Link
              href="/Pricing"
              className="bg-[#23A6F0] text-white font-bold text-sm py-2 px-4 rounded-md hover:bg-[#1E8AC0] transition-colors duration-300"
            >
              Become a member
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-[#737373] p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <i className="fa-solid fa-bars text-xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-center ${
                  pathname === link.href
                    ? "bg-gray-100 text-[#23A6F0] font-semibold"
                    : "text-[#737373] hover:bg-gray-50"
                }`}
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/LoginForm"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#23A6F0] text-center"
              onClick={toggleMobileMenu}
            >
              Login
            </Link>
            <Link
              href="/Pricing"
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#23A6F0] text-white hover:bg-[#1E8AC0] transition-colors duration-300 text-center shadow-md hover:shadow-lg"
              onClick={toggleMobileMenu}
            >
              Become a member
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
