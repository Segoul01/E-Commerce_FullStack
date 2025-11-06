import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react';
import { CiDark, CiLight, CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import React from 'react';
import { useColorMode } from './ui/color-mode';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex 
        h={16} 
        alignItems={"center"} 
        justifyContent={"space-between"}
        flexDir={{
          base:"column", 
          sm:"row"}}
      >

        <Text 
          fontSize={{base:"22", sm:"28"}}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgClip={"text"}
          bgGradient="to-r" gradientFrom="red.200" gradientTo="blue.200"
          >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <CiLight /> : <CiDark />}
          </Button>
        </HStack>
          
      </Flex>
    </Container>
  )
};

export default Navbar