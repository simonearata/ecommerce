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
import { IProductCart } from "../routes/prodotti";

function ShoppingBag() {
  const { cart, setCart, deleteProduct, getProductById, totalprice } =
    useEcom();
  const linkShoppingBag: IButtonMenu[] = [
    { link: "/articoli-salvati", name: "articoli-salvati" },
    { link: "/ordini", name: "ordini" },
    { link: "/account", name: "account" },
    { link: "/accedi", name: "accedi" },
  ];

  const changeQuantity = (id: number, PM: string) => {
    cart.map((item) => {
      if (PM === "add") {
        return { ...cart, quantity: item?.quantity + 1 };
      }
      if (PM === "minus") {
        return { ...cart, quantity: item?.quantity + 1 };
      }
    });
    setCart(cart);
  };

  return (
    <Box
      w={"288px"}
      h={"auto"}
      p={"0px 20px"}
      position={"absolute"}
      bgColor={"white"}
      top={"41px"}
      right={"0"}
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
                <Button>-</Button>
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
            <Link to={"shop-bag"}>Shopping bag - {cart.length}</Link>
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
