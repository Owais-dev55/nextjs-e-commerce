"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import avator from "@/public/image/avator image.jpg";
import { CartContext } from "@/Utilities/Context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ProductListpage", label: "Product" },
  { href: "/Contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { count } = useContext(CartContext);

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
    <nav className="w-full bg-[#111827] shadow-md border-b border-[#2C2F36] text-white font-[Inter]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide text-[#E5E7EB] uppercase"
        >
          VogueAura
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-1 transition-all duration-300 ${
                pathname === link.href
                  ? "text-[#E5E7EB] font-medium border-b border-[#E5E7EB]"
                  : "text-gray-400 hover:text-[#E5E7EB]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section (Cart, Wishlist, Profile) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="/WishList"
            className="text-gray-400 hover:text-[#E5E7EB] transition-all"
          >
            <i className="fas fa-heart text-lg"></i>
          </Link>

          <Link
            href="/Cart"
            className="relative text-gray-400 hover:text-[#E5E7EB] transition-all"
          >
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
              <button
                onClick={handleSignOut}
                className="text-sm text-[#E5E7EB] hover:text-gray-300 transition-all"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link
              href="/signin"
              className="text-[#E5E7EB] hover:text-gray-300 text-sm transition-all"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#E5E7EB] p-2"
            aria-label="Toggle mobile menu"
          >
            <i
              className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#111827] border-t border-[#2C2F36]">
          <div className="px-4 pt-4 pb-6 flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium ${
                  pathname === link.href
                    ? "text-[#E5E7EB] border-b border-[#E5E7EB] pb-1"
                    : "text-gray-400 hover:text-[#E5E7EB]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={user.photoURL || avator}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border border-[#E5E7EB]"
                />
                <button
                  onClick={handleSignOut}
                  className="text-sm text-[#E5E7EB] hover:text-gray-300 transition-all"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/signin"
                className="text-[#E5E7EB] hover:text-gray-300 text-lg transition-all"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
