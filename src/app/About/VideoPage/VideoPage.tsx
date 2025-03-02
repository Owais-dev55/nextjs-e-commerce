import Image from "next/image"
import image from "@/public/image/imagevideo.jpg"
import image1 from "@/public/image/socailcard1.jpg"
import image2 from "@/public/image/socailcard2.jpg"
import image3 from "@/public/image/socailcard3.jpg"
import SocialCards from "@/Component/SocialCards/SocialCards"

const VideoPage = () => {
  const details = [
    {
      title: "15K",
      description: "Happy Customers",
    },
    {
      title: "150K",
      description: "Monthly Visitors",
    },
    {
      title: "15",
      description: "Countries  Worldwide",
      width: "177px",
    },
    {
      title: "100+",
      description: "Top Partners",
    },
  ]

  const cardImages = [image1, image2, image3]

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <div key={index} className="text-center flex flex-col items-center justify-center">
              <h1 className="font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight tracking-[0.2px] text-[#1A1A1A] mb-2">
                {detail.title}
              </h1>
              <h5
                className="font-bold text-sm sm:text-base leading-6 tracking-[0.1px] text-[#4A4A4A]"
                style={{ maxWidth: detail.width }}
              >
                {detail.description}
              </h5>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 lg:py-16">
        <div className="relative w-full max-w-[989px] mx-auto aspect-video">
          <Image
            src={image || "/placeholder.svg"}
            alt="VideoImage"
            layout="fill"
            objectFit="cover"
            className="rounded-xl lg:rounded-3xl"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#23A6F0] w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-play text-white text-xl sm:text-2xl lg:text-3xl"></i>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 lg:py-16">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-[633px] mb-16">
            <h2 className="font-bold tracking-[0.2px] text-3xl sm:text-4xl lg:text-[40px] leading-tight mb-4 text-[#1A1A1A]">
              Meet Our Team
            </h2>
            <p className="font-normal tracking-[0.2px] text-sm sm:text-base leading-relaxed text-[#4A4A4A] max-w-[469px] mx-auto">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
              mechanics
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {cardImages.map((image, index) => (
              <SocialCards key={index} image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPage

