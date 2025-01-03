import React from "react";
import image1 from "@/public/image/card1.jpeg";
import image2 from "@/public/image/card2.jpeg";
import image4 from "@/public/image/card03.jpeg";
import image5 from "@/public/image/card4.jpeg";
import Image from "next/image";

function EditorPick() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#252B42]">EDITOR’S PICK</h1>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 w-11/12 md:w-3/4">
        <div className="relative md:col-span-2 row-span-2">
          <Image
            src={image1}
            alt="Men"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <div className="absolute -mt-14 ml-4   h-full">
            <div className="bg-white px-4 py-2 rounded shadow">
              <span className="text-gray-800 font-semibold">MEN</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={image2}
            alt="Women"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <div className="absolute lg:bottom-4 left-4 bg-white px-4 py-2 rounded shadow">
            <span className="text-gray-800 font-semibold">WOMEN</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative flex-1">
            <Image
              src={image4}
              alt="Accessories"
              className="w-full h-[240px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow">
              <span className="text-gray-800 font-semibold">ACCESSORIES</span>
            </div>
          </div>

          <div className="relative flex-1">
            <Image
              src={image5}
              alt="Kids"
              className="w-full h-[240px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow">
              <span className="text-gray-800 font-semibold">KIDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPick;
