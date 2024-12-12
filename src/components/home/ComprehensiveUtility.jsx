import React, { useState } from 'react'
import SectionHeading from '../../common/SectionsHeading'
import { COMPREHENSIVE_LIST } from '../../utils/Helper'

const ComprehensiveUtility = () => {
  const [open , setopen] = useState(0)
  const toggleAccordion = (i) => {
    setopen(open === i ? false : i)
  }
  return (
    <>
      <div className='max-w-[1440px] mx-auto py-[81px] max-xl:px-5 max-lg:py-16 max-md:py-14 max-sm:py-10'>
        <div className='max-w-[1161px] mx-auto'>
          <div className='flex flex-wrap max-lg:gap-10'>
            <div className='w-1/2 max-lg:w-full max-lg:justify-center'>
            <div className='mb-custom-12 max-lg:text-center'>
              <SectionHeading CommonHeading={'Comprehensive Utility'} BoldHeading={'Comparisons'}/>
              </div>
              <div className='flex flex-col gap-6'>
              {COMPREHENSIVE_LIST.map((item, index) => (
                <div key={index} className={`max-w-[558px] transition-all duration-300 max-lg:mx-auto rounded p-3.5 flex w-full border border-solid border-black border-opacity-[8%] ${open === index  ? 'shadow-[0_0_13.9px_0_#0000001A]' : ''}`}>
                    <div className={`size-16 min-w-16 max-sm:size-10 max-sm:min-w-10 comprehensive-icon flex rounded-full justify-center items-center transition-all duration-500 ${open === index ? 'bg-green-vogue button-svg' : 'bg-lily-white'}`}>
                      {item.icon}
                    </div>
                    <div className='flex flex-col ml-auto max-sm:ml-5 justify-center max-w-[442px]'>
                    <button onClick={() => toggleAccordion(index)} className='flex  justify-between items-center w-full leading-110 text-2xl max-md:text-xl max-sm:text-lg'>
                      {item.heading}
                      <span className={` transition-all duration-300 ${open === index ? 'rotate-0' : 'rotate-180'}`}>
                      {item.arrow}
                      </span>
                    </button>
                    <p className={`transition-all duration-300 mt-1.5 leading-160 text-base font-normal ${open === index ? 'max-h-full' : 'max-h-0 overflow-hidden '}`}>{item.description}</p>
                    </div>
                </div>
              ))}
              </div>
            </div>
            <div className='w-1/2 max-lg:w-full flex justify-end max-lg:justify-center items-center'>
              <img src="./assets/images/webp/comprehensive-utiliy-image.webp" alt="comprehensiveImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComprehensiveUtility