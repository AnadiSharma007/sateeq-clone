import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { InputGroup, Input, InputLeftElement} from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'

const SearchBar = () => {
  return (
    <div>
         <Center>
        <InputGroup borderRadius={20} bg='#E8ECFF' height='50px' >
    <InputLeftElement
    height='50px' 
      pointerEvents='none'
      children={<BsSearch color='gray.300' />}
      />
    <Input height='50px'  type='tel' placeholder='Search' />
  </InputGroup>
      </Center>
    </div>
  )
}

export default SearchBar