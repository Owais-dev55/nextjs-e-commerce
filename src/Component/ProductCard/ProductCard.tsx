
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface ProductsProps {
  price: string | number;
  _id: string | number;
  title: string;
  imageUrl: string | StaticImageData;
  category: string;
  dicountPercentage: number | string | undefined;
  onclick?: () => void;
}

const ProductCard = ({ imageUrl, _id, title, price, dicountPercentage, category, onclick }: ProductsProps) => {
  return (
    <div
      key={_id}
      onClick={onclick}
      className="w-full max-w-[320px] mx-auto flex justify-center items-center mt-4 transition-transform transform hover:scale-[1.03]"
    >
      <div className="relative flex flex-col h-full w-full border border-[#ADB5BD] rounded-xl bg-[#F8F9FA] text-[#1B263B] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full pb-[160%] overflow-hidden rounded-t-xl">
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
        <div className="flex-grow flex flex-col justify-center items-center gap-3 p-5">
          {/* Title */}
          <h5 className="text-[#1B263B] font-semibold text-lg tracking-wide uppercase">{title}</h5>

          {/* Category */}
          <Link href="#" className="text-[#ADB5BD] font-light text-xs uppercase tracking-widest">
            {category}
          </Link>

          {/* Pricing */}
          <div className="flex gap-2 items-center justify-center w-full">
            {dicountPercentage && (
              <h5 className="text-[#6C757D] text-sm font-thin line-through opacity-70">
                ${dicountPercentage}
              </h5>
            )}
            <h5 className="font-semibold text-[#2C3E50] text-2xl tracking-widest">${price}</h5>
          </div>

          {/* Color Options */}
          <div className="flex gap-3 justify-center w-full mt-3">
            <div className="w-5 h-5 rounded-full bg-[#1B263B] border border-[#6C757D] hover:ring-2 hover:ring-[#6C757D] cursor-pointer shadow-md"></div>
            <div className="w-5 h-5 rounded-full bg-[#495057] border border-[#6C757D] hover:ring-2 hover:ring-[#6C757D] cursor-pointer shadow-md"></div>
            <div className="w-5 h-5 rounded-full bg-[#ADB5BD] border border-[#6C757D] hover:ring-2 hover:ring-[#6C757D] cursor-pointer shadow-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
