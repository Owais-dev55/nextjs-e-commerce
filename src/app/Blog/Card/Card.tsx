import SocialCards from "@/Component/SocialCards/SocialCards";
import React from "react";
import image1 from "@/public/image/socialcard4.jpg";
import image2 from "@/public/image/socailcard5.jpg";
import image3 from "@/public/image/socailcard6.jpg";
import image4 from "@/public/image/socailcard3.jpg";
import image5 from "@/public/image/socailcard7.jpg";
import image6 from "@/public/image/socailcard1.jpg";
import image7 from "@/public/image/socailcard2.jpg";
import image8 from "@/public/image/socailcard8.jpg";
import image9 from "@/public/image/socailcard9.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const Card = () => {
  return (
    <div className="flex flex-col items-center lg:pt-28 pt-[600px] w-full lg:h-[1759px] h-[4140px]">
      <div className="h-[134px] lg:w-[633px] w-[414px]  text-center flex justify-center items-center">
        <h6 className="font-bold tracking-[0.2px] text-[40px] leading-[50px] text-[#252B42] lg:w-full w-[200px]">
          Meet Our Team
        </h6>
      </div>
      <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 justify-items-center max-w-[1200px] min-w-[414px]">
        {images.map((image, index) => {
          return <SocialCards image={image} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Card;
