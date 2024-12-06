import React from 'react'
import Header from '../../common/Header'
import Button from '../../common/Button'
import { CommonArrowIcon } from '../../utils/Icons'
import HeroBgLayer from '../../assets/images/webp/hero-bg-layer.webp'
import HeroImage from '../../assets/images/webp/hero-image.webp'

const Hero = () => {
  return (
    <div className='bg-contain max-lg:bg-cover bg-top bg-no-repeat max-2xl:px-5' style={{backgroundImage:`url(${HeroBgLayer})`}}>
      <Header/>
        <div className='container mx-auto flex flex-wrap mt-[120px] max-lg:mt-12 max-lg:gap-5'>
          <div className='w-1/2 max-lg:w-full flex flex-col justify-between'>
          <div>
            <h1 className='!leading-110 text-custom-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-normal text-white max-w-[612px] max-lg:max-w-full'>Easily Compare <span className='font-bold'> Energy, Gas, and Internet </span> Plans</h1>
            <p className='text-white max-w-[506px] !leading-150 max-lg:max-w-full mt-4 max-md:text-sm'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
            <div className='max-w-[476px] max-lg:!my-5 bg-[#FEFEFE] !mt-custom-10 p-[9px] flex w-full rounded-[0_100px_100px_20px]'>
              <input className='w-full outline-none items-center placeholder:text-bluish-grey px-3 text-bluish-grey' placeholder='Start typing your address' type="text" />
              <Button customButton={'Compare'} arrowBtn={<CommonArrowIcon/>}/>
            </div>
            </div>
            <div>
              <p className='!leading-110 max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-custom-4xl max-w-[548px] text-green-vogue max-lg:text-white max-lg:max-w-full'>More than <span className='font-bold text-ball-blue'> 80,000+ </span> companies trust bill central </p>
            </div>
          </div>
          <div className='w-1/2 max-lg:w-full'>
            <img className='max-lg:w-full' src={HeroImage} alt="HeroImage" />
          </div>
        </div>
    </div>
  )
}

export default Hero