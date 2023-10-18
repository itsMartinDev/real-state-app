import React from 'react'

const Contact = () => {
  return (
   <div id='request-a-callback' className='bg-light-pink'>

      
      <div className='container flex flex-col items-center'>
         <div className='text-main-color flex flex-col justify-center items-center py-16'>

            <div className='font-serif text-6xl'>REQUEST</div>
            <div className='font-cursive text-black text-6xl -mt-6'>a</div>
            <div className='font-serif text-6xl -mt-6'>CALLBACK</div>
         </div>

         <div className='max-w-xl'>
            <form className='pb-4'>
               <input type="text" placeholder="YOUR NAME" className='w-full border-b-2 border-b-main-color rounded-t-md px-4 py-2 mb-2 font-body'/>
               <input type="email" placeholder="YOUR EMAIL" className='w-full border-b-2 border-b-main-color rounded-t-md px-4 py-2 mb-2 font-body'/>

            </form>

            <div className='flex mb-4'>
               <div className='mr-2'>
                  <div className='bg-main-color w-6 rounded-full text-center font-serif  text-white '>i</div> 
               </div>
               <div className='font-serif'>
               Register your information and an agent will reeach you.
               </div>
            </div>

            <div className='mb-16'>
               <button className='bg-main-color px-4 py-2 rounded-full text-white font-bold font-body'>Submit</button>
            </div>
         </div>
      </div>

    </div>
  )
}

export default Contact