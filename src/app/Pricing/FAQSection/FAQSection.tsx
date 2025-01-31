import React from "react";

const repeatdiv = Array(6).fill(null);

const FAQSection = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="w-full max-w-screen-lg mx-auto text-center mb-12">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252B42]">
          Pricing FAQs
        </h1>
        <p className="text-[#737373] mt-4 max-w-3xl mx-auto text-sm sm:text-base">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics.
        </p>
      </div>

      <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {repeatdiv.map((_, index) => {
            return (
              <div
                className="w-full h-full bg-white p-6 rounded-lg shadow-lg flex items-start"
                key={index}
              >
                <i className="fa-solid fa-chevron-right text-2xl text-[#23A6F0] flex-shrink-0"></i>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-xl sm:text-2xl lg:text-2xl text-[#252B42] leading-8">
                    The quick fox jumps over
                  </h3>
                  <h6 className="font-normal text-sm sm:text-base mt-3 text-[#737373] leading-6">
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
