import React from "react";
import { Link } from 'react-router-dom'
import raise1 from "../assets/images/raise_image.svg";
import raise2 from "../assets/images/raise_image_2.svg";
import raise3 from "../assets/images/raise_image_3.svg";
import raise4 from "../assets/images/raise_image_4.svg";
import raise5 from "../assets/images/raise_image_5.svg";
import raise6 from "../assets/images/raise_image_6.svg";
import RaiseSubComponent from "../components/RaiseSubComponent";

const raiseData = [
  {
    id: "1",
    img: raise2,
    title: "New “growth money”",
    desc: "We take charge of raising a part of your current round, with a ticket size of ~ ₹20L - ₹50L, while providing a firm foundation for you to build a brand through our various services.",
    left: true,
  },
  {
    id: "2",
    img: raise3,
    title: "VC friendly",
    desc: "Our campaigns are VC-approved. It wont impact your current or future rounds. You can raise capital on Sateeq before, during, or after your venture round. A Sateeq round is an important complement to traditional VC, not its replacement. You can even use our Sateeq Pro network to raise funds directly from Marquee Investors and VCs.",
    left: false,
  },
  {
    id: "3",
    img: raise4,
    title: "15 Day Process",
    desc: "Our selection and due diligence process is quick. It takes a maximum of 2 working weeks for your startup campaign to be listed from the date of application.",
    left: true,
  },
  {
    id: "4",
    img: raise5,
    title: "Simple Cap Table",
    desc: "All investors represent a single line on your cap table and act as a single investor without voting rights. Our tools make it easy to manage the group as if you’re dealing with one person.",
    left: false,
  },
  {
    id: "5",
    img: raise6,
    title: "Analytics made easy",
    desc: "Sateeq analytics section helps you track every KPI you might need. It doesn’t end there, your monthly investor updates can be sent from the same dashboard! No need of a Company Secretary for you anymore, Sateeq manages that for you",
    left: true,
  },
];

const Raise = () => {
  return (
    <div className="w-[80%] m-auto">
      <div className='flex flex-col  items-center sm:flex-row justify-between my-[5rem] sm:items-left'>
        <div className='flex flex-col items-center mb-8 gap-8'>
            <div className=" flex items-center sm:items-start text-center sm:text-left flex-col gap-[0.75rem]">

            <div className='flex flex-col items-center sm:items-start'>
            <div className='hero-font'>Raise </div>
            <div style={{
              background:
                "-webkit-linear-gradient(0deg, rgba(57,183,255,1), rgba(37,6,196,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }} className='hero-font'> Founder-Friendly </div>
            <div className='hero-font'>Capital</div>
            </div>
            <div><p className='text=[17px]'>Raise funds while increasing product sales, growing your brand, and engaging your community.</p></div>
            
            <Link to='/startupsignup'> 
            <div className=' hover:bg-opacity-90 rounded-xl flex  py-4 text-white font-bold px-[8rem] text-lg bg-black '>Raise</div>
            </Link>
            </div>
        </div>
        <div>
            <img src={raise1} alt="" />
        </div>
    </div>
      <div>
        {raiseData.map((data) => (
          <RaiseSubComponent
            key={data.id}
            title={data.title}
            desc={data.desc}
            img={data.img}
            left={data.left}
          />
        ))}
      </div>
    </div>
  );
};

export default Raise;
