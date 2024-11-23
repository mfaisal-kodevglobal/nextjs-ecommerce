'use client'
import React, { useContext,createContext, ReactNode } from 'react';

// Define the user data type
type UserData = {
    name: string;
    email: string;
    phone: string;
  };

// Define user data
const userData = {
  name: "Faisal",
  email: "faisal@gmail.com",
  phone: "0333-2071179"
};

// Create the context with a default value (userData)
const DataContext = createContext(userData);

// RootContext component that wraps children with the DataContext.Provider
export const RootContext = ({ children }: { children: ReactNode }) => {
  return (
    <DataContext.Provider value={userData}>
      {children}
    </DataContext.Provider>
  );
};



// Custom hook to access the user data from context
export const useContextData = (): UserData | undefined => {
    return useContext(DataContext);
  };