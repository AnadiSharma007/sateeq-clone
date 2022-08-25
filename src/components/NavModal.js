import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    Button
  } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '../assets/images/incentive1.png'
import {Link } from 'react-router-dom';
import LoginModal from './LoginModal';


const NavModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='blue' onClick={onOpen}>
          <GiHamburgerMenu  />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><img className='h-[100px]' src={Logo} alt="" /></DrawerHeader>
  
            <DrawerBody>
            <div className='flex flex-col gap-5 items-center '>
    <Link to='/invest'>
    <div onClick={onClose}>Invest</div>
    </Link>
    <Link to='/raise'>
    <div onClick={onClose} className=" py-2">Raise</div>
    </Link>
</div>
<div className='flex flex-col gap-5 items-center'>
<button  className='py-2'><LoginModal/></button>
<Link to='/investorSignUp'>
<div onClick={onClose} className='blue-button px-[2rem]'>Sign Up</div>
</Link>
</div>
</DrawerBody>

          </DrawerContent>
        </Drawer>
      </>
    )
}

export default NavModal