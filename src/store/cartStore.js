import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist((set) => ({
  cart: [],

  addToCart: (item) =>
  set((state) => {
    const size = item.size || "Regular"; // 👈 default size
    const existingItem = state.cart.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === size
    );

    if (existingItem) {
      return {
        cart: state.cart.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === size
            ? { ...cartItem, quantity: cartItem.quantity + (item.quantity || 1) }
            : cartItem
        ),
      };
    } else {
      return {
        cart: [
          ...state.cart,
          { id: item.id, size, quantity: item.quantity || 1},
        ],
      };
    }
  }),


  increaseQty: (id, size) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      ),
    })),

  decreaseQty: (id, size) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
  
  clearCart: () => set({ cart: [] }),

  removeFromCart: (id, size) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.id === id && item.size === size)
      ),
    })),
}), {
  name: "cart-storage", 
}));
