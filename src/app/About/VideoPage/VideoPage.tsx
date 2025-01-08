import Image from "next/image";
import React from "react";
import image from "@/public/image/imagevideo.jpg";
import image1 from "@/public/image/socailcard1.jpg";
import image2 from "@/public/image/socailcard2.jpg";
import image3 from "@/public/image/socailcard3.jpg";
import SocialCards from "@/Component/SocialCards/SocialCards";

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
  ];

  const cardImages = [image1, image2, image3];
  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="w-full bg-white">
        <div className="w-full min-h-[264px] px-4 lg:px-[105px] py-10">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
            {details.map((detail, index) => (
              <div
                key={index}
                className="w-full sm:w-[238px] text-center flex flex-col items-center justify-center"
              >
                <h1 className="font-bold text-4xl lg:text-[58px] leading-tight lg:leading-[80px] tracking-[0.2px] text-[#252B42] mb-2">
                  {detail.title}
                </h1>
                <h5
                  className="font-bold text-sm lg:text-base leading-6 tracking-[0.1px] text-[#737373]"
                  style={{ maxWidth: detail.width }}
                >
                  {detail.description}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-full w-[414px] lg:h-[746px] h-[477px] mx-auto">
        <div className="lg:w-full lg:h-[746px]  flex justify-center ">
          <div className="lg:w-[989px] lg:h-[540px] w-[357px] h-[316px] lg:pl-8 relative ">
            <Image
              src={image}
              alt="VideoImage"
              className="w-full h-full lg:rounded-3xl rounded-xl"
            />
            <button className="bg-[#23A6F0] lg:w-24 lg:h-24 h-14 w-14 rounded-[50%] absolute inset-0 top-[40%] left-[45%]">
              <i className="fa-solid fa-play text-[#FFFFFF] lg:w-5 lg:h-6 w-3 h-3 text-xl lg:text-3xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full text-[#252B42]  -mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Header Section */}
            <div className="text-center max-w-[633px] mb-16 lg:mb-28 ">
              <h2 className="font-bold tracking-[0.2px] text-3xl lg:text-[40px] leading-[50px] mb-4">
                Meet Our Team
              </h2>
              <p className="font-normal tracking-[0.2px] text-sm leading-5 text-[#737373] lg:w-[469px] w-[313px] mx-auto">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <div className="max-w-[1200px] min-w-[414px] grid grid-cols-1  lg:grid-cols-3 gap-8 justify-items-center  mb-16">
              {cardImages.map((image, index) => (
                <SocialCards key={index} image={image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
