"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useCartStore } from "@/store/cartStore";
import { SaudiRiyal } from "lucide-react";
import { useState } from "react";
import products from "@/data/products";
import Image from "next/image";
import Swal from "sweetalert2";

export default function CheckoutPage() {
  const cart = useCartStore((s) => s.cart);
  console.log(cart)
  const clearCart = useCartStore((s) => s.clearCart);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    instructions: "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      customer: form,
      items: cart,
    };

    try {
    console.log("Sending order:", orderData);
    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (!res.ok) throw new Error("Failed to send email");

    Swal.fire({
      title: "🎉 Order Placed!",
      text: "We’ll notify you soon. Thank you for ordering!",
      icon: "success",
      confirmButtonColor: "#f87171",
    });

    clearCart();
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      city: "",
      state: "",
      zip: "",
      instructions: "",
    });
  } catch (error) {
    Swal.fire("Oops!", "Something went wrong. Try again.", "error");
    console.error("❌ Email send failed:", error);
  }
};

  const cartWithDetails = cart.map((cartItem) => {
    const dish = products.dishes.find((d) => d.id === cartItem.id);

    // Find the right size details
    const sizeObj = dish?.sizes.find((s) => s.label === cartItem.size);

    return {
      ...cartItem,
      name: dish?.name,
      image: dish?.image,
      description: dish?.description,
      time: dish?.time,
      calories: dish?.calories,
      price: sizeObj?.price || 0,
      name: dish?.name,
    };
  });

  const subtotal = cartWithDetails.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 2 : 0; 
  const total = subtotal + shipping;

  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen py-10 px-6 bg-gradient-to-bl from-black via-gray-500 to-black overflow-hidden font-pt">
        {/* Random Shapes Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500 rounded-[60%] mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-40 left-1/2 w-64 h-64 bg-red-500 rounded-[40%] mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl shadow-lg space-y-5 text-white bg-white/20 backdrop-blur-md border border-white/30"
          >
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Checkout
            </h1>

            {/* Full Name */}
            <div>
              <label className="block mb-1 font-medium">Full name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-white/50 outline-0 text-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email address (optional)</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-white/50 outline-0 text-black"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium">Phone number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-white/50 outline-0 text-black"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block mb-1 font-medium">Address <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-white/50 outline-0 text-black"
              />
            </div>

            {/* Country + City */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Country <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="country"
                  required
                  value={form.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-white/50 outline-0 text-black"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">City <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-white/50 outline-0 text-black"
                />
              </div>
            </div>

            {/* State + Zip */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">State</label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-white/50 outline-0 text-black"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-white/50 outline-0 text-black"
                />
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block mb-1 font-medium">Special Instructions</label>
              <textarea
                name="instructions"
                value={form.instructions}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-white/50 outline-0 text-black"
              />
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" required />
              <span className="text-sm">I agree to the Terms and Conditions</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-md hover:scale-102 transition cursor-pointer"
            >
              Place Order
            </button>
          </form>

          {/* RIGHT: Cart Summary */}
          <div
            className="p-6 rounded-xl shadow-lg space-y-4 bg-white/20 backdrop-blur-md border border-white/30"
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 bg-clip-text text-transparent">Review your cart</h3>
            <ul className="divide-y">
              {cartWithDetails.map((item, idx) => (
                <li
                  key={`${item.id}-${item.size}-${idx}`}
                  className="py-3 flex justify-between"
                >
                  <div className="flex gap-2">
                    <Image src={item.image} alt={item.name} width={30} height={15} className="rounded-lg object-cover"/>
                    <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-white">
                        {item.quantity} {item.size || "Default"}
                        </p>
                    </div>
                  </div>
                  <p className="text-white">{item.price * item.quantity}</p>
                </li>
              ))}
            </ul>

            <div className="space-y-2 border-t pt-3">
              <div className="flex justify-between text-white">
                <span>Subtotal</span>
                <span className="flex items-center gap-1">
                  {subtotal} <SaudiRiyal className="w-4 h-4"/>
                </span>
              </div>
              <div className="flex justify-between text-white">
                <span>Shipping</span>
                <span>shipping</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-white border-t pt-2">
                <span>Total</span>
                <span className="flex items-center gap-2">
                  <SaudiRiyal />
                  {total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
