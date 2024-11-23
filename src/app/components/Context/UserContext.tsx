"use client"
// context/UserContext.tsx
import { createContext, useContext, ReactNode } from 'react';

// Define the user data type
type UserData = {
  name: string;
  email: string;
  phone: string;
};

// Create the context with a default value of undefined
const UserContext = createContext<UserData | undefined>(undefined);

// Create the UserProvider component to wrap the app and provide user data
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const userData: UserData = {
    name: 'Faisal',
    email: 'faisal@abc.com',
    phone: '0333-2071179'
  };

    // Log the user data here for debugging
    console.log("User Data from Context:", userData);
    
  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

// Custom hook to access the user data from context
export const useUserData = (): UserData => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserData must be used within a UserProvider');
  }
  return context;
};
