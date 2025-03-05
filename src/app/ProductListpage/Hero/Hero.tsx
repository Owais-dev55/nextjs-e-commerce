import Image from "next/image"
import React from "react"
import image1 from "@/public/image/herocard1.jpg"
import image2 from "@/public/image/heroimage.jpeg"
import image3 from "@/public/image/herocard2.jpg"
import image4 from "@/public/image/herocard3.jpg"
import image5 from "@/public/image/herocard4.jpg"
import Category from "./Category"

const Hero = () => {
  const images = [image1, image2, image3, image4, image5]

  return (
    <main className="w-full">
      <div className="bg-[#FAFAFA] text-[Montserrat] py-6 px-4 lg:px-20">
        <div className="lg:flex lg:justify-between md:items-end">
          <h3 className="font-bold text-[#1A1A1A] leading-8 tracking-wider text-2xl text-center lg:text-left lg:ml-[10%]">
            Shop
          </h3>
          <div className="flex items-center gap-5 justify-center lg:justify-end text-sm text-[#1A1A1A] mt-4 lg:mt-0 lg:mr-28">
            <h3 className="font-bold">Home</h3>
            <i className="fa-solid fa-chevron-right text-[#BDBDBD] tracking-wider"></i>
            <h6 className="font-bold text-[#BDBDBD] tracking-wider">Shop</h6>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] w-full px-4 lg:px-20 py-6">
        <div className="flex flex-col sm:flex-row flex-wrap">
          {images.map((image, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
              <div className="relative aspect-[1.5/1]">
                <div className="absolute inset-0 z-20 text-white flex justify-center items-center flex-col">
                  <h5 className="font-bold text-base leading-6 tracking-wider">CLOTHS</h5>
                  <h5 className="font-normal text-sm leading-6 tracking-[0.2px]">5 Items</h5>
                </div>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`product${index}`}
                  layout="fill"
                  style={{objectFit: 'cover'}}
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Category />
    </main>
  )
}

export default Hero

