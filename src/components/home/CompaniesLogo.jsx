import React from 'react'
import { COMPANIES_lOGO } from '../../utils/Helper'

const CompaniesLogo = () => {
  return (
    <div className='max-xl:px-5 max-lg:py-16 max-md:py-14 max-sm:py-10  pt-[63px] pb-[81px]'>
        <p className='!leading-110 lg:hidden pb-10 max-lg:text-3xl 2xl:text-white max-md:text-2xl max-sm:text-xl text-custom-4xl max-lg:text-center max-w-[548px] text-green-vogue max-lg:max-w-full'>More than <span className='font-bold text-ball-blue'> 80,000</span>+ companies trust bill central </p>
    <div className='max-w-[1129px] max-lg:gap-10 max-md:gap-8 max-sm:gap-6 mx-auto flex w-full justify-between items-center flex-wrap max-lg:justify-center gap-custom-12'>
      {COMPANIES_lOGO.map((item , index) => (
        <img className={`w-full max-h-[62px] hover:scale-125 transition-all duration-700 cursor-pointer  ${index === 0 ? 'max-w-[127px]' : index === 1 ? 'max-w-[102px]' : index === 2 ? 'max-w-[94px] max-h-[32px]' : index === 3 ? 'max-w-[49px] ' : index === 4 ? 'max-w-[62px]' : index === 5 ? 'max-w-[84px]' : index === 6 ? 'max-w-[63px]' : ''  }`} src={item.logo} alt={item.alt} />
      ))}
    </div>
    </div>
  )
}

export default CompaniesLogo

