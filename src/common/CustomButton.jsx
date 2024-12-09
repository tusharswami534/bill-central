import React from 'react'

const CustomButton = ({customButton , arrowBtn}) => {
  return (
      <button className='flex items-center hover:scale-110 transition-all duration-300 gap-1 py-3 px-[27px] max-sm:px-5 max-sm:py-2.5 font-bold text-base rounded-[0_50px_50px_50px] bg-ball-blue text-white'>{customButton}{arrowBtn}</button>
  )
}

export default CustomButton
