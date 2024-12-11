"use client"
"use client";
import React, { useState } from "react";
import axios from "axios";
//import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [userData, setUserData] = useState<any>(false);
  const [loginMsg, setLoginMsg] = useState<string>('');

  //const router = useRouter();

  // Handle the form field updates
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for login
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("login_process", user)

      if(response.status == 200){
        setUserData(response.data.token);
        setLoginMsg(response.data.message + response.data.token);
        console.log("Login Success:", response.data.token);
        toast.success("Login successful!");
      }else{
        setUserData([]);
        setLoginMsg('Login Failed! Check login details...'+response.data.message);
        console.log("Login Failed! Check login details...:",response);
        //toast.success("Login Failed! Check login details...");
      }
      
      
      //router.push("/dashboard"); // Redirect to dashboard or home page after successful login
    } catch (error) {
      console.log("Login failed", error);
      toast.error("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  // Enable the button only when all fields are filled
  React.useEffect(() => {
    if (user.email && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl mb-6">Login</h1>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        className="p-2 border border-gray-300 rounded-lg mb-4"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        className="p-2 border border-gray-300 rounded-lg mb-4"
      />
      <button
        onClick={handleLogin}
        disabled={buttonDisabled || loading}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
      >
        {loading ? "Logging In..." : "Login"}
      </button>
      <div className="mt-4">
        <Link href="/signup">Don't have an account? Sign Up</Link>
      </div>
      <div>
        <p>Login Status : {loginMsg}</p>
        {/* {
          (!userData) ? 'No any user Login' : userData.map((user:any)=> {
            <p>{user.name}</p>
          })
        } */}
      </div>
    </div>
  );
}
