import React from "react";
import { expenses } from "./tableData";

export default function ExpenseTable() {
  const transportFiler = expenses.filter((ex) => ex.category === "Transport");
  console.log(transportFiler);

  const transportTotal = transportFiler.reduce((p, c) => p + c.amount, 0);
  console.log("total" + transportTotal);

  return (
    <div className="border-2 w-[100%] overflow-hidden">
      <table className=" bg-white shadow-md rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2 border-b">Description</th>
            <th className="text-left px-4 py-2 border-b">Amount</th>
            <th className="text-left px-4 py-2 border-b">Category</th>
            <th className="text-left px-4 py-2 border-b">Date</th>
            <th className="text-left px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-indigo-100">
                <td className="px-4 py-2 border-b">{expense.description}</td>
                <td className="px-4 py-2 border-b">${expense.amount}</td>
                <td className="px-4 py-2 border-b">{expense.category}</td>
                <td className="px-4 py-2 border-b">{expense.date}</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 hover:underline mr-2">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center px-4 py-2 border-b text-gray-500"
              >
                No expenses added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
