'use client'
import { useProductData } from "@/app/components/Context/RootContext"
import Link from "next/link"

export default function Navbar() {
  const { productData } = useProductData();  // Destructure productData from the context
console.log('productData in navBar',productData)
  // Check if productData is available before using it
  if (!productData || productData.length === 0) {
    return (
      <div>
        <p>Loading...</p> {/* Fallback UI while productData is not available */}
      </div>
    );
  }

  console.log('useProductData->', productData);

  return (
    <>
      <nav className="flex justify-end items-center space-x-6 text-gray-800 dark:text-white bg-blue-100 p-4 shadow-md rounded-lg">
        <span>
          <Link href="/" className="hover:text-indigo-500 transition-all duration-300 ease-in-out px-3 py-2 rounded-md">
          ProductData=[ {productData[0]?.id} | {productData[0]?.title} ] {/* Example product info */}
          </Link>
        </span>

        <span>
          <Link href="/" className="hover:text-indigo-500 transition-all duration-300 ease-in-out px-3 py-2 rounded-md">
            Home
          </Link>
        </span>

        <span>
          <Link href="/about1" className="hover:text-blue-500 hover:bg-gray-200 transition-all duration-300 ease-in-out px-3 py-2 rounded-md">
            Single Product
          </Link>
        </span>

        <span>
          <Link href="/about2" className="hover:text-indigo-500 hover:bg-gray-200 transition-all duration-300 ease-in-out px-3 py-2 rounded-md">
            About US
          </Link>
        </span>

        <span>
          <Link href="/about3" className="hover:text-indigo-500 hover:bg-gray-200 transition-all duration-300 ease-in-out px-3 py-2 rounded-md">
            Products
          </Link>
        </span>

        <span>
          <Link href="/about5" className="hover:text-indigo-500 hover:bg-gray-200 transition-all duration-300 ease-in-out px-3 py-2 rounded-md">
            Page 5
          </Link>
        </span>
      </nav>
    </>
  );
}
