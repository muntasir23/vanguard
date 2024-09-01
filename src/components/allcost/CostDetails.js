import React from "react";
import { TbSquareRoundedX } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { removeCost } from "../../features/costs/costSlice";
export default function CostDetails({ c }) {
  const { id, description, amount } = c;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeCost(id));
  };

  return (
    <div className="mt-2 border flex justify-between gap-8 p-2 rounded-sm hover:bg-zinc-200">
      <p className="text-[14px]">{description}</p>
      <div className="flex items-center justify-center gap-2">
        <p className="font-bold">BDT {amount}</p>
        <p className="text-red-600 cursor-pointer" onClick={handleDelete}>
          {" "}
          <TbSquareRoundedX />
        </p>
      </div>
    </div>
  );
}
