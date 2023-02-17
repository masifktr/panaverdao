"use client";
import {
  Box,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Button,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import png from "../../../public/Logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <>
      <Box boxShadow={"dark-lg"}>
        <Container maxW={"1400"}>
          <SimpleGrid
             templateColumns={{ lg:'repeat(3, 1fr)', base:'repeat(3, 1fr)'}}>
                <Box my={'auto'}>
              <Image src={png} alt="Panaverse-Logo"/>
              </Box>
              
            <Flex
              display={{ lg: "flex", base: "none" }}
              placeItems={"center"}
              color={"black"}
              fontSize="2xl"
              gap={"10"}
            >
              <Link href='/'>Home</Link>
              <Link href='/syllabus'>Syllabus</Link>
              <Link href='/explore'>Explore</Link>
              <Link href='/about'>About</Link>
              <Link href='/contact'>Contact</Link>
            </Flex>


            <Box pb='20'>
              <Button
                display={{ lg: "flex", base: "none" }}
                mt={'16'}
                size={"md"}
                colorScheme={"purple"}
                float={"right"}
               
              >
                Apply
              </Button>
            </Box>
            <Box  pt='16' pb='16' display={{ lg: "none", base: "initial" }} >
              <Menu>
                <MenuButton float={'right'}
                
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Syllabus</MenuItem>
                  <MenuItem>Explore</MenuItem>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Contact</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
