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
    <div>
      <div className="pl-48 w-screen h-full flex flex-row justify-between bg-[#FAFAFA]">
        <div className="pt-12 pb-12 gap-8 w-[1250px] h-full flex flex-row justify-evenly">
          {logos.map((logo, index) => {
            return (
              <div className="h-8 w-[173px]" key={index}>
                <div className="text-[#737373] w-[102px] h-[33px] ">
                  <Image src={logo} alt="product" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brandlogos;
