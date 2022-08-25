import React from 'react'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { FiMinus as MinusIcon, FiPlus as  AddIcon } from 'react-icons/fi';

const accordData = [
  {
    title: 'How can investor sign up for Sateeq?',
    content: 'Investors can fill up the Sign up form by entering basic details. In order make any Investment, You need to first complete basic eKYC by verifying PAN Card and Payment details. Don\'t worry, You data is secure.',
  },
  {
    title: 'How quality of deals is ensure?',
    content: 'All the startups getting listed on Sateeq undergo 3 step verification process under which, They are analysed by experienced Investment Professionals and Angels Investors. In addition to this, Due diligence is also conducted by an Independant Firm. Also, All Startups listed are backed VC\'s and Marquee Individuals.',
  },
  {
    title: 'What happens post investment?',
    content: 'Once the campaign closes successfully, all Investors receive S-SAFE Agreement for signing on there dashboard which can be signed using Aadhar-based signing option.',
  },
  {
    title: 'Are there any guaranteed returns?',
    content: 'No, We don\'t guarantee any kind of returns to the Investors. Startups are Highly-illiquid and risky asset class. Portfolio diversification is the best way to hedge risk.',
  },
  {
    title: 'Is there any membership fees for Investors?',
    content: 'No, We don\'t charge any membership fees from Investors. It\'s free of cost. You just need to pay 2% as Convenience fees while investing and 2% on Exit.',
  },
]

const AccordianDiv = () => {
  return (
      <Accordion allowToggle width={'full'}>
        {
          accordData.map((data, i) => (

            <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box fontSize={'20px'} fontWeight={'semibold'} flex='1' textAlign='left'>
              {data.title}
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel fontSize={'16px'} pb={4}>
         {data.content}
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
))
}
  </Accordion>
  )
}

export default AccordianDiv