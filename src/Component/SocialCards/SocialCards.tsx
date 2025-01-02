import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: string | StaticImageData;
}

const SocialCards: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="h-full w-[316px]">
      <div className="w-full h-[231px]">
        <Image src={image} alt="cardimage" className="w-full h-full" />
      </div>
      <div className="w-full h-[152px] flex flex-col justify-center items-center">
        <h1 className="font-bold text-base leading-6 tracking-[0.1px]">
          Username
        </h1>
        <h6 className="font-bold text-[#737373] text-sm leading-6 tracking-[0.2px]">
          Profession
        </h6>
        <div className="w-28 h-6 mt-5 gap-5 text-[#23A6F0] flex justify-center items-center">
          <i className="w-6 h-6 text-2xl fa-brands fa-facebook"></i>
          <i className="w-6 h-6 text-2xl fa-brands fa-instagram"></i>
          <i className="w-6 h-6 text-2xl fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default SocialCards;
