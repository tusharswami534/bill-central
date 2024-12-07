import React from 'react'

const Button = ({customButton , arrowBtn}) => {
  return (
    <div>
        <button className='flex items-center gap-1 py-3 px-[27px] max-sm:px-5 max-sm:py-2.5 font-bold text-base rounded-[0_50px_50px_20px] bg-ball-blue text-white'>{customButton}{arrowBtn}</button>
    </div>
  )
}

export default Button
