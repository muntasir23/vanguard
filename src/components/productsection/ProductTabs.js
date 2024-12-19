import React, { useState } from "react";
import ProductsList from "./ProductsList";
import AddProduct from "./AddProduct";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Products List");

  const renderContent = () => {
    switch (activeTab) {
      case "Products List":
        return (
          <div className="p-4">
            <ProductsList />
          </div>
        );
      case "Add Product":
        return (
          <div className="p-4">
            <AddProduct />
          </div>
        );
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
            activeTab === "Products List"
              ? "border-b-2 border-indigo-500 text-indigo-500 font-semibold"
              : "text-gray-600 hover:text-indigo-500"
          }`}
          onClick={() => setActiveTab("Products List")}
        >
          Products List
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "Add Product"
              ? "border-b-2 border-indigo-500 text-indigo-500 font-semibold"
              : "text-gray-600 hover:text-indigo-500"
          }`}
          onClick={() => setActiveTab("Add Product")}
        >
          Add Product
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProductTabs;
