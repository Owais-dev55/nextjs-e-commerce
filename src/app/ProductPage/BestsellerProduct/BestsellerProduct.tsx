import React from "react";
import ProductCard from "@/Component/ProductCard/ProductCard";

import image1 from "@/public/image/bestPro1.jpg";
import image2 from "@/public/image/bestPro2.jpg";
import image3 from "@/public/image/bestPro3.jpg";
import image4 from "@/public/image/bestPro4.jpg";
import image5 from "@/public/image/bestPro5.jpg";
import image6 from "@/public/image/bestPro6.jpg";
import image7 from "@/public/image/bestPro7.jpg";
import image8 from "@/public/image/bestPro2.jpg";

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
    <div className="w-full min-h-screen lg:h-[1386px] bg-[#FAFAFA]">
      <div className="w-full max-w-[1124px]  px-4 lg:px-0 lg:pl-[195px] py-12 lg:pt-12 lg:pb-12">
        <div className="w-full lg:w-[1040px]">
          <h3 className="font-bold leading-8 text-2xl tracking-wider mb-10 lg:pl-0 pl-24">
            BESTSELLER PRODUCTS
          </h3>
          <div className="w-full h-[2px] bg-[#ECECEC]"></div>
        </div>
        <div className="w-full lg:w-[1049px] mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {Images.map((image, index) => (
            <ProductCard image={image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestsellerProduct;

