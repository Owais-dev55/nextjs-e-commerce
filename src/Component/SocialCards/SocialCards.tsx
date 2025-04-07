"use client"

import type React from "react"
import Image from "next/image"
import image1 from "@/public/image/ceo-man.jpg"
import image2 from "@/public/image/Co-Founder.jpg"
import image3 from "@/public/image/socailcard3.jpg"


const members = [
  {
    name: "M.Owais Khiljee",
    profession: "Founder & CEO",
    image: image1,
  },
  {
    name: "M.Hashir ",
    profession: "CO-Founder",
    image: image2,
  },
  {
    name: "Fuzail Shehzad ",
    profession: "Designer and Editor",
    image: image3,
  },
]

const SocialCards = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {members.map((member, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            <div className="w-[1100px] min-w-[200px] max-w-[350px] h-[350px] relative">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={`${member.name} profile`}
                fill={true}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
            <div className="w-full h-[152px] flex flex-col justify-center items-center">
              <h1 className="font-bold text-base leading-6 tracking-[0.1px]">{member.name}</h1>
              <h6 className="font-bold text-[#4A4A4A] text-sm leading-6 tracking-[0.2px]">{member.profession}</h6>
              <div className="w-28 h-6 mt-5 gap-5 text-[#1B263B] flex justify-center items-center">
                <i className="w-6 h-6 text-2xl fa-brands fa-facebook"></i>
                <i className="w-6 h-6 text-2xl fa-brands fa-instagram"></i>
                <i className="w-6 h-6 text-2xl fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialCards

