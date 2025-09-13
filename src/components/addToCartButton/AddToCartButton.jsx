"use client";
import { useState } from "react";
import { Plus } from "lucide-react"; // or any icon library you prefer

export default function AddToCartButton({ item, addToCart, showText = true, width = "" }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: item.id,
      name: item.name,
      size: item.size,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleAdd}
      style={{ width }}
      className={`flex items-center gap-2 px-[6px] py-[6px] rounded-full font-pt md:text-lg font-medium shadow-lg transition-all duration-300 cursor-pointer
        ${added 
          ? "bg-green-600 hover:bg-green-700 scale-102" 
          : "bg-gradient-to-r from-yellow-500 to-red-500 hover:scale-102 hover:shadow-xl"}
      `}
    >
      {added ? "✓" : <Plus size={18} />} 
      {showText && (added ? "added in cart" : "Add to Cart")}
    </button>
  );
}
