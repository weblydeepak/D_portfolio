import React from 'react';
import img from "../../assets/9a3a825e8c7390805f849b445b711b4f.gif";
import { Works } from '../../assets/Data/Data';

const Work = () => {
  return (
    <><div className="work">
    {/* hearding section  */}
      <div 
      data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="300"                
    className=" border-2 border-black flex justify-between px-20 py-2">
        <h1 className="text-3xl md:text-4xl font-Ramaraja pt-1">Work</h1>
        <h3 className="pt-1 font-IBM text-xl hidden md:flex">Work/projects</h3>
      </div>
          {/* hearding section  */}
          
          {/* card container section  */}
          <div className="flex flex-wrap justify-evenly m-8 md:mx-14 md:my-20 duration-150">
          {/* card  section  */}
         {
          Works.map((data)=>{
            return(
              <div
                 data-aos="fade-up"
                 data-aos-delay={data.aosDelay} 
               key={data.id} className={data.class}>
              <a href={data.links}>
                <div className="card bg-white text-black relative h-72 md:h-80 lg:h-[29rem] w-56 md:w-60 lg:w-80 top-4 left-4 border-2 border-black hover:top-0 hover:left-0 duration-700">
                <h4 className="time text-sm md:text-base font-IBM p-3 border-b-2 border-black/50 cursor-pointer">{data.timing}</h4>
    <h5 className="title p-1 lg:p-3 text-xl md:text-3xl lg:text-4xl lg:leading-10 border-b-2 border-black/50 cursor-pointer">{data.name}</h5>
    <img className='image cursor-pointer h-28 md:h-40 lg:h-60  w-full ' src={img}  alt="" />
    <h4 className='work at cursor-pointer border-t-2 border-black/50 p-3 md:p-4 text-sm font-IBM '>Lorem ipsum dolor sit amet consectetur.</h4>
  
                </div>
              </a>
              </div>
            )})
          }</div>
         {/* card container section  */}

      </div>
    </>
  )
}

export default Work
