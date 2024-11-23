'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function About3() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State to keep track of cart items

  useEffect(() => {
    // Fetch the data once the component mounts
    fetch('https://fakestoreapi.com/products?sort=asc')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);  // Update the state with the fetched products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  if (!products.length) {
    return <div>Loading...</div>;
  }

  const prod_banner = `${process.env.NEXT_PUBLIC_BASE_URL}/images/envelope-cupboards-shape_23-2148518457.jpg`; // Declaring the banner outside JSX

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to the cart!`); // A basic alert (you can customize this)
  };

  return (
    <main className="flex flex-col items-center justify-between p-6">
      {/* Product Banner */}
      <div className="w-full max-w-screen-xl mx-auto">
        <img
          src={prod_banner}
          alt="Product Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-6 w-full">
        {products.map((pro) => {
          const prod_url = `${process.env.NEXT_PUBLIC_BASE_URL}/about4/${pro.id}`;

          return (
            <div
              key={pro.id}
              className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={prod_url} className="text-center">
                <div className="flex justify-center items-center mb-4 w-full h-24">
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-24 h-24 object-contain rounded-lg"
                  />
                </div>
                <p className="text-sm font-semibold">{pro.title}</p>
                <p className="text-md mt-2 font-bold">${pro.price}</p>
              </Link>
              {/* Add to Cart button */}
              <button
                onClick={() => handleAddToCart(pro)}
                className="mt-3 py-1 px-4 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
