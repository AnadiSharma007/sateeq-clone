import React from "react";
import ola from '../assets/images/ola.svg';
import bharat from '../assets/images/bharat.svg';
import zomato from '../assets/images/zomato.svg';

const ViewOurDeals = () => {
  return (
    <div className="bg-[#1E47FF] mt-[12px] m-[20px] rounded-[40px] flex flex-col sm:flex-row justify-around items-center gap-5 p-[5rem] sm:p-[20px] pb-[30px]">
      <div className='flex flex-col sm:flex-row items-center justify-between gap-[10rem]'>
      <div className="flex flex-col items-center lg:items-start text-white">
        <span className="text-center sm:text-left font-bold text-[25px]">
          If you would have invested
        </span>
        <span className=" font-bold text-[64px]">₹5000</span>
        <span className="text-center sm:text-left text-[25px] mb-5">You could have earned</span>
        <button className="rounded-lg py-3 w-[150px] font-bold text-blue-600 bg-white">
          View Our Deals
        </button>
      </div>
      <div className="flex flex-col gap-5 items-center w-full ">

      <div className="flex flex-col gap-5 sm:flex-row justify-between w-full">
        <div className="bg-white rounded-lg flex  flex-col justify-around items-center p-4 gap-5">
          <img className="h-10" src={ola} alt="" />
          <div className="flex flex-col items-center">
          <div >You could have earned</div>
          <div className="text-[40px] font-bold">₹4.0L</div>
        </div>
        </div>
        <div className="bg-white rounded-lg flex flex-col justify-around items-center p-4 gap-5">
          <img className="h-10" src={bharat} alt="" />
          <div className="flex flex-col items-center">
          <div>You could have earned</div>
          <div className="text-[40px] font-bold">₹4.0L</div>
        </div>
        </div>
        </div>
        <div className="sm:flex-row flex items-center flex-col gap-5  bg-white justify-evenly rounded-lg lg:p-[40px] p-4  w-[100%]">
        <img className="h-10" src={zomato} alt="" />
        <div className="flex flex-col items-center">
          <div>You could have earned</div>
          <div className="text-[40px] font-bold">₹4.0L</div>
        </div>
        </div>
        <div className="text-[17px] text-[#ffffff99] font-bold">* In thier first funding round</div>
      </div>
      </div>
    </div>
  );
};

export default ViewOurDeals;
