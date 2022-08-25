import React , {useState} from 'react'
import Logo from '../assets/images/incentive1.png'
import {Link} from 'react-router-dom'
import LoginModal from './LoginModal'
import { GiHamburgerMenu } from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
// import Modal from './Modal'

const Navbar = () => {

    const [active, setActive] = useState(false);

  return (
    <>
        <div className='items-center h-[70px] text-[18px] font-bold py-5 max-w-[80%] mx-auto'>
            <div className='flex justify-between items-center '>

        {/* logo */}
        <Link to='/'>
        <img className='h-[100px]' src={Logo} alt="" />
        </Link>
        <div className='hidden md:flex items-center '>
            <div className='flex gap-7 sm:mr-4 items-center lg:mr-[50px]'>
                <Link to='/invest'>
                <div>Invest</div>
                </Link>
                <Link to='/raise'>
                <div className="border-r-2 pr-7 py-2">Raise</div>
                </Link>
            </div>
        <div className='flex gap-5 items-center'>
            <button  className='py-2 pl-7'><LoginModal/></button>
            <Link to='/investorSignUp'>
            <div className='blue-button px-[2rem]'>Sign Up</div>
            </Link>
        </div>
        </div>
        <div className="md:hidden">
            <GiHamburgerMenu onClick={() => setActive(true)}/>
        </div>
       
       
        </div>
    </div>
        <div className={`bg-white z-20  md:hidden top-0 h-screen left-0 right-0 fixed transition-all transform ${active ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex justify-between items-center px-5'>
                <div> <Link to='/'>
        <img className='h-[100px]' src={Logo} alt="" />
        </Link></div>
        <div>
            <GrClose onClick={() => setActive(false)}  />
        </div>
            </div>
            <div className='pt-28'>
            
            <div className='flex flex-col gap-5 items-center '>
                <Link to='/invest'>
                <div>Invest</div>
                </Link>
                <Link to='/raise'>
                <div className=" py-2">Raise</div>
                </Link>
            </div>
        <div className='flex flex-col gap-5 items-center'>
            <button  className='py-2'><LoginModal/></button>
            <Link to='/investorSignUp'>
            <div className='blue-button px-[2rem]'>Sign Up</div>
            </Link>
            </div>
        </div>
        </div>
        </>
  )
}

export default Navbar