import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface DescriptionProps {
  imageUrl: string | StaticImageData;
  description: string;
}

const DescriptionPage = ({
  imageUrl ,
  description 
}: DescriptionProps) => {
  return (
    <div className="w-full bg-white">
      {/* Navigation Section */}
      <div className="flex justify-center py-4 border-b border-[#ECECEC]">
        <Link href="" className="mx-4">
          <h6 className="font-semibold text-sm text-[#4A4A4A]">Description</h6>
        </Link>
        <Link href="" className="mx-4">
          <h6 className="font-semibold text-sm text-[#4A4A4A]">
            Additional Information
          </h6>
        </Link>
        <Link href="" className="mx-4">
          <h6 className="font-semibold text-sm text-[#4A4A4A]">
            Reviews
            <span className="font-bold text-sm text-[#D8A31A] pl-2">( 10 )</span>
          </h6>
        </Link>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 px-4 lg:px-16 py-8">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src={imageUrl}
            alt="description image"
            className="rounded-lg w-full h-auto"
            width={500}
            height={500}
          />
        </div>

        {/* Description Section */}
        <div className="flex-grow w-full lg:w-1/2">
          <p className="text-[#4A4A4A] text-base leading-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
