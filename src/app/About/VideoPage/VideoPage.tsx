import Image from "next/image";
import React from "react";
import image from "@/public/image/imagevideo.jpg";
import image1 from "@/public/image/socailcard1.jpg";
import image2 from "@/public/image/socailcard2.jpg";
import image3 from "@/public/image/socailcard3.jpg";
import SocialCards from "@/Component/SocialCards/SocialCards";


const VideoPage = () => {
  let details = [
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
      <div className="w-full h-[264px] ">
        <div className="w-full h-full pl-[105px] py-10 gap-12">
          <div className="w-full h-[104px] gap-8 flex justify-center">
            {details.map((detail, index) => {
              return (
                <div key={index}>
                  <div className="w-[238px] h-full flex justify-center  text-center flex-col">
                    <h1 className="w-[100px] h-20 font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">
                      {detail.title}
                    </h1>
                    <h5
                      className="w-36 h-6 font-bold text-base leading-6 tracking-[0.1px] text-[#737373]"
                      style={{ width: detail.width }}
                    >
                      {detail.description}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full h-[746px] ">
        <div className="w-full h-[746px] flex justify-center">
          <div className="w-[989px] h-[540px]  pl-8 relative ">
            <Image
              src={image}
              alt="VideoImage"
              className="w-full h-full rounded-3xl"
            />
            <button className="bg-[#23A6F0] w-24 h-24 rounded-[50%] absolute inset-0 top-[40%] left-[45%]">
              <i className="fa-solid fa-play text-[#FFFFFF] w-5 h-6 text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[826px] text-[#252B42] flex justify-center items-center -mt-16">
        <div className="w-full h-[819px] gap-28 flex flex-col items-center text-center">
          <div className="h-[134px] w-[633px] pl-[100px]">
            <h2 className="font-bold tracking-[0.2px]  w-[469px] h-[50px] text-[40px] leading-[50px]">
              Meet Our Team
            </h2>
            <p className="font-normal tracking-[0.2px] text-sm leading-5 w-[469px] h-10 mt-2">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="w-full gap-8 h-[383px] flex justify-center items-center">
          {cardImages.map((image, index) => (
              <SocialCards key={index} image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
