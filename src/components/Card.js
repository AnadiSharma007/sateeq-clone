import React from 'react'
import funded from '../assets/images/sussfunded.svg'

const Card = ({ img, smallImg, heading, desc, tags, raised, close, invest, finished}) => {
  return (
    <>
      <div className="max-w-[380px] rounded-[20px] overflow-hidden shadow-lg">
  <img className="w-full" src={img} alt="Sunset in the mountains" />
  <div className="my-2 px-6 py-4 ">
    <div className="flex items-center gap-5">

    <img className="h-10" src={smallImg} alt="" />
    <div className>
      <div>{heading}</div>
      <div className="flex flex-row gap-5">
      {
        tags.map((tag, i) => (
          <div key={i} className="blue-button">{tag}</div>
          ))
        }
        </div>
    </div>
    </div>
    <div className="mt-5">{desc}</div>
    <div style={{
      height: "8px",
      background: "linear-gradient(84.96deg,#38b6ff 3.56%,#1e47ff 52.58%,#2506c4 98.63%)",
      borderRadius: "-128.63636px",
    }} className="mt-5 rounded-lg"></div>
    
      { finished ? (
        <div className="flex my-2 justify-between">
          <div className="flex flex-col bg-green-400 bg-opacity-30 items-start py-1 px-2 rounded-lg" >
            <div className="text-lg text-green-600 font-extrabold">{raised}</div>
            <div className='text-[12px] opacity-80 font-semibold text-gray-600'>Raised</div>
          </div>
          <div className="flex flex-row border-2 border-green-400 bg-opacity-30 items-center py-1 px-2 rounded-lg">
            <div><img src={funded} alt="" /></div>
            <div className='text-lg text-green-600'>SuccessFully Funded</div>
          </div>
        </div>
      ) : (
        
        <div className='flex my-2 justify-between '>
        <div className="flex flex-col border-r-2 pr-[3rem]">
        <div>{raised}</div>
        <div>Raised</div>
      </div>
      <div className="flex flex-col border-r-2 pr-[3rem]">
        <div>{close}</div>
        <div>Closed in</div>
      </div>
      <div className="flex flex-col">
        <div>{invest}</div>
        <div>Min Invest</div>
      </div>

      </div>
      )}

    </div>
    </div>
    </>
  )
}

export default Card