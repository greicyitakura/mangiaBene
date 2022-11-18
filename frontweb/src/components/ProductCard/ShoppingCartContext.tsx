import { AxiosRequestConfig } from 'axios';
import { useLocalStorage } from 'Hooks/localStorage';
import { createContext, ReactNode, useContext, useState } from 'react';
import { Product } from 'types/product';
import { requestBackend } from 'util/requests';
import { ShoppingCart } from './ShoppingCart';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
  };  

export interface CartItemProduct extends Product {
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemProduct[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

const getProduct = async (id: number) => {
  const params: AxiosRequestConfig = {
    method: 'GET',
    url: `/products/${id}`,
  };
  return requestBackend(params);
}

export async function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [cartProducts, setCartProducts] = useState({});

  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  );

  const values = await Promise.all(
    cartItems.map(({id}) => getProduct(id)));
    setCartProducts (values.map((value) => value.data));
    

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      
      }}
    >
      {children}

      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
