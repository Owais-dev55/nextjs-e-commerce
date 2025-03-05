"use client";
import { CartContext } from "@/Utilities/Context";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SearchDropdown } from "../FrequentComponent/SearchDropdown";
import Image from "next/image";
import { auth } from "@/firebase/config"; 
import { onAuthStateChanged, signOut } from "firebase/auth"; 
import avator from '@/public/image/avator image.jpg';
import { User } from "firebase/auth";

const Navbar = () => {
  const { count } = useContext(CartContext);
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); 

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/ProductListpage", label: "Shop" },
    { href: "/About", label: "About" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
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
    <nav className=" w-full bg-[#111827] bg-opacity-95 backdrop-blur-md shadow-lg border-b border-[#2C2F36] text-white font-[Inter] z-50">
      <div className="max-w-7xl mx-8  py-4 flex justify-between items-center">
        <Link href={'/'}>
        <div className="text-2xl font-semibold tracking-wide text-[#E5E7EB] uppercase">
          VogueAura
        </div>
        </Link>
        <div className="hidden md:flex flex-grow justify-center">
          <SearchDropdown />
        </div>
        <ul className="hidden md:flex space-x-8 text-[15px]">
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

        <div className="hidden md:flex items-center space-x-6 ">
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
              <Image src={user.photoURL || avator} alt="User Avatar" width={36} height={36} className="rounded-full border border-[#E5E7EB]" />
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#111827] border-t border-[#2C2F36] shadow-lg p-4">
          <SearchDropdown />
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 text-center transition-all duration-300 ${
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

          <div className="flex justify-center space-x-6 mt-4">
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

          {user ? (
            <div className="flex flex-col items-center mt-4">
              <Image src={user.photoURL || avator} alt="User Avatar" width={36} height={36} className="rounded-full border border-[#E5E7EB]" />
              <button onClick={handleSignOut} className="mt-2 text-sm text-[#E5E7EB] hover:text-gray-300 transition-all">
                Sign out
              </button>
            </div>
          ) : (
            <div className="mt-4 text-center">
              <Link href="/signin" className="text-[#E5E7EB] hover:text-gray-300 text-sm transition-all">
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
