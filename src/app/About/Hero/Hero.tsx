import React from "react";
import Image from "next/image";
import image from "@/public/image/Heroabout.png";

const Hero = () => {
  return (
    <div className="text-[Montserrat]">
      <div className="w-full h-auto lg:h-[729px] text-[#1A1A1A]">
        {/* Mobile Layout */}
        <div className="block lg:hidden px-4 py-8 text-center">
          <div className="relative z-10">
            <h5 className="font-bold text-base tracking-[0.1px] leading-6">
              ABOUT COMPANY
            </h5>
            <h1 className="font-bold text-4xl tracking-[0.2px] leading-tight mt-6">
              ABOUT US
            </h1>
            <h5 className="font-normal text-lg tracking-[0.2px] leading-8 text-[#4A4A4A] mt-8 max-w-[346px] mx-auto">
              We know how large objects will act, but things on a small scale
            </h5>
            <div className="mt-12">
              <button className="w-[195px] h-[52px] py-4 px-10 rounded-md bg-[#0E3A5D]">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#FFFFFF]">
                  Get Quote Now
                </h6>
              </button>
            </div>
          </div>
          
          <div className="mt-12 relative w-full max-w-[415px] mx-auto ">
            <div className="absolute w-[15px] h-[15px] right-4 top-1/4 bg-[#977DF4] rounded-full z-10"></div>
            <div className="absolute w-20 h-20 -left-4 top-1/3 bg-[#FFE9EA] rounded-full"></div>
            <div className="relative bg-[#FFE9EA] w-full aspect-square rounded-full ">
              <div className="absolute w-[120%] h-[120%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={image}
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout   */}
        <div className="hidden lg:block">
          <div className="w-[1050px] h-[545px] py-[112px] gap-[80px] pl-[195px]">
            <div className="gap-8 h-[321px] w-[1044px]">
              <div className="gap-9 h-full w-[599px]">
                <h5 className="font-bold text-xl tracking-[0.1px] leading-6 h-6">
                  ABOUT COMPANY
                </h5>
                <h1 className="font-bold text-[58px] tracking-[0.2px] leading-[80px] h-[80px] pt-10">
                  ABOUT US
                </h1>
                <h5 className="font-normal text-xl tracking-[0.2px] leading-8 h-10 w-[346px] text-[#4A4A4A] pt-16">
                  We know how large objects will act, but things on a small scale
                </h5>
                <div className="pt-28">
                  <button className="w-[195px] h-[52px] py-4 px-10 rounded-md bg-[#0E3A5D] flex justify-center items-center gap-2">
                    <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#FFFFFF]">
                      Get Quote Now
                    </h6>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex">
              <div className="relative w-[632px] h-[612px] pl-[724px]">
                <div className="bg-[#977DF4] w-[15px] h-[15px] rounded-[50%]"></div>
                <div className="bg-[#977DF4] w-[15px] h-[15px] ml-[561px] mt-[-321px] rounded-[50%]"></div>
                <div className="bg-[#FFE9EA] -z-10 w-20 h-20 ml-[-60px] mt-[-111px] rounded-[50%]"></div>
                <div className="bg-[#FFE9EA] w-[485px] h-[485px] rounded-full flex justify-center items-center mt-[-90px] relative">
                  <div className="absolute w-[110%] h-[606px] ml-[50%] -translate-x-[20%]">
                    <Image
                      src={image}
                      alt="Hero Image"
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-auto lg:h-[236px] px-4 lg:px-0">
        {/* Mobile Layout */}
        <div className="block lg:hidden text-center py-8">
          <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#E74040] mb-5">
            Problems trying
          </p>
          <h2 className="font-bold text-xl leading-8 tracking-[0.1px] text-[#1A1A1A] mb-6 w-[321px] mx-auto">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
          <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373] w-[321px] mx-auto">
            Problems trying to resolve the conflict between the two major realms of
            Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* Desktop Layout - Preserved Exactly as Original */}
        <div className="hidden lg:flex justify-center">
          <div className="h-48 w-[1018px] gap-16 flex justify-center">
            <div className="h-full w-[394px] py-6 gap-20">
              <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#E74040] pb-5">
                Problems trying
              </p>
              <h2 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#1A1A1A] h-24 w-[394px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h2>
            </div>
            <div className="w-[500px] h-full gap-12 flex items-center">
              <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#4A4A4A]">
                Problems trying to resolve the conflict between the two major realms
                of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

