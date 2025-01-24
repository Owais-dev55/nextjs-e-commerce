const Category = () => {

  return (
    <div>
              <div className="w-full lg:w-screen h-auto lg:h-24 px-4 lg:px-0">
        <div className="lg:h-full lg:w-[1288px] lg:gap-22 lg:pt-6 lg:bt-6 lg:pl-44">
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-4 lg:gap-0 py-6 lg:py-0">
            <div className="w-full lg:w-[168px] lg:h-6 gap-4">
              <h6 className="text-[#737373] font-bold text-sm leading-6 tracking-[0.2px] text-center lg:text-left">
                Showing all 24 results
              </h6>
            </div>
            <div className="flex items-center gap-4 lg:w-44 lg:h-11">
              <h6 className="text-[#737373] font-bold text-sm leading-6 tracking-[0.2px]">
                Views:
              </h6>
              <div className="flex gap-2 lg:w-[107px] lg:h-full lg:-mt-2">
                <div className="w-11 h-[50px] rounded-md border-[1px] flex justify-center items-center border-[#ECECEC]">
                  <i className="fa-regular fa-square-full w-[14px] h-[14px] text-[#252B42]"></i>
                </div>
                <div className="w-11 h-[50px] rounded-md border-[1px] flex justify-center items-center border-[#ECECEC]">
                  <i className="fa-solid fa-list w-[14px] h-[14px] text-[#252B42]"></i>
                </div>
              </div>
            </div>
            <div className="flex gap-2 lg:w-[252px] lg:h-full lg:-mt-2 z-10">
              <div className="flex-1 lg:h-full lg:w-[141px]">
              <select className="w-full h-[50px] bg-[#FAFAFA] border rounded-md px-3">
              <option >All Products</option>
              <option >Modern</option>
              <option >Furniture</option>
              <option >Sleep</option>
              </select>
              </div>
              <div className="h-[50px] lg:w-24 bg-[#23A6F0] flex justify-center rounded-md">
                <button className="px-6 lg:px-0 py-[12px]">
                  <h6 className="lg:w-10 h-[26px] leading-6 tracking-[0.2px] text-sm font-bold text-[#FFFFFF]">
                    Filter
                  </h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


export default Category