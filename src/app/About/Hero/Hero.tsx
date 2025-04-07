import Image from "next/image"
import image from "@/public/image/Heroabout.png"

const Hero = () => {
  return (
    <div className="text-[Montserrat] overflow-x-hidden">
      <div className="w-full h-auto lg:h-[729px] text-[#1A1A1A]">
        {/* Mobile Layout */}
        <div className="block lg:hidden px-4 py-8 text-center">
          <div className="relative z-10">
            <h5 className="font-bold text-base tracking-[0.1px] leading-6">ABOUT COMPANY</h5>
            <h1 className="font-bold text-4xl tracking-[0.2px] leading-tight mt-6">ABOUT US</h1>
            <h5 className="font-normal text-lg tracking-[0.2px] leading-8 text-[#4A4A4A] mt-8 max-w-[346px] mx-auto">
              Power up your day, tune into your passion, and move forward without limits—because nothing should hold you back
            </h5>
            <div className="mt-12">
              <button className="w-[195px] h-[52px] py-4 px-10 rounded-md bg-[#0E3A5D]">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#FFFFFF]">Get Quote Now</h6>
              </button>
            </div>
          </div>

          <div className="mt-12 relative w-full max-w-[415px] mx-auto">
            <div className="relative  bg-[#FFE9EA] w-full aspect-square rounded-full">
              <div className="absolute w-[120%] h-[120%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={image || "/placeholder.svg"}
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          <div className="container mx-auto  px-4 xl:px-0 py-[100px] flex flex-wrap">
            <div className="w-full lg:w-1/2 pr-4">
              <div className="max-w-[599px] px-28 py-20">
                <h5 className="font-bold text-xl tracking-[0.1px] leading-6">ABOUT COMPANY</h5>
                <h1 className="font-bold text-[58px] tracking-[0.2px] leading-[80px] pt-7">ABOUT US</h1>
                <h5 className="font-normal text-xl tracking-[0.2px] leading-8 max-w-[346px] text-[#4A4A4A] pt-10">
                Power up your day, tune into your passion, and move forward without limits—because nothing should hold you back
                </h5>
                <div className="pt-10">
                  <button className="w-[195px] h-[52px] py-4 px-10 rounded-md bg-[#0E3A5D] flex justify-center items-center gap-2">
                    <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#FFFFFF]">Get Quote Now</h6>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                <div className="absolute bg-[#977DF4] w-[15px] h-[15px] top-0 right-0 rounded-full"></div>
                <div className="absolute bg-[#977DF4] w-[15px] h-[15px] top-[200px] right-[100px] rounded-full"></div>
                <div className="absolute bg-[#FFE9EA] w-20 h-20 -left-10 top-[100px] rounded-full"></div>
                <div className="relative bg-[#FFE9EA] w-[485px] h-[485px] rounded-full flex justify-center items-center mx-auto">
                  <div className="absolute w-[110%] h-[110%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt="Hero Image"
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-auto lg:h-[236px] px-4 lg:px-0">
        {/* Mobile Layout */}
        <div className="block lg:hidden text-center py-8">
          <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#E74040] mb-5">Problems trying</p>
          <h2 className="font-bold text-xl leading-8 tracking-[0.1px] text-[#1A1A1A] mb-6 w-[321px] mx-auto">
          Unleashing Freedom with Seamless Sound & Power.
          </h2>
          <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373] w-[321px] mx-auto">
          We provide high-quality wireless audio and long-lasting power solutions to keep you connected without limits. No more low battery or tangled wires—just uninterrupted sound and power wherever you go.
          </p>
        </div>
        {/* Desktop Layout - Fixed */}
        <div className="hidden lg:flex justify-center">
          <div className="container mx-auto px-4 xl:px-32 py-6 flex flex-wrap">
            <div className="w-full lg:w-1/2 pr-4">
              <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#E74040] pb-5">Problems trying</p>
              <h2 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#1A1A1A] max-w-[394px]">
              Unleashing Freedom with Seamless Sound & Power.
              </h2>
            </div>
            <div className="w-full lg:w-1/2 flex items-center">
              <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#4A4A4A] max-w-[500px]">
                We provide high-quality wireless audio and long-lasting power solutions to keep you connected without limits. No more low battery or tangled wires—just uninterrupted sound and power wherever you go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

