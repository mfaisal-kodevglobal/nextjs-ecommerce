import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-end items-center space-x-6 text-gray-800 dark:text-white bg-blue-100 p-4 shadow-md rounded-lg">
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
  )
}
