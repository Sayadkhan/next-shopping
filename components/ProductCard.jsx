import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <div>
      <Link href="/product/1">
        <img className="w-full" src="/product-1.webp" alt="product image" />
      </Link>
      ;
    </div>
  );
};

export default ProductCard;
