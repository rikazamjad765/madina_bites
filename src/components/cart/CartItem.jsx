"use client";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

export default function CartItem({ item }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);

  return (
    <div className="flex items-center justify-between border-b border-gray-700 py-4">
      {/* Image + name */}
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
          <Image src={item.image} alt={item.name || "Product"} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
          <p className="text-gray-400">{item.price} {item.currency}</p>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-2 py-1 bg-gray-600 text-white rounded cursor-pointer"
        >
          -
        </button>
        <span className="text-white">{item.quantity}</span>
        <button
          onClick={() => increaseQty(item.id)}
          className="px-2 py-1 bg-orange-500 text-white rounded cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Remove button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="px-3 py-1 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
}
