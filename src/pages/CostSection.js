import React from "react";
import AddCost from "../components/allcost/AddCost";
import CostDetails from "../components/allcost/CostDetails";

export default function CostSection() {
  return (
    <div className="mt-5 w-[100%] grid place-items-center">
      <div className="md:w-[600px] w-[90%]">
        <div className="bg-white p-2 rounded-sm shadow">
          <p className="font-bold">
            Total Cost <strong className="text-red-600">BDT 20</strong>{" "}
          </p>
          <div className="mt-3 pt-2 border-t">
            <AddCost />
          </div>
        </div>
        <div className="bg-white p-2 rounded-sm shadow mt-5">
          <p className="font-semibold">All cost list</p>
          <CostDetails />
          <CostDetails />
          <CostDetails />
        </div>
      </div>
    </div>
  );
}
