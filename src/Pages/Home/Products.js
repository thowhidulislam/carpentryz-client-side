import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Home/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://carpentryz-server-side.vercel.app/products")
      .then(function (response) {
        console.log(response);
        setProducts(response?.data?.products);
      });
  }, []);
  return (
    <div className="sm:px-4 lg:px-24 my-12">
      <h1 className="text-4xl font-bold text-center">Featured Products</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
