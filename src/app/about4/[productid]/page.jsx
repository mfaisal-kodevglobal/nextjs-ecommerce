"use client"
import { useState, useEffect } from "react"
import { useProductData } from "@/app/components/Context/RootContext"; // Import the context hook

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function About4({params}) {
    const { selectedProduct } = useProductData(); // Get the selected product from context

    if (!selectedProduct) {
        return <div>Loading...</div>; // Show loading if selectedProduct is not yet available
    }
    

    const productid = params.productid;
    const [product, setproduct] = useState(null);

    useEffect(()=>{
        // fetch("https://fakestoreapi.com/products/"+productid).then((res) => res.json()).then((json) => {
        //     setproduct(json);
        // }).catch((error) => {console.error("Error fetching single product", error)});
        setproduct(selectedProduct);
    },[]);
   

    // if (!product) {
    //     return <div>Loading...</div>;
    // }
    
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-8">Product Details</h1>
            <div className="bg-white">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li className="text-sm">
                                <a href={selectedProduct.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    {selectedProduct.name}
                                </a>
                            </li>
                        </ol>
                    </nav>

                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="flex justify-center lg:col-span-1">
                            <img
                                alt={selectedProduct.image}
                                src={selectedProduct.image}
                                className="w-full sm:w-72 md:w-96 lg:w-full lg:h-auto rounded-lg object-cover"
                            />
                        </div>

                        <div className="lg:col-span-2 lg:ml-8 mt-6 lg:mt-0">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">{selectedProduct.title}</h2>
                            <p className="mt-2 text-lg font-medium text-gray-600">$ {selectedProduct.price}</p>

                            <p className="mt-4 text-base text-gray-900">{selectedProduct.description}</p>

                            <form className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4 lg:w-auto"
                                >
                                    Add to Cart
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
