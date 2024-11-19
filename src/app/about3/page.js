'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function About3() {
    
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State to keep track of cart items

  useEffect(() => {
    // Fetch the data once the component mounts
    fetch('https://fakestoreapi.com/products?sort=asc')
      .then(res => res.json())
      .then(json => {
        setProducts(json);  // Update the state with the fetched products
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to the cart!`); // Optional: Show a message when added
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex9 min-h-screen9 flex-col9 items-center99 justify-between9 p-59">
         
          
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((pro) => {
            let prod_url = "https://nextjs-ecommerce-bp7m.vercel.app/about4/"+pro.id;
          return (
            <div key={pro.id} className="product-card" style={{
              width: "15%",
              border: "1px solid lightgray",
              padding: "10px",
              margin: "20px",
              boxShadow: "15px 15px 15px 10px gray",
              borderRadius: "5px",
              textAlign: "center",
            }}>
            <Link href={prod_url}>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",  // Fixed height to match image size
                marginBottom: "10px"
              }}>
                <img
                  src={pro.image}
                  alt={pro.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div>
                <p style={{ fontSize: "10px" }}><strong>{pro.title}</strong></p>
              </div>
              <div>
                <p><strong>Price:</strong> ${pro.price}</p>
              </div>
            </Link>    
              <div>
                {/* Add to Cart button */}
                <Button variant="contained" onClick={() => handleAddToCart(pro)} 
                  style={{
                    padding: "3px 8px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}>Add to Cart</Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Optionally, you can display the cart below the products */}
      {/* <div style={{ marginTop: '40px' }}>
        <h2>Your Cart ({cart.length} items)</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.title} - ${item.price}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div> */}
    </main>
  );
}
