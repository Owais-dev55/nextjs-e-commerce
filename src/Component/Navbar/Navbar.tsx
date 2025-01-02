import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div
        className="h-14 flex  pl-6 justify-between text-[
Montserrat] items-center bg-[#252B42] text-[#FFFFFF] p-2 font-bold text-sm"
      >
        <div className="w-[415px] gap-2 h-11 flex items-center space-x-5">
          <h6>
            <i className="fas fa-phone"></i> (225) 555-0118
          </h6>
          <h6>
            <i className="fas fa-envelope"></i> michelle.rivera@example.com
          </h6>
        </div>

        <div className="flex-1 w-[332px] h-11 p-[10px]  gap-2 text-center">
          <h6 className="leading-6 tracking-[0.2px] text-sm">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>

        <div className="flex items-center w-[233px] h-11 gap-[10px] p-[10px] ">
          <h6 className="leading-6 w-auto tracking-[0.2px] text-sm">
            Follow Us :
          </h6>
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

      <nav className="flex justify-between items-center bg-white py-4 px-5">
        <div className="text-2xl font-bold">
          <Link href="/"> Bandage</Link>
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
              Shop <i className="fa-solid fa-chevron-down ml-1 "></i>
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
    </nav>
  );
};

export default Navbar;
