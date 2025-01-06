import React from "react";
import logo1 from "@/public/image/fa-brands-1 (1).png";
import logo2 from "@/public/image/fa-brands-2.png";
import logo3 from "@/public/image/fa-brands-3.png";
import logo4 from "@/public/image/fa-brands-4.png";
import logo5 from "@/public/image/fa-brands-5.png";
import logo6 from "@/public/image/fa-brands-2.png";
import Image from "next/image";

const Brandlogos = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className="w-screen flex flex-col lg:flex-row justify-center gap-8">
        {logos.map((logo, index) => (
          <div 
            className="h-8 w-[173px] flex justify-center lg:block mb-8 lg:mb-0 mx-auto lg:mx-0" 
            key={index}
          >
            <div className="w-[102px] h-[33px] text-[#737373]">
              <Image 
                src={logo} 
                alt={`Brand logo ${index + 1}`}
                quality={100}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brandlogos;

