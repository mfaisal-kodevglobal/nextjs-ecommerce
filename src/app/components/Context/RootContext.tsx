'use client';
import React, { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { Product } from "@/app/types/product.types";

// Define the user data type
// type UserData = {
//   name: string;
//   email: string;
//   phone: string;
// };

// Define user data
// const userData: UserData = {
//   name: "Faisal",
//   email: "faisal@gmail.com",
//   phone: "0333-2071179"
// };

// Create a context for product data and its updater
// type DataContextType = {
//   productData: Product[];
//   setProductData: React.Dispatch<React.SetStateAction<Product[]>>;
// };

type DataContextType = {
    productData: Product[];
    setProductData: React.Dispatch<React.SetStateAction<Product[]>>;
    selectedProduct: Product | null; // Store the selected product
    setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>; // Method to set selected product
  };

// Create the context with an empty default value
const DataContext = createContext<DataContextType | undefined>(undefined);

// RootContext component that wraps children with the DataContext.Provider
export const RootContext = ({ children }: { children: ReactNode }) => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Initialize selected product state

  useEffect(() => {
    // Fetch the data once the component mounts
    const products_url = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;
    fetch(products_url)
      .then(res => res.json())
      .then(json => {
        setProductData(json); // Update the state with the fetched products
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []); 

  return (
      //<DataContext.Provider value={{ productData, setProductData }}>
    
       <DataContext.Provider value={{ productData, setProductData, selectedProduct, setSelectedProduct }}>
        {children}
       </DataContext.Provider>
  );
};

// Custom hook to access the product data from context
export const useProductData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useProductData must be used within a RootContext provider");
  }
  return context;
};
