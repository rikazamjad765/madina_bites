"use client";
import { use, useState } from "react";
import { useCartStore } from "@/store/cartStore";

import { notFound } from "next/navigation";
import Image from "next/image";
import productsData from "@/data/products.json";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ProductPage({ params }) {
  const { id } =  use(params);
  const { dishes, currency } = productsData;
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  // find product by id
  const product = dishes.find((dish) => dish.id.toString() === id);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) return notFound();

  return (
    <>  
        <Navbar />
        <section className="py-16 px-6 text-white ">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Product Image */}
                <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col h-full w-full justify-between">
                    <div>
                        <h1 className="font-imprint text-32 text-orange mb-4">
                            {product.name}
                        </h1>
                        <p className="text-gray-300 text-16 mb-6">{product.description}</p>

                        {/* Sizes & Prices */}
                        <div className="space-y-3 mb-6">
                            {product.sizes.map((size, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center border-b border-gray-700 pb-2"
                            >
                                <span className="font-inter text-18">{size.label}</span>
                                <span className="font-inter text-18 font-medium text-orange">
                                {size.price} {currency}
                                </span>
                            </div>
                            ))}
                        </div>

                        {/* Extra Info */}
                        <div className="flex flex-col gap-4 text-white text-14">
                            <span>⏱ {product.time}</span>
                            <span>🔥 {product.calories} kcal</span>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex items-center space-x-2">
                            <button onClick={decrease} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 cursor-pointer">
                                -
                            </button>
                            <span className="text-lg py-1 text-center font-semibold w-10">{quantity}</span>
                            <button onClick={increase} className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 cursor-pointer">
                                +
                            </button>
                        </div>
                        <button onClick={() => addToCart(product, quantity)} className=" px-6 py-2 bg-white text-black cursor-pointer p-3 border font-semibold rounded-lg hover:scale-102 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  );
}
