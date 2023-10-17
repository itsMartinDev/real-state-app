import React from 'react'

const Cover = () => {
  return (
    <div className='custom-bg-cover h-screen'>


      <div className="container text-white uppercase font-serif text-4xl md:text-6xl h-full flex justify-center items-center">
         <div className='flex flex-col justify-center items-center  '>


            <div className='-mt-16'>
               Life
            </div>
            <div className='text-main-color'>Among parks &</div>
            <div><span className='text-main-color'>city</span> icons</div>
            <div>sights</div>
         </div>



      </div>




      <div className='relative mt-[-20px] '>
         <div className='absolute-center font-serif text-8xl text-main-color'>Iconic</div>
         <div className='absolute-center  font-cursive text-9xl text-white opacity-80 ml-[-20px] mt-[10px]'>Sights</div>

      </div>


    </div>
  )
}

export default Cover