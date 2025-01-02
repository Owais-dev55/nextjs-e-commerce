import React from "react";

const repeatdiv = Array(6).fill(null);

const FAQSection = () => {
  return (
    <div className="w-full h-[837px] bg-[#FFFFFF] ">
      <div className="w-full h-[250px] flex justify-center items-center">
        <div className="max-w-[700px] text-center mb-8">
          <h2 className="text-[#252B42] font-bold text-[40px] leading-[50px] ml-5">
            Pricing FAQ’s
          </h2>
          <p className="text-[#737373] tracking-[0.2px]  font-normal text-sm leading-5 mt-4 w-[496px] h-10  ml-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
        </div>
      </div>
      <div className="w-[1250px] gap-8 h-[537px] ml-[15%]">
        <div className="w-full h-[159px] gap-8 grid grid-cols-2">
          {repeatdiv.map((_, index) => {
            return (
              <div className="w-[491px] h-full p-6 flex" key={index}>
                <i className="fa-solid fa-chevron-right text-xl text-[#23A6F0]"></i>
                <div className="w-[408px] h-[109px] gap-1 ml-4 -mt-2">
                  <h3 className="font-bold text-2xl leading-8 tracking-wider text-[#252B42]">
                    the quick fox jumps over
                  </h3>
                  <h6 className=" font-normal pt-3 text-sm leading-5 tracking-[0.2px] text-[#737373] w-[408px]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
