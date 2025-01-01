import React from 'react'
import Image from 'next/image'
import image from '@/public/image/contactHero.png'
const Hero = () => {
  return (
    <div className='w-full  h-[882px]'>
        <div className=' w-[1440px] text-[#252B42]  h-[709px] mx-auto text-[Montserrat] '>
        <div className='absolute w-[1036px] h-[709] pl-52 pt-10 pb-28 gap-20'>
            <div className='gap-20 h-[742px] width-[1050px]'>
                <div className='top-16 gap-7 h-[432px] w-[509]'>
                    <div className='w-40 h-7 mb-10'>
                    <h4 className=' w-[108px] h-6 font-bold text-base leading-6 tracking-[0.1px]'>
                    CONTACT US
                    </h4>
                    </div>
                    <div className='w-[378px] h-40 mb-10'>
                    <h1 className='w-[378px] h-40 text-6xl font-bold leading-[80px]  tracking-[0.2px]'>Get in touch 
                    today!</h1>
                    </div>
                    <div className='h-10 w-[376px] mb-10'>
                    <p className=' h-10 w-[341px] font-normal text-xl leading-8 text-[#737373] tracking-[0.2px]'>
                    We know how large objects will act, but things on a small scale
                    </p>
                    </div>
                    <div className='w-[442px] h-[84px] pt-2'>
                      <h3 className='font-bold text-2xl tracking-[0.1px] leading-8  '>Phone ; +451 215 215 </h3>
                      <h3 className='font-bold text-2xl pt-2 tracking-[0.1px] leading-8  '>Fax : +451 215 215 </h3>
                    </div>
                    <div className='w-[442px] h-[50px] gap-[34px] pt-4 p-[10px] text-[#252B42]'>
                    <i className="fa-brands fa-twitter w-[60px] h-6 text-2xl "></i>
                    <i className="fa-brands fa-square-facebook w-[60px] h-6 text-2xl"></i>
                    <i className="fa-brands fa-instagram w-[60px] h-6 text-2xl"></i>
                    <i className="fa-brands fa-linkedin w-[60px] h-6 text-2xl"></i>
                    </div>
                     <div className=' mt-[-555px] ml-[590px] w-[443px] h-[650px]'>
          <Image
            src={image}
            alt='Vita Classic Product'
            className='object-cover w-full h-full'
          />
                   </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero