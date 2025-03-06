import Brandlogos from "@/Component/FrequentComponent/Brandlogos";
import Image from "next/image";
import React from "react";
import image from "@/public/image/lowersectionimage.jpg";

const LowerSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[#FAFAFA] lg:w-full lg:h-[479px]  h-[420px] ">
        <div className="flex flex-col items-center text-center pt-16 pb-16">
          <div className="h-[120px] w-full flex flex-col justify-center items-center text-center">
            <h2 className="font-bold tracking-[0.2px]  lg:w-[499px] w-[313px] lg:h-[50px] h-[100px] text-[40px] leading-[50px] text-[#252B42]">
              Big Companies Are Here
            </h2>
            <p className="font-normal tracking-[0.2px] text-sm leading-5 lg:w-[469px] w-[313px] mx-auto h-10 mt-2 text-[#737373] pt-5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <Brandlogos />
      </div>
      <div className="w-full bg-[#0E3A5D] text-[#FFFFFF]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 flex justify-center items-center py-12 lg:py-0">
            <div className="w-full max-w-[438px] px-4 lg:px-0 mx-auto">
              <h5 className="font-bold tracking-[0.1px] text-base leading-6 mb-7 lg:mb-0">
                WORK WITH US
              </h5>
              <h2 className="font-bold tracking-[0.2px] text-3xl lg:text-[40px] leading-tight lg:leading-[50px] lg:pt-7 mb-4 lg:mb-0">
                Now Let&apos;s grow Yours
              </h2>
              <p className="font-normal tracking-[0.2px] text-sm leading-5 lg:mt-2 lg:pt-10 mb-8 lg:mb-0">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>
              <div className="lg:pt-20 ">
                <button className="w-[132px] h-[52px] py-4 px-10 rounded-md border border-[#FAFAFA] hover:bg-[#FAFAFA] hover:text-[#0E3A5D] flex justify-center items-center gap-2 transition duration-300">
                  <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-inherit">
                    Button
                  </h6>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 h-[300px] lg:h-[636px] ">
            <Image
              src={image}
              alt="CTA Image"
              className="w-full h-full object-fill"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
