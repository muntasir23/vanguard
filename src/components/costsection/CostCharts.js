import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { expenses } from "./tableData";

// Sample data for both charts

const transportFilter = expenses.filter((ex) => ex.category === "Transport");
const productFilter = expenses.filter((ex) => ex.category === "Product");
const accessoriesFilter = expenses.filter(
  (ex) => ex.category === "Accessories"
);
const pageFilter = expenses.filter((ex) => ex.category === "Page");

const transportTotal = transportFilter.reduce((p, c) => p + c.amount, 0);
const productTotal = productFilter.reduce((p, c) => p + c.amount, 0);
const accessoriesTotal = accessoriesFilter.reduce((p, c) => p + c.amount, 0);
const pageTotal = pageFilter.reduce((p, c) => p + c.amount, 0);

console.log({
  transportTotal,
  productTotal,
  accessoriesTotal,
  pageTotal,
});

const data = [
  { name: "Transport", value: transportTotal },
  { name: "Product", value: productTotal },
  { name: "Accessories", value: accessoriesTotal },
  { name: "Page", value: pageTotal },
];

const COLORS = ["#337357", "#6e44ff", "#ffbd61", "#ff00e1", "#9f56ff"];

const CostCharts = () => {
  return (
    <div className="w-full flex items-start justify-center flex-col md:flex-row">
      {/* Bar Chart */}
      <div style={{ width: "90%", maxWidth: "600px", marginBottom: "30px" }}>
        <h3 className="md:text-left text-center mb-5 font-semibold text-gray-900">
          Bar Chart
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div>
        <h3 className="md:text-left text-center mb-5 font-semibold text-gray-900">
          Pie Chart
        </h3>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default CostCharts;
