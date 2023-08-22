import React from 'react';
import {FaFreeCodeCamp} from "react-icons/fa";
import theOdinIcon from "/src/assets/odin.png";


const Certificate = (props) => {
  return (
    <a href="https://www.freecodecamp.org/" target='_blank'>
    <div className='flex shadow-md flex-col items-center hover:animate-pulse w-fit border border-transparent space-y-2 hover:border-blue-800 duration-500 cursor-pointer p-2'>
        <div className={` text-5xl md:text-8xl`}>{props.icon}</div>
        <p className='text-[.7rem] text-gray-600 text-center'>{props.name}</p>
    </div>
    </a>
  )
}



const Certification = () => {
  return (
    <div id='certifications' className='px-4 md:px-10 py-6 flex flex-col space-y-8 mt-10 md:mt-0'>
        <h1 data-aos="zoom-in" className='text-2xl md:text-5xl text-center md:text-start mb-4'><span className='border-b-4 text-gray-700 border-blue-800'>CERTIFICATION</span></h1>
        <div data-aos="zoom-in" className='flex space-x-4'>
            <Certificate
            icon={<FaFreeCodeCamp />}
            name="Freecodecamp Institute"
            />
        <a href="https://www.theodinproject.com" target='_blank'>
        <div data-aos="slide-up" className='flex shadow-md flex-col items-center hover:animate-pulse w-fit border border-transparent space-y-2 hover:border-blue-800 duration-500 cursor-pointer p-2'>
            <div className={` text-5xl md:text-8xl`}>
                <img src={theOdinIcon} alt="" />
            </div>
            <p className='text-[.7rem] text-gray-600'>THEODIN PROJECT</p>
        </div>
        </a>
        </div>
      
    </div>
  )
}

export default Certification
