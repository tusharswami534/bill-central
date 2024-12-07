import React from 'react'
import { COMPANIES_lOGO } from '../../utils/Helper'

const CompaniesLogo = () => {
  return (
    <div className='py-12'>
        {COMPANIES_lOGO.map((item , index) => (
            <img key={index} src={item.logo} alt={item.alt} />
        ))}
    </div>
  )
}

export default CompaniesLogo
