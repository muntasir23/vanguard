import React from "react";

export default function ProductForm() {
  return (
    <div className="mt-2">
      <form className="product-form md:w-[800px] w-full bg-white shadow rounded-sm">
        <div className="flex items-center justify-between gap-4 p-2  mt-4">
          <div className="w-full">
            <label htmlFor="name">Product Name</label> <br />
            <input
              id="name"
              type="text"
              className="border-2 border-zinc-300 rounded p-2 w-[100%] mt-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="stock">Product In Stock</label> <br />
            <input
              id="stock"
              type="number"
              className="border-2 border-zinc-300 rounded p-2 w-full mt-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-2  mt-4">
          <div className="w-full">
            <label htmlFor="cost">Cloth Cost Per Product</label> <br />
            <input
              id="cost"
              type="number"
              className="border-2 border-zinc-300 rounded p-2 w-[100%] mt-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="sewing">Sewing</label> <br />
            <input
              id="sewing"
              type="number"
              className="border-2 border-zinc-300 rounded p-2 w-full mt-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-2  mt-4">
          <div className="w-full">
            <label htmlFor="packging">Packaging</label> <br />
            <input
              id="packging"
              type="number"
              className="border-2 border-zinc-300 rounded p-2 w-[100%] mt-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="label">Label</label> <br />
            <input
              id="label"
              type="number"
              className="border-2 border-zinc-300 rounded p-2 w-full mt-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-2  mt-4">
          <div className="w-full">
            <label htmlFor="gift">Gift Cost Per Product</label> <br />
            <input
              id="gift"
              type="number"
              className="border-2 border-zinc-300 rounded p-2 w-[100%] mt-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="selling">Selling Price</label> <br />
            <input
              id="selling"
              type="number"
              className="border-2 border-zinc-300 rounded p-2 w-full mt-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-2  mt-4">
          <div className="w-full">
            <button className="border-2 border-[#b9b9a4] bg-[#344029] font-bold text-[#fffdd0] rounded p-2 w-[100%] mt-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
