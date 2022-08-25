import React from 'react'

const InMedia = () => {
  return (
    <div className='flex flex-col items-center my-16'>
        <div className='text-[32px] font-bold'>In the Media</div>
        <div className='mb-5'>We have been covered by top media groups around India</div>
        <div className="flex flex-col lg:flex-row items-center lg:gap-16 gap-5">
            <div><img src="https://sateeq.com/img/media-1.386e917d.svg" alt="" /></div>
            <div><img src="https://sateeq.com/img/media-2.2a2a15d0.svg" alt="" /></div>
            <div><img src="https://sateeq.com/img/media-3.e3f44142.svg" alt="" /></div>
            <div><img src="https://sateeq.com/img/media-4.0e1f64f4.svg" alt="" /></div>
        </div>
    </div>
  )
}

export default InMedia