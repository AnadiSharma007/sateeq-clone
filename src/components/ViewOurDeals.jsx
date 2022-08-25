import React from "react";

const ViewOurDeals = () => {
  return (
    <div className="bg-[#1E47FF] mt-[12px] m-[20px] rounded-[40px] flex flex-col sm:flex-row justify-around items-center gap-5 p-[5rem] sm:p-[20px] pb-[30px]">
      <div className='flex flex-col sm:flex-row items-center justify-between gap-[10rem]'>
      <div className="flex flex-col  items-center sm:items-start text-white">
        <span className="font-bold text-[25px]">
          If you would have invested
        </span>
        <span className="font-bold text-[64px]">₹5000</span>
        <span className="text-[25px]">You could have earned</span>
        <button className="rounded-lg py-3 w-[150px] font-bold text-blue-600 bg-white">
          View Our Deals
        </button>
      </div>
      <div className="flex flex-col gap-5 items-center w-full ">

      <div className="flex flex-col gap-5 sm:flex-row justify-between w-full">
        <div className="bg-white rounded-lg flex flex-row sm:flex-col justify-around items-center p-4 gap-5">
          <img className="h-10" src="https://sateeq.com/img/est-1.b4f05541.svg" alt="" />
          <div className="flex flex-col items-center">
          <div>You could have earned</div>
          <div className="text-[40px] font-bold">₹4.0L</div>
        </div>
        </div>
        <div className="bg-white rounded-lg flex flex-row sm:flex-col justify-around items-center p-4 gap-5">
          <img className="h-10" src="https://sateeq.com/img/est-4.d73ab359.svg" alt="" />
          <div className="flex flex-col items-center">
          <div>You could have earned</div>
          <div className="text-[40px] font-bold">₹4.0L</div>
        </div>
        </div>
        </div>
        <div className="flex items-center  bg-white justify-around rounded-lg p-[40px]  w-full">
        <img className="h-10" src="https://sateeq.com/img/est-2.0d1a3584.svg" alt="" />
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
