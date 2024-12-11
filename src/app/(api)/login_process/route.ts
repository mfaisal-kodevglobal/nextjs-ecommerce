import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Handle the POST request for login
export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Get the user data from the request body
    const { email, password } = await req.json();
console.log('email, password',{ email, password });

    // Validate the input data
    if (!email || !password) {
      return new NextResponse("Email and password are required", {
        status: 400,
      });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse("User Not Found!!!", {
        status: 400,
      });
    }

    // Compare the password with the hashed password stored in the database
                    const isPasswordCorrect = await bcrypt.compare(password, user.password);
                    if (!isPasswordCorrect) {
                      return new NextResponse("Invalid email or password", {
                        status: 400,
                      });
                    }

    // Generate a JWT token (you can customize the payload and expiration)
    const token = jwt.sign(
                            { userId: user._id, username: user.username, email: user.email },
                            process.env.JWT_SECRET as string, // JWT secret stored in .env
                            { expiresIn: "1h" }
    );

    // Return the token in the response
    return new NextResponse(
      JSON.stringify({ message: "Login successful => ", token:token }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging in:", error);
    return new NextResponse("Failed to login", { status: 500 });
  }
}
