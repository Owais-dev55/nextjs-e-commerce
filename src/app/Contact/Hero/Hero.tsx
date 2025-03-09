import Image from "next/image"
import image from "@/public/image/contactHero.png"

const Hero = () => {
  return (
    <div className="w-full py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="w-full md:w-1/2 xl:px-32 py-10 flex flex-col items-center md:items-start">
            {/* Contact Us Header */}
            <div className="w-full mb-6 text-center md:text-left">
              <h4 className="font-bold text-xl leading-6 tracking-[0.1px] text-[#1A1A1A]">CONTACT US</h4>
            </div>

            {/* Main Heading */}
            <div className="mb-6 text-center md:text-left">
              <h1 className="max-w-xs md:max-w-sm mx-auto md:mx-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-[80px] tracking-[0.2px] text-[#1A1A1A]">
                Get in touch today!
              </h1>
            </div>

            {/* Description */}
            <div className="mb-6 text-center md:text-left">
              <p className="max-w-xs md:max-w-sm mx-auto md:mx-0 font-normal text-lg md:text-xl leading-8 text-[#4A4A4A] tracking-[0.2px]">
                We know how large objects will act, but things on a small scale
              </p>
            </div>

            {/* Contact Information */}
            <div className="w-full max-w-md text-center md:text-left mb-6">
              <h3 className="font-bold text-xl md:text-2xl tracking-[0.1px] leading-8 text-[#1A1A1A]">
                Phone ; +451 215 215
              </h3>
              <h3 className="font-bold text-xl md:text-2xl pt-2 tracking-[0.1px] leading-8 text-[#1A1A1A]">
                Fax : +451 215 215
              </h3>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-8 w-full max-w-md pt-4 text-[#1A1A1A]">
              <i className="fa-brands fa-twitter text-2xl"></i>
              <i className="fa-brands fa-square-facebook text-2xl"></i>
              <i className="fa-brands fa-instagram text-2xl"></i>
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[650px] mt-8 md:mt-0">
            <div className="relative w-full h-full">
              <Image
                src={image || "/placeholder.svg"}
                alt="Contact Hero Image"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

