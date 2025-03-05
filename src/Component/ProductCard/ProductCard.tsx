import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface ProductsProps {
  price: string | number;
  _id: string | number;
  title: string;
  imageUrl: string | StaticImageData;
  category: string;
  dicountPercentage: number | string | undefined;
  onclick?: () => void;
}

const ProductCard = ({
  imageUrl,
  _id,
  title,
  price,
  dicountPercentage,
  category,
  onclick,
}: ProductsProps) => {
  return (
    <div
      key={_id}
      onClick={onclick}
      className="w-full max-w-[260px] mx-auto flex justify-center items-center mt-4 transition-transform transform hover:scale-[1.02]"
    >
      <div className="relative flex flex-col h-auto w-full border border-[#DDD] rounded-2xl bg-white text-[#333] shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full pb-[110%] overflow-hidden rounded-t-2xl">
          <Link href={`/products/${_id}`}>
            <Image
              src={imageUrl}
              alt="Product"
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 hover:scale-105"
              fill
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="flex-grow flex flex-col justify-center items-center gap-2 p-3">
          {/* Title */}
          <h5 className="text-[#252B42] font-medium text-sm tracking-wide">
            {title}
          </h5>

          {/* Category */}
          <Link href="#" className="text-[#888] font-light text-[10px] uppercase tracking-widest">
            {category}
          </Link>

          {/* Pricing */}
          <div className="flex gap-2 items-center justify-center w-full">
            {dicountPercentage && (
              <h5 className="text-[#AAA] text-xs font-light line-through">
                ${dicountPercentage}
              </h5>
            )}
            <h5 className="font-semibold text-[#252B42] text-lg tracking-wide">
              ${price}
            </h5>
          </div>

          {/* Color Options */}
          <div className="flex gap-2 justify-center w-full mt-1">
            <div className="w-3.5 h-3.5 rounded-full bg-[#1B263B] border border-[#AAA] hover:ring-2 hover:ring-[#AAA] cursor-pointer"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#495057] border border-[#AAA] hover:ring-2 hover:ring-[#AAA] cursor-pointer"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ADB5BD] border border-[#AAA] hover:ring-2 hover:ring-[#AAA] cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
