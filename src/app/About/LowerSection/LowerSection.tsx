import Brandlogos from "@/Component/FrequentComponent/Brandlogos";
import Image from "next/image";
import React from "react";
import image from "@/public/image/lowersectionimage.jpg";

const LowerSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[#FAFAFA] w-full h-[479px] -mt-16">
        <div className="flex flex-col items-center text-center pt-16 pb-16">
          <div className="h-[120px] w-full flex flex-col justify-center items-center text-center">
            <h2 className="font-bold tracking-[0.2px]  w-[469px] h-[50px] text-[40px] leading-[50px] text-[#252B42]">
              Big Companies Are Here
            </h2>
            <p className="font-normal tracking-[0.2px] text-sm leading-5 w-[469px] h-10 mt-2 text-[#737373] pt-5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <Brandlogos />
      </div>
      <div className="w-full h-[636px] bg-[#2A7CC7] flex text-[#FFFFFF]">
        <div className="w-3/5 flex justify-center items-center">
          <div className="w-[438px] h-[238px]">
            <h5 className="font-bold tracking-[0.1px] w-32 h-6 text-base leading-6">
              WORK WITH US
            </h5>
            <h2 className="font-bold tracking-[0.2px]  w-[440px] h-[50px] text-[40px] leading-[50px] pt-7 ">
              Now Let’s grow Yours
            </h2>
            <p className="font-normal tracking-[0.2px] text-sm leading-5 w-[440px] h-10 mt-2  pt-10">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>
            <div className="pt-20">
              <button className=" hover:bg-[#FAFAFA] hover:text-[#2A7CC7] w-[132px] h-[52px] py-4 px-10 rounded-md border-[#FAFAFA] border flex justify-center items-center gap-2 ">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#FAFAFA] hover:text-[#2A7CC7]">
                  Button
                </h6>
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full">
          <Image src={image} alt="image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
