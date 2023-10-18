'use client'
import React, { useRef } from 'react'

import { motion, useScroll, useTransform } from "framer-motion"




const ScrollWrapper = () => {

   const ref = useRef(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
   });


   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])




   return (
      <motion.div ref={ref} className='h-screen custom-bg-cover'  >

         <div className='flex h-full justify-center items-center'>


            <motion.div className=' text-white' style={{ y: textY }}>
               SCROLL TESTING:
            </motion.div>

         </div>

      </motion.div>
   )
}

export default ScrollWrapper