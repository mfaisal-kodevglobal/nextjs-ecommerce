"use client"; // This ensures that the component is client-side rendered

import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      {/* Top Section (empty, could be for branding or title) */}
     

      {/* Bottom Navigation Links */}
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <nav className="flex space-x-4 text-gray-800 dark:text-white">
          {/* Home Page  */}
          <span><Link href="/" className="hover:text-indigo-500 hover:p-1">Home</Link></span>

          {/* Page 1 */}
          <span><Link href="/about1" className="hover:text-blue-500 hover:bg-gray-300 hover:p-1">Single Product</Link></span>
          
          {/* Page 2 */}
          <span><Link href="/about2" className="hover:text-indigo-500 hover:bg-gray-300 hover:p-1">About US</Link></span>
          
          {/* Page 3 */}
          <span><Link href="/about3" className="hover:text-indigo-500 hover:bg-gray-300 hover:p-1">Products</Link></span>
          
          {/* Page 4 */}
          {/* <span><Link href="/about4" className="hover:text-indigo-500 hover:bg-gray-300 hover:p-1">Product Details</Link></span> */}
          
          {/* Page 5 */}
          <span><Link href="/about5" className="hover:text-indigo-500 hover:bg-gray-300 hover:p-1">Page 5</Link></span>
        </nav>
      </div>
      
    </div>
  );
}
