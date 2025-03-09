const cards = [
  {
    color: "#FFFFFF",
    textColor: "#252B42",
    icon: "fa-phone",
  },
  {
    color: "#252B42",
    textColor: "#FFFFFF",
    icon: "fa-location-dot",
  },
  {
    color: "#FFFFFF",
    textColor: "#252B42",
    icon: "fa-envelope",
  },
]

const Card = () => {
  const email = "georgia.young@example.com"
  const altEmail = "georgia.young@ple.com"
  const supportText = "Get Support"

  return (
    <section className="text-[Montserrat] w-full relative">
      {/* Cards Section */}
      <div className="w-full bg-[#FFFFFF] text-[#252B42] flex flex-col items-center py-16 md:py-24 px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-[633px] w-full text-center mb-10 md:mb-16">
          <h6 className="font-bold tracking-[0.2px] text-sm leading-6">VISIT OUR OFFICE</h6>
          <h2 className="font-bold tracking-[0.2px] text-3xl sm:text-4xl lg:text-[40px] leading-tight sm:leading-[50px] mt-4 mx-auto">
            We help small businesses with big ideas
          </h2>
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[400px] mx-auto flex flex-col items-center gap-6 p-6 shadow-lg rounded-md"
              style={{ backgroundColor: card.color, color: card.textColor }}
            >
              <div className="w-[72px] h-[72px] flex justify-center items-center">
                <i className={`fa-solid ${card.icon} text-[#23A6F0] text-6xl`} />
              </div>
              <div className="text-center w-full">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">{email}</h6>
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] pt-2">{altEmail}</h6>
              </div>
              <h6 className="font-bold text-xl sm:text-2xl leading-6 tracking-[0.2px]">{supportText}</h6>
              <button className="w-full max-w-[189px] h-[53px] border rounded-[37px] border-[#23A6F0] flex justify-center items-center">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#23A6F0]">Submit Request</h6>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <i className="fa-solid fa-arrow-turn-down text-[#23A6F0] text-5xl sm:text-6xl mb-6" />
        <div className="w-full max-w-[607px] text-center">
          <h6 className="font-bold text-base leading-6 tracking-[0.1px] mb-2">WE Can&apos;t WAIT TO MEET YOU</h6>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight md:leading-[1.2] lg:leading-[80px] tracking-[0.2px] text-[#252B42] mb-6">
            Let&apos;s Talk
          </h2>
          <div className="flex justify-center">
            <button className="w-[186px] h-[52px] border rounded-md bg-[#0E3A5D] flex justify-center items-center gap-2">
              <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#FFFFFF]">Try it free now</h6>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card

