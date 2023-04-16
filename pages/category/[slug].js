import React from "react";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

const Category = () => {
  return (
    <Wrapper className="w-full md:py-20">
      <div className="container mx-auto">
        <div className="text-2xl md:text-3xl mb-5 font-semibold text-center leading-tight">
          Runnig Shows
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-10  md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Wrapper>
  );
};

export default Category;
