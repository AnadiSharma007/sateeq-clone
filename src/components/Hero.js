import React from 'react'
import heroimage from '../assets/images/heroimage.svg'


const Hero = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row justify-between max-w-[80%] mx-auto my-[5rem] sm:items-left'>
        <div className='flex flex-col items-center'>
            <div className=" flex items-center sm:items-start text-center sm:text-left flex-col gap-[0.75rem]">

            <div className='flex flex-col items-center sm:items-start'>
            <div className='hero-font'>Invest In </div>
            <div style={{
              background:
                "-webkit-linear-gradient(0deg, rgba(57,183,255,1), rgba(37,6,196,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }} className='hero-font'> Highly-Vetted </div>
            <div className='hero-font'> Startups</div>
            </div>
            <div><p className='text=[17px]'>Access Startups opportunities & start Investment journey with amount as small as ₹5000.</p></div>
            <button className='blue-button py-4 hover:bg-blue-600 font-bold px-[4.2rem] text-lg'>Invest Now</button>
            <div>Already a member? <span className='font-bold'>Login</span></div>
            </div>
        </div>
        <div>
            <img src={heroimage} alt="" />
        </div>
    </div>
  )
}

export default Hero