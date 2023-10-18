'use client'
import React, { useRef } from 'react'

import { motion, useScroll, useTransform } from "framer-motion"



const LifeAmongParksCover = () => {

   
   const ref = useRef(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
   });

   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])



  return (
    <div ref={ref} className='custom-bg-cover h-screen'>


      <div className="container text-white uppercase font-serif text-4xl md:text-6xl h-full flex justify-center items-center">
         <motion.div  className='flex flex-col justify-center items-center  '  style={{ y: textY }}>


            <div className='-mt-24'>
               Life
            </div>
            <div className='text-main-color'>Among parks &</div>
            <div><span className='text-main-color'>city</span> icons</div>
            <div>sights</div>
         </motion.div >



      </div>




      <div className='relative mt-[-20px] '>
         <div className='absolute-center font-serif text-8xl text-main-color'>Iconic</div>
         <div className='absolute-center  font-cursive text-9xl text-white opacity-80 ml-[-20px] mt-[10px]'>Sights</div>

      </div>


    </div>
  )
}

export default LifeAmongParksCover