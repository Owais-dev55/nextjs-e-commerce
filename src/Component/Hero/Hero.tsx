import Image from "next/image"
import image from "@/public/image/airpods.jpg"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row bg-black h-auto min-h-[100svh]">
      <div className="flex w-full lg:w-1/2">
        <div className="container mx-auto h-full flex flex-col justify-center items-start px-6 sm:px-10 lg:px-12 xl:px-20 text-white py-12 lg:py-0">
          <div className="w-full max-w-[600px] space-y-4 sm:space-y-6">
            <h5 className="font-bold text-sm sm:text-base lg:text-xl leading-6 tracking-wider">SUMMER 2020</h5>
            <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[301px] sm:max-w-none">
              NEW COLLECTION
            </h1>
            <h5 className="font-normal text-sm sm:text-base md:text-lg leading-6 md:leading-8 text-[#FAFAFA] max-w-[301px] sm:max-w-[400px] lg:max-w-[500px]">
              We know how large objects will act, but things on a small scale.
            </h5>
            <div className="pt-2 sm:pt-4">
              <Link href={"/ProductListpage"}>
                <button className="bg-[#0E3A5D] hover:bg-[#1C4B6E] transition-colors w-full sm:w-[221px] h-12 sm:h-14 md:h-16 rounded-lg">
                  <h3 className="font-bold text-sm sm:text-base uppercase text-center">Shop now</h3>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-auto relative">
        <Image
          src={image || "/placeholder.svg"}
          alt="airpods"
          className="object-cover object-center w-full h-full"
          priority
          fill={true}
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}

export default Hero

