"use client"
// import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
// import { Radio, RadioGroup } from '@headlessui/react'

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function About4({params}) {
    // const router = useRouter()
    // const {id} = router.query;


    const productid = params.productid;
    const [product, setproduct] = useState(null);

    if(productid > 0){
        useEffect(()=>{
            fetch("https://fakestoreapi.com/products/"+productid).then((res) => res.json()).then((json) => {
                setproduct(json);
            }).catch((error) => {console.error("Error fetching single product", error)});
        },[]);
    }

    if (!product) {
             return <div>Loading...</div>;
    }
    // const [selectedColor, setSelectedColor] = useState({ name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' })
    // const [selectedSize, setSelectedSize] = useState({ name: 'XXS', inStock: false })
    
    return (
        <div>
            <h1>Product Details</h1>
            {/* <div class="grid grid-cols-2 gap-4 place-content-stretch h-48 ...">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
            </div> */}



            {/* <div style={{ "display":"flex" }}>
                <div className="product-card" style={{ "width":"15%","border": "1px solid lightgray","padding": "10px", "margin": "10px", "box-shadow":"15px 10px black" }}>
                    <div>
                        <img src={product.image} alt={product.title} width={100} height={100}/>
                    </div>
                    <div>
                        <p><strong></strong> {product.title}</p>
                    </div>
                    
                    <div>
                        <p><strong>Price:</strong> ${product.price}</p>
                    </div>
                </div>
            </div> */}
            <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))} */}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        {/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={product.image}
            src={product.image}
            className="hidden aspect-[3/4] size-full rounded-lg object-cover lg:block"
          />
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={product.image}
              src={product.image}
              className="aspect-[3/2] size-full rounded-lg object-cover"
            />
            <img
              alt={product.image}
              src={product.image}
              className="aspect-[3/2] size-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={product.image}
            src={product.image}
            className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]"
          />
        </div> */}

        {/* Product info */}
        
 

        

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div class="grid grid-cols-4 gap-3">
            <div>
                <img
                alt={product.image}
                src={product.image}
                className="px-1"
                width={150} height={150}
                />
            </div>
        </div>
        <div class="grid grid-cols-1 gap-12">
            <div><b>{product.title}</b></div>
        </div>


          {/* <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
          </div> */}

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">$ {product.price}</p>

            {/* Reviews */}
            {/* <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div> */}

            <form className="mt-10">
              {/* Colors */}
              

              {/* Sizes */}
              

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}