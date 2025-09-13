"use client";
import { useCartStore } from "@/store/cartStore";
import productsData from "@/data/products.json";
import { SaudiRiyal } from "lucide-react";
import Link from "next/link";

export default function CartSummary() {
  const cart = useCartStore((state) => state.cart);

  // Calculate subtotal by looking up product prices
  const subtotal = cart.reduce((acc, item) => {
    // Find the product by ID
    const product = productsData.dishes.find(dish => dish.id === item.id);
    
    if (!product) return acc;
    
    // Find the price for the selected size
    const sizeInfo = product.sizes.find(s => s.label === item.size) || product.sizes[0];
    const price = sizeInfo ? sizeInfo.price : 0;
    
    const qty = item.quantity ?? 0;
    return acc + price * qty;
  }, 0);

  const shipping = subtotal > 0 ? 2 : 0; 
  const total = subtotal + shipping;

  return (
    <div className="bg-gradient-to-br from-black via-gray-500 to-black overflow-hidden text-white p-6 rounded-lg space-y-4 h-72">
      <h2 className="text-2xl font-bold font-imprint">Summary</h2>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>{subtotal.toLocaleString()}</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span>{shipping}</span>
      </div>

      <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span className="flex items-center gap-1">{total.toLocaleString()} <SaudiRiyal className="w-4 h-4"/></span>
      </div>

      <Link href="/checkout">
        <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition cursor-pointer bg-gradient-to-r from-yellow-500 to-red-500 hover:scale-102">
          Proceed your Order
        </button>
      </Link>
    </div>
  );
}