import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Center
  } from '@chakra-ui/react';
  import { Link} from 'react-router-dom'
  import google from '../assets/images/google.svg'
  
  const LoginModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button bg={'white'} onClick={onOpen}>Login</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent display={'flex'}>
            <Center>
            <ModalHeader>Login</ModalHeader>
            </Center>
            <ModalCloseButton />
            <ModalBody>
             <div className='flex flex-col items-center gap-4'>
                <button className='w-full bg-[#3055FF] rounded-lg border-none font-bold text-white p-5 text-[18px]'>Login With Email/Phone</button>
                <div className='flex gap-2 items-center'>
                    <hr className='border-1 border-black w-[150px]'/>
                    <p>OR</p>
                    <hr className='border-1 border-black w-[150px]'/>
                </div>
            <button className='w-full border-2 flex items-center  border-black rounded-lg font-semibold p-5 text-[18px]'><img src={google} alt="" /> <span className='flex-1'>Sign Up With Google</span></button>
                <div>Don't Have an Account? <Link to='/investorSignUp'><a className='text-[#3055FF]' onClick={onClose}>Sign Up</a></Link></div>
                <div>Are you a founder looking to raise funds ?</div>
                <div className='text-[#3055FF]'>Apply Here</div>
             </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )

  }
  
  export default LoginModal