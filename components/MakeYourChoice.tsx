import { makeYourChoiceData } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'

const MakeYourChoice = () => {
  return (
    <div id='stats' className='md:h-screen custom-bg-make-your-choice'>
      <div className='container flex h-full items-center bg-w hite'>

        <div className='relative w-full'>


        <div className='absolute-center'>
          <div className='text-main-color font-cursive text-8xl opacity-40'>
            Make your choice
          </div>
        </div>

        <div className=' grid grid-cols-1 md:grid-cols-3 gap-10 w-full'>
          {
            makeYourChoiceData.map((data, index) => (
              <div key={data.description} className='bg-black h-96 p-10 flex flex-col justify-between'>
                <div className=' font-serif text-main-color text-6xl'>{data.number}</div>

                <div className='flex items-center'>

                  <div className='p-6 border-2 border-main-color rounded-full max-w-max'>
                    <Image src={data.image} width={30} height={30} alt='' className='invert'></Image>
                  </div>

                  <div className='text-white font-body ml-4 max-w-[100px]'>{data.description}</div>

                </div>

              </div>
            ))
          }
        </div>









        </div>








      </div>
    </div>
  )
}

export default MakeYourChoice