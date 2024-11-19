'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  interface ProductData {
    id: number,
    title: string,
    image: string,
    description: string,
    price: string,
    category: string
  }

  const [count, setCount] = useState<number>(0);
  const [products, setProducts] = useState<ProductData[]>([]); // Typing the products state

  useEffect(() => {
    setCount(count + 100);
  }, []); // Only run once on component mount

  useEffect(() => {
    // Fetch the data once the component mounts
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json); // Update the state with the fetched products
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []); // Run once on component mount

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <span>
        <div className="table-container" style={{ border: "1px solid lightgray", borderRadius: "10px", padding: "10px", background: "lightpink" }}>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>DESCRIPTION</th>
                <th>IMAGE</th>
              </tr>
            </thead>
            <tbody>
              {products.map((pro: ProductData) => (
                <tr key={pro.id}>
                  <td>{pro.id}</td>
                  <td>{pro.title}</td>
                  <td>{pro.price}</td>
                  <td>{pro.category}</td>
                  <td>{pro.description}</td>
                  <td>
                    <img src={pro.image} alt={pro.title} width={50} height={50} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </span>
      <br />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center">
        <span style={{ "border": "1px solid lightgray", "background": "lightgray", "borderRadius": "10px" }}>
          <style>
            {`
              .display-count {
                color: green;
                border: 1px solid gray;
                padding: 20px;
                border-radius: 10px;
              }

              .increment-button {
                color: green;
                border: 1px solid green;
                padding: 10px;
                border-radius: 10px;
                background: lightgreen;
              }

              .decrement-button {
                color: red;
                border: 1px solid red;
                padding: 10px;
                border-radius: 10px;
                background: lightpink;
              }
            `}
          </style>
          <h1>Counter: </h1>
          <p className="display-count">{count}</p><br />
          <button className="increment-button" onClick={() => setCount(count + 1)}>Increment</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="decrement-button" onClick={() => setCount(count - 1)}>Decrement</button>
        </span>
      </div>
    </main>
  );
}
