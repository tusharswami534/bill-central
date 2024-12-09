import React from 'react'

const SectionsHeading = ({CommonHeading , BoldHeading , HeadingSpan}) => {
  return (
    <h2 className='leading-110 text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-normal text-black-bean'>{CommonHeading} <span className='font-bold'>{BoldHeading}</span>{HeadingSpan}<span>{}</span></h2>
  )
}

export default SectionsHeading
