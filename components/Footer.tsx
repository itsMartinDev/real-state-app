import { socialPages } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RevealWrapper from './RevealWrapper'

const Footer = () => {
  return (
    <div id='footer' className='bg-black'>
      <div className='container'>
        <div className='flex justify-center py-16 flex-col items-center'>

          <div className='mb-16 w-full grid grid-cols-3'>
            <div className='text-white font-body self-center place-self-center'>
              Call an representant
            </div>
            <Image src={'/images/royal-buildings-log.png'} height={50} width={50} alt='' className='justify-self-center'></Image>
            <div className='text-white'>
              
            </div>
          </div>
          <RevealWrapper delay={0.25}>
            <div className='font-serif text-4xl mg:text-6xl text-main-color'>+1 000 999 00 00</div>
          </RevealWrapper>
          <div className='text-white font-serif py-8 max-w-sm text-center '>Our dedicated team of experts will be available to address all your queries and concerns</div>
          
          <div className='flex gap-4 mt-8'>
            {
              socialPages.map( (page) => (
                <Link href='#footer' className='border-2 border-main-color rounded-full p-6 hover:bg-light-black'>
                  <Image src={page} width="20" height="20" alt='' className='invert'></Image>
                </Link >
              ) )
            }
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer