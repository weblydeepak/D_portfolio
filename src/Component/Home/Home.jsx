import React from 'react';
import img from   "../../assets/dc42f5e73505289d7556e2d9571d02cc.gif";
const Home = () => {
  return (
   <>
   <div className=" flex justify-center items-center pt-[5em] pb-11 md:pb-[7.7em] md:pt-[13em] lg:pt-[12em] px-8">
    <div className=" flex flex-wrap top justify-center items-center ">
      {/* text content */}
      <div
       data-aos="fade-up-right"
       data-aos-duration="200"
       className=" w-[70%] md:w-[28%]  space-y-5 order-2 md:order-1">
      <h1 className='text-sm md:text-[18px]  font-IBM'> i'm deepak--<br />
     a MERN stack developer (Full stack developer) with +1year of experience and a traveler from India, 
     </h1>
     <h1 className='text-sm md:text-[18px] font-IBM  '> like to craft a solid and scrable frontend + backend with great user experience <br /> i'm working <a href="" className='underline underline-offset-4'>on!</a></h1> 
      </div>
      
        {/* image section  */}
        <div className="w-[70%] md:w-[29%] order-1 md:order-2">
          <img src={img} 
          className='h-[420px]' alt="" />
        </div>
    </div>
   </div>
   </>
    )
}

export default Home
