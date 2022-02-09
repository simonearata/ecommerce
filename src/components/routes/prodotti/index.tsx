import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useEcom } from "../../../providers/ecom-provider";

export interface IProductDetails {
  id: number;
  name: string;
  details: string;
  price: number;
}

export interface IProductCart {
  id: number;
  quantity: number;
  productId: number;
}

let n = 0;

function Prodotti() {
  const { cart, setCart, productDetails, counterId, setCounterId } = useEcom();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("counterId", JSON.stringify(counterId));
    if (cart.length === 0) {
      setCounterId(0);
    }
  });

  const addCart = (id: number) => {
    let foundInCart = false;
    let newProduct = cart.map((item) => {
      if (item?.productId === id) {
        item.quantity++;
        foundInCart = true;
      }
      return item;
    });

    if (!foundInCart) {
      newProduct.push({ id: counterId, quantity: 1, productId: id });
      setCounterId(counterId + 1);
    }
    setCart(newProduct);
  };

  return (
    <Box pt="44px" w={"800px"} m={"auto"}>
      <Text fontSize={"x-large"} textAlign={"center"} pt={"100px"}>
        Qual'è il prodotto giusto per te?
      </Text>
      <HStack justifyContent={"space-around"} mt={"50px"}>
        {productDetails.map((items, index) => {
          return (
            <VStack key={items?.name + index}>
              <Text>{items?.name}</Text>
              <Text>{items?.details}</Text>
              <Text>{items?.price}$</Text>
              <Button
                height={"30px"}
                borderRadius={"50px"}
                bgColor={"#0071e3"}
                color={"white"}
                fontWeight={"normal"}
                fontSize={"10px"}
                onClick={() => {
                  addCart(items?.id);
                }}
              >
                Aggiungi
              </Button>
            </VStack>
          );
        })}
      </HStack>
    </Box>
  );
}

export default Prodotti;
