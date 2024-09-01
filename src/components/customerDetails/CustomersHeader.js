import React from "react";

export default function CustomersHeader() {
  return (
    <div className="bg-white rounded-sm shadow p-2 flex items-center justify-between md:w-[800px] w-[95%]">
      <p className="font-bold">Customers Details</p>
      <input className="border p-1 rounded" placeholder="Search Here" />
    </div>
  );
}
