import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import CostCharts from "./CostCharts";

const CostTabs = () => {
  const [activeTab, setActiveTab] = useState("Cost Lists");

  const renderContent = () => {
    switch (activeTab) {
      case "Cost Lists":
        return <div className="w-full border border-red-500">expense table</div>;
      case "Chart":
        return <div className=""><CostCharts /></div>;
      case "Add Cost":
        return <div className="w-full flex items-start"><ExpenseForm /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mt-5">
      {/* Tab Buttons */}

      <div className="flex space-x-4 py-2 border-b-1 border-gray-200">
        <button
          className={`py-1 px-4 text-[15px] ${
            activeTab === "Cost Lists"
              ? "rounded bg-indigo-100 text-indigo-600 font-semibold"
              : "text-gray-600 hover:text-gray-800 hover:font-semibold"
          }`}
          onClick={() => setActiveTab("Cost Lists")}
        >
          Cost Lists
        </button>
        <button
          className={`py-1  px-4 text-[15px]  ${
            activeTab === "Chart"
             ? "rounded bg-indigo-100 text-indigo-600 font-semibold"
              : "text-gray-600 hover:text-gray-800 hover:font-semibold"
          }`}
          onClick={() => setActiveTab("Chart")}
        >
          Chart
        </button>
        <button
          className={`py-1  px-4 text-[15px]  ${
            activeTab === "Add Cost"
               ? "rounded bg-indigo-100 text-indigo-600 font-semibold"
              : "text-gray-600 hover:text-gray-800 hover:font-semibold"
          }`}
          onClick={() => setActiveTab("Add Cost")}
        >
          Add Cost
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default CostTabs;
