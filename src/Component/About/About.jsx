import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import {  IoLocationSharp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <div className="Contact my-44 ">
      {/* contact header  */}
      <div 
      data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="300"                
    className=" border-2 border-black flex justify-between px-20 py-2 ">
      <h1 className="text-3xl md:text-4xl font-Ramaraja pt-1">Contact</h1>
      <h3 className="pt-1 font-IBM text-xl hidden md:flex">a little bit more about me :)</h3>
      </div> 
      {/* contact header  */}
      {/* contact container */}
      <div className="inputContainer">
      {/* input sction  */}
        <div className="border-2 border-black w-10/12 md:w-8/12 mx-auto p-6 m-32 duration-700">
        {/* info part  */}
      <div 
    data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="500"
      className="info relative md:absolute  w-full md:w-2/6 md:left-[62%] bg-[#f0f0f0] border-[0.02em] border-black p-5  md:py- duration-700 space-y-5 overflow-hidden">
      <div className=' cursor-pointer'>
        <a className='flex' href="#"><FaPhoneAlt  className='m-1'/> Call me </a>
        <h1 className=''>~ +918307872668</h1>
        </div>
        <div className=" cursor-pointer">
        <a className='flex' href="#"><IoLocationSharp className='m-1'/> Location </a>
        <h1 className=''> ~Haryana ,india</h1>
        </div>
        <div className=' cursor-pointer'>
        <a className='flex' href="#"><BiLogoGmail className='m-1'/> Timing </a>
        <h1 className=''>~parashardeepak718@gmail.com</h1>
        </div>

      </div>
      {/* info part  */}
          <h1 className='text-3xl md:text-5xl font-IBM'>contact</h1>
          <div className="form space-y-5">
            <div className="username border-b-[0.1em] border-black w-11/12 md:w-8/12">
              <input className='outline-none' type="text" placeholder="Enter your Name"/>
            </div>
            <div className="useremail border-b-[0.1em] border-black w-11/12 md:w-8/12">
              <input className='outline-none' type="email" placeholder="Enter your email" required/>
            </div>
            <div className="usermessage  border-b-[0.1em] border-black w-11/12 md:w-8/12">
              <textarea className='w-10/12 h-20' placeholder="Enter your message" required></textarea>
            </div>
            <div className="usersubmit w-8/12">
            <button
                type="submit"
                className="flex justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-Poppins font-semibold leading-6 text-black shadow-sm hover:bg-gray-500 
                border-[0.01em] border-black
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button></div>
          </div>

        </div>
        {/* input sction  */}
      </div>
      {/* contact container */}
      </div>
       </>
  )
}

export default Contact
