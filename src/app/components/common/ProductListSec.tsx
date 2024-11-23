import { Product } from "@/app/types/product.types"
import React from "react";
import * as motion from "framer-motion/client";
import Link from "next/link";
import ProductCard from "./ProductCard";


type ProductListSecProps = {
  title:string;
  data:Product[];
  viewAllLink?:string
}

const ProductListSec = ({title, data, viewAllLink}:ProductListSecProps) => {
  return(
    <>
      
      <section className="max-w-frame mx-auto text-center m-10">
      <motion.h2
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 w-full">
            {data.map((product) => (
                <ProductCard data={product} />
            ))}
        </div>  
       
        {viewAllLink && (
          <div className="w-full px-4 sm:px-0 text-center">
            <Link
              href={viewAllLink}
              className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10"
            >
              View All
            </Link>
          </div>
        )}
      </motion.div>
    </section>
    </>
  )
}

export default ProductListSec