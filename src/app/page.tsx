"use client"
import { useState, useEffect } from "react";
import ProductListSec from "./components/common/ProductListSec"
import Header from "./components/homepage/Header"
import Brands from "./components/homepage/Brands"
import { Product } from "./types/product.types";

export default function Home() {
  interface ProductData {
    id: number,
    title: string,
    image: string,
    description: string,
    price: string,
    category: string
  }
  const [newArrivalsData, setnewArrivalsData] = useState<ProductData[]>([]); 
  useEffect(() => {
    // Fetch the data once the component mounts
    //https://fakestoreapi.com/docs
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setnewArrivalsData(json); // Update the state with the fetched products
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []); 
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[25px] sm:my-[22px]">
        <ProductListSec 
        title="NEW ARRIVALS"
        data={newArrivalsData}
        />
      </main>
    </>
  )
}
