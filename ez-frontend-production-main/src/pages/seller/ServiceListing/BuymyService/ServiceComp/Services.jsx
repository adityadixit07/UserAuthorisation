import React from 'react'

const scard = ["packages", "logo", "UIUX", "Illustration", "package", "package", "package"]

const Services = () => {
  return (
    <div className='w-full grid grid-cols-3 md:flex md:flex-row justify-between gap-3 md:gap-10 p-4 md:p-10'>
            {
              scard.map((item, index) => {
                return <a href={`#${item}`}> <div className='flex flex-col items-center justify-center' key={index}>
                  <div className='w-20 h-20 bg-[#D9D9D9] rounded-[10px]'>
                  </div>
                  <h3 className='font-medium'>{item}</h3>
                </div>
                </a>
              })
            }

          </div>
  )
}

export default Services
