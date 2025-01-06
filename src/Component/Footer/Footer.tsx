import React from "react";

type bgcolor = {
  backgroundColor: string;
};

const Footer = ({ backgroundColor }: bgcolor) => {
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
      <div className="lg:h-[488px] lg:w-full sm:w-full text-[Montserrat]">
        <div
          className="lg:w-full lg:h-36 sm:h-28 px-6"
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="max-w-[1350px] mx-auto flex justify-between items-center h-full">
            <h3 className="text-[#252B42] font-bold text-2xl leading-8">Bandage</h3>
            <div className="flex space-x-4 text-[#23A6F0]">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>

        <hr className="text-[#E6E6E6] border-t-[1px] max-w-[1157px] mx-auto" />

        <div className="max-w-[1200px] mx-auto pt-8 pb-8 flex flex-wrap gap-8 px-6">
          {sections.map((section, index) => (
            <div key={index} className="min-w-[148px]">
              <h5 className="font-bold text-base leading-6 tracking-wider mb-4">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-sm font-medium leading-6 tracking-[0.2px] text-[#737373]"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex-1 lg:w-[321px]">
            <h5 className="font-bold text-[#252B42] text-base leading-6 tracking-wider mb-4">
              Get In Touch
            </h5>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full bg-[#F9F9F9] border border-[#E6E6E6] h-[58px] rounded-md pl-4 text-sm"
                />
                <button className="absolute right-[1px] top-1/2 transform -translate-y-1/2 rounded-md font-normal w-[117px] h-[58px] bg-[#23A6F0] text-[#FFFFFF]">
                  Subscribe
                </button>
              </div>
              <p className="text-[#737373] text-xs leading-6">
                Lorem ipsum dolor sit Amet
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA] py-4">
          <div className="max-w-[1050px] mx-auto text-center text-[#737373] text-sm font-medium">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
