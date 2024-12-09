import React from 'react'
import SectionsHeading from '../../common/SectionsHeading'
import { SWITCHING_ENERGY_LIST } from '../../utils/Helper'
import { CommonArrowIcon } from '../../utils/Icons'
import CustomButton from '../../common/CustomButton'

const SwitchingEnergy = () => {
  return (
    <div className='py-[81px] max-xl:px-5 max-lg:py-16 max-md:py-14 max-sm:py-10'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center items-center max-lg:gap-10 max-md:gap-8 max-sm:gap-6 gap-[75px]'>
              <img className='max-w-[507px] w-full max-h-[451px]' src="./assets/images/webp/switching-energy-image.webp" alt="Switching Energy" />
              <div className='flex flex-col'>
                <div className='max-w-[409px]'>
                <SectionsHeading   BoldHeading={'Switching Energy '} HeadingSpan={'Made Simple'}/>
                </div>
                <p className='font-normal text-base leading-150 max-md:text-sm mt-4 max-md:mt-2 max-w-[558px] text-black-bean'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
                <h4 className='leading-110 text-2xl font-normal text-green-vogue mt-9 max-lg:mt-7 max-md:mt-5 max-sm:mt-3'>Benefits of Comparing Energy Plans</h4>
                <ul className='list-disc text-black-bean  list-inside flex flex-col gap-2 mt-7 max-lg:mt-5 max-md:mt-3'>
                  {SWITCHING_ENERGY_LIST.map((item , index) => (
                    <li key={index} className='leading-150 text-base max-md:text-sm font-normal'>{item}</li>
                  ))}
                </ul>
                  <div className='mt-custom-10'>
                <CustomButton customButton={'Compare With Us'} arrowBtn={<CommonArrowIcon/>}/>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default SwitchingEnergy
