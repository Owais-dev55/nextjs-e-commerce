import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "@/public/image/description.jpg";

const repeatCount = Array(4).fill(null);
const repeatCountPara = Array(3).fill(null);

const DescriptionPage = () => {
  return (
    <div className="w-full h-[572px] bg-[#FFFFFF]">
      <div className="w-full h-[91px] ">
        <hr className="w-[1050px] relative top-[86px] left-[195px] border border-[#ECECEC]" />
        <div className="w-full h-[72px] relative top-[10px] flex justify-center">
          <Link
            href=""
            className="w-[134px]  h-full flex justify-center items-center gap-2"
          >
            <h6 className="font-semibold text-sm leading-6 tracking-[0.2px] text-[#737373]">
              Description
            </h6>
          </Link>
          <Link
            href=""
            className="w-[220px]  h-full flex justify-center items-center gap-2"
          >
            <h6 className="font-semibold text-sm leading-6 tracking-[0.2px] text-[#737373]">
              Additional Information
            </h6>
          </Link>
          <Link
            href=""
            className="w-[134px]  h-full flex justify-center items-center gap-2"
          >
            <h6 className="font-semibold text-sm leading-6 tracking-[0.2px] text-[#737373]">
              Reviews
              <span className="font-bold text-sm leading-6 tracking-[0.2px] text-[#23856D] pl-2">
                (0)
              </span>
            </h6>
          </Link>
        </div>
      </div>
      <div className="w-full h-[499px] gap-12 pt-12  ">
        <div className="w-[1440px] h-full pt-6 pl-12 gap-8 ">
          <div className="w-full h-full gap-8 flex justify-evenly ">
            <div className="w-[332px] h-[392px] rounded-lg">
              <Image
                src={image}
                alt="description image"
                className="w-full h-[392px]"
              />
            </div>
            <div className="w-[332px] h-full  ">
              <div className="w-full h-full rounded-lg gap-8 pb-6 ">
                <h3 className="font-bold text-2xl leading-8 tracking-wider text-[#252B42]">
                  the quick fox jumps over{" "}
                </h3>
                <div className=" h-[440px]">
                  {repeatCountPara.map((_, index) => {
                    return (
                      <>
                        <h6 className=" font-normal pt-9 text-sm leading-5 tracking-[0.2px] text-[#737373]">
                          Met minim Mollie non desert Alamo est sit cliquey
                          dolor do met sent. RELIT official consequent door ENIM
                          RELIT Mollie. Excitation venial consequent sent
                          nostrum met.{" "}
                        </h6>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-[332px] h-[367px] ">
              <div className="w-full h-[188px] rounded-lg gap-8">
                <h3 className="font-bold text-2xl leading-8 tracking-wider text-[#252B42]">
                  the quick fox jumps over{" "}
                </h3>
                <div className="h-[126px] w-[303px] gap-2 pt-10">
                  {repeatCount.map((_, index) => {
                    return (
                      <div key={index} className="w-full h-6 gap-5 flex">
                        <i className="fa-solid fa-chevron-right text-[#737373] w-2 h-4 pt-1"></i>
                        <h5 className=" font-bold  text-sm leading-5 tracking-[0.2px] text-[#737373]">
                          the quick fox jumps over the lazy dog{" "}
                        </h5>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full h-[178px] rounded-lg gap-8">
                <h3 className="font-bold text-2xl leading-8 tracking-wider text-[#252B42]">
                  the quick fox jumps over{" "}
                </h3>
                <div className="h-[126px] w-[303px] gap-2 pt-10">
                  <div className="w-full h-6 gap-5 flex">
                    <i className="fa-solid fa-chevron-right text-[#737373] w-2 h-4 pt-1"></i>
                    <h5 className=" font-bold  text-sm leading-5 tracking-[0.2px] text-[#737373]">
                      the quick fox jumps over the lazy dog{" "}
                    </h5>
                  </div>
                  <div className="w-full h-6  gap-5 flex">
                    <i className="fa-solid fa-chevron-right text-[#737373] w-2 h-4 pt-1"></i>
                    <h5 className=" font-bold  text-sm leading-5 tracking-[0.2px] text-[#737373]">
                      the quick fox jumps over the lazy dog{" "}
                    </h5>
                  </div>
                  <div className="w-full h-6  gap-5 flex">
                    <i className="fa-solid fa-chevron-right text-[#737373] w-2 h-4 pt-1"></i>
                    <h5 className=" font-bold  text-sm leading-5 tracking-[0.2px] text-[#737373]">
                      the quick fox jumps over the lazy dog{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
