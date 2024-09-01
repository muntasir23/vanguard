import React from "react";
import { TbSquareRoundedX } from "react-icons/tb";
export default function CostDetails() {
  return (
    <div className="mt-2 border flex justify-between gap-8 p-2 rounded-sm hover:bg-zinc-200">
      <p className="text-[14px]">Description of costs</p>
      <div className="flex items-center justify-center gap-2">
        <p className="font-bold">BDT 2000</p>
        <p className="text-red-600 cursor-pointer">
          {" "}
          <TbSquareRoundedX />
        </p>
      </div>
    </div>
  );
}
