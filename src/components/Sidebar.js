import React from "react";

export default function Sidebar({ sidebar, sidebarClose }) {
  return (
    <div id="print-sidebar" className="relative  top-0 ">
      <div
        className={`p-2 h-[100vh] fixed md:absolute md:top-0  bg-zinc-100  z-50 w-full ${
          sidebar ? "sidebar" : "sidebar-open"
        }`}
      >
        <p className="mt-5 font-bold text-[20px] text-indigo-600 ">Manage Access</p>
      </div>
    </div>
  );
}
