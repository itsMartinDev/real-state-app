'use client'
import React, { useRef } from 'react'

import { motion, useScroll, useTransform } from "framer-motion"


import RevealWrapper from './RevealWrapper'

const CypressParkCover = () => {


   
   const ref = useRef(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
   });

   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])



   return (
      <div ref={ref} className='custom-bg-park-cover'>



         <div className='container h-screen'>

            <div className='h-full flex flex-col justify-center sm:items-center'>

               <motion.div style={{ y: textY }} className='font-serif text-6xl sm:text-8xl text-white -mt-16 '>
                  <div>
                     Cypress
                  </div>
                  <div>
                     Park
                  </div>
               </motion.div >

               <div className='grid grid-cols-2 mt-6 md:mt-16'>
                  
                  <div></div>
                  <RevealWrapper delay={0.25}>
                     <motion.div style={{ y: textY }} className='text-white max-w-xs font-body'>
                        A lifestyle characterized by comfort, and the priceless joy of spending quality time.
                     </motion.div>
                  </RevealWrapper>

               </div>


            </div>

            

         </div>
      </div>
   )
}

export default CypressParkCover