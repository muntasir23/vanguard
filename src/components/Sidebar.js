import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ sidebar, sidebarClose }) {
  return (
    <div className="relative  top-0">
      <div
        className={`p-2 h-[100vh] fixed md:absolute md:top-0 bg-white z-50 w-full ${
          sidebar ? "sidebar" : "sidebar-open"
        }`}
      >
        <p className="mt-5 font-bold text-[20px]">Dashboard</p>
        <div className="mt-[40px]">
          <ul>
            <li className="border-b">
              {" "}
              <NavLink
                to="/"
                onClick={sidebarClose}
                className={`inline-block my-2 hover:bg-[#344029] hover:text-[#fffdd0] w-full \
                py-2 rounded px-1 ${({ isActive, isPending }) => (isActive ? "active" : "")}`}
              >
                Home
              </NavLink>{" "}
            </li>
            <li className="border-b">
              {" "}
              <NavLink
                to="/customersdetails"
                onClick={sidebarClose}
                className="inline-block my-2 hover:bg-[#344029] hover:text-[#fffdd0] w-full py-2 rounded px-1"
              >
                Customer Details
              </NavLink>{" "}
            </li>
            <li className="border-b">
              {" "}
              <NavLink
                to="/addproduct"
                onClick={sidebarClose}
                className="inline-block my-2 hover:bg-[#344029] hover:text-[#fffdd0] w-full py-2 rounded px-1"
              >
                Add Product
              </NavLink>{" "}
            </li>
            <li className="border-b">
              {" "}
              <NavLink
                to="/allproducts"
                onClick={sidebarClose}
                className="inline-block my-2 hover:bg-[#344029] hover:text-[#fffdd0] w-full py-2 rounded px-1"
              >
                Product Detals
              </NavLink>{" "}
            </li>
            <li className="border-b">
              {" "}
              <NavLink
                to="/invoice"
                onClick={sidebarClose}
                className="inline-block my-2 hover:bg-[#344029] hover:text-[#fffdd0] w-full py-2 rounded px-1"
              >
                Invoices
              </NavLink>{" "}
            </li>
            <li className="border-b">
              {" "}
              <NavLink
                to="/allcost"
                onClick={sidebarClose}
                className="inline-block my-2 hover:bg-[#344029] hover:text-[#fffdd0] w-full py-2 rounded px-1"
              >
                Costs
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
