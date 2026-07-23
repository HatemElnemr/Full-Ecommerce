import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // Favorites
  const [favItems, setFavItems] = useState(() => {
    const savedFav = localStorage.getItem("favItems");
    return savedFav ? JSON.parse(savedFav) : [];
  });

  const addToFav = (item) => {
    setFavItems((prevFav) => {
      if(prevFav.some((i) => i.id === item.id)) return prevFav
      return [...prevFav, item]
    })
  }

  useEffect(() => {
    localStorage.setItem("favItems", JSON.stringify(favItems))
  }, [favItems])

  const removeFav = (id) => {
    setFavItems((prevFav) => prevFav.filter((i) => i.id !== id))
  }










  //Cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existedItem = prevItems.find((cartItem) => cartItem.id === item.id);

      if (existedItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
  };
  const decreaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem,
      ),
    );
  };
  const removeItem = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id),
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        favItems,
        addToFav,
        removeFav
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
