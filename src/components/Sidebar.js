import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ sidebar }) {
  return (
    <div className="relative  top-0">
      <div
        className={`p-2 h-[100vh] fixed md:absolute md:top-0 bg-white z-50 w-full ${
          sidebar ? "sidebar" : "sidebar-open"
        }` }
      >
        <p className="mt-5 font-bold text-[20px]">Dashboard</p>
        <div className="mt-[40px]">
          <ul>
            <li className="border-b">
              {" "}
              <Link
                to="/"
                className="inline-block my-2 hover:bg-[#344029] hover:text-[#fffdd0] w-full py-2 rounded px-1"
              >
                Home
              </Link>{" "}
            </li>
            <li className="border-b">
              {" "}
              <Link
                to="/"
                className="inline-block my-2 hover:bg-[#344029] hover:text-[#fffdd0] w-full py-2 rounded px-1"
              >
                Customer Details
              </Link>{" "}
            </li>
            <li className="border-b">
              {" "}
              <Link
                to="/"
                className="inline-block my-2 hover:bg-[#344029] hover:text-[#fffdd0] w-full py-2 rounded px-1"
              >
                Product Detals
              </Link>{" "}
            </li>
            <li className="border-b">
              {" "}
              <Link
                to="/"
                className="inline-block my-2 hover:bg-[#344029] hover:text-[#fffdd0] w-full py-2 rounded px-1"
              >
                Invoices
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
