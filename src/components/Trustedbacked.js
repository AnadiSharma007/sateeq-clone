import React from 'react'
import TestimonialCard from './TestimonialCard'
import codcx from '../assets/images/coindcx.png';
import kai from '../assets/images/kai.png';
import xoxo from '../assets/images/xoxo.png';
import swapnil from '../assets/images/swapnil.png';
import healthify from '../assets/images/healthify.png';
import girish from '../assets/images/girish.png';
import invasys from '../assets/images/invasys.png';
import sarthak from '../assets/images/sarthak.png';
import invoid from '../assets/images/invoid.png';
import parikshit from '../assets/images/parikshit.png'
import rajat from '../assets/images/rajat.png';
import apna from '../assets/images/apna.png';
import unlo from '../assets/images/unlo.png';
import dipak from '../assets/images/dipak.png';
import pic from '../assets/images/pic.png';
import rishav from '../assets/images/rishav.png';



const Data =[
  {
    proImg: kai,
    img: xoxo,
    name: 'Kushal Agrawal',
    desc: 'Founder XOXODay'

  },
  {
    proImg: swapnil,
    img: healthify,
    name: 'Swapnil Garg',
    desc: 'Director-Healthify'

  },
  {
    proImg: girish,
    img: invasys,
    name: 'Girish Deshpande',
    desc: 'VP-Invasystem'

  },
  {
    proImg: sarthak,
    img: invoid,
    name: 'Sarthak Goel',
    desc: 'Founder InVoid (YC)'

  },
  {
    proImg: parikshit,
    img: codcx,
    name: 'Pareekshit S.',
    desc: 'Customer Experience - CoinDCX'

  },
  {
    proImg: rajat,
    img: apna,
    name: 'Rajat Gupta',
    desc: 'Tech Lead - CoinDCX'

  },
  {
    proImg: dipak,
    img: unlo,
    name: 'Dipak Biswal',
    desc: 'VP - Aakash Education'

  },
  {
    proImg: rishav,
    img: pic,
    name: 'Rishav Aggarwal',
    desc: 'Founder Picxele'

  },
  


]

const Trustedbacked = () => {
  return (
    <div className='py-10 items-center flex flex-col bg-blue-500'>
        <h1 className='text-white text-[30px] font-bold'>Trusted {'&'} backed by </h1>
        <div className='text-white'>Collaboration with highly reputed Investors in the market</div>
        <marquee loop  behavior="" direction="left">
          <div className='flex gap-[5rem]'>

          {
            Data.map((data, i) => (
              
              <TestimonialCard key={i} proImg={data.proImg} img={data.img} name={data.name} desc={data.desc}/>
              ))
            }
            
            </div>
          
        </marquee>
    </div>
  )
}

export default Trustedbacked