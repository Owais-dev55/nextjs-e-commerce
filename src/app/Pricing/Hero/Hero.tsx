import Brandlogos from "@/Component/FrequentComponent/Brandlogos";
import Navbar2 from "@/Component/Navbar2/Navbar2";
import React from "react";

const Hero = () => {
  const cards = [
    {
      title: "FREE",
      color: "#FFFFFF",
      textColor: "#252B42",
      Price: 0,
    },
    {
      title: "STANDARD",
      color: "#252B42",
      textColor: "#FFFFFF",
      Price: 9.99,
      Height: "680px",
    },
    {
      title: "PREMIUM",
      color: "#FFFFFF",
      textColor: "#252B42",
      Price: 19.99,
    },
  ];
  const repeatDiv = Array(3).fill(null);
  const repeatDivColor = Array(2).fill(null);

  return (
    <div className="bg-[#FAFAFA] w-full min-h-[1762px] lg:h-[1762px]  lg:pt-24 overflow-x-hidden">
      <div className="min-h-[352px] lg:h-[352px] w-full bg-[#FFFFFF]">
        <Navbar2 />
        <div className="w-full min-h-[280px] lg:h-[280px] flex justify-center mt-16">
          <div className="w-full max-w-[870px] text-center px-4">
            <div className="max-w-[788px] mx-auto">
              <h5 className="font-bold text-base leading-6 tracking-[0.1px] text-[#737373]">
                Pricing
              </h5>
              <h1 className="font-bold text-4xl lg:text-[58px] leading-tight lg:leading-[80px] tracking-[0.2px] text-[#252B42]">
                Simple Pricing
              </h1>
              <div className="w-full gap-4 pt-3 flex justify-center items-center text-center">
                <h3 className="font-bold text-[#252B42] tracking-[0.2px] leading-6 text-sm">
                  Home
                </h3>
                <div className="text-[#BDBDBD] px-2">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <h6 className="font-bold text-[#737373] tracking-[0.2px] leading-6 text-sm">
                  Pricing
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center  px-4">
        <div className="max-w-[700px] text-center mb-8">
          <h2 className="text-[#252B42] font-bold text-4xl leading-[50px]">
            Pricing
          </h2>
          <p className="text-[#737373] tracking-[0.2px] font-normal text-sm leading-5 mt-4 max-w-[496px] mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center px-4 mb-10">
        <div className="flex items-center gap-4">
          <h6 className="font-bold text-[#252B42] tracking-[0.2px] leading-6 text-base">
            Monthly
          </h6>
          <div className="w-11 h-6 rounded-2xl border-[#23A6F0] border">
            <div className="w-5 h-5 border border-[#D0D0D0] bg-[#EBEBEB] rounded-full ml-[3px] mt-[1px]"></div>
          </div>
          <h6 className="font-bold text-[#252B42] tracking-[0.2px] leading-6 text-base">
            Yearly
          </h6>
          <button className="px-5 py-2 rounded-[37px] bg-[#B2E3FF]">
            <h6 className="font-bold text-[#23A6F0] tracking-[0.2px] leading-6 text-base">
              Save 25%
            </h6>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center px-4 mb-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-[327px] flex flex-col items-center justify-center gap-6 p-4 shadow-lg rounded-md"
            style={{
              backgroundColor: card.color,
              color: card.textColor,
              height: card.Height || "583px",
            }}
          >
            <div className="flex flex-col justify-center items-center text-center w-full">
              <h6 className="font-bold text-2xl leading-6 tracking-[0.1px] uppercase mt-7">
                {card.title}
              </h6>
              <h6 className="font-bold text-base leading-6 tracking-[0.1px] pt-2 max-w-[160px]">
                Organize across all apps by hand
              </h6>
            </div>
            <div className="flex items-start gap-3 mt-5">
              <h2 className="font-bold tracking-[0.2px] leading-[50px] text-[#23A6F0] text-[40px]">
                {card.Price}
              </h2>
              <div className="flex flex-col">
                <h3 className="font-bold text-2xl leading-6 tracking-[0.1px] pt-2 text-[#23A6F0]">
                  $
                </h3>
                <h5 className="font-bold text-sm leading-6 tracking-[0.1px] pt-2 text-[#23A6F0]">
                  Per Month
                </h5>
              </div>
            </div>
            <div className="w-full max-w-[247px] space-y-3">
              {repeatDiv.map((_, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <div className="w-8 h-8 rounded-full bg-[#2DC071] flex justify-center items-center">
                    <i className="fa-solid fa-check text-[#FFFFFF]"></i>
                  </div>
                  <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">
                    Unlimited product updates
                  </h6>
                </div>
              ))}
              {repeatDivColor.map((_, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <div className="w-8 h-8 rounded-full bg-[#BDBDBD] flex justify-center items-center">
                    <i className="fa-solid fa-check text-[#FFFFFF]"></i>
                  </div>
                  <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">
                    1GB Cloud storage
                  </h6>
                </div>
              ))}
              <button className="w-full h-[52px] rounded-md bg-[#23A6F0] flex justify-center items-center mt-8">
                <h6 className="font-bold text-[#FFFFFF] tracking-[0.2px] leading-6 text-base">
                  Try for free
                </h6>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <h4 className="text-[#252B42] font-normal tracking-[0.2px] leading-8 text-xl text-center mb-5">
          Trusted By Over 4000 Big Companies
        </h4>
        <Brandlogos />
      </div>
    </div>
  );
};

export default Hero;

