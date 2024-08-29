import React from "react";

export default function ProductDetails() {
  return (
    <div className="product-details rounded-md p-2 bg-white shadow">
      <p className="font-bold">Product Details</p>
      <p className="text-[14px]">
        In Stock <strong className="text-[18px] ml-2">04</strong>
      </p>
      <div className="details mt-5">
        <div className="each-product flex justify-between items-center border-b pb-4">
          <p className="text-[14px]">Product Name</p>
          <p className="in-stock text-[20px] font-bold">02</p>
        </div>
        <div className="each-product flex justify-between items-center border-b pb-4 mt-2">
          <p className="text-[14px]">Product Name</p>
          <p className="in-stock text-[20px] font-bold">05</p>
        </div>
      </div>
    </div>
  );
}
