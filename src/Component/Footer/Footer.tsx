import React from "react";

type bgcolor =  {
  backgroundColor: string;
}

const Footer = ({backgroundColor}:bgcolor) => {


  const sections = [
    {
      title: "Company Info",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live chats ",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      links: ["IOS and Android", "Watch a Demo", "Customers", "API"],
    },
  ];
  return (
    <footer>
      <div className="h-[488px] w-full text-[Montserrat]">
        <div className="w-full h-36 " style={{backgroundColor : backgroundColor}}>
          <div className="w-[1350px] h-full pt-10 pb-10 pl-48">
            <div className="w-full h-14 gap-[977.5px] flex">
              <div className="w-[108px] h-8 ">
                <h3 className="pt-3 text-[#252B42] font-bold text-2xl leading-8">
                  Bandage
                </h3>
              </div>
              <div className="h-6 w-[236px]">
                <div className="text-[#23A6F0] ">
                  <i className="fab fa-facebook-f w-6 h-6"></i>
                  <i className="fab fa-instagram w-6 h-6"></i>
                  <i className="fab fa-twitter w-6 h-6"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-[#E6E6E6] border-[1px] w-[1157px] ml-[195px]" />

        <div className="max-w-[1200px] mx-auto pt-8 pb-8 flex flex-wrap gap-16">
          {sections.map((section, index) => (
            <div key={index} className="h-44 w-[148px] gap-5">
              <h5 className="h-4 w-[120px] mb-8 font-bold text-base leading-6 tracking-wider">
                {section.title}
              </h5>
              <div className="w-24 h-32 gap-[10px]">
                {section.links.map((link, i) => (
                  <p
                    key={i}
                    className="h-4 w-40 mb-4 text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
                    {link}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="gap-5 h-32 w-[321px]">
            <h5 className="h-4 w-[120px] mb-8 font-bold text-[#252B42] text-base leading-6 tracking-wider">
              Get In touch
            </h5>
            <div className="w-full h-[87px] gap-5 ">
              <input
                type="text"
                placeholder="Your Email"
                className=" relative bg-[#F9F9F9] border-[1px] border-[#E6E6E6] w-full h-[58px] rounded-md pl-5 pt-1 font-normal text-sm leading-7 tracking-[0.2px]"/>
              <button className=" absolute right-[192px] rounded-md font-normal w-[117px] h-[58px] bg-[#23A6F0] text-[#FFFFFF]">
                Subscribe
              </button>
            </div>
            <div className="w-full h-[87px]">
              <h6 className="h-7 w-[165px] -mt-8 font-normal text-[#737373] text-[12px] leading-7 tracking-[0.2px]">
                Lorem ipsum dolor sit Amet
              </h6>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] w-full h-20">
          <div className="pt-6 pb-6 pl-[195px] w-[1050px] h-full">
            <div className="h-6 w-[600px]">
              <h6 className="text-[#737373] font-bold text-sm tracking-[0.2px leading-6]">
                Made With Love By Finland All Right Reserved{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
