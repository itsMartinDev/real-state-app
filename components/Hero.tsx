import Image from 'next/image'
import React from 'react'
const Hero = () => {
   return (

      <div className='font-body'>
         {/* style={{ height: 'calc(100vh - 20vh)' }} */}
         <div className='custom-bg-hero relative z-10 ' >



            <div className='container z-20 text-white'>

               <nav id='row' className='pt-4'>

                  <div className='grid grid-cols-2 lg:grid-cols-3'>

                     <div className='flex items-center'>
                        <div className='py-1 px-5 border-2 border-main-color rounded-full'>Home</div>
                        <div className=' px-5'>About</div>
                     </div>

                     <div className=' flex justify-end md:flex-col'>

                        <Image src={'/images/royal-buildings-log.png'} width={100} height={100} alt='Royal Buildings' className='md:mx-auto '></Image>
                        
                        <div className='text-center text-lg font-bold hidden md:flex md:mx-auto'>
                           ROYAL BUILDINGS CO.
                        </div>

                        <div className='text-center text-sm hidden md:flex md:mx-auto'>
                           A REAL STATE COMPANY
                        </div>
                     </div>


                     <div className='items-center hidden lg:flex'>

                        <div className='py-1 px-5'>
                           +1 000 999 00 00
                        </div>
                        <div>
                           <div className='py-1 px-5 rounded-full bg-main-color text-white'>Schedule a call</div>
                        </div>

                     </div>






                  </div>


               </nav>

               <div className='mt-36 xl:mt-80 text-white sm:pl-16 xl:pl-24 relative z-50 font-serif drop-shadow-md'>
                  <div className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl '>CYPRESS</div>
                  <div className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex items-center  '>PARK
                  <div className='text-4xl lg:text-5xl xl:text-7xl pl-4 font-cursive -rotate-6 '>Residences</div>
                  </div>
               </div>

            </div>

            <div className='bg-black mt-[-60px] relative h-16 '>
               <div className='h-5'></div>
               <div className='custom-bg-ring h-40 pt-16 relative' >
               </div>
               
            </div>


         </div>

         <div className='bg-black '>
            
            <div className='container '>
               
               

               <div className='grid grid-cols-1 md:grid-cols-2 py-48   relative z-50'>
                  
                  <div></div>
                  
                  <div className='max-w-sm text-main-color uppercase font-bold'>
                     Luxury family residences with a well developed infrastructure within a minute of Cypress Park
                  </div>

               </div>
            </div>
         
         </div>

      </div>


   )
}

export default Hero