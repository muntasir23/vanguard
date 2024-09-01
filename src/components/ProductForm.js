import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createProduct } from "../features/products/productsSlice";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [inStock, setStock] = useState("");
  const [cost, setCost] = useState("");
  const [sewing, setSewing] = useState("");
  const [packging, setPackging] = useState("");
  const [label, setLabel] = useState("");
  const [gift, setGift] = useState("");
  const [selling, setSelling] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      inStock,
      cost,
      sewing,
      packging,
      label,
      gift,
      selling,
    });

    dispatch(
      createProduct({
        name,
        inStock: Number(inStock),
        cost: Number(cost),
        sewing: Number(sewing),
        packging: Number(packging),
        label: Number(label),
        gift: Number(gift),
        selling: Number(selling),
      })
    );
    setName("");
    setStock("");
    setCost("");
    setSewing("");
    setPackging("");
    setLabel("");
    setGift("");
    setSelling("");
  };

  return (
    <div className="mt-2">
      <form
        onSubmit={handleSubmit}
        className="product-form md:w-[800px] w-full bg-white shadow rounded-sm"
      >
        <div className="flex items-center justify-between gap-4 p-2  mt-4">
          <div className="w-full">
            <label htmlFor="name">Product Name</label> <br />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-zinc-300 rounded p-2 w-[100%] mt-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="stock">Product In Stock</label> <br />
            <input
              id="stock"
              type="number"
              value={inStock}
              onChange={(e) => setStock(e.target.value)}
              className="border border-zinc-300 rounded p-2 w-full mt-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-2  mt-4">
          <div className="w-full">
            <label htmlFor="cost">Cloth Cost Per Product</label> <br />
            <input
              id="cost"
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="border border-zinc-300 rounded p-2 w-[100%] mt-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="sewing">Sewing</label> <br />
            <input
              id="sewing"
              type="number"
              value={sewing}
              onChange={(e) => setSewing(e.target.value)}
              className="border border-zinc-300 rounded p-2 w-full mt-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-2  mt-4">
          <div className="w-full">
            <label htmlFor="packging">Packaging</label> <br />
            <input
              id="packging"
              type="number"
              value={packging}
              onChange={(e) => setPackging(e.target.value)}
              className="border border-zinc-300 rounded p-2 w-[100%] mt-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="label">Label</label> <br />
            <input
              id="label"
              type="number"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="border border-zinc-300 rounded p-2 w-full mt-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-2  mt-4">
          <div className="w-full">
            <label htmlFor="gift">Gift Cost Per Product</label> <br />
            <input
              id="gift"
              type="number"
              value={gift}
              onChange={(e) => setGift(e.target.value)}
              className="border border-zinc-300 rounded p-2 w-[100%] mt-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="selling">Selling Price</label> <br />
            <input
              id="selling"
              type="number"
              value={selling}
              onChange={(e) => setSelling(e.target.value)}
              className="border border-zinc-300 rounded p-2 w-full mt-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-2  mt-4">
          <div className="w-full">
            <button
              type="submit"
              className="border-2 border-[#b9b9a4] bg-[#344029] font-bold text-[#fffdd0] rounded p-2 w-[100%] mt-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
