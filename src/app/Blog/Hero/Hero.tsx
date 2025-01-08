import React from "react";
import Image from "next/image";
import image1 from "@/public/image/bloghero1.jpg";
import image2 from "@/public/image/bloghero2.jpg";
import image3 from "@/public/image/bloghero3.jpg";
import image4 from "@/public/image/bloghero4.jpg";
import image5 from "@/public/image/bloghero5.jpg";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-[280px] flex justify-center mt-16">
        <div className="lg:w-[870px] w-[413px] text-center">
          <div className="lg:w-[788px] w-[353px] mx-auto gap-4">
            <h5 className="font-bold text-base leading-6 tracking-[0.1px] text-[#737373]">
              WHAT WE DO
            </h5>
            <h1 className="font-bold lg:text-[58px] text-[40px] leading-[80px] tracking-[0.2px] text-[#252B42]">
              Innovation tailored for you
            </h1>
            <div className="w-full gap-4 pt-3 flex justify-center items-center text-center">
              <h3 className="font-bold text-[#252B42] tracking-[0.2px] leading-6 text-sm">
                Home
              </h3>
              <div className="text-[#BDBDBD] px-2">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <h6 className="font-bold text-[#737373] tracking-[0.2px] leading-6 text-sm">
                Team
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:mt-0 h-[530px] ">
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-1 lg:w-[90%] w-[413px] md:h-[1070px] sm:h-[1070px]">
          <div className="relative col-span-2 ">
            <Image
              src={image1}
              alt="Large Grid Image"
              className="w-[700px] h-[530px] object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col lg:gap-2 gap-1">
            <Image
              src={image2}
              alt="Small Image 1"
              className="lg:w-[361px] w-[204px] lg:h-[260px] h-[260px] object-cover rounded-lg scale-x-[-1]"
            />
            <Image
              src={image3}
              alt="Small Image 2"
              className="lg:w-[361px] w-[204px] lg:h-[260px] h-[260px] object-cover rounded-lg transform scale-x-[-1]"
            />
          </div>

          <div className="flex flex-col lg:gap-2 gap-1">
            <Image
              src={image4}
              alt="Small Image 3"
              className="lg:w-[361px] w-[204px] lg:h-[260px] h-[260px] object-cover rounded-lg scale-x-[-1]"
            />
            <Image
              src={image5}
              alt="Small Image 4"
              className="lg:w-[361px] w-[204px] lg:h-[260px] h-[260px] object-cover rounded-lg scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
