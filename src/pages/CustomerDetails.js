import React from "react";
import CustomersHeader from "../components/customerDetails/CustomersHeader";
import DetailsTable from "../components/customerDetails/DetailsTable";

export default function CustomerDetails() {
  return (
    <div className="mt-5 w-[100%] grid place-items-center">
      <CustomersHeader />
      <DetailsTable />
    </div>
  );
}
