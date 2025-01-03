import image1 from '@/public/image/image1.jpeg'
import image2 from '@/public/image/image2.jpeg'
import image3 from '@/public/image/image3.jpeg'
import image4 from '@/public/image/image4.jpeg'
import image5 from '@/public/image/image5.jpeg'
import image6 from '@/public/image/image6.jpeg'
import image7 from '@/public/image/image7.jpeg'
import image8 from '@/public/image/image8.jpeg'

import ProductCard from "../ProductCard/ProductCard";

export default function BestSeller() {   
  const Images = [
    image1 ,
    image2 ,
    image3 , 
    image4 , 
    image5 ,
    image6 , 
    image7 , 
    image8 , 
  ]
  return (
  <main>
  <div className="relative lg:w-[1124]  lg:max-w-[1124px] mx-auto top-20 bottom-20  gap-20 left-10">
    <div className="h-[102] w-[692] flex flex-col items-center mb-12 font-[
Montserrat] gap-2">
      <div className="w-[191] h-[30] flex"><h4 className="text-[#737373] font-normal text-[20px] leading-8 tracking-[0.2]">Featured Projects</h4></div>
      <div className="w-[299] h-[32] flex"><h3 className="text-[#252B42] font-bold text-[24px] leading-8 tracking-[0.2]">BestSeller Products</h3></div>
<div className="w-[347] h-5 flex"><p className="text-[#737373] font-noraml text-[14px] leading-5 tracking-[0.2]">Problems trying to resolve the conflict between </p></div>
    </div>
    <div className="lg:w-[1049px] lg:h-[615px] md:w-[414px] md:h-[3510px] gap-8 grid lg:grid-cols-4 md:grid-cols-1">
    {
      Images.map((image, index) => {
        return (
          <ProductCard image={image} key={index} />
        )
      })
    }
    </div>
  </div>
  </main>
  );
}