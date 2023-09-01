import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/Initial/CoffeCard";

import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  cleanCart: () => void;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeAlreadyExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeAlreadyExistInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeAlreadyExistInCart].quantity += coffee.quantity;
      }
    });
    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const CoffeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      if (CoffeExistInCart >= 0) {
        const item = draft[CoffeExistInCart];
        item.quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;

        // item.quantity;

        // draft[CoffeExistInCart].quantity += (type === "increase" && 1) || -1;
      }
    });
    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const CoffeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      if (CoffeExistInCart >= 0) {
        draft.splice(CoffeExistInCart, 1);
      }
    });
    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(COFFE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
