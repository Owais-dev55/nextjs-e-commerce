import Image from "next/image"
import image1 from "@/public/image/WhatsApp Image 2024-12-09 at 7.24.35 PM (2).jpeg"
import image2 from "@/public/image/WhatsApp Image 2024-12-09 at 7.24.37 PM (1).jpeg"
import image3 from "@/public/image/WhatsApp Image 2024-12-09 at 7.24.35 PM.jpeg"

const FeaturedProducts = () => {
  const images = [image1, image2, image3]
  return (
    <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 mx-auto">
      <div className="w-full max-w-[1050px] mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#0E3A5D] mb-2">Practice Advice</h6>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-snug lg:leading-[50px] tracking-[0.2px] text-[#1A1A1A] mb-4">
            Featured Posts
          </h2>
          <p className="font-bold text-sm sm:text-base leading-5 sm:leading-6 tracking-[0.2px] text-[#4A4A4A] max-w-[469px] mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
            mechanics.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div className="w-full max-w-[328px] mx-auto shadow-md rounded-lg overflow-hidden" key={index}>
              <div className="relative h-[200px] sm:h-[250px] w-full">
                <div className="absolute top-5 left-5 h-6 w-14 rounded bg-[#E74040] flex justify-center items-center">
                  <h6 className="font-bold text-sm tracking-[0.2px] text-white">New</h6>
                </div>
                <Image src={image || "/placeholder.svg"} alt={`PRODUCT ${index + 1}`} layout="fill" objectFit="cover" />
              </div>

              <div className="px-4 py-4">
                <div className="flex gap-4 mb-4 flex-wrap">
                  <h6 className="text-[#8EC2F2] font-normal text-[12px] tracking-[0.2px]">Google</h6>
                  <h6 className="text-[#4A4A4A] font-normal text-[12px] tracking-[0.2px]">Trending</h6>
                  <h6 className="text-[#4A4A4A] font-normal text-[12px] tracking-[0.2px]">New</h6>
                </div>
                <h4 className="text-[#252B42] font-normal text-base sm:text-lg lg:text-xl tracking-[0.2px] mb-2">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p className="text-[#4A4A4A] font-normal text-[14px] tracking-[0.2px] mb-4">
                  We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
                </p>

                <div className="flex justify-between items-center text-[14px] tracking-[0.2px] text-[#4A4A4A]">
                  <div className="flex items-center gap-2">
                    <i className="fa-regular fa-alarm-clock text-[#23A6F0]"></i>
                    <span>22 April 2021</span>
                  </div>
                  <span>10 comments</span>
                </div>

                <h4 className="mt-4 text-[#4A4A4A] font-bold text-[14px] tracking-[0.2px] cursor-pointer hover:underline">
                  Learn More
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts

