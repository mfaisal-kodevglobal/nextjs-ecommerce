import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User"; // Import the User model

// Handle the POST request to add a new user
export async function POST(req: NextRequest) {
  try {
    // Step 1: Connect to MongoDB
    await dbConnect();

    // Step 2: Get the user data from the request body
    const { username, email, password } = await req.json();

    // Step 3: Validate the input data (You can add more validations as needed)
    if (!username || !email || !password) {
      return new NextResponse("All fields are required", {
        status: 400, // Bad request
      });
    }

    // Step 4: Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email already in use", {
        status: 400, // Bad request
      });
    }

    // Step 5: Create the new user with the hashed password
    const newUser = new User({
      username,
      email,
      password, // The password will be hashed automatically via the pre-save hook in the User model
    });

    // Step 6: Save the new user to the database
    await newUser.save();

    // Step 7: Return success response
    return new NextResponse(
      JSON.stringify({ message: "User added successfully", user: newUser }),
      {
        status: 201, // Created
      }
    );
  } catch (error) {
    console.error("Error adding user:", error);
    return new NextResponse("Failed to add user", {
      status: 500, // Internal server error
    });
  }
}
