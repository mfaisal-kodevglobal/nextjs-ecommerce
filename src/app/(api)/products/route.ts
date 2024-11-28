// import { products } from "./products";
// import { NextRequest, NextResponse } from "next/server";
// import dbConnect from "@/lib/dbConnect";

// export async function GET(req: NextRequest) {
//     return new NextResponse(JSON.stringify(products));
// }

//GET ALL DATA FROM MONGODB 'PRODUCTS' collection.
// route.ts
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product"; // Import the Product model

export async function GET(req: NextRequest) {
  try {
    // Establish a connection to the database
    await dbConnect();

    // Query the products collection
    const products = await Product.find({}).exec(); // Fetch all products

    // Return the products as JSON
    return new NextResponse(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new NextResponse("Failed to fetch products", {
      status: 500,
    });
  }
}
