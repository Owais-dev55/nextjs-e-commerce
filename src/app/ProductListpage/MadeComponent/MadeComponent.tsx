import Footer from "@/Component/Footer/Footer";
import React from "react";
import image1 from "@/public/image/card1.jpeg";
import image2 from "@/public/image/card2.jpeg";
import image3 from "@/public/image/card3.jpg";
import image4 from "@/public/image/card4.jpeg";
import image5 from "@/public/image/card5.jpg";
import image6 from "@/public/image/card6.jpg";
import image7 from "@/public/image/card7.jpg";
import image8 from "@/public/image/card8.jpg";
import image9 from "@/public/image/card9.jpg";
import image10 from "@/public/image/card10.jpg";
import image11 from "@/public/image/card11.jpg";
import image12 from "@/public/image/card12.jpg";
import ProductCard from "@/Component/ProductCard/ProductCard";
const MadeComponent = () => {
  const Images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  return (
    <div>
      <Footer backgroundColor="#FFFFFF" />
      <div className="lg:w-[1049px] lg:h-[615px] md:w-[414px] md:h-[3510px] gap-8 grid lg:grid-cols-4 md:grid-cols-1 mx-auto">
        {Images.map((image, index) => {
          return (
           <ProductCard image={image} key={index} />
          );
        })}
        <div className="w-full lg:ml-[240px] flex justify-center">
  <div className="h-[76px] lg:w-[813px] md:w-[313px] lg:pl-[360px] rounded-md bg-[#FFFFFF] border-[#BDBDBD]">
    <div className="w-full h-full flex flex-row -mt-5">
      <div className="bg-[#F3F3F3] h-full w-[84px] flex justify-center items-center border-[#BDBDBD] border rounded-l-lg">
        <h6 className="font-bold tracking-[0.2px] leading-6 text-sm w-8 h-6 text-[#BDBDBD]">
          First
        </h6>
      </div>
      <div className="w-[46px] flex justify-center items-center h-full border border-[#E9E9E9]">
        <h6 className="font-bold tracking-[0.2px] text-[#23A6F0] leading-6 text-sm w-[6px] h-6">
          1
        </h6>
      </div>
      <div className="w-[46px] flex justify-center items-center h-full border border-[#E9E9E9] bg-[#23A6F0]">
        <h6 className="font-bold tracking-[0.2px] text-[#FFFFFF] leading-6 text-sm w-[6px] h-6">
          2
        </h6>
      </div>
      <div className="w-[46px] flex justify-center items-center h-full border border-[#E9E9E9]">
        <h6 className="font-bold tracking-[0.2px] text-[#23A6F0] leading-6 text-sm w-[6px] h-6">
          3
        </h6>
      </div>
      <div className="h-full w-[84px] flex justify-center items-center border-[#BDBDBD] border rounded-r-lg">
        <h6 className="font-bold tracking-[0.2px] leading-6 text-sm w-8 h-6 text-[#23A6F0]">
          Next
        </h6>
      </div>
    </div>
  </div>
</div>
</div>
</div>


  );
};

export default MadeComponent;
