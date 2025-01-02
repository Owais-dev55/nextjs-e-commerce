import Footer from "@/Component/Footer/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/image/card1.jpeg";
import image2 from "@/public/image/card2.jpeg";
import image3 from "@/public/image/card3.jpg";
import image4 from "@/public/image/card4.jpeg";
import image5 from "@/public/image/card5.jpg";
import image6 from "@/public/image/card6.jpg";
import image7 from "@/public/image/card7.jpg";
import image8 from "@/public/image/card8.jpg";
import image9 from "@/public/image/card9.jpg";
import image10 from "@/public/image/card10.jpg";
import image11 from "@/public/image/card11.jpg";
import image12 from "@/public/image/card12.jpg";
const MadeComponent = () => {
  const Images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  return (
    <div>
      <Footer backgroundColor="#FFFFFF" />
      <div className="w-[1049px] h-[615px] gap-20 grid grid-cols-4 text-center mx-auto ">
        {Images.map((image, index) => {
          return (
            <div className="w-[239px] h-[615px] text-[#FFFFFF] " key={index}>
              <div className="w-[239px] h-[427px] ">
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
                <div className="w-[82.32px] h-4 gap-[6.02px] flex ">
                  <div className="w-4 h-4 rounded-[50%] bg-[#23A6F0]"></div>
                  <div className="w-4 h-4 rounded-[50%]  bg-[#23856D]"></div>
                  <div className="w-4 h-4 rounded-[50%] bg-[#E77C40]"></div>
                  <div className="w-4 h-4 rounded-[50%] bg-[#252B42]"></div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="h-[76px] w-[813px] pl-[360px] rounded-md  bg-[#FFFFFF] border-[#BDBDBD] ">
          <div className="w-full h-full flex flex-row -mt-5">
            <div className="bg-[#F3F3F3] h-full w-[84px] flex justify-center items-center border-[#BDBDBD] border rounded-l-lg ">
              <h6 className="font-bold tracking-[0.2px] leading-6 text-sm w-8 h-6 text-[#BDBDBD]">
                First
              </h6>
            </div>
            <div className="w-[46px] flex justify-center items-center h-full border border-[#E9E9E9] ">
              <h6 className="font-bold tracking-[0.2px] text-[#23A6F0] leading-6 text-sm w-[6px] h-6">
                1
              </h6>
            </div>
            <div className="w-[46px] flex justify-center items-center h-full border border-[#E9E9E9] bg-[#23A6F0] ">
              <h6 className="font-bold tracking-[0.2px] text-[#FFFFFF] leading-6 text-sm w-[6px] h-6">
                2
              </h6>
            </div>
            <div className="w-[46px] flex justify-center items-center h-full border border-[#E9E9E9]  ">
              <h6 className="font-bold tracking-[0.2px] text-[#23A6F0] leading-6 text-sm w-[6px] h-6">
                3
              </h6>
            </div>
            <div className=" h-full w-[84px] flex justify-center items-center border-[#BDBDBD] border rounded-r-lg">
              <h6 className="font-bold tracking-[0.2px] leading-6 text-sm w-8 h-6 text-[#23A6F0]">
                Next
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeComponent;
