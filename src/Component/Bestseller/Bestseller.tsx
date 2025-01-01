import Image from "next/image";
import image1 from '@/public/image/image1.jpeg'
import image2 from '@/public/image/image2.jpeg'
import image3 from '@/public/image/image3.jpeg'
import image4 from '@/public/image/image4.jpeg'
import image5 from '@/public/image/image5.jpeg'
import image6 from '@/public/image/image6.jpeg'
import image7 from '@/public/image/image7.jpeg'
import image8 from '@/public/image/image8.jpeg'
import Link from "next/link";

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
  <div className="relative w-[1124] h-[1652] max-w-[1124px] mx-auto top-20 bottom-20  gap-20 left-10">
    <div className="h-[102] w-[692] flex flex-col items-center mb-12 font-[
Montserrat] gap-2">
      <div className="w-[191] h-[30] flex"><h4 className="text-[#737373] font-normal text-[20px] leading-8 tracking-[0.2]">Featured Projects</h4></div>
      <div className="w-[299] h-[32] flex"><h3 className="text-[#252B42] font-bold text-[24px] leading-8 tracking-[0.2]">BestSeller Products</h3></div>
<div className="w-[347] h-5 flex"><p className="text-[#737373] font-noraml text-[14px] leading-5 tracking-[0.2]">Problems trying to resolve the conflict between </p></div>
    </div>
    <div className="w-[1049px] h-[615px] gap-8 grid grid-cols-4">
    {
      Images.map((image, index) => {
        return (

      <div className="w-[239px] h-[615px] text-[#FFFFFF] ">
        <div className="w-[239px] h-[427px]">
          <Image
          src={image}
          alt={"Product" + index}
          className="h-full w-full"
          objectFit="cover"
          />
        </div>
        <div className="w-[239px] h-[188px] top-6 right-6 left-6 bottom-6 gap-2 flex justify-center items-center flex-col">
        <div className="h-6 w-[131px]">
        <h5 className=" text-[#252B42] font-bold text-[16px] leading-5 tracking-[0.1]">Graphic Design</h5>
        </div>
        <Link href='' className="h-6 w-[146px] text-[#737373] font-bold text-[14px] leading-5 tracking-[0.2]">English Department</Link>
        <div className="w-[108] h-[34] gap-2 top-[5px] right-[5px] bottom-[5px] left-[3px] flex  ">
        <h5 className=" font-bold text-[#BDBDBD] text-[16px] leading-5 tracking-[0.1]">$16.48</h5>
        <h5 className=" h-6 w-[52px] font-bold text-[#23856D] text-[16px] leading-5 tracking-[0.1]">$6.48</h5>
        </div>
        <div className="w-[82.32px] h-4 gap-[6.02px] flex ">
          <div className="w-4 h-4 rounded-[50%] bg-[#23A6F0]"></div>
          <div className="w-4 h-4 rounded-[50%]  bg-[#23856D]"></div>
          <div className="w-4 h-4 rounded-[50%] bg-[#E77C40]"></div>
          <div className="w-4 h-4 rounded-[50%] bg-[#252B42]"></div>
        </div>
      </div>
    </div>   
        )
      })
    }
    </div>
  </div>
  </main>
  );
}