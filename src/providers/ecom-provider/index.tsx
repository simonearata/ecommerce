import React, { createContext, FC, useContext, useState } from "react";
import {
  IProductCart,
  IProductDetails,
} from "../../components/routes/prodotti";

interface IEcomProvider {}
export interface IEcomContext {
  setVisibleBag: (boolean: boolean) => void;
  setCart: (IProductCart: IProductCart[]) => void;
  visibleBag: boolean;
  cart: IProductCart[];
  onClickBag: () => void;
  deleteProduct: (id: number) => void;
  productDetails: IProductDetails[];
  totalprice: number;
  getProductById: (id: number) => IProductDetails | undefined;
  setCounterId: (id: number) => void;
  counterId: number;
}

const initialContext: IEcomContext = {
  setVisibleBag: () => {},
  setCart: () => {},
  visibleBag: false,
  cart: [],
  onClickBag: () => {},
  deleteProduct: () => {},
  productDetails: [],
  getProductById: (id: number) =>
    /* ({
    id: -1,
    name: "",
    details: "",
    price: 0,
  }), <--- è possibile inserire entrambi ----> */ undefined,
  totalprice: 0,
  counterId: 0,
  setCounterId: () => {},
};
const EcomContext = createContext<IEcomContext>(initialContext);

const EcomProvider: FC<IEcomProvider> = (props) => {
  const initialCounter = localStorage?.getItem("counterId");
  const parsedCounter: number = initialCounter
    ? JSON.parse(initialCounter)
    : [];
  const [counterId, setCounterId] = useState<number>(parsedCounter);

  const [visibleBag, setVisibleBag] = useState<boolean>(false);

  const initialCart = localStorage?.getItem("cart");
  const parsedCart: IProductCart[] = initialCart ? JSON.parse(initialCart) : [];
  const [cart, setCart] = useState<IProductCart[]>(parsedCart);

  const onClickBag = () => {
    setVisibleBag(!visibleBag);
  };

  const productDetails = [
    {
      id: 0,
      name: "product0",
      details: "made in Italy",
      price: 159,
    },
    {
      id: 1,
      name: "product1",
      details: "made in Italy",
      price: 120,
    },
    {
      id: 2,
      name: "product2",
      details: "made in Italy",
      price: 50,
    },
    {
      id: 3,
      name: "product3",
      details: "made in Italy",
      price: 60,
    },
  ];

  const deleteProduct = (id: number) => {
    let cleanTrash = [...cart].filter((item) => {
      if (id === item.productId) {
        return false;
      }
      return true;
    });
    setCart(cleanTrash);
  };

  const getProductById = (id: number) => {
    return productDetails.find((product) => {
      if (product.id === id) {
        return true;
      }
    });
  };

  let totalprice = 0;
  cart.map((e) => {
    const product = getProductById(e?.productId);
    if (product) {
      totalprice += product?.price * e?.quantity;
    }
    return totalprice;
  });

  const EcomData: IEcomContext = {
    setVisibleBag,
    setCart,
    visibleBag,
    cart,
    onClickBag,
    deleteProduct,
    productDetails,
    getProductById,
    totalprice,
    counterId,
    setCounterId,
  };

  return (
    <EcomContext.Provider value={EcomData}>
      {props?.children}
    </EcomContext.Provider>
  );
};

export default EcomProvider;
export const useEcom = () => useContext(EcomContext);
