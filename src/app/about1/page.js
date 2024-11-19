"use client"
import { useState, useEffect } from "react"

export default function About1() {
    const [singleProduct, setSingleProduct] = useState(null);
    const [singleProduct2, setSingleProduct2] = useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/1").then((res) => res.json()).then((json) => {
            setSingleProduct(json);
        }).catch((error) => {console.error("Error fetching single product", error)});
        fetch("https://fakestoreapi.com/products/2").then((res) => res.json()).then((json) => {
            setSingleProduct2(json);
        }).catch((error) => {console.error("Error fetching single product", error)});
    },[]);

    if (!singleProduct) {
             return <div>Loading...</div>;
    }
    if (!singleProduct2) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div style={{ "marginLeft":"20px" }}>
                <h1>Products</h1>
            </div>
            <div style={{ "display":"flex" }}>
                <div className="product-card" style={{ "width":"15%","border": "1px solid lightgray","padding": "10px", "margin": "10px", "box-shadow":"15px 10px black" }}>
                    <div>
                        <img src={singleProduct.image} alt={singleProduct.title} width={100} height={100}/>
                    </div>
                    <div>
                        <p><strong></strong> {singleProduct.title}</p>
                    </div>
                    {/* <p><strong>Product ID:</strong> {singleProduct.id}</p> */}
                    {/* <div>
                        <p><strong>Description:</strong> {singleProduct.description}</p>
                    </div> */}
                    <div>
                        <p><strong>Price:</strong> ${singleProduct.price}</p>
                    </div>
                </div>
                <div className="product-card" style={{ "width":"15%","border": "1px solid lightgray","padding": "10px", "margin": "10px", "box-shadow":"15px 10px black" }}>
                    <div>
                        <img src={singleProduct2.image} alt={singleProduct2.title} width={100} height={100}/>
                    </div>
                    <div>
                        <p><strong></strong> {singleProduct2.title}</p>
                    </div>
                    {/* <p><strong>Product ID:</strong> {singleProduct.id}</p> */}
                    {/* <div>
                        <p><strong>Description:</strong> {singleProduct.description}</p>
                    </div> */}
                    <div>
                        <p><strong>Price:</strong> ${singleProduct2.price}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

//===============================================================//
// "use client";
// import { useState, useEffect } from "react";

// export default function About1() {
//   const [singleProduct, setSingleProduct] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products/1")
//       .then((res) => res.json())
//       .then((json) => {
//         setSingleProduct(json);
//       })
//       .catch((error) => {
//         console.error("Error fetching single product", error);
//       });
//   }, []);

//   if (!singleProduct) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>About1 Page - Single Product</h1>
//       <p><strong>Product ID:</strong> {singleProduct.id}</p>
//       <p><strong>Title:</strong> {singleProduct.title}</p>
//       <p><strong>Description:</strong> {singleProduct.description}</p>
//       <p><strong>Price:</strong> ${singleProduct.price}</p>
//       <img src={singleProduct.image} alt={singleProduct.title} />
//     </div>
//   );
// }
