import React from "react";

export default function SizeForm({ productName, handleChange }) {
  const { M, L, XL, XXL } = productName;

  return (
    <div className="mt-5 mb-5 pb-3">
      <h2 className="text-xl font-bold">Add Size Quantity</h2>
      <div className="mt-5 grid grid-cols-6 text-[12px] md:text-[15px]">
        <h3 className="border bg-zinc-100 border-gray-200 text-gray-800 font-semibold">Garments</h3>
        <h3 className="border bg-zinc-100 border-gray-200 text-gray-800 font-semibold">M</h3>
        <h3 className="border bg-zinc-100 border-gray-200 text-gray-800 font-semibold">L</h3>
        <h3 className="border bg-zinc-100 border-gray-200 text-gray-800 font-semibold">XL</h3>
        <h3 className="border bg-zinc-100 border-gray-200 text-gray-800 font-semibold">XXL</h3>
        <h3 className="border bg-zinc-100 border-gray-200 text-gray-800 font-semibold">Total</h3>
        <h3 className="border  border-gray-200">{productName.name}</h3>
        <input
          name="M"
          type="number"
          value={M}
          onChange={handleChange}
          className="border outline-none border-gray-200"
        />
        <input
          type="number"
          name="L"
          onChange={handleChange}
          value={L}
          className="border outline-none border-gray-200"
        />
        <input
          name="XL"
          type="number"
          value={XL}
          onChange={handleChange}
          className="border outline-none border-gray-200"
        />
        <input
          name="XXL"
          type="number"
          onChange={handleChange}
          value={XXL}
          className="border outline-none border-gray-200"
        />
        <h3 className="border border-gray-200 text-indigo-600 font-bold">
          {Number(M) + Number(L) + Number(XL) + Number(XXL)}
        </h3>
      </div>
    </div>
  );
}
