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
      ml: "48px",
      Height: "680px",
      mr: "70px",
    },
    {
      title: "PREMIUM",
      color: "#FFFFFF",
      textColor: "#252B42",
      Price: 19.99,
      ml: "70px",
      mr: "40px",
    },
  ];
  const repeatDiv = Array(3).fill(null);
  const repeatDivColor = Array(2).fill(null);

  return (
    <div className="bg-[#FAFAFA] w-full h-[1762px] pt-24">
      <div className="h-[352px] w-full bg-[#FFFFFF]">
        <Navbar2 />
        <div className="w-full h-[280px] flex justify-center mt-16">
          <div className="w-[870px] text-center">
            <div className="w-[788px] mx-auto gap-4">
              <h5 className="font-bold text-base leading-6 tracking-[0.1px] text-[#737373]">
                WHAT WE DO
              </h5>
              <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">
                Innovation tailored for you
              </h1>
              <div className="w-full gap-4 pt-3 flex justify-center items-center text-center">
                <h3 className="font-bold text-[#252B42] tracking-[0.2px] leading-6 text-sm">
                  Home
                </h3>
                <div className="text-[#BDBDBD] px-2">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <h6 className="font-bold text-[#737373] tracking-[0.2px] leading-6 text-sm">
                  Team
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[250px] flex justify-center items-center">
        <div className="max-w-[700px] text-center mb-8">
          <h2 className="text-[#252B42] font-bold text-[40px] leading-[50px] ml-5">
            Pricing
          </h2>
          <p className="text-[#737373] tracking-[0.2px]  font-normal text-sm leading-5 mt-4 w-[496px] h-10  ml-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="w-full h-11 gap-4 ml-16 flex justify-center items-center -mt-5">
        <div className="w-96 h-7 gap-4 flex">
          <h6 className="font-bold text-[#252B42] tracking-[0.2px] leading-6 text-base w-16 h-6">
            Monthly
          </h6>
          <div className="w-11 h-6 rounded-2xl border-[#23A6F0] border">
            <div className="w-5 h-5 border border-[#D0D0D0] bg-[#EBEBEB] rounded-full ml-[3px] mt-[1px]"></div>
          </div>
          <h6 className="font-bold text-[#252B42] tracking-[0.2px] leading-6 text-base w-12 h-6 -mt-1x">
            Yearly
          </h6>

          <button className="w-32 h-11  px-5 rounded-[37px] gap-2 bg-[#B2E3FF] -mt-2">
            <h6 className="font-bold text-[#23A6F0] tracking-[0.2px] leading-6 text-base w-[89px] h-6">
              Save 25%
            </h6>
          </button>
        </div>
      </div>
      <div className="w-full h-[704px] flex justify-center items-center mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[327px] h-[583px] flex flex-col items-center justify-center gap-6 p-4 shadow-lg rounded-md"
            style={{
              backgroundColor: card.color,
              color: card.textColor,
              height: card.Height,
            }}
          >
            <div className="flex flex-col justify-center items-center text-center w-full">
              <h6
                className="font-bold text-2xl leading-6 tracking-[0.1px] w-16 h-8  uppercase  mt-7"
                style={{ marginRight: card.mr }}
              >
                {card.title}
              </h6>
              <h6 className="font-bold text-base leading-6 tracking-[0.1px] pt-2  w-[160px] h-12">
                Organize across all apps by hand
              </h6>
            </div>
            <div className="h-14 w-28 gap-3 flex mt-5">
              <h2 className="w-7 h-12 font-bold tracking-[0.2px] leading-[50px]  text-[#23A6F0] text-[40px]">
                {card.Price}
              </h2>
              <div className="h-full w-[76px] ">
                <h3
                  className="font-bold text-2xl leading-6 tracking-[0.1px] pt-2 text-[#23A6F0] w-4 h-8"
                  style={{ marginLeft: card.ml }}
                >
                  $
                </h3>
                <h5 className="font-bold text-sm leading-6 tracking-[0.1px] pt-2 text-[#23A6F0] w-[76px] h-6">
                  Per Month
                </h5>
              </div>
            </div>
            <div className="w-[247px] h-[704px] gap-4  ">
              {repeatDiv.map((_, index) => {
                return (
                  <div className="w-full h-8 gap-2 flex mt-3" key={index}>
                    <div className="w-8 h-8 rounded-[50%] bg-[#2DC071] flex justify-center items-center">
                      <i className="fa-solid fa-check text-[#FFFFFF] w-4 h-3"></i>
                    </div>
                    <h6 className="font-bold text-sm leading-6 tracking-[0.2px] pt-2  w-[205px] h-7 -mt-1">
                      Unlimited product updates
                    </h6>
                  </div>
                );
              })}
              {repeatDivColor.map((_, index) => {
                return (
                  <div className="w-full h-8 gap-2 flex mt-3" key={index}>
                    <div className="w-8 h-8 rounded-[50%] bg-[#BDBDBD] flex justify-center items-center">
                      <i className="fa-solid fa-check text-[#FFFFFF] w-4 h-3"></i>
                    </div>
                    <h6 className="font-bold text-sm leading-6 tracking-[0.2px] pt-2  w-[205px] h-7 -mt-1">
                      1GB Cloud storage
                    </h6>
                  </div>
                );
              })}
              <button className="w-[246px] h-[52px]  rounded-md gap-2 bg-[#23A6F0]  flex justify-center items-center text-center mt-8">
                <h6 className="font-bold text-[#FFFFFF] tracking-[0.2px] leading-6 text-base w-[89px] h-6">
                  Try for free
                </h6>
              </button>
            </div>
          </div>
        ))}
      </div>
      <h4 className="mt-20 h-8 text-[#252B42] font-normal tracking-[0.2px] leading-8 text-xl flex justify-center items-center text-center">Trusted By Over 4000 Big Companies</h4>
      <Brandlogos />
    </div>
  );
};
export default Hero;
