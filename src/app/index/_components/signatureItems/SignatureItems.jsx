"use client";

import React, { useState } from "react";
import Image from "next/image";
import productsData from "@/data/products.json";
import { AlarmClock, ArrowDownFromLine, ArrowUpFromLine } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import AddToCartButton from "@/components/addToCartButton/AddToCartButton";

export default function SignatureItems() {
  const { dishes, currency } = productsData;
  const [visibleCount, setVisibleCount] = useState(6);
  const addToCart = useCartStore((state) => state.addToCart);

  // Toggle See More / Hide
  const toggleItems = () => {
    setVisibleCount(visibleCount === 6 ? 12 : 6);
  };

  return (
    <section className="max-w-[1600px] w-full mx-auto md:py-20 py-10 md:px-6 px-4 text-center" id="signatureItems">
      {/* Heading */}
      <h2 className="font-love text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold mb-10">
        Signature items
      </h2>

      {/* Product Grid */}
      <div className="flex justify-center flex-wrap gap-y-5 gap-x-5 lg:mx-auto">
        {dishes.slice(0, visibleCount).map((item) => {
          // take first price (for display)
          const firstSize = item.sizes[0];
          const secondSize = item?.sizes[1];
          return (
            <Link href={`/product/${item.id}`} key={item.id}>
              <div
                key={item.id}
                className="lg:w-[400px] sm:w-[300px] w-full rounded-xl text-left hover:scale-102 duration-200 transition-transform flex flex-col items-center cursor-pointer sm:mx-4 bg-white pb-2"
              >
                {/* Product Image */}
                <div className="lg:w-[400px] sm:w-[300px] w-full lg:h-[400px] sm:h-[300px] h-[280px] relative mx-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-t-xl object-cover max-sm:w-full border-2 border-white border-t border-x"
                  />
                </div>
                <div className="text-left lg:w-[400px] sm:w-[300px] w-[280px] px-4">
                  {/* Title */}
                  <h3 className="mt-4 font-imprint md:text-2xl text-xl font-bold text-black">
                    {item.name}
                  </h3>
    
                  {/* time and calories */}
                  <p className="mt-2 text-black flex font-pt space-x-4 lg:text-base text-sm items-center">
                    <AlarmClock className="w-5 h-5 me-1"/>{item.time} | {item.calories} Kcal
                  </p>

                  <div className="w-full flex justify-between items-center pe-2">
                  {/* Price */}
                  <p className="mt-2 text-black font-pt lg:text-base text-sm">
                    {currency} {firstSize.price}.00
                  </p>
                  {secondSize?.price && (
                    <span className="ms-2">
                      {currency} {secondSize.price}.00
                    </span>
                  )}
                  {/* add button */}
                  {/* <AddToCartButton item={item} addToCart={addToCart} showText={false} width="30px"/> */}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => {
            toggleItems();
            if (visibleCount !== 6) {
              document.getElementById("signatureItems")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
          className="flex items-center gap-2 px-6 py-3 rounded-full 
                    bg-gradient-to-r from-yellow-500 to-red-500 text-white 
                    font-pt md:text-lg font-medium shadow-lg 
                    hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer outline-0"
        >
          {visibleCount === 6 ? (
            <>
              See more
              <ArrowDownFromLine className="md:w-5 w-4 md:h-5 h-4" />
            </>
          ) : (
            <>
              Hide
              <ArrowUpFromLine className="md:w-5 w-4 md:h-5 h-4" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
