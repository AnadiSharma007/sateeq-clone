import React from 'react'

const RaiseSubComponent = ({ title, desc, img, left}) => {
  return (
    <>
    <div className={`flex flex-col gap-2 ${!left ? 'sm:flex-row-reverse sm:text-left': 'sm:flex-row sm:text-right'} items-center `}>
        <div><img className='max-w-[460px] max-h-[338px]' src={img} alt="" /></div>
        <div className = {`flex flex-col gap-3 items-center ${!left ? 'sm:items-start' : 'sm:items-end'}`}>
        <div className="text-[30px] font-bold">{title}</div>
        <div className="text-[17px] font-medium text-[#646464] ">{desc}</div>
        </div>
        </div>
        </>
        )
    }

export default RaiseSubComponent