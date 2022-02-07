import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router";
import Header from "../header";
import Store from "../routes/store";
import Prodotti from "../routes/prodotti";
import Supporto from "../routes/supporto";
import Search from "../routes/search";
import Cart from "../shopping-bag/cart";
import { useEcom } from "../../providers/ecom-provider";

function EcommerceDash() {
  const { setVisibleBag } = useEcom();

  const closeBag = () => {
    setVisibleBag(false);
  };

  return (
    <Box>
      <Header />
      <Box
        onClick={() => {
          closeBag();
        }}
      >
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/supporto" element={<Supporto />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shop-bag" element={<Cart />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default EcommerceDash;
