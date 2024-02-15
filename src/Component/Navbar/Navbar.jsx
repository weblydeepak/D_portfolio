import React from 'react'
import { Menu } from '../../assets/Data/Data'
const Navbar = () => {
  return (
    <>
        <div
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500"
         className=" Navbar border-2 border-black h-[8vh] w-full pt-[1vh] fixed z-50 top-0 flex items-center justify-between bg-white ">
        {/* logo section  */}
        <h1 className='LOGO'>
        <a href="./#" className="px-[3rem] text-4xl font-Ramaraja  ">Deepak parashar</a>
        </h1>
            {/* links section  */}
            <nav className=" hidden md:flex">
              <ul className='flex gap-6 px-8'>{
                Menu.map((data)=>(
                  <li className='' key={data.id}>
                    <a className=' text-2xl font-Ramaraja' href={data.link}>
                      {data.name}
                    </a>
                  </li>
                ))
                }                
              </ul>
            </nav>

        </div>
    </>
  )
}

export default Navbar
