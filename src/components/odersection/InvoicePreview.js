import html2pdf from "html2pdf.js";
import React from "react";

export default function InvoicePreview() {
  const generatePDF = () => {
    const element = document.getElementById("invoice-preview");
    if (element) {
      html2pdf().from(element).save("invoice.pdf");
    } else {
      console.error("Target element not found");
    }
  };

  return (
    <div>
      <div className="mt-5 px-5 flex gap-5">
        <button
          className="bg-indigo-500 text-white rounded hover:bg-indigo-600 px-5 py-2"
          onClick={generatePDF}
        >
          Download PDF
        </button>
        <button
          onClick={() => window.print()}
          className="bg-orange-500 text-white rounded hover:bg-orange-600 px-5 py-2"
        >
          Print
        </button>
      </div>
      <div
        id="invoice-preview"
        className="bg-zinc-100 mt-5 p-6 overflow-x-auto "
      >
        <div className="flex justify-between mb-4">
          <div>
            <h2 className="md:text-3xl text-xl font-bold">Your Company Name</h2>
            <p className="text-sm">Company Number: 123-456-789</p>
            <p className="text-sm">Invoice Page</p>
          </div>
          <div>
            {/* Placeholder Logo */}
            <div className="bg-gray-300 w-16 h-16 rounded-full"></div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2">Invoice For:</h3>
        <p>Name: Name </p>
        <p>Location: Location</p>
        <p>Number: 01882372807</p>
        <p>Date: 12/10/2024</p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="text-left">
                <th className="border p-2">Product Name</th>
                <th className="border p-2">Size</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">P Name</td>
                <td className="border p-2">P size</td>
                <td className="border p-2">5 </td>
                <td className="border p-2">1500</td>
                <td className="border p-2">{5 * 1500}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4">
          <p className="text-xl font-semibold">Total: $ 200</p>
        </div>

        <p className="text-green-600 text-lg font-semibold mt-4">
          Payment Status: Pending
        </p>
      </div>
    </div>
  );
}
