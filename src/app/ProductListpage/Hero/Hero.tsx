import Image from 'next/image'
import React from 'react'
import image1 from '@/public/image/herocard1.jpg'
import image2 from '@/public/image/heroimage.jpeg'
import image3 from '@/public/image/herocard2.jpg'
import image4 from '@/public/image/herocard3.jpg'
import image5 from '@/public/image/herocard4.jpg'

import Brandlogos from '@/Component/FrequentComponent/Brandlogos'

const Hero = () => {
    const iamges = [
        image1 , 
        image2 , 
        image3 ,
        image4 ,
        image5 ,

    ]
    
  return (
    <main className='w-full'>
        <div className='w-full h-24 pt-6 pb-6 text-[Montserrat] bg-[#FAFAFA]'>
            <div className='gap-8 w-[1049px] h-11 flex '>
                <div className='h-8 w-[510px] ml-[20%]  '>
                    <h3 className='w-16 h-8 font-bold text-[#252B42] tracking-wider leading-8 text-2xl '>
                    Shop
                    </h3>
                </div>
                <div className='gap-1 w-[509px]  h-11 flex justify-end'>
                    <div className='w-[119px] h-11  gap-4 pt-3 bt-3 flex '>
                    <h3 className='w-11 h-6 font-bold ml-44 text-[#252B42] tracking-[0.2px] leading-6 text-sm '>
                    Home
                    </h3>
                    <div className='w-auto h-4  text-[#BDBDBD]'>
                    <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <h6 className='w-9 h-6 font-bold text-[#BDBDBD] tracking-[0.2px] leading-6 text-sm '>
                    Shop
                    </h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[271px] bg-[#FAFAFA] flex flex-row '>
            <div className='h-full w-full pb-12 pl-44 flex flex-row '>
                <div className='w-full h-[223px] gap-4 flex flex-wrap  '
                >
                    {
                        iamges.map((image , index) => {
                            return (
                                <div >
                                    <div className='w-[225px] h-[223px] bg-[#FFFFFF] flex flex-col justify-center items-center card-container'>
                                    <div className='z-20 text-[#FFFFFF] flex justify-center items-center flex-col'>
                                        <h5 className='w-16 h-6 font-bold text-base   leading-6 tracking-wider '>CLOTHS</h5>
                                        <h5 className='w-[80px] h-5 font-normal text-sm ml-7 leading-6 tracking-[0.2px]  '>5 Items</h5>
                                    </div>
                                </div><Image
                                        src={image}
                                        alt={'product' + index}
                                        className='w-[225px] h-[223px] -z-20 mt-[-223px] ' /></div>
                                             
                            )
                        })
                    }
                   
                </div>
            </div>
        </div>
        <div className='w-screen h-24'>
            <div className='h-full w-[1288px]  gap-22 pt-6 bt-6 pl-44'>
                <div className='w-full h-12 flex justify-between'>
                    <div className='w-[168px] h-6 gap-4 '>
                        <h6 className='text-[#737373] font-bold text-sm leading-6 tracking-[0.2px]'>Showing all 12 results</h6>
                        </div>
                        <div className='w-44 h-11  gap-4 flex'>
                        <h6 className='text-[#737373] font-bold text-sm leading-6 tracking-[0.2px]'>Views:</h6>
                        <div className='w-[107px] h-full flex -mt-2 '>
                            <div className='w-11 h-11 rounded-md border-[1px] flex justify-center items-center border-[#ECECEC] '>
                            <i className="fa-regular fa-square-full w-[14px] h-[14px] text-[#252B42]"></i>
                            </div>
                            <div className='w-11 h-11 rounded-md border-[1px] flex justify-center items-center border-[#ECECEC] '>
                            <i className="fa-solid fa-list w-[14px] h-[14px] text-[#252B42]"></i>
                            </div>
                        </div>
                        </div>
                        <div className='w-[252px] h-full gap-4  flex -mt-2'>
                            <div className='h-full w-[141px]'>
                                <select className='bg-[#FAFAFA] h-full w-full border rounded-md'>
                                    <option className='' value=""> Populairty</option>
                                </select>
                            </div>
                            <div className='h-full w-24 bg-[#23A6F0] flex justify-center rounded-md '> 
                                <button className=''><h6 className='w-10 h-6 leading-6 tracking-[0.2px] text-sm  font-bold text-[#FFFFFF]'>Filter</h6></button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className='w-full h-44 bg-[#FAFAFA] flex flex-row justify-between'>
            <Brandlogos />
        </div>
    </main>
  )
}

export default Hero
