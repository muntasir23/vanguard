import React from "react";
import logo from "../assets/vangurad logo.png";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Navbar({ sidebarOpen }) {
  const navigate = useNavigate();

  const handleInvoice = () => {
    navigate("/createinvoice");
  };

  return (
    <div className="w-[100%] grid place-items-center bg-white shadow sticky top-0 ">
      <div className="md:w-[1100px] w-[90%] p-3 text-[18px] flex justify-between items-center">
        <img src={logo} alt="logo" className="w-[40px]" />
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={handleInvoice}
            className="bg-[#344029] border-2 text-[#fffdd0] border-[#b9b9a4] px-5 py-1 rounded-md font-semibold"
          >
            Invoice
          </button>
          <p className="cursor-pointer sidebar-menu" onClick={sidebarOpen}>
            <MdMenu />
          </p>
        </div>
      </div>
    </div>
  );
}
