import React, { useState } from "react";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    date: "",
    category: "product", // Default value for category
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Reset the form
    setFormData({
      description: "",
      amount: "",
      date: "",
      category: "product",
    });
  };

  return (
    <div className=" bg-white shadow-md rounded-md p-6 md:w-1/2 w-full border">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description Field */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block outline-none w-full border border-gray-300 rounded-md shadow-sm  p-2 focus:border-indigo-500 focus:border-2 sm:text-sm"
            placeholder="Enter description"
            required
          />
        </div>

        {/* Amount Field */}
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block outline-none w-full border border-gray-300 rounded-md shadow-sm  p-2 focus:border-indigo-500 focus:border-2 sm:text-sm"
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Date Field */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block outline-none w-full border border-gray-300 rounded-md shadow-sm  p-2 focus:border-indigo-500 focus:border-2 sm:text-sm"
            placeholder="Enter description"
            required
          />
        </div>

        {/* Category Field */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block outline-none w-full border border-gray-300 rounded-md shadow-sm  p-2 focus:border-indigo-500 focus:border-2 sm:text-sm"
          >
            <option value="product">Product</option>
            <option value="transport">Transport</option>
            <option value="transport">Page</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-950 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
