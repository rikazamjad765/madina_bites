"use client";
import { use, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { notFound } from "next/navigation";
import Image from "next/image";
import productsData from "@/data/products.json";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ProductPage({ params }) {
  const { id } = use(params);
  const { dishes, currency } = productsData;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  // find product by id
  const product = dishes.find((dish) => dish.id.toString() === id);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) return notFound();

  // ✅ Check if product has only one size
  const hasOneSize = product.sizes && product.sizes.length === 1;
  const hasMultipleSizes = product.sizes && product.sizes.length > 1;

  return (
    <>
      <Navbar />
      <section className="py-16 px-6 text-white">
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

              {/* Extra Info */}
              <div className="flex flex-col gap-4 text-white text-14 mb-6">
                <span>⏱ {product.time}</span>
                <span>🔥 {product.calories} kcal</span>
              </div>
            </div>

            {/* Size + Quantity + Add */}
            <div className="flex flex-col gap-4">
              {/* Size Dropdown (only show if multiple sizes exist) */}
              {hasMultipleSizes && (
                <select
                  value={selectedSize ? selectedSize.label : ""}
                  onChange={(e) => {
                    const size = product.sizes.find(
                      (s) => s.label === e.target.value
                    );
                    setSelectedSize(size);
                  }}
                  className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
                >
                  <option value="">Select Size</option>
                  {product.sizes.map((size, index) => (
                    <option key={index} value={size.label}>
                      {size.label} - {size.price} {currency}
                    </option>
                  ))}
                </select>
              )}

              {/* Display size info when there's only one size */}
              {hasOneSize && (
                <div className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white">
                  <span>{product.sizes[0].label} - {product.sizes[0].price} {currency}</span>
                </div>
              )}

              {/* Quantity + Add to Cart */}
              <div className="flex justify-between items-center">
                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decrease}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-lg py-1 text-center font-semibold w-10">
                    {quantity}
                  </span>
                  <button
                    onClick={increase}
                    className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => {
                    if (hasMultipleSizes && !selectedSize) {
                      alert("Please select a size first");
                      return;
                    }

                    const sizeToUse =
                      selectedSize ||
                      (hasOneSize ? product.sizes[0] : { label: "Default", price: 0 });

                    addToCart({
                      id: product.id,
                      name: product.name,
                      size: sizeToUse.label,
                      quantity,
                    });

                    // ✅ Show "Added" feedback
                    setAdded(true);
                    setTimeout(() => setAdded(false), 1500);
                  }}
                  className={`px-6 py-2 font-semibold rounded-lg transition cursor-pointer
                    ${added 
                      ? "bg-green-600 text-white hover:bg-green-700" 
                      : "bg-white text-black hover:scale-105"}`}
                >
                  {added ? "✓ Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}