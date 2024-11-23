import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types/product.types";

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  const prod_url = `${process.env.NEXT_PUBLIC_BASE_URL}/about4/${data.id}`;
  return (
    
    <Link
      key={data.id}
      href={prod_url}
      className=" mb-4 shadow-2xl flex flex-col items-start w-full max-w-xs lg:max-w-sm xl:max-w-md mx-auto bg-white rounded-xl  overflow-hidden transition-transform transform hover:scale-105"
    >
      {/* Product Image Container */}
      <div className="relative w-full h-64 bg-[#F9F9F9] rounded-t-xl overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          width={500}
          height={500}
          className="object-contain w-full h-full transition-all duration-500 transform hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col space-y-3">
        {/* Product Title */}
        <strong className="text-xl font-semibold text-gray-800 line-clamp-2">
          {data.title}
        </strong>

        {/* Rating Section (optional) */}
        <div className="flex items-center space-x-1 text-sm text-yellow-500">
         
          <span className="text-gray-500"></span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          {/* Display the discounted price if applicable */}
          {
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">
              Price: {data.price}
              </span>
            </div>
          }
        </div>

        {/* Add to Cart Button */}
        <button
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg mt-3 hover:bg-blue-700 transition-all duration-300"
          onClick={() => alert("Added to cart")} // Add your logic here
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
