import React from "react";
import Image from "next/image";
import image from "@/public/image/heroimage.jpeg";

const Hero = () => {
  return (
    <section className="relative w-screen h-[716px] ">
      <Image
        src={image}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      <div className=" w-[1044px] h-[751px] gap-20 pt-28 pb-28 pl-[197.5px] text-[#FFFFFF]  ">
        <div className="w-full h-[427px] pt-12 gap-8 pb-12">
          <div className="gap-8 h-[451px] w-[599px]">
            <h5 className="font-bold text-base mb-4 leading-6 tracking-wider">
              SUMMER 2020
            </h5>
            <h1 className="font-bold leading-[80px] mb-4 text-6xl">
              NEW COLLECTION
            </h1>
            <h5 className="font-normal text-[20px] mb-4 leading-8 tracking-[0.2px] text-[#FAFAFA] w-[326px] h-14">
              We know how large objects will act, but things on a small scale.
            </h5>
            <div className="gap-2 w-[221px] h-16">
              <button className="bg-[#2DC071] w-full mt-4 h-full rounded-md pt-4 pr-10 pb-4 pl-10 gap-2">
                <h3 className="font-bold text-base h-8 w-[141px] leading-8 tracking-wider text-[#FFFFFF] uppercase text-center">
                  Shop now
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
