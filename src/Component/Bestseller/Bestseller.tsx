import image1 from "@/public/image/image1.jpeg";
import image2 from "@/public/image/image2.jpeg";
import image3 from "@/public/image/image3.jpeg";
import image4 from "@/public/image/image4.jpeg";
import image5 from "@/public/image/image5.jpeg";
import image6 from "@/public/image/image6.jpeg";
import image7 from "@/public/image/image7.jpeg";
import image8 from "@/public/image/image8.jpeg";

import ProductCard from "../ProductCard/ProductCard";

export default function BestSeller() {
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
    <main className="px-4 sm:px-6 lg:px-8 py-12  lg:h-auto h-[5510px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 text-[Montserrat] space-y-2">
          <h4 className="text-[#737373] font-normal text-lg sm:text-xl lg:text-2xl leading-8 tracking-wide">
            Featured Projects
          </h4>
          <h3 className="text-[#252B42] font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-wide">
            BestSeller Products
          </h3>
          <p className="text-[#737373] font-normal text-sm sm:text-base lg:text-lg leading-relaxed tracking-wide max-w-2xl mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:h-[615px]  h-[5510px]">
         
          {Images.map((image, index) => (
            <ProductCard image={image} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}