"use client";

import React from "react";
import productsData from "@/data/products.json";
import { useCartStore } from "@/store/cartStore";
import AddToCartButton from "@/components/addToCartButton/AddToCartButton";

export default function OurMenu() {
  const { dishes, currency, menus } = productsData;
    const addToCart = useCartStore((state) => state.addToCart);

  // Convert dishes array into lookup by id
  const dishMap = dishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {});

  // Use menus.main categories to group dishes
  const grouped = Object.entries(menus.main).reduce((acc, [category, ids]) => {
    acc[category] = ids.map((id) => dishMap[id]);
    return acc;
  }, {});

  return (
    <section className="max-w-[1600px] w-full mx-auto md:py-20 py-10 text-white" id="menu">
      {/* Section Heading */}
      <h2 className="text-center font-love text-5xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-12">
        Our Menu
      </h2>

      <div className="flex flex-col px-4 lg:space-y-12 md:space-y-10 space-y-6">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            {/* Category Title */}
            <h3 className="font-inria text-96 text-gold lg:mb-10 md:mb-8 mb-6">
              {category}
            </h3>

            <div className="space-y-6">
              {items.map((item) => {
                const firstSize = item.sizes[0];
                const secondSize = item?.sizes[1];
                return (
                  <div
                    key={item.id}
                    className="flex justify-between items-start lg:pb-12 md:pb-10 pb-6"
                  >
                    {/* Left Side (name + description) */}
                    <div className="flex flex-col lg:space-y-10 md:space-y-8 space-y-2 w-[80%]">
                      <h4 className="font-inter text-48 font-semibold text-yellow">
                        {item.name}
                      </h4>
                      <p className="text-gray-300 xl:text-3xl lg:text-2xl sm:text-lg mt-1 font-pt max-w-[870px] w-full">
                        {item.description}
                      </p>
                      <AddToCartButton item={item} addToCart={addToCart} width="135px"/>
                    </div>

                    {/* Right Side (price) */}
                    <span className="font-pt xl:text-3xl lg:text-2xl sm:text-lg font-medium text-white">
                      {firstSize.price} {currency}
                     <br/> 
                     {secondSize?.price && <span>{secondSize?.price} {currency}</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
