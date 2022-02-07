import { Box, Button, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useEcom } from "../../providers/ecom-provider";

function Cart() {
  const { cart, deleteProduct, totalprice } = useEcom();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  return (
    <Box pt="44px" w={"800px"} m={"auto"}>
      <Box m={"0 20px"} pt={"45px"} textAlign={"left"}>
        {cart.length === 0 ? (
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            La shopping bag è vuota.
          </Text>
        ) : (
          <VStack
            color={"#287ed4"}
            m={"35px 0 23px"}
            alignItems={"flex-start"}
            p={"0 28px"}
          >
            {cart.map((items, index) => {
              return (
                <HStack key={items.productId + index}>
                  <Text>{items?.productId}</Text>
                  <Text>{items?.productId}$</Text>
                  <Box
                    onClick={() => {
                      deleteProduct(items?.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Box>
                </HStack>
              );
            })}
            <Text>Totale: {totalprice}$</Text>
          </VStack>
        )}

        <Text mt={"15px"}>
          Accedi per vedere se hai articoli salvati. Oppure continua gli
          acquisti.
        </Text>
        <HStack mt={"30px"}>
          <Button
            w={"320px"}
            h={"50px"}
            textDecoration={"none"}
            bgColor={"#0071e3"}
            color={"white"}
            fontWeight={"normal"}
          >
            Accedi
          </Button>
          <Button
            w={"320px"}
            h={"50px"}
            textDecoration={"none"}
            bgColor={"#ebebeb"}
            color={"black"}
            fontWeight={"normal"}
          >
            Continua gli acquisti
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default Cart;
