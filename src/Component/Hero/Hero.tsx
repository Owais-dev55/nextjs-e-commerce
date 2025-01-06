import React from "react";
import Image from "next/image";
import image from "@/public/image/heroimage.jpeg";

const Hero = () => {
  return (
    <section className="relative lg:w-screen w-[414px]  h-[716px] sm:h-[500px] md:h-[600px] lg:h-[716px]">
      <Image
        src={image}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      <div className=" lg:w-full md:w-[424px] h-full flex flex-col justify-center items-start px-6 sm:px-10 md:px-20 lg:px-[197.5px] text-[#FFFFFF]">
        <div className="w-full lg:max-w-[600px] md:max-w-[414px] space-y-6 -mt-20">
          <h5 className="font-bold text-xs sm:text-sm md:text-base leading-6 tracking-wider">
            SUMMER 2020
          </h5>
          <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            NEW COLLECTION
          </h1>
          <h5 className="font-normal text-sm sm:text-base md:text-lg leading-6 md:leading-8 text-[#FAFAFA] lg:w-[301px]">
            We know how large objects will act, but things on a small scale.
          </h5>
          <button className="bg-[#2DC071] w-[221px] h-16 mt-4 py-2 px-6 rounded-md">
            <h3 className="font-bold text-sm sm:text-base uppercase text-center">
              Shop now
            </h3>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
