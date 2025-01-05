import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-white text-[Montserrat]">
        <div className="hidden  lg:flex justify-between items-center bg-[#252B42] text-[#FFFFFF] font-bold text-sm px-6 py-4">
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
            <a href="#" className="hover:text-[#23A6F0]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-[#23A6F0]">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white text-[Montserrat]">
        <div className="flex justify-between items-center px-5 py-4 shadow-md md:hidden">
          <div className="text-2xl font-bold">
            <Link href="/">Bandage</Link>
          </div>
          <button className="text-xl text-gray-800">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="flex flex-col items-center md:hidden bg-white py-6 space-y-4">
          <ul className="text-center space-y-4">
            <li>
              <Link
                href="#"
                className="text-gray-800 font-medium hover:text-[#23A6F0] text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/ProductPage"
                className="text-gray-800 font-medium hover:text-[#23A6F0] text-lg"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-gray-800 font-medium hover:text-[#23A6F0] text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Blog"
                className="text-gray-800 font-medium hover:text-[#23A6F0] text-lg"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="text-gray-800 font-medium hover:text-[#23A6F0] text-lg"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/ProductListpage"
                className="text-gray-800 font-medium hover:text-[#23A6F0] text-lg"
              >
                Pages
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 text-center text-[#23A6F0]">
            <Link href="#" className="hover:text-[#1A7BB9] text-sm">
              <i className="fas fa-user"></i> Login / Register
            </Link>
          </div>
          <div className="flex justify-center space-x-6 text-2xl text-gray-800">
            <Link href="#" className="hover:text-[#23A6F0]">
              <i className="fas fa-search"></i>
            </Link>
            <Link href="#" className="hover:text-[#23A6F0]">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link href="#" className="hover:text-[#23A6F0]">
              <i className="fas fa-heart"></i>
            </Link>
          </div>
        </div>

        <nav className="hidden md:flex justify-between items-center px-6 py-4 shadow-md bg-white">
          <div className="text-2xl font-bold">
            <Link href="/">Bandage</Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#"
                className="text-gray-800 font-medium hover:text-[#23A6F0]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/ProductPage"
                className="text-gray-800 font-medium hover:text-[#23A6F0]"
              >
                Shop <i className="fa-solid fa-chevron-down ml-1"></i>
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-gray-800 font-medium hover:text-[#23A6F0]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Blog"
                className="text-gray-800 font-medium hover:text-[#23A6F0]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="text-gray-800 font-medium hover:text-[#23A6F0]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/ProductListpage"
                className="text-gray-800 font-medium hover:text-[#23A6F0]"
              >
                Pages
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-[#23A6F0] hover:text-[#1A7BB9]">
              Login / Register
            </Link>
            <Link href="#" className="text-gray-800 hover:text-[#23A6F0]">
              <i className="fas fa-heart"></i>
            </Link>
            <Link href="#" className="text-gray-800 hover:text-[#23A6F0]">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
