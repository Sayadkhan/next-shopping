import React from "react";

const ProductDetailsText = () => {
  return (
    <div>
      <div className="flex-[1] py-3">
        <div className="product-name text-[34px] font-semibold mb-2">
          Bata Brand
        </div>

        <div className="product-subtitle text-lg font-semibold mb-5">
          Men&apos; s Golf Shoes
        </div>

        <div className="product-price text-lg font-semibold">
          MRP : $ 500.00 &nbsp;
          <span className="text-md font-medium text-black/[0.5]">
            incl. of taxes
          </span>
        </div>

        <div className="text-md font-medium text-black/[0.5] mb-20">
          {`(Also includes all applicable duties)`}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsText;
