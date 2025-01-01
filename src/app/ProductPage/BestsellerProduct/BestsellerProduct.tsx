import React from "react";
import image1 from "@/public/image/bestPro1.jpg";
import image2 from "@/public/image/bestPro2.jpg";
import image3 from "@/public/image/bestPro3.jpg";
import image4 from "@/public/image/bestPro4.jpg";
import image5 from "@/public/image/bestPro5.jpg";
import image6 from "@/public/image/bestPro6.jpg";
import image7 from "@/public/image/bestPro7.jpg";
import image8 from "@/public/image/bestPro2.jpg";
import Image from "next/image";
import Link from "next/link";
const BestsellerProduct = () => {
  const Images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  return (
    <div className="w-full h-[1086px] bg-[#FAFAFA]">
      <div className="w-[1124px] h-full pl-[195px] pt-12 pb-12 gap-6">
        <div className="w-[1040px] h-8 ">
          <h3 className="w-[299px]  h-8 font-bold leading-8 text-2xl tracking-wider ">
            BESTSELLER PRODUCTS
          </h3>
          <div className="w-full h-[2px] mt-10 bg-[#ECECEC] "></div>
        </div>
        <div className="w-[1049px] h-auto mt-14 gap-8 grid grid-cols-4">
          {Images.map((image, index) => {
            return (
              <div className="w-[239px] h-[442px] text-[#FFFFFF] ">
                <div className="w-[239px] h-[280px]">
                  <Image
                    src={image}
                    alt={"Product" + index}
                    className="h-full w-full"
                    objectFit="cover"
                  />
                </div>
                <div className="w-[239px] h-[188px] top-6 right-6 left-6 bottom-6 gap-2 flex justify-center items-center flex-col">
                  <div className="h-6 w-[131px]">
                    <h5 className=" text-[#252B42] font-bold text-[16px] leading-5 tracking-[0.1]">
                      Graphic Design
                    </h5>
                  </div>
                  <Link
                    href=""
                    className="h-6 w-[146px] text-[#737373] font-bold text-[14px] leading-5 tracking-[0.2]"
                  >
                    English Department
                  </Link>
                  <div className="w-[108] h-[34] gap-2 top-[5px] right-[5px] bottom-[5px] left-[3px] flex  ">
                    <h5 className=" font-bold text-[#BDBDBD] text-[16px] leading-5 tracking-[0.1]">
                      $16.48
                    </h5>
                    <h5 className=" h-6 w-[52px] font-bold text-[#23856D] text-[16px] leading-5 tracking-[0.1]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestsellerProduct;
