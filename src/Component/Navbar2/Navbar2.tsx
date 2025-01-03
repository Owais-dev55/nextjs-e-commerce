import Link from "next/link";
import React from "react";
const Navbar2 = () => {
  return (
    <div className="  md:flex w-full h-24 pl-14 flex pt-4">
      <div className="  w-[187px] h-14 pt-4 pl-[136px]">
        <h3 className="font-bold text-[#252B42] leading-8 tracking-[0.1px] text-2xl">
          <Link href="/"> Bandage </Link>
        </h3>
      </div>
      <div className="w-[1250px] h-14 pt-1 pl-[264px]">
        <div className="w-[275px] h-6 gap-5 pt-4 flex justify-between">
          <Link
            href="/"
            className="h-full w-11 font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]"
          >
            Home
          </Link>
          <Link
            href="/ProductPage"
            className="h-full w-11 font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]"
          >
            Product
          </Link>
          <Link
            href="/Pricing"
            className="h-full w-11 font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]"
          >
            Pricing
          </Link>
          <Link
            href="/Contact"
            className="h-full w-11 font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]"
          >
            Contact
          </Link>
        </div>
        <div className="w-[900px] h-[52px] pl-[515px] gap-10 flex -my-2">
          <Link
            href="#"
            className=" h-5 w-10 font-bold text-sm leading-[22px] tracking-[0.2px] text-[#23A6F0]"
          >
            Login
          </Link>
          <div className="h-full w-[214px] -my-4">
            <button className="w-full h-full rounded-md bg-[#23A6F0] pt-4 pb-4 pl-5 pr-6 gap-4">
              <h6 className="font-bold text-sm tracking-[0.2px] leading-[22px] text-[#FFFFFF]">
                Become a member{" "}
                <i className="fa-solid fa-arrow-right text-[#FFFFFF] h-[12px] w-[12px] pl-2"></i>
              </h6>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 py-4 md:hidden -ml-[1400px]">
        <Link href="/" className="text-lg text-[#737373] hover:text-[#23A6F0]">
          Home
        </Link>
        <Link
          href="/ProductPage"
          className="text-lg text-[#737373] hover:text-[#23A6F0]"
        >
          Product
        </Link>
        <Link
          href="/Pricing"
          className="text-lg text-[#737373] hover:text-[#23A6F0]"
        >
          Pricing
        </Link>
        <Link
          href="/Contact"
          className="text-lg text-[#737373] hover:text-[#23A6F0]"
        >
          Contact
        </Link>
      </div>
    
      </div>
    </div>
  );
};

export default Navbar2;
