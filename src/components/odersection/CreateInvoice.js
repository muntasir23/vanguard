import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const CreateInvoice = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    number: "",
    date: "",
    products: [{ productName: "", size: "M", quantity: 1, price: 0 }],
  });

  // Add a new product to the list
  const addProduct = () => {
    setFormData((prev) => ({
      ...prev,
      products: [
        ...prev.products,
        { productName: "", size: "M", quantity: 1, price: 0 },
      ],
    }));
  };

  // Remove a product
  const removeProduct = (index) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.filter((_, i) => i !== index),
    }));
  };

  // Handle input change
  const handleChange = (e, index = null, field = null) => {
    const { name, value } = e.target;
    if (index !== null && field) {
      const updatedProducts = formData.products.map((product, i) =>
        i === index ? { ...product, [field]: value } : product
      );
      setFormData((prev) => ({ ...prev, products: updatedProducts }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="w-full flex items-center justify-between mb-3">
        <h2 className="text-2xl font-bold">Invoice Form</h2>
        <button
          onClick={addProduct}
          className="bg-indigo-500 text-[12px] font-semibold text-indigo-200 px-4 py-2 rounded hover:bg-indigo-600"
        >
          Add Product
        </button>
      </div>

      {/* User Info Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="number"
          placeholder="Number"
          value={formData.number}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      {/* Product List Section */}
      <h3 className="text-lg font-semibold mb-2">Product List</h3>
      {formData.products.map((product, index) => (
        <div className="border-1 rounded p-1 mb-2 shadow-sm">
          <div className="w-full mb-1 px-2 pt-1">
            <button
              onClick={() => removeProduct(index)}
              className="text-orange-900 bg-orange-300 p-1 rounded hover:bg-orange-600 hover:text-orange-100 "
            >
              <RxCross2 />
            </button>
          </div>
          <div
            key={index}
            className="grid grid-cols-2 gap-4 mb-2 items-center p-2 pb-2"
          >
            <input
              type="text"
              placeholder="Product Name"
              value={product.productName}
              onChange={(e) => handleChange(e, index, "productName")}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <select
              value={product.size}
              onChange={(e) => handleChange(e, index, "size")}
              className="p-2 border border-gray-300 rounded w-full"
            >
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <input
              type="number"
              placeholder="Quantity"
              value={product.quantity}
              min="1"
              onChange={(e) => handleChange(e, index, "quantity")}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="number"
              placeholder="Price"
              value={product.price}
              min="0"
              onChange={(e) => handleChange(e, index, "price")}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>
      ))}
      {/* Submit Button */}
      <button
        onClick={() => console.log(formData)}
        className="w-full bg-indigo-500 text-white px-4 py-2 rounded mt-4 hover:bg-indigo-600"
      >
        Submit Invoice
      </button>
    </div>
  );
};

export default CreateInvoice;
