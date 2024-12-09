import React from 'react'
import { COMPANIES_lOGO } from '../../utils/Helper'

const CompaniesLogo = () => {
  return (
    <div className='max-w-[1129px] mx-auto flex w-full justify-between items-center gap-custom-12 pt-[63px] pb-[81px]'>
      {COMPANIES_lOGO.map((item , index) => (
        <img className={`w-full max-h-[62px] hover:scale-125 transition-all duration-700 cursor-pointer  ${index === 0 ? 'max-w-[127px]' : index === 1 ? 'max-w-[102px]' : index === 2 ? 'max-w-[94px] max-h-[32px]' : index === 3 ? 'max-w-[49px] ' : index === 4 ? 'max-w-[62px]' : index === 5 ? 'max-w-[84px]' : index === 6 ? 'max-w-[63px]' : ''  }`} src={item.logo} alt={item.alt} />
      ))}
    </div>
  )
}

export default CompaniesLogo

