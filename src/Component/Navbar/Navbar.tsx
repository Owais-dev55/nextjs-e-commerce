"use client";
import { CartContext } from "@/Utilities/Context";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SearchDropdown } from "../FrequentComponent/SearchDropdown";
import Image from "next/image";
import { auth } from "@/firebase/config"; 
import { onAuthStateChanged, signOut } from "firebase/auth"; 
import avator from '@/public/image/avator image.jpg'

const Navbar = () => {
  const { count } = useContext(CartContext);
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true); 

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/ProductListpage", label: "Shop" },
    { href: "/About", label: "About" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null); 
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (loading) return null; 

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
          <div className="flex flex-col items-center space-y-2">
            {user ? (
              <div className="flex items-center space-x-2">
                <Image
                  src={user.photoURL || avator}
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm font-medium">{user.displayName}</span>
                <button
                  onClick={handleSignOut}
                  className="text-sm text-[#23A6F0] hover:text-[#1A7BB9]"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/signin"
                className="text-[#23A6F0] hover:text-[#1A7BB9] text-sm"
              >
                Login
              </Link>
            )}
          </div>
          <div className="flex justify-center space-x-6 text-2xl text-gray-800">
            <Link href="/Cart" className="relative hover:text-[#23A6F0]">
              <i className="fas fa-shopping-cart relative">
                <span className="absolute top-[-10px] right-[-10px] bg-[#23A6F0] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              </i>
            </Link>
            <Link href="/WishList">
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
            {user ? (
              <div className="flex items-center space-x-2">
                <Image
                  src={user.photoURL || avator}
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm font-medium">{user.displayName}</span>
                <button
                  onClick={handleSignOut}
                  className="text-sm text-[#23A6F0] hover:text-[#1A7BB9]"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/signin"
                className="text-[#23A6F0] hover:text-[#1A7BB9]"
              >
                Login
              </Link>
            )}
            <Link href="WishList" className="text-gray-800">
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
