
'use client'
import { Box, Button, Container, Flex, Heading, Text, Image} from '@chakra-ui/react'
// import Image from 'next/image'

import React from 'react'
import png from '../../../public/123.jpg'

export default function Banners() {
  return (
   <>
   <Box bgImage={'128.jpg'}>
<Container maxW={'1400'}>
    <Flex pt={{lg:"150px", base:'30px'}} pb='100px' px={{lg:'40px', base:'5px'}} display={{lg:'flex', base: 'grid'}}>
        <Box flexBasis={'50%'}>
            <Heading textColor={'white'} size={'2xl'}>Launch Your Dev Career With Web 3 and Metaverse</Heading>
            <Text textColor={'white'} mt={'10px'}>Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.</Text>
            <Button mt={'10px'} size={'lg'} colorScheme='purple'>More Info</Button>
        </Box>
        <Box flexBasis={'50%'}>
            {/* <Image src={png} alt='Panaverse' width={'600'} height='200'/> */}
            <Image src={'126.jpg'} alt='Image126' rounded={'3xl'}/>
        </Box>
    </Flex>
</Container>
    </Box>

    <Box>
        <Container maxW={'1400'}>
            <Flex gap={{lg:"100px", base:'10px'}} display={{lg:'flex', base:'grid'}}>
                <Box mt={'20px'} flexBasis={'50%'}>
                <Image src={'125.jpg'} alt='Image123'/>
                </Box>
                <Box pl={{lg: '40px', base:'5px'}} flexBasis={'50%'} pt={{lg:"80px", base:'10px'}} px={{lg:"0", base:'5px'}}>
                    <Heading>What is Web 3.0</Heading>
                    <Text pt={'10px'}>Web 3.0 has the potential to change the internet as we know it forever. You are still early in catching the trend and building your first blockchain application, acquiring the skills to get a high- paying job, or creating your own web 3.0 projects that can make you money. In Web 2.0 all the data is controlled by the Big Tech companies, such as Google, Apple, etc. In the decentralized web, no single person/ company owns any data or information about anyone, and everything is visible to the public. Web3, also known as the decentralized web, is the third and latest phase of the internet. Web3 is built on peer-to-peer networks of computers that talk to each other without middlemen.</Text>
                    <Button mb={'20px'} mt={'10px'} size={'lg'} colorScheme='purple'>Read More</Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box mt={'40px'} pb={'20'}>
        <Container maxW={'1400'}>
            <Flex gap={{lg:"100px", base:'10px'}} display={{lg:'flex', base:'grid'}}>
            <Box flexBasis={'50%'} pt={{lg:'80px', base:'10px'}} px={{lg:'0px', base: '5px'}}>
                    <Heading>Program Of Studies</Heading>
                    <Text pt={'20px'}>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                    <Button mb={'20px'} mt={'10px'} size={'lg'} colorScheme='purple'>Read More</Button>
                </Box>

                <Box flexBasis={'50%'}>
                <Image src={'129.jpg'} alt='Image129' rounded={'3xl'}/>
                </Box>
                
            </Flex>
        </Container>
    </Box>

    </>    

  )
}
