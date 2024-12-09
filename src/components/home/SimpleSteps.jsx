import React from 'react'
import { SIMPLE_STEPS_LIST } from '../../utils/Helper'
import SectionsHeading from '../../common/SectionsHeading'

const SimpleSteps = () => {
  return (
    <div className='py-[81px] overflow-hidden'> 
        <div className='flex flex-col mb-14 max-lg:mb-10 max-md:mb-8 text-center max-sm:mb-5'>
          <SectionsHeading CommonHeading={'Simple Steps to '} BoldHeading={'Switch'}/>
          <p className='leading-160 text-center max-w-[610px] font-normal text-base max-md:text-sm text-gravel mx-auto mt-4'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
        </div>
        <div className='max-w-[1440px] mx-auto w-full'>
            <div className='flex flex-wrap'>
              {SIMPLE_STEPS_LIST.map((item , index) => (
                <div className='relative group cursor-pointer overflow-hidden' key={index}>
                    <img src={item.stepsImage} alt={item.alt} />
                    <div className='absolute group-hover:h-0 group-hover:w-0 group-hover:top-1/2 group-hover:left-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:opacity-100 group-hover:z-10 transition-all duration-700 bg-lily-white opacity-94 top-0 left-0 w-full h-full'>
                    <div className='relative w-full h-full'>
                      <p className={`absolute top-1/2 left-1/2 translate-x-[-50%] text-center leading-110 pointer-events-none text-custom-3xl group-hover:  text-black-bean -rotate-90 min-w-[574px] group-hover:hidden ${index === 0 ? '' : index === 1 ? 'top-[68.3%]' : index === 2 ? 'top-[75%]' : index === 3 ? 'top-[66.5%]' : ''}`}>{item.imageContent}</p>
                    </div>
                    </div>
                    <div className='bg-green-vogue absolute bottom-[-50%] group-hover:bottom-0 transition-all duration-700 w-full max-w-[360px] p-8 '>
                      <h4 className='leading-110 text-custom-3xl font-normal mb-3.5 text-white'>{item.hoverHeading}</h4>
                      <p className='leading-160 font-normal text-white'>{item.hoverContent}</p>
                    </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default SimpleSteps
