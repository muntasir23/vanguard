import React from "react";
import { TfiStatsUp } from "react-icons/tfi";
import { ImStatsBars } from "react-icons/im";
import { ImDownload } from "react-icons/im";

export default function SalesOverViews() {
  return (
    <div className="sales-overview rounded-md p-2 bg-white shadow">
      <p className="font-bold">Sales Overview</p>
      <div className="overviews grid grid-cols-2 mt-5 gap-4">
        <div className="flex items-center gap-4 border p-2 rounded">
          <p className="sales-icons bg-blue-100 p-2 text-[25px] font-semibold text-blue-600 rounded-md">
            <ImStatsBars />
          </p>
          <div>
            <p className="text-[14px]">Total Sales</p>
            <p className="text-[22px] font-bold">786</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border p-2 rounded">
          <p className="sales-icons bg-yellow-100 p-2 text-[25px] font-semibold text-yellow-600 rounded-md">
            <TfiStatsUp />
          </p>
          <div>
            <p className="text-[14px]">Revenue</p>
            <p className="text-[22px] font-bold">786</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border p-2 rounded">
          <p className="sales-icons bg-rose-100 p-2 text-[25px] font-semibold text-rose-600 rounded-md">
            <ImDownload />
          </p>
          <div>
            <p className="text-[14px]">Costs</p>
            <p className="text-[22px] font-bold">786</p>
          </div>
        </div>
      </div>
    </div>
  );
}
