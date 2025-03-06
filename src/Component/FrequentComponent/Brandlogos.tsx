"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo1 from "@/public/image/fa-brands-1 (1).png";
import logo2 from "@/public/image/fa-brands-2.png";
import logo3 from "@/public/image/fa-brands-3.png";
import logo4 from "@/public/image/fa-brands-4.png";
import logo5 from "@/public/image/fa-brands-5.png";
import logo6 from "@/public/image/fa-brands-2.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const BrandLogos = () => {
  return (
    <div className="bg-[#FAFAFA] py-12 overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0 relative flex items-center">
        <motion.div
          className="flex space-x-12 min-w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="h-8 w-[173px] flex items-center">
              <Image src={logo} alt={`Brand logo ${index + 1}`} quality={100} />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex space-x-12 min-w-max absolute top-0"
          animate={{ x: ["100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="h-8 w-[173px] flex items-center">
              <Image src={logo} alt={`Brand logo ${index + 1}`} quality={100} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandLogos;
