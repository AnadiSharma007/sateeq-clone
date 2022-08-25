import React from 'react'
import { BsCurrencyDollar, BsCheck2Circle} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'

const ThreeCards = () => {
  return (
    <div className="my-[5rem] flex flex-col items-center">
    <div className="flex sm:flex-row flex-col justify-center gap-5 ">
      <div className="max-w-[350px] shadow-slate-400 shadow-lg bg-[#1E47FF]  flex flex-col items-center p-10 text-center gap-7 rounded-[20px]">
        <BsCurrencyDollar className='text-[70px] rounded-full p-4 bg-[#8d98cb] bg-opacity-20 hover:bg-none text-white'/>
        <p className='text-white'>Start Investing with as low as 5000 <span>INR</span></p>
      </div>
      <div className="max-w-[350px] shadow-slate-400 shadow-lg bg-white flex flex-col items-center p-10 text-center gap-7 rounded-[20px]">
        <FiUsers className='text-[70px] rounded-full p-4 bg-[#8d98cb] text-[#1E47FF]'/>
        <p>Start Investing with as low as 5000 <span>INR</span></p>
      </div>
      <div className="max-w-[350px] shadow-slate-400 shadow-lg bg-white flex flex-col items-center p-10 text-center gap-7 rounded-[20px]">
        <BsCheck2Circle className='text-[70px] rounded-full p-4 bg-[#8d98cb] text-[#1E47FF]'/>
        <p>Start Investing with as low as 5000 <span>INR</span></p>
      </div>
      
    </div>
    
      <button className='blue-button font-semibold text-[20px] mt-[5rem] mb-[1rem] px-[5rem]'>Sign Up</button>
    </div>
  )
}

export default ThreeCards