import React from "react";

const Pricing = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center text-center py-10">
      <div className="max-w-[700px] text-center mb-8">
        <h2 className="text-[#252B42] font-bold text-[40px] leading-[50px]">
          Start your 14 days free trial
        </h2>
        <p className="text-[#737373] tracking-[0.2px]  font-normal text-sm leading-5 mt-4 w-[411px] h-10 pl-10 ml-10">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
      </div>

      <div className="mb-8 ml-8">
        <button className="w-[186px] h-[52px] py-3 px-6 rounded-md bg-[#23A6F0] flex justify-center items-center">
          <h6 className="font-bold text-sm text-white">Try it free now</h6>
        </button>
      </div>
      <div className="flex gap-8 ml-8">
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
