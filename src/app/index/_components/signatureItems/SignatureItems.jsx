"use client";

import React, { useState } from "react";
import Image from "next/image";
import productsData from "@/data/products.json";
import { AlarmClock, ArrowDownFromLine, ArrowUpFromLine } from "lucide-react";

export default function SignatureItems() {
  const { dishes, currency } = productsData;
  const [visibleCount, setVisibleCount] = useState(4);

  // Toggle See More / Hide
  const toggleItems = () => {
    setVisibleCount(visibleCount === 4 ? 12 : 4);
  };

  return (
    <section className="max-w-[1600px] w-full mx-auto md:py-20 py-10 md:px-6 px-4 text-center">
      {/* Heading */}
      <h2 className="font-love text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-gold mb-10">
        Signature items
      </h2>

      {/* Product Grid */}
      <div className="flex justify-between flex-wrap gap-y-5 mx-auto">
        {dishes.slice(0, visibleCount).map((item) => {
          // take first price (for display)
          const firstSize = item.sizes[0];
          return (
            <div
              key={item.id}
              className="xl:w-[550px] lg:w-[450px] md:w-[350px] sm:w-[300px] w-full rounded-xl sm:p-4 text-left shadow-lg hover:scale-[1.02] transition-transform flex flex-col items-center cursor-pointer"
            >
              {/* Product Image */}
              <div className="xl:w-[550px] lg:w-[450px] md:w-[350px] sm:w-[300px] w-full xl:h-[570px] lg:h-[470px] md:h-[370px] h-[300px] relative mx-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded-3xl object-cover border-2 border-white"
                />
              </div>
              <div className="text-left xl:w-[550px] lg:w-[450px] md:w-[350px] sm:w-[300px] w-full">
                {/* Title */}
                <h3 className="mt-4 font-imprint text-2xl font-bold text-white">
                  {item.name}
                </h3>
  
                {/* time and calories */}
                <p className="mt-2 text-white flex font-pt space-x-4 text-xl lg:text-base md:text-sm items-center">
                  <AlarmClock className="w-5 h-5 me-1"/>15 min | 500 Kcal
                </p>
  
                {/* Price */}
                <p className="mt-2 text-white font-pt">
                  {currency} {firstSize.price}.00
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button
            onClick={toggleItems}
            className="flex items-center gap-2 px-6 py-3 rounded-full 
                    bg-gradient-to-r from-yellow-500 to-red-500 text-white 
                    font-pt md:text-lg font-medium shadow-lg 
                    hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer outline-0"
        >
            {visibleCount === 4 ? (
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
