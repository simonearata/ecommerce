import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ICategory {
  name: string;
  url: string;
}

interface IProduct {
  name: string;
  url: string;
  text: string;
}

function Store() {
  const categoria: ICategory[] = [
    { name: "Categoria1", url: "" },
    { name: "Categoria2", url: "" },
    { name: "Categoria3", url: "" },
    { name: "Categoria4", url: "" },
    { name: "Categoria5", url: "" },
    { name: "Categoria6", url: "" },
    { name: "Categoria7", url: "" },
  ];

  const prodotti: IProduct[] = [
    { name: "Prodotti1", url: "", text: "Verso il futuro" },
    { name: "Prodotti2", url: "", text: "Verso il futuro" },
    { name: "Prodotti3", url: "", text: "Verso il futuro" },
    { name: "Prodotti4", url: "", text: "Verso il futuro" },
    { name: "Prodotti5", url: "", text: "Verso il futuro" },
    { name: "Prodotti6", url: "", text: "Verso il futuro" },
    { name: "Prodotti7", url: "", text: "Verso il futuro" },
  ];

  const responsiveCategory = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };

  const responsiveProduct = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <Box pt="44px" maxWidth={"980px"} m={"auto"}>
      <HStack
        justifyContent={"space-between"}
        p={"80px 0 64px"}
        flexWrap={"wrap"}
      >
        <Text fontSize="5xl" maxW={"640px"}>
          Store. Dove amerai acquistare i prodotti che ami.
        </Text>
        <Box>
          <Text>ti serve una mano a scegliere?</Text>
          <Link color={"#287ed4"}>Chiedi al nostro team</Link>
        </Box>
      </HStack>

      <Box pb={"62px"}>
        <Carousel responsive={responsiveCategory}>
          {categoria.map((item, index) => {
            return (
              <Box key={"item" + index}>
                <Box
                  w={"136px"}
                  h={"50px"}
                  lineHeight={"46px"}
                  textAlign={"left"}
                >
                  {item?.name}
                </Box>
              </Box>
            );
          })}
        </Carousel>
      </Box>

      <Text textAlign={"left"} fontSize={"2xl"} pb={"14px"}>
        Da non perdere. Dai un'occhiata alle ultime novità
      </Text>
      <Carousel responsive={responsiveProduct}>
        {prodotti.map((item, index) => {
          return (
            <Box
              key={"item" + index}
              w={"250px"}
              h={"350px"}
              mt={"10px"}
              mb={"40px"}
              borderRadius={"10px"}
              bgColor={"gray"}
            >
              <Box textAlign={"left"} p={"30px"}>
                <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
                  {item?.text}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Carousel>

      <Text textAlign={"left"} fontSize={"2xl"} pb={"14px"}>
        Serve aiuto? Lo trovi qui, come e quando vuoi.
      </Text>
      <HStack>
        <Box w={"360px"} h={"380px"} borderRadius={"10px"} bgColor={"gray"}>
          <Box textAlign={"left"} p={"30px"}>
            <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
              ccc
            </Text>
          </Box>
        </Box>
        <VStack>
          <Box
            w={"360px"}
            h={"186px"}
            bgColor={"gray"}
            borderRadius={"10px"}
          ></Box>
          <Box
            w={"360px"}
            h={"186px"}
            bgColor={"gray"}
            borderRadius={"10px"}
          ></Box>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Store;
