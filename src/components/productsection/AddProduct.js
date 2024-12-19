import React, { useState } from "react";
import SizeForm from "./SizeForm";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    productionCost: "",
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });

  const [sizeChart, setSizeChart] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data Submitted:", formData);
    // Clear Form
    setFormData({
      name: "",
      image: "",
      productionCost: "",
      M: 0,
      L: 0,
      XL: 0,
      XXL: 0,
    });
  };

  return (
    <div className=" bg-white shadow-md rounded-md px-2 w-full overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Product Form</h2>
      <form>
        {/* Name and Image Inputs */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border focus:border-indigo-500 outline-none border-gray-300 rounded w-full"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="p-2 border focus:border-indigo-500 outline-none border-gray-300 rounded w-full"
          />
        </div>

        {/* Production Cost Input */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            name="productionCost"
            placeholder="Production Cost"
            value={formData.productionCost}
            onChange={handleChange}
            className="p-2 border focus:border-indigo-500 outline-none border-gray-300 rounded w-full"
          />
        </div>

        {/* Submit Button */}
      </form>
      <button
        type="submit"
        onClick={() => setSizeChart(!sizeChart)}
        className={`bg-${
          sizeChart ? "red" : "indigo"
        }-500 text-white px-4 py-2 mb-5 rounded hover:bg-${
          sizeChart ? " red" : "indigo"
        }-600`}
      >
        {sizeChart ? "Hide Size Chart" : "View Size Chart"}
      </button>
      {/* size chart */}
      <div className="overflow-hidden w-full">
        {sizeChart && (
          <SizeForm productName={formData} handleChange={handleChange} />
        )}
      </div>
      <div>
        {sizeChart && (
          <button onClick={handleSubmit} className="w-full rounded bg-indigo-600 hover:bg-indigo-800 py-2 text-white">
            Submit Product Details
          </button>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
