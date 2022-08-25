import React, {useState} from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  RadioGroup,
  Radio,
  Stack
} from "@chakra-ui/react";

const FormComponent = ({ key, label, placeholder, check, phone }) => {

  const [value, setValue] = useState('1')
  return (
    <div>
      {phone ? (
        <FormControl isRequired>

          <FormLabel fontSize={'xl'}>Phone</FormLabel>
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none" children={"+91"} />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>
        </FormControl>
      ) : check ? (
        <div>
          <h1 className="text-xl font-semibold mb-1">Has your Company raised funds before?<span className="text-red-600">*</span></h1>
          <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='1'>Yes</Radio>
        <Radio value='2'>No</Radio>
      </Stack>
    </RadioGroup>
        </div>
      ) : (
        <FormControl isRequired>
          <FormLabel fontSize="xl">{label}</FormLabel>
          <Input placeholder={placeholder} size="lg" />
        </FormControl>
      )}
      <div>
        
      </div>
    </div>
  );
};

export default FormComponent;
