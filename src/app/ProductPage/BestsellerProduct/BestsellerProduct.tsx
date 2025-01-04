import React from "react";
import image1 from "@/public/image/bestPro1.jpg";
import image2 from "@/public/image/bestPro2.jpg";
import image3 from "@/public/image/bestPro3.jpg";
import image4 from "@/public/image/bestPro4.jpg";
import image5 from "@/public/image/bestPro5.jpg";
import image6 from "@/public/image/bestPro6.jpg";
import image7 from "@/public/image/bestPro7.jpg";
import image8 from "@/public/image/bestPro2.jpg";
import ProductCard from "@/Component/ProductCard/ProductCard";
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
    <div className="w-full h-[1386px] bg-[#FAFAFA]">
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
           <ProductCard image={image} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestsellerProduct;
