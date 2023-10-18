'use client'

import React from 'react'



import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface RevealWrapperProps {
   children: JSX.Element,
   delay : number
}

const RevealWrapper = (props: RevealWrapperProps) => {


   const ref = useRef(null)
   const isInView = useInView(ref, { once: true })
   const mainControls = useAnimation()

   useEffect(() => {
      // console.log(isInView)
      if (isInView) {
         mainControls.start("visible")
      }
   }, [isInView])

   return (
      <div ref={ref} >

         <motion.div
            variants={{
               hidden: { opacity: 0, y: 75 },
               visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.4, delay: props.delay }}
         >
            {props.children}

         </motion.div>
      </div>
   )
}

export default RevealWrapper