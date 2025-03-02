import Brandlogos from "@/Component/FrequentComponent/Brandlogos";
import Navbar2 from "@/Component/Navbar2/Navbar2";
import React from "react";

const Hero = () => {
  const cards = [
    {
      title: "FREE",
      color: "#FFFFFF",
      textColor: "#1A1A1A",
      Price: 0,
    },
    {
      title: "STANDARD",
      color: "#1A1A1A",
      textColor: "#FFFFFF",
      Price: 9.99,
      Height: "680px",
    },
    {
      title: "PREMIUM",
      color: "#FFFFFF",
      textColor: "#1A1A1A",
      Price: 19.99,
    },
  ];
  const repeatDiv = Array(3).fill(null);
  const repeatDivColor = Array(2).fill(null);

  return (
    <div className="bg-[#FAFAFA] w-full min-h-[1762px] lg:pt-24 overflow-x-hidden box-border">
      <div className="min-h-[352px] bg-[#FFFFFF]">
        <Navbar2 />
        <div className="min-h-[280px] flex justify-center mt-16">
          <div className="w-full max-w-screen-md text-center px-4">
            <div className="mx-auto">
              <h5 className="font-bold text-base text-[#4A4A4A]">Pricing</h5>
              <h1 className="font-bold text-4xl lg:text-[58px] text-[#1A1A1A] leading-tight">
                Simple Pricing
              </h1>
              <div className="w-full gap-4 pt-3 flex justify-center items-center">
                <h3 className="font-bold text-[#1A1A1A] text-sm">Home</h3>
                <div className="text-[#BDBDBD] px-2">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <h6 className="font-bold text-[#4A4A4A] text-sm">Pricing</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center px-4">
        <div className="max-w-screen-md text-center mb-8">
          <h2 className="text-[#1A1A1A] font-bold text-4xl">Pricing</h2>
          <p className="text-[#4A4A4A] text-sm mt-4 max-w-md mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center px-4 mb-10">
        <div className="flex items-center gap-4">
          <h6 className="font-bold text-[#1A1A1A] text-base">Monthly</h6>
          <div className="w-11 h-6 rounded-2xl border-[#0E3A5D] border">
            <div className="w-5 h-5 border bg-[#EBEBEB] rounded-full ml-[3px] mt-[1px]"></div>
          </div>
          <h6 className="font-bold text-[#1A1A1A] text-base">Yearly</h6>
          <button className="px-5 py-2 rounded-full bg-[#B2E3FF]">
            <h6 className="font-bold text-[#0E3A5D] text-base">Save 25%</h6>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center px-4 mb-20 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-xs flex flex-col items-center gap-6 p-6 shadow-lg rounded-md"
            style={{
              backgroundColor: card.color,
              color: card.textColor,
              height: card.Height || "583px",
            }}
          >
            <div className="text-center w-full">
              <h6 className="font-bold text-2xl uppercase mt-7">{card.title}</h6>
              <h6 className="font-bold text-base pt-2 max-w-xs">Organize across all apps by hand</h6>
            </div>
            <div className="flex items-start gap-3 mt-5">
              <h2 className="font-bold text-[#0E3A5D] text-[40px]">{card.Price}</h2>
              <div className="flex flex-col">
                <h3 className="font-bold text-2xl text-[#0E3A5D]">$</h3>
                <h5 className="font-bold text-sm text-[#0E3A5D]">Per Month</h5>
              </div>
            </div>
            <div className="w-full max-w-[247px] space-y-3">
              {repeatDiv.map((_, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <div className="w-8 h-8 bg-[#2DC071] flex justify-center items-center rounded-full">
                    <i className="fa-solid fa-check text-white"></i>
                  </div>
                  <h6 className="font-bold text-sm">Unlimited product updates</h6>
                </div>
              ))}
              {repeatDivColor.map((_, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <div className="w-8 h-8 bg-[#BDBDBD] flex justify-center items-center rounded-full">
                    <i className="fa-solid fa-check text-white"></i>
                  </div>
                  <h6 className="font-bold text-sm">1GB Cloud storage</h6>
                </div>
              ))}
              <button className="w-full h-12 bg-[#0E3A5D] rounded-md flex justify-center items-center mt-8">
                <h6 className="font-bold text-white text-base">Try for free</h6>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <h4 className="text-[#1A1A1A] text-xl text-center mb-5">Trusted By Over 4000 Big Companies</h4>
        <Brandlogos />
      </div>
    </div>
  );
};

export default Hero;
