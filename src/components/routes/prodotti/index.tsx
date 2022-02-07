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

function Prodotti() {
  const { cart, setCart, productDetails } = useEcom();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  let productId: number[] = cart.map((e) => {
    return e.id;
  });

  const addCart = (id: number) => {
    /* let purchase = productDetails?.filter((item) => {
      if (id !== item.id) {
        return false;
      }
      return true;
    });
    if (productId.includes(id)){
      cart.map((items) => {
        setCart([...cart, quantity: items.quantity + 1 ])
      })
    }

    if (purchase && cart) {
      setCart([...cart, ...purchase]);
    } */
    let foundInCart = false;
    let newProduct = cart.map((item) => {
      if (item?.productId === id) {
        item.quantity++;
        foundInCart = true;
      }
      return item;
    });

    if (!foundInCart) {
      newProduct.push({ id: 0, quantity: 1, productId: id });
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
