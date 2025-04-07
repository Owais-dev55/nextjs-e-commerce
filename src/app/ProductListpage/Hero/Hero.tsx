import Image from "next/image"
import React from "react"
import image1 from "@/public/image/airpods-shop.jpg"
import image2 from "@/public/image/earbuds.jpg"
import image3 from "@/public/image/power-bank.jpg"

const Hero = () => {
  const images = [
    {
      _id: 1,
      title: "Airpods",
      items: '3 items',
      image: image1
    }, 
    {
      _id: 2, 
      title: "Earbuds",
      items: '2 items',
      image: image2
    }, {
      _id: 3,
      title: "PowerBanks",
      items: '1 items',
      image: image3
    }
  ]

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
          {images.map((item, index) => (
            <div key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="relative aspect-[1.5/1]">
                <div className="absolute inset-0 z-20 text-white flex justify-center items-center flex-col">
                  <h5 className="font-bold text-base leading-6 tracking-wider">{item.title}</h5>
                  <h5 className="font-normal text-sm leading-6 tracking-[0.2px]">{item.items}</h5>
                </div>
                <Image
                  src={item.image || "/placeholder.svg"}
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
    </main>
  )
}

export default Hero

