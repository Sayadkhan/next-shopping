import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="transform overflow-hidden bg-white duration-300 hover:scale-105 cursor-pointer">
      <Link href="/product/1">
        <Image
          src="/p1.png"
          alt="Picture of the author"
          width={500}
          height={500}
          quality={100}
          className="w-full"
        />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Product Name</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">$20.00</p>
            <p className="text-base font-medium line-through">$25.00</p>

            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
