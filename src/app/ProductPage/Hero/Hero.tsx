import Navbar from "@/app/ProductListpage/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import image from "@/public/image/listpage.jpg";
import image2 from "@/public/image/listimage2.jpg";
const Hero = () => {
  return (
    <div className="text-[Montserrat]">
      <Navbar />
      <div className="gap-8 w-full h-24  bg-[#FAFAFA] flex items-center   ">
        <div className="h-8 w-[510px] -mt-2 ">
          <div className="w-[119px] h-11  gap-4 pt-3 bt-3 flex ">
            <h3 className="w-11 h-6 font-bold ml-44 text-[#252B42] tracking-[0.2px] leading-6 text-sm ">
              Home
            </h3>
            <div className="w-auto h-4  text-[#BDBDBD]">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <h6 className="w-9 h-6 font-bold text-[#BDBDBD] tracking-[0.2px] leading-6 text-sm ">
              Shop
            </h6>
          </div>
        </div>
        <div className="gap-1 w-[509px]  h-11 flex justify-end"></div>
      </div>
      <div className="w-full bg-[#FAFAFA] h-[598px] flex">
        <div className="w-[1050px] h-full pb-12 pl-[195px] flex gap-8">
          <div className="w-[510px] h-full rounded-md">
            <div className="w-[506px] h-[440px] relative">
              <div className="absolute top-[60%] ml-4 flex justify-between w-[470px] z-20 text-4xl text-[#FAFAFA]">
                <i className="fa-solid fa-chevron-left"></i>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <Image src={image} alt="product" className="-z-10" />
            </div>
            <div className="w-[219px] h-[75px] mt-16 flex justify-around">
              <div className="w-[100px] h-full">
                <Image
                  src={image2}
                  alt="productImage"
                  className="w-full h-full z-30"
                />
              </div>
              <div className="w-[100px] h-full opacity-50">
                <Image
                  src={image}
                  alt="productImage"
                  className="w-full h-full z-30"
                />
              </div>
            </div>
          </div>
          <div className="w-[510px] h-full">
            <h4 className="h-8 w-40 pt-3 pl-6 font-normal text-xl leading-8 tracking-[0.2px] text-[#252B42]">
              Floating Phone
            </h4>
            <div className="w-[221px] h-6 pt-5 pl-6 left-6 gap-[10px] flex">
              <div className="h-[22px] w-[140px] gap-1 text-[#F3CD03]">
                <i className="fa-solid fa-star w-[22px]"></i>
                <i className="fa-solid fa-star w-[22px]"></i>
                <i className="fa-solid fa-star w-[22px]"></i>
                <i className="fa-solid fa-star w-[22px]"></i>
                <i className="fa-regular fa-star w-[22px]"></i>
              </div>
              <h6 className="h-6 w-24 font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                10 Reviews
              </h6>
            </div>
            <h6 className="h-8 w-[108px] pl-6 pt-10 font-bold text-2xl leading-8 tracking-wider text-[#252B42]">
              $1,139.33
            </h6>
            <div className="w-[169px] h-6 pt-9 pl-6 gap-1 flex">
              <h6 className="h-6 w-[94px] font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                Availability :
              </h6>
              <h6 className="h-6 w-[60px] font-bold text-sm leading-6 tracking-[0.2px] text-[#23A6F0]">
                In Stock
              </h6>
            </div>
            <p className="h-10 w-[464px] pt-16 pl-6 font-normal text-sm leading-5 tracking-[0.2px] text-[#858585]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="w-[455px] relative top-20 pl-6 text-center border text-[#BDBDBD]" />

            <div className="w-[150px] pt-28 h-8 gap-2 pl-6 flex">
              <div className="w-[30px] h-[30px] rounded-[50%] bg-[#23A6F0]"></div>
              <div className="w-[30px] h-[30px] rounded-[50%] bg-[#23856D]"></div>
              <div className="w-[30px] h-[30px] rounded-[50%] bg-[#E77C40]"></div>
              <div className="w-[30px] h-[30px] rounded-[50%] bg-[#252B42]"></div>
            </div>

            <div className="w-[298px] h-11 gap-2 pl-6 pt-20 flex">
              <button className="bg-[#23A6F0] w-[148px] h-11 rounded-md pt-[10px] pb-[10px] pr-5 pl-5">
                <h6 className="w-[108px] h-6 font-bold text-sm text-[#FFFFFF] tracking-[0.2px] leading-6">
                  Select Options
                </h6>
              </button>
              <div className="w-10 h-10 rounded-[50%] bg-[#FFFFFF] border border-[#E8E8E8] flex">
                <i className="fa-regular fa-heart w-5 h-5 pt-3 pl-[9px] text-[#252B42]"></i>
              </div>
              <div className="w-10 h-10 rounded-[50%] bg-[#FFFFFF] border border-[#E8E8E8] flex">
                <i className="fa-solid fa-cart-shopping w-5 h-5 pt-3 pl-[9px] text-[#252B42]"></i>
              </div>
              <div className="w-10 h-10 rounded-[50%] bg-[#FFFFFF] border border-[#E8E8E8] flex">
                <i className="fa-solid fa-eye w-5 h-5 pt-3 pl-[9px] text-[#252B42]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
