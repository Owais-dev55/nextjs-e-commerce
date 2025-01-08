import React from "react";

const repeatdiv = Array(6).fill(null);

const FAQSection = () => {
  return (
    <div className="lg:w-full w-[414] min-h-[837px] lg:h-[837px] bg-[#FFFFFF] px-4 sm:px-6 lg:px-0">
      <div className="lg:w-full w-[414] h-auto lg:h-[250px] flex justify-center items-center py-8 lg:py-0">
        <div className="lg:max-w-[700px] w-[414px] text-center mb-8">
          <h1 className="font-bold text-4xl lg:text-5xl leading-10 text-[#252B42]">
            Pricing FAQs
          </h1>
          <p className="text-[#737373] tracking-[0.2px] font-normal text-sm leading-5 mt-4 lg:max-w-[496px] w-[313px] mx-auto px-4 lg:px-0">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
          </p>
        </div>
      </div>
      <div className="lg:w-[1250px] w-[414px]  mx-auto px-4 lg:px-0 lg:ml-[10%]">
        <div className="lg:w-full w-[414px] gap-8 grid grid-cols-1 lg:grid-cols-2">
          {repeatdiv.map((_, index) => {
            return (
              <div className=" lg:w-[491px] w-[400px] h-full p-6 flex" key={index}>
                <i className="fa-solid fa-chevron-right text-xl text-[#23A6F0] flex-shrink-0"></i>
                <div className="flex-1 gap-1 ml-4 -mt-2">
                  <h3 className="font-bold text-xl lg:text-2xl leading-8 tracking-wider text-[#252B42]">
                    the quick fox jumps over
                  </h3>
                  <h6 className="font-normal pt-3 text-sm leading-5 tracking-[0.2px] text-[#737373] ">
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
