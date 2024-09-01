import React from "react";
import { TbSquareRoundedX } from "react-icons/tb";

export default function InvoiceDetails() {
  return (
    <div className="border mt-4 hover:bg-zinc-200 flex items-center justify-between gap-4 p-2 rounded-sm shadow-sm">
      <div className="flex items-center justify-center gap-3">
        <p className="invoice-id font-semibold text-[16px]">#1</p>
        <p className="customer-name text-[16px]">Name</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <p className="amount font-bold">BDT 2000</p>
        <p className="text-[16px] text-red-600 cursor-pointer">
          <TbSquareRoundedX />
        </p>
      </div>
    </div>
  );
}
