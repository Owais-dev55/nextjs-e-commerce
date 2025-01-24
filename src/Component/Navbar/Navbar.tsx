"use client";

import { CartContext } from "@/Utilities/Context";
import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { SearchDropdown } from "../FrequentComponent/SearchDropdown";

const Navbar = () => {
  const { count } = useContext(CartContext);
  const pathname = usePathname(); 

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/ProductListpage", label: "Shop" },
    { href: "/About", label: "About" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <nav>
      <div className="bg-white text-[Montserrat]">
        {/* Top Navbar */}
        <div className="hidden lg:flex justify-between items-center bg-[#252B42] text-[#FFFFFF] font-bold text-sm px-6 py-4">
          <div className="flex items-center space-x-5">
            <h6>
              <i className="fas fa-phone"></i> (225) 555-0118
            </h6>
            <h6>
              <i className="fas fa-envelope"></i> michelle.rivera@example.com
            </h6>
          </div>
          <div className="text-center">
            <h6 className="leading-6 tracking-[0.2px]">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>
          <div className="flex items-center space-x-4">
            <h6>Follow Us:</h6>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white text-[Montserrat]">
        {/* Mobile Navbar */}
        <div className="flex justify-between items-center px-5 py-4 shadow-md md:hidden">
          <div className="text-2xl font-bold">
            <Link href="/">VogueAura</Link>
          </div>
          <button className="text-xl text-gray-800">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="flex flex-col items-center md:hidden bg-white py-6 space-y-4">
          <ul className="text-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-lg font-medium ${
                    pathname === link.href
                      ? "text-[#23A6F0] font-semibold border-b-2 border-[#23A6F0]" 
                      : "text-gray-800 hover:text-[#23A6F0]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <SearchDropdown />
          <div className="flex flex-col text-center text-[#23A6F0]">
            <Link href="/LoginForm" className="hover:text-[#1A7BB9] text-sm">
              <i className="fas fa-user"></i> Login / Register
            </Link>
          </div>
          <div className="flex justify-center space-x-6 text-2xl text-gray-800">
            <Link href="#">
              <i className="fas fa-search text-[#23A6F0]"></i>
            </Link>
            <Link
              href="/Cart"
              className="relative hover:text-[#23A6F0]"
            >
              <i className="fas fa-shopping-cart relative">
                <span className="absolute top-[-10px] right-[-10px] bg-[#23A6F0] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              </i>
            </Link>
            <Link href="#">
              <i className="fas fa-heart text-[#23A6F0]"></i>
            </Link>
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex justify-between items-center px-6 py-4 shadow-md bg-white">
          <div className="text-2xl font-bold">
            <Link href="/">VogueAura</Link>
          </div>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium ${
                    pathname === link.href
                      ? "text-[#23A6F0] font-semibold border-b-2 border-[#23A6F0]" 
                      : "text-gray-800 hover:text-[#23A6F0]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <SearchDropdown />
          <div className="flex items-center space-x-4">
            <Link href="/LoginForm" className="text-[#23A6F0]">
              Login / Register
            </Link>
            <Link href="#" className="text-gray-800">
              <i className="fas fa-heart "></i>
            </Link>
            <Link href="/Cart" className="relative">
              <i className="fas fa-shopping-cart relative">
                <span className="absolute top-[-10px] right-[-10px] bg-[#23A6F0] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              </i>
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
