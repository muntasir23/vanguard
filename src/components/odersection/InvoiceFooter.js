import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusSelected } from "../../features/invoiceFilter/invoiceFilterSlice";

export default function InvoiceFooter() {
  const { status } = useSelector((state) => state.invoiceFilter);
  console.log(status);

  const dispatch = useDispatch();

  const handleFilterChange = (status) => {
    dispatch(statusSelected(status));
  };

  return (
    <div className="p-2 mt-3 w-full flex justify-end">
      <div className="tabs flex justify-center items-center gap-2">
        <p
          onClick={() => handleFilterChange("All")}
          className={`cursor-pointer ${
            status === "All" && "font-semibold text-black"
          } text-gray-800 text-[14px]`}
        >
          All
        </p>
        <p className=" text-gray-800 text-[14px]">|</p>
        <p
          onClick={() => handleFilterChange("Pending")}
          className={`cursor-pointer ${
            status === "Pending" && "font-semibold text-black"
          } text-gray-800 text-[14px]`}
        >
          Pending
        </p>
        <p className=" text-gray-800 text-[14px]">|</p>
        <p
          onClick={() => handleFilterChange("Paid")}
          className={`cursor-pointer ${
            status === "Paid" && "font-semibold text-black"
          } text-gray-800 text-[14px]`}
        >
          Paid
        </p>
      </div>
    </div>
  );
}
