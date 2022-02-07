import {
  Box,
  FormControl,
  HStack,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {
  faClosedCaptioning,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEcom } from "../../providers/ecom-provider";
import "../../style/style.css";
import ShoppingBag from "../shopping-bag";

export interface IButtonMenu {
  link: string;
  name: string;
}

function Header() {
  const { onClickBag, visibleBag } = useEcom();

  const buttonMenu: IButtonMenu[] = [
    { link: "/", name: "store" },
    { link: "/prodotti", name: "prodotti" },
    { link: "/supporto", name: "supporto" },
  ];

  return (
    <HStack
      w="100%"
      h="44px"
      position={"fixed"}
      bgColor={"#383434"}
      color={"white"}
      justifyContent={"center"}
      zIndex={9999}
    >
      <Box
        w={"400px"}
        d={"flex"}
        justifyContent={"space-between"}
        position={"relative"}
      >
        {buttonMenu.map((button, index) => {
          return (
            <Link to={button?.link} key={"link" + index}>
              <Box fontWeight={"light"} fontSize={"14px"} border={"none"}>
                {button?.name}
              </Box>
            </Link>
          );
        })}
        <Link to={"/search"}>
          <FontAwesomeIcon icon={faSearch} className="header-icon" />
        </Link>
        <Box position={"relative"}>
          <Link
            to={"#"}
            onClick={() => {
              onClickBag();
            }}
          >
            <FontAwesomeIcon icon={faShoppingBag} className="header-icon" />
          </Link>
          {visibleBag && (
            <Box
              className="triangle"
              w={"20px"}
              h={"20px"}
              position={"absolute"}
              bottom={"-27px"}
              left={"-3px"}
              bgColor={"white"}
              zIndex={"3"}
              border={"1px solid"}
              borderRight={"0px"}
              borderBottom={"0px"}
              borderColor={"#d2d2d7"}
            ></Box>
          )}
        </Box>
        {visibleBag && <ShoppingBag />}
      </Box>

      <Box display={"none"} position={"absolute"} top={"0"}>
        <Box>
          <FormControl>
            <Link to={"#"}>
              <FontAwesomeIcon icon={faSearch} />
            </Link>
            <Input />
          </FormControl>
          <Link to={"#"}>
            <FontAwesomeIcon icon={faClosedCaptioning} />
          </Link>
          <Box>
            <Text fontSize={"x-small"}>Quick links</Text>
            <UnorderedList listStyleType={"none"}>
              <ListItem>
                <Link to={"#"}>Contatti</Link>
              </ListItem>
              <ListItem>
                <Link to={"#"}>Accessiri</Link>
              </ListItem>
              <ListItem>
                <Link to={"#"}>Piattaforme</Link>
              </ListItem>
              <ListItem>
                <Link to={"#"}>Gift Cards</Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
}

export default Header;
