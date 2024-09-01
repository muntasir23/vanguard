import React from "react";
import InvoiceDetails from "../components/invoices/InvoiceDetails";

export default function Invoice() {
  return (
    <div className="invoice-page mt-5 w-[100%] grid place-items-center">
      <div className="bg-white md:w-[800px] w-[95%] p-2 rounded-sm shadow">
        <p className="font-bold">All Invoices</p>
        <div className="mt-4 pt-4 border-t">
          <InvoiceDetails />
          <InvoiceDetails />
          <InvoiceDetails />
        </div>
      </div>
    </div>
  );
}
