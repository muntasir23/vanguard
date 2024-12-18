import React, { useState } from "react";
import OderOverview from "./OderOverview";
import CreateInvoice from "./CreateInvoice";
import InvoiceSection from "./InvoiceSection";

const OderTabs = () => {
  const [activeTab, setActiveTab] = useState("Oder Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Oder Overview":
        return <div className="p-4"><OderOverview /></div>;
      case "Oder Lists":
        return <div className="p-4"><InvoiceSection /></div>;
      case "Create Invoice":
        return <div className="p-4"><CreateInvoice /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mt-5">
      {/* Tab Buttons */}
      <div className="flex space-x-4 border-b-2 border-gray-200">
        <button
          className={`py-2 px-4 ${
            activeTab === "Oder Overview"
              ? "border-b-2 border-indigo-500 text-indigo-500 font-semibold"
              : "text-gray-600 hover:text-indigo-500"
          }`}
          onClick={() => setActiveTab("Oder Overview")}
        >
         Oder Overview
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "Oder Lists"
              ? "border-b-2 border-indigo-500 text-indigo-500 font-semibold"
              : "text-gray-600 hover:text-indigo-500"
          }`}
          onClick={() => setActiveTab("Oder Lists")}
        >
          Oder Lists
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "Create Invoice"
              ? "border-b-2 border-indigo-500 text-indigo-500 font-semibold"
              : "text-gray-600 hover:text-indigo-500"
          }`}
          onClick={() => setActiveTab("Create Invoice")}
        >
         Create Invoice
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default OderTabs;
