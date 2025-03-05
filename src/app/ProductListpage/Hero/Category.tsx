"use client"

import { useState } from "react"

const Category = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="w-full flex justify-center bg-white py-6">
      <div className="w-full max-w-[1250px] px-4 lg:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-16 lg:gap-24">
          {/* Results count */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h6 className="text-[#4A4A4A] font-bold text-sm leading-6 tracking-[0.2px]">Showing all 24 results</h6>
          </div>

          {/* View switcher */}
          <div className="flex items-center gap-4">
            <h6 className="text-[#4A4A4A] font-bold text-sm leading-6 tracking-[0.2px]">Views:</h6>
            <div className="flex gap-3">
              <button
                className={`w-11 h-11 rounded-md border flex justify-center items-center transition-colors ${
                  viewMode === "grid" ? "border-[#0E3A5D] bg-[#F5F8FA]" : "border-[#ECECEC] hover:bg-[#F5F8FA]"
                }`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <i className="fa-regular fa-square-full text-[#1A1A1A]"></i>
              </button>
              <button
                className={`w-11 h-11 rounded-md border flex justify-center items-center transition-colors ${
                  viewMode === "list" ? "border-[#0E3A5D] bg-[#F5F8FA]" : "border-[#ECECEC] hover:bg-[#F5F8FA]"
                }`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <i className="fa-solid fa-list text-[#1A1A1A]"></i>
              </button>
            </div>
          </div>

          {/* Filter controls */}
          <div className="flex w-full md:w-auto gap-3">
            <div className="relative flex-1 md:w-[180px]">
              <select className="w-full h-11 appearance-none bg-[#FAFAFA] border border-[#ECECEC] rounded-md px-4 pr-10 text-sm font-medium text-[#4A4A4A] focus:outline-none focus:border-[#0E3A5D] cursor-pointer">
                <option>All Products</option>
                <option>Modern</option>
                <option>Furniture</option>
                <option>Sleep</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <i className="fa-solid fa-chevron-down text-[#4A4A4A] text-xs"></i>
              </div>
            </div>
            <button className="h-11 px-5 bg-[#0E3A5D] rounded-md text-white font-bold text-sm tracking-[0.2px] hover:bg-[#0c2e49] transition-colors">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category

