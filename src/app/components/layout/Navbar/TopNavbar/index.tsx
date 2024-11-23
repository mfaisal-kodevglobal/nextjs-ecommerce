import Link from "next/link"

export default function Navbar() {
  return(
    <>
    <nav className="flex space-x-4 text-gray-800 dark:text-white bg-blue-100 m-1 p-5">
         
          <span><Link href="/" className="hover:text-indigo-500 hover:p-1">Home</Link></span>

          <span><Link href="/about1" className="hover:text-blue-500 hover:bg-gray-300 hover:p-1">Single Product</Link></span>
          
          <span><Link href="/about2" className="hover:text-indigo-500 hover:bg-gray-300 hover:p-1">About US</Link></span>
          
          <span><Link href="/about3" className="hover:text-indigo-500 hover:bg-gray-300 hover:p-1">Products</Link></span>
          
          <span><Link href="/about5" className="hover:text-indigo-500 hover:bg-gray-300 hover:p-1">Page 5</Link></span>
          
    </nav>
    </>
  )
}