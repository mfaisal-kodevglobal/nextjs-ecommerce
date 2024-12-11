"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);  // New state to track client-side rendering

  //const router = useRouter();

  // Ensure router is used only on the client side
  useEffect(() => {
    setIsClient(true);  // Set to true when component has mounted
  }, []);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/users", user);
      console.log("Signup Success", response.data);
      toast.success("Signup Success", response.data);
      //router.push('/login');
    } catch (error) {
      console.log("Signup failed", error);
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email && user.password && user.username) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  if (!isClient) {
    // Prevent rendering the page if not on the client-side
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 px-6 md:px-8 lg:px-16 bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
        <input
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
          type="password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={onSignup}
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-300"
          disabled={buttonDisabled || loading}
        >
          {loading ? 'Signing Up...' : (buttonDisabled ? 'No Signup' : 'Sign Up')}
        </button>

        <div className="mt-4 text-center">
          <Link href="/login" className="text-sm text-blue-500 hover:underline">Already have an account? Log in</Link>
        </div>
      </div>
    </div>
  );
}
