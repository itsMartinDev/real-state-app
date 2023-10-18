import Image from 'next/image'
import React from 'react'

const SleekAbodesCover = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-light-pink'>


      <Image src={'/images/modern-villa-cover.jpg'} width={1920} height={1080} alt='' className='object-cover min-h-[300px] h-full'></Image>


      <div className='pt-32 pb-32  md:pt-28 flex flex-col justify-center items-center'>
        <div className='font-cursive text-6xl flex'>
          <div className='-mt-10'>Sleek</div> <div>Abodes</div>
        </div>
        <div className='max-w-xs font-body'>
          Quiet environments, serene surroundings, and unmatched privacy. Here, every moment is characterized by a harmonious blend of tranquility.
        </div>
      </div>
    </div>
  )
}

export default SleekAbodesCover