import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCost } from "../../features/costs/costSlice";

export default function AddCost() {
  const [description, setDiscription] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    console.log({
      description,
      amount: Number(amount),
    });

    dispatch(
      createCost({
        description,
        amount: Number(amount),
      })
    );

    setAmount("");
    setDiscription("");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleAdd} className="cost-form flex gap-3">
        <input
          type="text"
          placeholder="Description"
          required
          value={description}
          onChange={(e) => setDiscription(e.target.value)}
          className="w-[60%] p-2 border border-zinc-300 rounded "
        />
        <input
          type="number"
          placeholder="Amount"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-[20%] p-2 border border-zinc-300 rounded"
        />
        <button
          type="submit"
          className="w-[20%] p-2 bg-[#344029] rounded font-bold text-[#fffdd0] border-2 border-[#b9b9a4]"
        >
          Add
        </button>
      </form>
    </div>
  );
}
