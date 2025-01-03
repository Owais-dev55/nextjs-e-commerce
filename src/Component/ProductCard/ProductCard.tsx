import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface imagesProp {
  image: string | StaticImageData ,  
}

const ProductCard = ( {image }: imagesProp) => {
  return (
    <div>
         
      <div className="w-[239px] h-[615px] text-[#FFFFFF] " >
        <div className="w-[239px] h-[427px]">
          <Image
          src={image}
          alt={"Product" }
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
    </div>
    
  )
}

export default ProductCard