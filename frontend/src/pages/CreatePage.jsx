import { useColorModeValue } from '@/components/ui/color-mode';
import { useProductStore } from '@/store/product';
import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  
  const { createProduct } = useProductStore();

  const handleAppProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("Success:",success);
    console.log("Message:",message);
    
  };

  return (
    <Container maxW={'4xl'}>
      <VStack padding={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack>
            <Input placeholder='Product Name' name='name' value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}></Input>
            <Input placeholder='Price' name='price' value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}></Input>
            <Input placeholder='Product Image' name='image' value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}></Input>
            <Button colorPalette={'blue'} w={'full'} onClick={handleAppProduct}>Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreatePage;