import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";

import RelativeProducts from "@/components/RelativeProducts";

import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";

import ProductDetailsText from "@/components/ProductDetailsText";

const ProductsDetalis = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left start */}
          <div className="left w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left end */}

          {/* right start */}
          <div className="right w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsText />

            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
              </div>
              <div className="text-red-600 mt-1">
                Size Selection is required
              </div>
            </div>

            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium flex transition-transform active:scale-95 mb-3 hover:opacity-75 items-center justify-center gap-2">
              whishlist
              <IoMdHeartEmpty size={20} />
            </button>

            <div>
              <div className="title text-lg font-bold mb-5">
                Product Details
              </div>

              <div className="details text-md mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                exercitationem et eum assumenda neque, adipisci debitis
                necessitatibus laudantium minima praesentium, quam unde ducimus
                veritatis voluptates eveniet aperiam blanditiis totam corporis
                culpa. Rerum omnis impedit necessitatibus quibusdam debitis
                cumque reiciendis quos? Quisquam a nostrum facere ullam
                laudantium corporis sed accusantium odit!
              </div>
            </div>
          </div>
          {/* right end */}
        </div>

        <RelativeProducts />
      </Wrapper>
    </div>
  );
};

export default ProductsDetalis;
