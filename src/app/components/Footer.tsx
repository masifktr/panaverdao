"use client";
import {
  Box,
  Container,
  Grid,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import png from "../../../public/Logo.png";
export default function Footer() {
  return (
    <Box bg={"black"}>
      <Container maxW={'1200'}>
        <SimpleGrid  textAlign={{lg:'left',base:'center'}}  spacing={'30px'} p={'20'} templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}>
          <Box>
            <Heading pb={'15px'} bg={"black"} color='white'>
              About Us
            </Heading>
            <Box boxSize={'28'}>
            <Image src={png} alt="Panaverse Logo"></Image>
            </Box>
            <Text textAlign={'justify'} color={"gray"} pr="50px">
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </Text>
          </Box>

          <Box>
            <Heading pb='10px' color={"white"}>Useful Links</Heading>
            <Grid color={"gray"}>
              <Link>Home</Link>
              <Link>Syllabus</Link>
              <Link>Explore</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </Grid>
          </Box>

          <Box>
            <Heading pb='10px' color={"white"}>Follow Us</Heading>
            <Grid color={"gray"}>
              <Link>Facebook</Link>
              <Link>Linkedin</Link>
              <Link>Twitter</Link>
              <Link>Youtube</Link>
              <Link>Github</Link>
            </Grid>
          </Box>

          <Box>
            <Heading pb='10px' color={"white"}>Contact Us</Heading>
            <Grid color={"gray"}>
              <Link href="/">03001234567</Link>
              <Link href="/">abc@gmail.com</Link>
              <Link href="/">Peshawar Pakistan</Link>
              
            </Grid>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  );
}
