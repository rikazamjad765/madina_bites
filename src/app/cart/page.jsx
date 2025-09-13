"use client";
import { useCartStore } from "@/store/cartStore";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);

  console.log(cart, "cart");

  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-12 text-white">
        <h1 className="text-3xl font-bold mb-6 font-imprint">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-red-500 font-inria">Your cart is empty.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cart.map((item) => (
                <CartItem key={`${item.id}-${item.size ?? ''}`} item={item} />
              ))}
            </div>

            {/* Cart Summary */}
            <CartSummary cart={cart} />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
