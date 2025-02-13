import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export interface ProductsProps {
  price: string | number
  _id : string | number 
  title: string
  imageUrl: string | StaticImageData  
  category : string
  
  dicountPercentage : number | string | undefined
  onclick?: () => void
}

const ProductCard = ({ imageUrl , _id , title , price , dicountPercentage , category , onclick  }: ProductsProps) => {
  return (
   <div key={_id} onClick={onclick} className="w-full max-w-[280px] mx-auto flex justify-center items-center mt-4">
      <div className="flex flex-col h-full text-[#FFFFFF] w-full">
        <div className="relative w-full pb-[178%]">
          <Link href={`/products/${_id}`}>
          <Image
            src={imageUrl}
            alt={"Product"}
            className="absolute inset-0 h-full w-full object-cover"
            fill
          />
          </Link>
        </div>
        <div className="flex-grow flex flex-col justify-center items-center gap-2 p-4 bg-white w-full">
          <div className="text-center w-full">
            <h5 className="text-[#252B42] font-bold text-base leading-5 tracking-[0.1px]">{title}</h5>
          </div>
          <Link href='' className="text-[#737373] font-bold text-sm leading-5 tracking-[0.2px] text-center">{category}</Link>
          <div className="flex gap-2 items-center justify-center w-full">
            <h5 className="font-bold text-[#BDBDBD] text-base leading-5 tracking-[0.1px]">${dicountPercentage}</h5>
            <h5 className="font-bold text-[#23856D] text-base leading-5 tracking-[0.1px]">${price}</h5>
          </div>
          <div className="flex gap-[6px] justify-center w-full">
            <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
            <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
            <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
            <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

