import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ sidebar, sidebarClose }) {
  return (
    <div id="print-sidebar" className="relative w-full top-0 ">
      <div
        className={`p-2 h-[100vh] fixed md:absolute md:top-0  bg-zinc-100  z-50 w-full ${
          sidebar ? "sidebar" : "sidebar-open"
        }`}
      >
        <p className="mt-5 font-bold text-[20px] text-indigo-600 ">
          Manage Access
        </p>
        <ul className="mt-4 flex flex-col w-full gap-6">
          <li className="w-full border rounded">
            <Link to="/" className="w-full hover:border-zinc-900 border">Home Page</Link>
          </li>
          <li>
            <Link to="/oderpage">Order Page</Link>
          </li>
          <li>
            <Link to="/costdetails">Cost Page</Link>
          </li>
          <li>
            <Link to="/productpage">Product Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
