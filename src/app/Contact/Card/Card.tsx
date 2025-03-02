import React from "react";

const cards = [
  {
    color: "#FFFFFF",
    textColor: "#252B42",
    icon: "fa-phone",
  },
  {
    color: "#252B42",
    textColor: "#FFFFFF",
    icon: "fa-location-dot",
  },
  {
    color: "#FFFFFF",
    textColor: "#252B42",
    icon: "fa-envelope",
  },
];

const Card = () => {
  const email = "georgia.young@example.com";
  const altEmail = "georgia.young@ple.com";
  const supportText = "Get Support";

  return (
    <section className="text-[Montserrat] w-full">
      <div className="w-full lg:h-[814px] h-[1531px] bg-[#FFFFFF] text-[#252B42] flex flex-col items-center mt-[-172px] px-4">
        <div className="max-w-[633px] w-full text-center mb-10">
          <h6 className="font-bold tracking-[0.2px] text-sm leading-6">
            VISIT OUR OFFICE
          </h6>
          <h2 className="font-bold tracking-[0.2px] text-4xl lg:text-[40px] leading-[50px] mt-4 mx-auto">
            We help small businesses with big ideas
          </h2>
        </div>
        
        <div className="w-full max-w-[1200px] flex flex-wrap justify-center  mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[327px] h-[343px] flex flex-col items-center gap-6 p-4 shadow-lg rounded-md mx-auto lg:mx-0"
              style={{ backgroundColor: card.color, color: card.textColor }}
            >
              <div className="w-[72px] h-[72px] flex justify-center items-center">
                <i
                  className={`fa-solid ${card.icon} text-[#23A6F0] text-7xl`}
                />
              </div>
              <div className="text-center w-full max-w-[216px]">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">
                  {email}
                </h6>
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] pt-2">
                  {altEmail}
                </h6>
              </div>
              <h6 className="font-bold text-2xl leading-6 tracking-[0.2px]">
                {supportText}
              </h6>
              <button className="w-[189px] h-[53px] border rounded-[37px] border-[#23A6F0] flex justify-center items-center">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#23A6F0]">
                  Submit Request
                </h6>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[-192px] mb-10 px-4">
        <i className="fa-solid fa-arrow-turn-down text-[#23A6F0] text-7xl mb-6" />
        <div className="w-full max-w-[607px] text-center">
          <h6 className="font-bold text-base leading-6 tracking-[0.1px] mb-2">
            WE Can&apos;t WAIT TO MEET YOU
          </h6>
          <h2 className="font-bold text-4xl lg:text-[58px] leading-[1.2] lg:leading-[80px] tracking-[0.2px] text-[#252B42] mb-6">
            Let&apos;s Talk
          </h2>
          <div className="flex justify-center">
            <button className="w-[186px] h-[52px] border rounded-md bg-[#0E3A5D] flex justify-center items-center gap-2">
              <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#FFFFFF]">
                Try it free now
              </h6>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

