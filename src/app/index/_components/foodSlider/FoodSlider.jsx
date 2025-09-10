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
    <div className="max-w-[1600px] w-full mx-auto md:py-20 py-10 px-4">
      <h2 className="font-love text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-10">Our Menu</h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="pb-20"
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 4.5 },
        }}
        onSwiper={(swiper) => {
          // pause on hover
          swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
          swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
        }}
      >
        {items.map((dish, idx) => (
          <SwiperSlide key={dish.id}>
            <div className="border border-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center justify-between max-w-70 md:ms-10 h-80 cursor-pointer">
              <div className="relative w-full h-full">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={100}
                  height={50}
                  className="object-cover w-full h-full rounded-xl"
                />

                {/* Show "New" badge only for first 3 products */}
                {idx < 3 && (
                  <div className="absolute top-1 right-1 bg-red-600 text-white text-xs font-semibold px-3 py-4 rounded-full shadow">
                    NEW
                  </div>
                )}
              </div>

            </div>
              <div className="ms-10">
                <h3 className="text-lg font-semibold mt-2 text-white">
                  {dish.name}
                </h3>

                <div className="text-sm text-white font-pt mb-4">
                  {dish.sizes.map((size, sidx) => (
                    <div key={sidx}>
                      {size.label}: {size.price} {currency}
                    </div>
                  ))}
                </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
