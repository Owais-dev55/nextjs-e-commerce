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
    <footer className="font-sans">
      <div className="w-full">
        <div
          className="w-full py-8 px-6 sm:px-6 lg:px-8"
          style={{ backgroundColor }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <h3 className="text-[#1A1A1A] font-bold text-2xl leading-8 mb-4 sm:mb-0">
              VogueAura
            </h3>
            <div className="flex space-x-6 text-[#0E3A5D]">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <hr className="text-[#E6E6E6] border-t-[1px] max-w-7xl mx-auto" />
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h5 className="font-bold text-base leading-6 tracking-wider mb-4 text-[#1A1A1A]">
                  {section.title}
                </h5>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li
                      key={i}
                      className="text-sm font-medium leading-6 tracking-[0.2px] text-[#4A4A4A]"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-full lg:col-span-1">
              <h5 className="font-bold text-[#1A1A1A] text-base leading-6 tracking-wider mb-4">
                Get In Touch
              </h5>
              <div className="space-y-4">
                <div className="relative w-full lg:w-[300px]">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-full bg-[#F9F9F9] border border-[#E6E6E6] h-12 rounded-md pl-4 text-sm"
                  />
                  <button className="absolute right-0 top-0 rounded-r-md font-normal w-28 h-12 bg-[#0E3A5D] text-white text-sm">
                    Subscribe
                  </button>
                </div>

                <p className="text-[#4A4A4A] text-xs leading-6">
                  Lorem ipsum dolor sit Amet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] py-4">
          <div className="max-w-7xl mx-auto text-center text-[#4A4A4A] text-sm font-medium px-4">
            Made With Love By VogueAura All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
