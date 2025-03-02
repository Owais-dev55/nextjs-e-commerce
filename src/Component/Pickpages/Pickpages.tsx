import Image from "next/image";
import React from "react";
import image from "@/public/image/aa4437b65bb40c3e3edb92e61a4d6184.png";
import image2 from "@/public/image/pick2.png";

const Pickpages = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* First Section - Vita Classic Product */}
      <div className="w-full  lg:w-[1440px] text-[#FFFFFF] h-auto lg:h-[709px] mx-auto mt-[200px] lg:mt-[800px] text-[Montserrat] bg-[#0E3A5D]">
        {/* Mobile Layout */}
        <div className="block lg:hidden px-4 py-12 text-center">
          <h4 className="font-normal text-xl mb-4 tracking-[0.2px]">
            Summer 2020
          </h4>
          <h1 className="text-4xl font-bold mb-4 tracking-[0.2px] w-[262px] mx-auto">
            Vita Classic Product
          </h1>
          <p className="text-base mb-4 tracking-[0.2px] px-4 w-[262px] mx-auto">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex flex-col items-center gap-4 mb-12">
            <h3 className="font-bold text-2xl tracking-[0.1px]">$16.48</h3>
            <button className="w-full max-w-[165px] h-[52px] rounded-md font-bold uppercase bg-[#1C4B6E] text-white">
              Add to cart
            </button>
          </div>
          <div className="w-full aspect-[3/4] relative mb-8">
            <Image
              src={image}
              alt="Vita Classic Product"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>

        {/* Desktop Layout (Original) */}
        <div className="hidden lg:block absolute w-[1036px] h-[709] pl-52 pt-28 pb-28 gap-20">
          <div className="gap-7 h-[599px] width-[1049px]">
            <div className="top-16 gap-7 h-[432px] w-[509]">
              <div className="w-40 h-7 mb-10">
                <h4 className="w-40 h-7 font-normal text-2xl leading-7 tracking-[0.2px]">
                  Summer 2020
                </h4>
              </div>
              <div className="w-[509px] h-40 mb-10">
                <h1 className="w-[509px] h-40 text-6xl font-bold leading-[80px] tracking-[0.2px]">
                  Vita Classic Product
                </h1>
              </div>
              <div className="h-10 w-[341px] mb-10">
                <p className="h-10 w-[341px] font-normal text-lg leading-5 tracking-[0.2px]">
                  We know how large objects will act, We know how are objects
                  will act, We know
                </p>
              </div>
              <div className="h-[52px] w-[295px] gap-9 flex">
                <h3 className="w-20 h-8 font-bold text-2xl leading-8 tracking-[0.1px] mt-2 flex justify-center items-center">
                  $16.48
                </h3>
                <div className="w-[295px] h-[52px]">
                  <button className="w-full h-full rounded-md font-bold uppercase text-[Montserrat] text-base bg-[#1C4B6E] hover:bg-[#FFFFFF] hover:text-[#1C4B6E] text-white flex items-center justify-center">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-[-455px] ml-[590px] w-[443px] h-[650px] bg-transparent">
                <Image
                  src={image}
                  alt="Vita Classic Product"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[1440px] h-auto lg:h-[682px] -z-40">
        {/* Mobile layout */}
        <div className="block lg:hidden px-4 py-2 text-center mt-10">
          <h5 className="font-bold text-sm tracking-widest uppercase text-[#4A4A4A] mb-6">
            SUMMER 2020
          </h5>
          <h2 className="font-bold text-2xl tracking-wider text-[#1A1A1A] mb-6 w-[262px] mx-auto">
            Part of the Neural Universe
          </h2>
          <p className="font-normal text-base text-[#4A4A4A] tracking-[0.2px] mb-6 px-4 w-[212px] mx-auto">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <button className="w-full max-w-[156px] h-14 rounded-md bg-[#0E3A5D] text-white font-bold text-sm">
              BUY NOW
            </button>
            <button className="w-full max-w-[156px] h-14 rounded-md border  border-[#0E3A5D] text-[#0E3A5D] font-bold text-sm">
              READ MORE
            </button>
          </div>
          <div className="w-full h-[400px] relative mt-8">
            <Image
              src={image2}
              alt="Neural Universe"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-[704px] h-[682px] -mt-24">
              <div className="w-[632px] h-[682px] ml-9 absolute -z-40">
                <Image
                  src={image2}
                  alt="image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center ml-[100px] -mt-10 text-[Montserrat]">
            <div className="w-[573px] h-[326px] gap-7">
              <h5 className="font-bold text-base leading-6 tracking-widest uppercase text-[#4A4A4A] mb-10">
                SUMMER 2020
              </h5>
              <h2 className="font-bold text-[40px] leading-[50px] tracking-widest text-[#1A1A1A] mb-10">
                Part of the Neural Universe
              </h2>
              <p className="font-normal w-[350px] h-14 text-xl leading-[30px] tracking-[0.2px] text-[#4A4A4A] mb-10">
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="h-14 w-[339px] flex gap-2">
                <div className="w-[156px] rounded-md bg-[#0E3A5D] flex justify-center items-center">
                  <button className="font-bold text-sm leading-6 tracking-[0.2] text-[#FFFFFF]">
                    BUY NOW
                  </button>
                </div>
                <div className="h-14 w-[156px] rounded-md border border-[#0E3A5D] flex justify-center items-center">
                  <button className="font-bold text-sm leading-6 tracking-[0.2] text-[#0E3A5D]">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pickpages;
