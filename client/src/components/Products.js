import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shop till you drop
        </h1>
        <span className="w-24 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti qui
          ipsum adipisci explicabo, ipsam incidunt excepturi sed beatae
          blanditiis voluptas ut animi velit ad voluptate! Vel eaque atque quam
          officia.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10" style={{width:'1150px'}}>
        {products.map((item) => (
          <ProductsCard key={item._id} product={item}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
