import Image from "next/image";
import React from "react";
import image1 from "@/public/image/herocard1.jpg";
import image2 from "@/public/image/heroimage.jpeg";
import image3 from "@/public/image/herocard2.jpg";
import image4 from "@/public/image/herocard3.jpg";
import image5 from "@/public/image/herocard4.jpg";
import Brandlogos from "@/Component/FrequentComponent/Brandlogos";

const Hero = () => {
  const iamges = [image1, image2, image3, image4, image5];

  return (
    <main className="w-full">
      <div className="bg-[#FAFAFA] text-[Montserrat] py-6 px-4 lg:px-20">
        <div className="lg:flex lg:justify-between md:items-end">
          <h3 className="font-bold text-[#252B42] leading-8 tracking-wider text-2xl text-center lg:text-left lg:ml-[10%]">
            Shop
          </h3>
          <div className="flex items-center gap-5 justify-center lg:justify-end text-sm text-[#252B42] mt-4 lg:mt-0 lg:mr-28">
            <h3 className="font-bold">Home</h3>
            <i className="fa-solid fa-chevron-right text-[#BDBDBD] tracking-wider"></i>
            <h6 className="font-bold text-[#BDBDBD] tracking-wider">Shop</h6>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] w-full">
        {/* Mobile view */}
        <div className="lg:hidden flex flex-col px-4">
          {iamges.map((image, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="relative w-full aspect-[1.5/1]">
                <div className="absolute inset-0 z-20 text-[#FFFFFF] flex justify-center items-center flex-col">
                  <h5 className="font-bold text-base leading-6 tracking-wider">
                    CLOTHS
                  </h5>
                  <h5 className="font-normal text-sm leading-6 tracking-[0.2px]">
                    5 Items
                  </h5>
                </div>
                <Image
                  src={image}
                  alt={"product" + index}
                  className="w-full h-full object-cover"
                  quality={100}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view - keeping original layout */}
        <div className="hidden lg:flex h-[271px]">
          <div className="h-full w-full pb-12 pl-44 flex flex-row">
            <div className="w-full h-[223px] gap-4 flex flex-wrap">
              {iamges.map((image, index) => (
                <div key={index}>
                  <div className="w-[225px] h-[223px] bg-[#FFFFFF] flex flex-col justify-center items-center card-container">
                    <div className="z-20 text-[#FFFFFF] flex justify-center items-center flex-col">
                      <h5 className="w-16 h-6 font-bold text-base leading-6 tracking-wider">
                        CLOTHS
                      </h5>
                      <h5 className="w-[80px] h-5 font-normal text-sm ml-7 leading-6 tracking-[0.2px]">
                        5 Items
                      </h5>
                    </div>
                  </div>
                  <Image
                    src={image}
                    alt={"product" + index}
                    className="w-[225px] h-[223px] -z-20 mt-[-223px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-screen h-auto lg:h-24 px-4 lg:px-0">
        <div className="lg:h-full lg:w-[1288px] lg:gap-22 lg:pt-6 lg:bt-6 lg:pl-44">
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-4 lg:gap-0 py-6 lg:py-0">
            <div className="w-full lg:w-[168px] lg:h-6 gap-4">
              <h6 className="text-[#737373] font-bold text-sm leading-6 tracking-[0.2px] text-center lg:text-left">
                Showing all 12 results
              </h6>
            </div>
            <div className="flex items-center gap-4 lg:w-44 lg:h-11">
              <h6 className="text-[#737373] font-bold text-sm leading-6 tracking-[0.2px]">
                Views:
              </h6>
              <div className="flex gap-2 lg:w-[107px] lg:h-full lg:-mt-2">
                <div className="w-11 h-[50px] rounded-md border-[1px] flex justify-center items-center border-[#ECECEC]">
                  <i className="fa-regular fa-square-full w-[14px] h-[14px] text-[#252B42]"></i>
                </div>
                <div className="w-11 h-[50px] rounded-md border-[1px] flex justify-center items-center border-[#ECECEC]">
                  <i className="fa-solid fa-list w-[14px] h-[14px] text-[#252B42]"></i>
                </div>
              </div>
            </div>
            <div className="flex gap-2 lg:w-[252px] lg:h-full lg:-mt-2">
              <div className="flex-1 lg:h-full lg:w-[141px]">
                <select className="w-full h-[50px] bg-[#FAFAFA] border rounded-md px-3">
                  <option value="">Popularity</option>
                </select>
              </div>
              <div className="h-[50px] lg:w-24 bg-[#23A6F0] flex justify-center rounded-md">
                <button className="px-6 lg:px-0 py-[12px]">
                  <h6 className="lg:w-10 h-[26px] leading-6 tracking-[0.2px] text-sm font-bold text-[#FFFFFF]">
                    Filter
                  </h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-full h-auto lg:h-44 bg-[#FAFAFA] flex flex-row justify-center">
        <Brandlogos />
      </div>
    </main>
  );
};
export default Hero;

