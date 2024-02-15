import React from 'react'
const Footer = () => {
  return (
    <>
      
   <div className="footer contactr flex flex-col md:flex-row justify-around  items-center my-0 md:my-3">
<div className="text-sm md:text-base border-[0.1em] border-black  m-[0.5em] p-[0.5em] bg-[#f0f0f0] font-IBM w-fit">© 2024 Deepak</div>
<div className="text flex items-center   ">
    <h1 className='text-xl md:text-2xl font-Ramaraja py-1'>Contact</h1>
    <div className="mx-[2em] my-[0.5em] bg-green-800  border-[0.1em] border-black ">
        <h1 className=' relative top-[0.5em] left-[0.5em] bg-[#f0f0f0] border-[0.1em] border-black  font-IBM text-sm md:xl p-[0.5em] hover:top-0 hover:left-0 duration-700'>parashardeepak718@gmail.com</h1>
    </div>
</div>
<div className="text-sm  border-[0.1em] border-black  m-[0.5em] p-[0.5em] bg-[#f0f0f0] font-IBM w-fit ">built from scratch :)</div>
   </div>
   
   </>
  )
}

export default Footer
