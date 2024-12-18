import React from "react";
import CostTabs from "../components/costsection/CostTabs";
import { Link } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { LiaCoinsSolid } from "react-icons/lia";

export default function CostPage() {
  return (
    <div className=" p-2">
      <div className="breadcrumbs flex gap-2 mt-5">
        <Link
          to="/"
          className="text-gray-600 hover:text-gray-800 hover:font-semibold flex items-center gap-1"
        >
          <RiHome5Line />
          Home
        </Link>{" "}
        <span>/</span>{" "}
        <Link to="/costdetails" className="text-indigo-600 font-semibold flex items-center gap-1">
         <LiaCoinsSolid />
          Costs
        </Link>
      </div>
      <CostTabs />
    </div>
  );
}
