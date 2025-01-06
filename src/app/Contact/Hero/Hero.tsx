import React from "react";
import Image from "next/image";
import image from "@/public/image/contactHero.png";

const Hero = () => {
  return (
    <div className="w-full h-[1080px] lg:h-[882px]  lg:mt-0 mt-8 ">
      <div className="container mx-auto text-[#252B42] lg:w-[1440px] lg:h-[709px] text-[Montserrat]">
        <div className="px-4 lg:absolute lg:w-[1036px] lg:h-[709px] lg:pl-52 lg:pt-10 lg:pb-28 lg:gap-20">
          <div className="flex flex-col items-center lg:items-start lg:gap-20 lg:h-[742px] lg:w-[1050px]">
            <div className="lg:gap-7 lg:h-[432px] lg:w-[509px]">
              {/* Contact Us Header */}
              <div className="w-full h-7 mb-6 lg:mb-10 text-center lg:text-left ">
                <h4 className="font-bold text-base leading-6 tracking-[0.1px]">
                  CONTACT US
                </h4>
              </div>

              {/* Main Heading */}
              <div className="mb-6 lg:mb-10 text-center lg:text-left">
                <h1 className="lg:w-[378px] md:w-[300px] sm:w-[300px] lg:mx-0 mx-auto lg:h-40 text-4xl lg:text-6xl font-bold lg:leading-[80px] tracking-[0.2px]">
                  Get in touch today!
                </h1>
              </div>

              {/* Description */}
              <div className="mb-6 lg:mb-10 text-center lg:text-left">
                <p className="lg:w-[341px] md:w-[200px] sm:w-[200px] lg:mx-0 mx-auto font-normal text-lg lg:text-xl leading-8 text-[#737373] tracking-[0.2px]">
                  We know how large objects will act, but things on a small scale
                </p>
              </div>

              {/* Contact Information */}
              <div className="w-full lg:w-[442px] text-center lg:text-left mb-6 lg:mb-0">
                <h3 className="font-bold text-xl lg:text-2xl tracking-[0.1px] leading-8">
                  Phone ; +451 215 215
                </h3>
                <h3 className="font-bold text-xl lg:text-2xl pt-2 tracking-[0.1px] leading-8">
                  Fax : +451 215 215
                </h3>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center lg:justify-start space-x-8 w-full lg:w-[442px] h-[50px] pt-4 text-[#252B42]">
                <i className="fa-brands fa-twitter text-2xl"></i>
                <i className="fa-brands fa-square-facebook text-2xl"></i>
                <i className="fa-brands fa-instagram text-2xl"></i>
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </div>
            </div>

            {/* Image - Maintaining original positioning for large screens */}
            <div className="w-full lg:w-[443px] h-[450px] lg:h-[650px] mt-8 lg:mt-[-75px] lg:absolute lg:ml-[590px]">
              <Image
                src={image}
                alt="Contact Hero Image"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

