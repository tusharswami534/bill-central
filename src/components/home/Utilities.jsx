import React from 'react'
import SectionHeading from '../../common/SectionsHeading'
import { ButtonArrow, Tailored } from '../../utils/Icons'
import { UTILITIES_LIST } from '../../utils/Helper'

const Utilities = () => {
  return (
    <div className='max-w-[1440px] mx-auto py-[81px] max-xl:px-5 max-lg:py-16 max-md:py-14 max-sm:py-10'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <SectionHeading CommonHeading={'Why Choose Us for '} BoldHeading={'Utilities'}/>
          <p className='max-w-[620px] mx-auto mb-[58px] max-lg:mb-12 mt-4 max-lg:mt-2 max-md:mb-10 max-sm:mb-5 text-center leading-150 text-base font-normal'>This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!</p>
          <div className='container mx-auto flex max-xl:flex-col  flex-wrap'>
            <div className='w-[30%] max-sm:items-center max-sm:justify-end  flex pr-3 max-xl:w-full '>
              <div className='bg-green-vogue max-h-[596px] max-xl:mb-7 mt-3 max-xl:justify-center max-xl:items-center flex flex-col  max-sm:max-w-[311px] max-xl:max-h-full p-10'>
                <Tailored/>
                  <h4 className='leading-110 text-2xl text-white text-left max-xl:text-center font-normal mt-[51px]'>Tailored Recommendations</h4>
                  <p className='leading-150 text-white mt-3.5 max-xl:text-center text-left'>Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.</p>
                  <button className='px-[26px] hover:scale-125 transition-all duration-300 max-w-[64px] py-[22px] bg-white rounded-[446px] mt-[22px]'>
                    <ButtonArrow/>
                  </button>
              </div>
            </div>
            <div className='w-[60%] max-xl:w-full'>
              <div className='flex flex-wrap'>
              {UTILITIES_LIST.map((item , i ) =>(
                <div className='w-6/12 max-md:w-full p-3'>
                  <div className='min-h-[286px] max-xl:justify-center max-xl:items-center max-xl:flex max-xl:flex-col cursor-pointer group shadow-[0_0_13.9px_0_#0000001A] p-6 transition-all duration-300 ease-linear hover:bg-green-vogue'>
                    <div className='utilies-icon'>
                    {item.icon}
                    </div>
                    <div>
                      <h2 className='leading-110 text-midnight-moss text-left group-hover:text-white font-normal mt-[18px] max-lg:mt-4 max-md:mt-2 mb-3 max-lg:mb-2 max-md:mb-1 text-2xl max-xl:text-center'>{item.heading}</h2>
                      <p className='leading-150 font-normal text-left group-hover:text-white text-black-bean max-xl:text-center'>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Utilities
