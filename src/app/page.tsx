"use client";
import { useState, useEffect } from "react";
import ProductListSec from "./components/common/ProductListSec";
import Header from "./components/homepage/Header";
import Brands from "./components/homepage/Brands";
import { Product } from "./types/product.types";
import { useProductData } from "./components/Context/RootContext";

// Define the Comment type to structure the comment data
interface Comment {
  id: number;
  text: string;
}

export default function Home() {
  const { productData } = useProductData(); // Destructure productData from the context
  
  // Define state to hold comment data and initialize as an empty array of Comments
  const [commentData, setCommentData] = useState<Comment[]>([]);

  // useEffect(() => {
  //   // Fetch comment data once the component mounts
  //   fetch('http://localhost:3000/comments')
  //     .then(res => res.json())
  //     .then((json: Comment[]) => {
  //       setCommentData(json); // Update the state with the fetched comments
  //     })
  //     .catch(error => {
  //       console.error("Error fetching comments:", error);
  //     });
  // }, []);

  return (
    <>
      <Header />
      
      {/* Display comments if they exist */}
      {/* <section>
        <h2>Comments:</h2>
        <div>
          {commentData.length > 0 ? (
            commentData.map((comment) => (
              <p key={comment.id}>{comment.text}</p>
            ))
          ) : (
            <p>No comments available</p>
          )}
        </div>
      </section> */}

      <Brands />
      
      <main className="my-[25px] sm:my-[22px]">
        <ProductListSec title="NEW ARRIVALS" data={productData} />
      </main>
    </>
  );
}
