import React from "react";
import {GoMail} from 'react-icons/go'
import AccordianDiv from "./AccordianDiv";

const Faq = () => {
  return (
      <div className="flex lg:flex-row flex-col items-center py-[100px] px-[136px]">
        <div className='flex flex-col items-center lg:items-start mb-[16px]'>
          <h1 className="text-[30px] font-bold mb-[16px] lg:text-left text-center">Any Question?</h1>
          <p className="text-[18px] mb-[18px] w-[75%] lg:text-left text-center">We have already curated some of the common asked questions for you</p>
          <button className="blue-button flex items-center justify-around w-[250px] font-semibold text-[18px] px-[16px] py-[12px] m-[20px] lg:ml-[0px]"><span>Contact Us</span><GoMail className="h-10"/></button>
        </div>
       <AccordianDiv/>
    </div>
  );
};

export default Faq;
