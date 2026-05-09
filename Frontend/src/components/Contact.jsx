import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='h-[440px] flex  justify-center items-center'>
          <div className='w-96 bg-slate-500 text-white rounded-md p-6'>
               <form action="">
                    <h1 className='text-center text-white text-2xl'>Contact Us</h1>
                    <div className='mt-4 space-y-2'>
              <span>Name</span><br />
              <input
                type="text"
                placeholder='Enter your name'
                className='w-80 px-3 border rounded-md outline-none py-1 text-black'
              /><br/>
            </div>
                    <div className='mt-4 space-y-2'>
              <span>Email</span><br />
              <input
                type="text"
                placeholder='Email address'
                className='w-80 px-3 border rounded-md outline-none py-1 text-black'
              /><br/>
            </div>
            <div className='mt-4 space-y-2'>
              <span>Message</span><br />
              <textarea placeholder='Type your message' className='resize-none text-black w-80 px-3 border rounded-md outline-none py-1'></textarea>
              <br/>
            </div>
            <button className='bg-pink-500 p-3 rounded-md'>Submit</button>
               </form>
          </div>
        </div>
    </>
  )
}

export default Contact