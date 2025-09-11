"use client";
import { useCartStore } from "@/store/cartStore";

export default function CartSummary({ cart }) {

    console.log(cart, "cart");

  const price = cart?.sizes?.price

  console.log(price, "price");

  // Calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Add shipping or taxes if needed
  const shipping = subtotal > 0 ? 200 : 0; // example fixed shipping
  const total = price + shipping;

  return (
    <div className="bg-gray-900 p-6 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold font-imprint">Summary</h2>

      <div className="flex justify-between text-gray-300">
        <span>Subtotal</span>
        <span>Rs. {price}</span>
      </div>

      <div className="flex justify-between text-gray-300">
        <span>Shipping</span>
        <span>Rs. {shipping}</span>
      </div>

      <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>Rs. {total.toLocaleString()}</span>
      </div>

      <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">
        Proceed to Checkout
      </button>
    </div>
  );
}
