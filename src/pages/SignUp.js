import React from 'react'
import register from '../assets/images/register.svg';
import {Input} from '@chakra-ui/react'
import google from '../assets/images/google.svg'

const SignUp = () => {
  return (
    <div className='w-[80%] m-auto my-[40px]'>
        <div className="flex justify-between items-center gap-5">
        <div>
            <img className="hidden sm:block sm:max-w-[100%]" src={register} alt="" />
        </div>
        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col items-center">
            <div class='text-[35px] font-bold'>Get Started</div>
            <div className='text=[18px] text-center'>Please provide us with your name and email</div>
            </div>
        <div className="flex gap-5">
        <Input border='1px'borderColor='black' size='lg' placeholder='First Name' />
        <Input border='1px'borderColor='black' size='lg' placeholder='Last Name' />
        </div>
        <Input border='1px'borderColor='black' size='lg' placeholder='Email' />
        <button className='w-full bg-[#3055FF] rounded-lg border-none font-bold text-white p-5 text-[18px]'>Next</button>
        <button className='w-full border-2 flex items-center  border-black rounded-lg font-semibold p-5 text-[18px]'><img src={google} alt="" /> <span className='flex-1'>Sign Up With Google</span></button>
        </div>
        
        </div>
    </div>
  )
}

export default SignUp