import React from "react";

const Pricing = () => {
  return (
    
    <div className="w-full h-auto flex flex-col items-center justify-center text-center py-10">
    <div className="lg:max-w-[700px] [414px] text-center mb-8">
      <h2 className="text-[#1A1A1A] font-bold text-[40px] leading-[50px] lg:ml-3 lg:w-full w-[259px] mx-auto">
        Start your 14 days free trial
      </h2>
      <p className="text-[#4A4A4A] tracking-[0.2px]  font-normal text-sm leading-5 mt-4 lg:w-[411px] w-[313px] mx-auto h-10 lg:pl-10 lg:ml-10">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>
    </div>

    <div className="mb-8 lg:ml-8">
      <button className="w-[186px] h-[52px] py-3 px-6 rounded-md bg-[#0E3A5D] flex justify-center items-center">
        <h6 className="font-bold text-sm text-white">Try it free now</h6>
      </button>
    </div>
    <div className="flex gap-8 lg:ml-8">
      <i className="fa-brands fa-twitter text-[#55ACEE] text-3xl"></i>
      <div className="bg-[#395185] w-8 h-8 flex justify-end">
        <i className="fa-brands fa-facebook-f text-white text-3xl pt-1 pr-1"></i>
      </div>
      <i className="fa-brands fa-instagram text-black text-3xl"></i>
      <i className="fa-brands fa-linkedin text-[#0A66C2] text-3xl"></i>
    </div>
  </div>
  );
};

export default Pricing;
