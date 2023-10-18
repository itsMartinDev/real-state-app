import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RevealWrapper from './RevealWrapper'
const Hero = () => {
   return (

      <div className='font-body'>

         <div className='custom-bg-hero relative z-10 ' >



            <div className='container z-20 text-white'>

               <nav id='row' className='pt-4'>

                  <div className='grid grid-cols-2 lg:grid-cols-3'>

                     <div className='flex items-start '>
                        <Link href={'#stats'} className='py-1 px-5 border-2 border-main-color rounded-full'>Stats</Link>

                        {/* <div className='py-1 px-5 '>About</div> */}
                     </div>

                     <div className='justify-self-end lg:justify-self-center'>


                        <div className='flex items-center  md:flex-col '>


                           <Image src={'/images/royal-buildings-log.png'} width={50} height={50} alt='Royal Buildings' className=''></Image>

                           <div className='text-center text-lg hidden md:flex  font-serif'>
                              ROYAL BUILDINGS CO.
                           </div>

                           <div className='text-center hidden md:flex ' style={{ fontSize: '12px' }}>
                              A REAL STATE COMPANY
                           </div>





                        </div>

                     </div>



                     <div className='items-start hidden lg:flex'>

                        <div className='py-1 px-5 '>
                           +1 000 999 00 00
                        </div>

                        <Link href={'#request-a-callback'} className='py-1 px-5 bg-main-color rounded-full text-white'>Request a callback</Link>


                     </div>






                  </div>


               </nav>

               <div className='mt-48 xl:mt-80 text-white sm:pl-16 xl:pl-24 relative z-50 font-serif drop-shadow-md'>



                  <RevealWrapper delay={0.25}>
                     <div className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl '>CYPRESS</div>
                  </RevealWrapper>

                  <div className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex items-center  '><RevealWrapper delay={0.50}><span>PARK</span></RevealWrapper>
                     <div className='text-4xl lg:text-7xl xl:text-8xl pl-4 font-cursive -rotate-6 mt-[15px] opacity-80'><RevealWrapper delay={0.75}><span>Residences</span></RevealWrapper></div>
                  </div>
               </div>

            </div>

            <div className='bg-black mt-[-30px] md:mt-[-35px] lg:mt-[-45px] xl:mt-[-60px] relative h-16 '>
               <div className='h-5'></div>
               <div className='custom-bg-ring h-40 pt-16 relative opacity-30' >
               </div>

            </div>


         </div>

         <div className='bg-black '>

            <div className='container '>



               <div className='grid grid-cols-1 md:grid-cols-2 py-20   relative z-50'>

                  <div></div>

                  <div>
                     <div className='max-w-sm text-main-color uppercase font-bold'>
                        Luxury family residences with a well developed infrastructure within a minute of Cypress Park
                     </div>

                     <div className='text-white pt-10 max-w-sm'>
                        Nestled amidst lush greenery and serene surroundings, these residences redefine modern living.
                     </div>
                  </div>

               </div>
            </div>

         </div>

      </div>


   )
}

export default Hero