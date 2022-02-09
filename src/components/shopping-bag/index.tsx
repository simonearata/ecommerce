import {
  Box,
  Button,
  HStack,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEcom } from "../../providers/ecom-provider";
import { IButtonMenu } from "../header";

function ShoppingBag() {
  const { cart, setCart, deleteProduct, getProductById, totalprice } =
    useEcom();
  const linkShoppingBag: IButtonMenu[] = [
    { link: "/articoli-salvati", name: "articoli-salvati" },
    { link: "/ordini", name: "ordini" },
    { link: "/account", name: "account" },
    { link: "/accedi", name: "accedi" },
  ];

  const changeQuantity = (id: number, minPlus: string) => {
    if (minPlus === "add") {
      let changQ = cart.map((item) => {
        if (item?.id === id) {
          item.quantity++;
        }
        return item;
      });
      setCart(changQ);
    }

    if (minPlus === "minus") {
      let changQ = cart.map((item) => {
        if (item?.id === id && item?.quantity !== 1) {
          item.quantity--;
        }
        return item;
      });
      setCart(changQ);
    }
  };

  console.log(cart);

  let shopBag = 0;
  cart.map((e) => {
    shopBag += e?.quantity;
    return shopBag;
  });

  return (
    <Box
      w={"288px"}
      h={"auto"}
      p={"0px 20px"}
      position={"absolute"}
      bgColor={"white"}
      top={"41px"}
      right={{ base: "119px", md: "0px" }}
      zIndex={"1"}
      mr={"-136px"}
      borderRadius={"10px"}
      border={"1px"}
      borderColor={"#d2d2d7"}
      fontSize={"14px"}
    >
      {cart.length === 0 ? (
        <Text color={"gray"} p={"35px 0 23px"}>
          La tua shopping bag è vuota
        </Text>
      ) : (
        <VStack
          color={"#287ed4"}
          m={"35px 0 23px"}
          alignItems={"flex-start"}
          p={"0 28px"}
        >
          {cart.map((e, index) => {
            const product = getProductById(e?.productId);
            return (
              <HStack key={e?.id + index}>
                <Text>{product?.name}</Text>
                <Text>{product?.price}$</Text>
                <Button
                  onClick={() => {
                    changeQuantity(e?.id, "minus");
                  }}
                >
                  -
                </Button>
                <Text>{e.quantity}</Text>
                <Button
                  onClick={() => {
                    changeQuantity(e?.id, "add");
                  }}
                >
                  +
                </Button>
                <Box
                  onClick={() => {
                    if (product) {
                      deleteProduct(product?.id);
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Box>
              </HStack>
            );
          })}
          <Text>Totale: {totalprice}$</Text>
          <Button
            w={"100%"}
            color={"white"}
            bgColor={"#287ed4"}
            fontSize={"14px"}
          >
            Vai alla cassa
          </Button>
        </VStack>
      )}

      <UnorderedList
        color={"#287ed4"}
        listStyleType={"none"}
        m={"12px 0 0"}
        mb={"9px"}
        textAlign={"left"}
      >
        {cart.length !== 0 && (
          <ListItem
            lineHeight={"44px"}
            p={"0 28px"}
            borderTop={"1px"}
            borderColor={"#d2d2d7"}
          >
            <a href="/shop-bag">Shopping bag - {shopBag}</a>
          </ListItem>
        )}
        {linkShoppingBag.map((item, index) => {
          return (
            <ListItem
              key={index + "link"}
              lineHeight={"44px"}
              p={"0 28px"}
              borderTop={"1px"}
              borderColor={"#d2d2d7"}
            >
              <Link to={item?.link}>{item?.name}</Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
}

export default ShoppingBag;
