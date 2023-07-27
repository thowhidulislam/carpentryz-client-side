import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Product";
import Loading from "../Shared/Loading/Loading";

const Products = () => {
  const { data, isLoading } = useQuery("featureProducts", () =>
    fetch("https://carpentryz-server.onrender.com/products").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="sm:px-4 lg:px-24 my-12">
      <h1 className="text-4xl font-bold text-center">Featured Products</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {data?.products?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
