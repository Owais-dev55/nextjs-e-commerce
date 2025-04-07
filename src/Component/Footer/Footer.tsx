import Link from "next/link"
import React from 'react';
type bgcolor = {
  backgroundColor: string
}

const Footer = ({ backgroundColor }: bgcolor) => {
  const sections = [
    {
      title: "Company",
      links: [ {
        text: "About Us",
        url: "/About",
      }, {
        text: "Contact Us",
        url: "/Contact",
      }
    ],
    },
    {
      title: "Legal",
      links: [{
        text: "Terms of Service",
        url: "/terms-of-services",
      }, {
        text: "Privacy Policy",
        url: "/privacy-policy",
      }
    ],
    },
    {
      title: "Help",
      links: [{
        text: "FAQ",
        url: "Pricing/FAQSection",
      } , {
        text: "Become a Member",
        url: "/signIn",
      }],
    },
    {
      title: "Connect",
      links: [{
        text: "Twitter",
        url: "https://twitter.com",

      } , {
        text: "Facebook",
        url: "https://www.facebook.com",
      }],
    },
  ]

  return (
    <footer className="font-sans">
      <div className="w-full">
        {/* Top section with logo and social icons */}
        <div className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <h3 className="text-[#1A1A1A] text-[Montserrat] font-bold text-xl sm:text-2xl leading-8 mb-4 sm:mb-0">Pakbeats</h3>
            <div className="flex space-x-6 text-[#0E3A5D]">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>

        <hr className="text-[#E6E6E6] border-t-[1px] max-w-7xl mx-auto" />

        <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8">
            {sections.map((section, index) => (
              <div key={index} className="mb-6 md:mb-0">
                <h5 className="font-bold text-base leading-6 tracking-wider mb-3 sm:mb-4 text-[#1A1A1A]">
                  {section.title}
                </h5>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li
                  
                      key={index}
                      className="text-sm font-medium leading-6 tracking-[0.2px] text-[#4A4A4A] hover:text-[#0E3A5D] cursor-pointer transition-colors"
                    >
                      <Link href={`${link.url}`}>
                      {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10">
            <h5 className="font-bold text-[#1A1A1A] text-base leading-6 tracking-wider mb-4">Get In Touch</h5>
            <div className="space-y-4">
              <div className="relative w-full max-w-md">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#F9F9F9] border border-[#E6E6E6] h-12 rounded-md pl-4 text-sm"
                />
                <button className="absolute right-0 top-0 rounded-r-md font-normal w-28 h-12 bg-[#0E3A5D] text-white text-sm">
                  Subscribe
                </button>
              </div>

              <p className="text-[#4A4A4A] text-xs leading-6">Stay updated with our latest news and offers</p>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA] py-4">
          <div className="max-w-7xl mx-auto text-center text-[#4A4A4A] text-sm font-medium px-4">
            <p className="text-gray-600 mb-6 md:mb-0">© {new Date().getFullYear()} Pakbeats. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

