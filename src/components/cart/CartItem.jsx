"use client";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import products from "@/data/products"; 
import { SaudiRiyal } from "lucide-react";

export default function CartItem({ item }) {
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);

  console.log(item, "item");

  const product = products.dishes.find((p) => p.id === item.id);
  if (!product) return null;

  const sizeInfo = product.sizes.find(s => s.label === item.size) || product.sizes[0];
  const price = sizeInfo ? sizeInfo.price : 0;

  return (
    <div className="grid grid-cols-[4fr_1fr_1fr] border-b border-gray-700 py-4">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          {item.size && <p className="text-gray-400 text-sm">Size: {item.size}</p>}
          <p className="text-gray-400 text-sm flex items-center gap-1">Price: {price}<SaudiRiyal className="w-4 h-4 "/> </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(item.id, item.size)}
          className="px-2 py-1 bg-gray-600 text-white rounded cursor-pointer"
        >
          -
        </button>
        <span className="text-white">{item.quantity}</span>
        <button
          onClick={() => increaseQty(item.id, item.size)}
          className="px-2 py-1 bg-orange-500 text-white rounded cursor-pointer"
        >
          +
        </button>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => removeFromCart(item.id, item.size)}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
