'use client'
import React from 'react'
import { housingImages } from '@/constants/constants'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className='bg-black'> 
      <div className='container '>


         <div className='relative'>
            

               <div className='absolute-center z-10 '>  
                  
                  <div className=' text-white font-cursive text-2xl md:text-4xl lg:text-9xl opacity-60 '>
                     Elegant Views
                  </div>
         
               </div>
            
      
               <div className=' grid grid-cols-3 gap-4 '>
                  {
                     housingImages.map( (image, index) => (
                           <Image key={index} src={image} width={557} height={828} alt=''></Image>
                        )
                     )
                  }
               </div>




         </div>   

         <div className="relative">

            <div className='flex justify-center mt-[-30px]  z-20'>

               <div className='rounded-full border-main-color bg-black border-4 py-4 px-4 md:py-6 md:px-6  text-white text-sm'>
                  
               </div>   
            </div>

         </div>


      </div>
    </div>
  )
}

export default Gallery