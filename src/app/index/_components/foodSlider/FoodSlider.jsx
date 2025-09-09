"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import productsData from "@/data/products.json";

export default function ProductSlider() {
  const { dishes, currency } = productsData;
  const items = dishes.slice(0, 10); // show only first 10

  return (
    <div className="w-full py-8">
      <h2 className="font-love text-6xl text-center mb-4">Our Menu</h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="pb-20"
        // navigation
        // pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        onSwiper={(swiper) => {
            // pause on hover
            swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
            swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
        }}
      >
        {items.map((dish) => (
          <SwiperSlide key={dish.id}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4 flex flex-col items-center  justify-between max-w-60 h-80 cursor-pointer">
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover rounded-xl"
                />
                {/* Price badge - first size price */}
                <div className="absolute top-1 -right-5 bg-black text-white text-sm p-2 rounded-full">
                  {dish.sizes[0].price} {currency}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-center text-black">
                    {dish.name}
                </h3>

                <div className="text-sm text-gray-600 mb-4">
                    {dish.sizes.map((size, idx) => (
                    <div key={idx}>
                        {size.label}: {size.price} {currency}
                    </div>
                    ))}
                </div>
              </div>


              {/* <button className="bg-gold text-white px-4 py-2 rounded-lg hover:scale-105 duration-300 transition cursor-pointer ">
                Order Now
              </button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
