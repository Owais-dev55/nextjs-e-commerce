import Image from "next/image";
import React from "react";
import image1 from "@/public/image/WhatsApp Image 2024-12-09 at 7.24.35 PM (2).jpeg";
import image2 from "@/public/image/WhatsApp Image 2024-12-09 at 7.24.37 PM (1).jpeg";
import image3 from "@/public/image/WhatsApp Image 2024-12-09 at 7.24.35 PM.jpeg";

const FeaturedProducts = () => {
  const images = [image1, image2, image3];
  return (
    <div className="w-full max-w-[1440px] h-auto px-4 lg:px-12 py-20 mx-auto">
      <div className="w-full max-w-[1050px] h-auto mx-auto">
        <div className="h-auto w-full text-center mb-10">
          <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#23A6F0] mb-2">
            Practice Advice
          </h6>
          <h2 className="font-bold text-2xl lg:text-[40px] leading-6 lg:leading-[50px] tracking-[0.2px] text-[#252B42] mb-4">
            Featured Posts
          </h2>
          <p className="font-bold text-sm leading-5 tracking-[0.2px] text-[#737373] max-w-[469px] mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {images.map((image, index) => (
            <div
              className="lg:w-full sm:w-[300px] lg:max-w-[328px] h-auto shadow-md"
              key={index}
            >
              {/* Image Section */}
              <div className="relative h-[200px] sm:h-[300px] w-full">
                <div className="absolute top-5 left-5 h-6 w-14 rounded bg-[#E74040] flex justify-center items-center">
                  <h6 className="font-bold text-sm tracking-[0.2px] text-white">
                    New
                  </h6>
                </div>
                <Image
                  src={image}
                  alt={`PRODUCT ${index}`}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text Section */}
              <div className="px-4 py-4">
                <div className="flex gap-4 mb-4">
                  <h6 className="text-[#8EC2F2] font-normal text-[12px] tracking-[0.2px]">
                    Google
                  </h6>
                  <h6 className="text-[#737373] font-normal text-[12px] tracking-[0.2px]">
                    Trending
                  </h6>
                  <h6 className="text-[#737373] font-normal text-[12px] tracking-[0.2px]">
                    New
                  </h6>
                </div>
                <h4 className="text-[#252B42] font-normal text-base lg:text-xl tracking-[0.2px] mb-2">
                  Loudest à la Madison #1 (L’integral)
                </h4>
                <p className="text-[#737373] font-normal text-[14px] tracking-[0.2px] mb-4">
                  We focus on ergonomics and meeting you where you work. It’s
                  only a keystroke away.
                </p>

                <div className="flex justify-between items-center text-[14px] tracking-[0.2px] text-[#737373]">
                  <div className="flex items-center gap-2">
                    <i className="fa-regular fa-alarm-clock text-[#23A6F0]"></i>
                    <span>22 April 2021</span>
                  </div>
                  <span>10 comments</span>
                </div>

                <h4 className="mt-4 text-[#737373] font-bold text-[14px] tracking-[0.2px] cursor-pointer hover:underline">
                  Learn More
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
