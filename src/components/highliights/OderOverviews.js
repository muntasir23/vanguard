import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiHandCoinsFill } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

export default function OderOverviews() {
  return (
    <div className="order-overview rounded-md p-2 bg-white shadow">
      <p className="font-bold">Order Overview</p>
      <div className="overview mt-5 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-4 border p-2 rounded">
          <p className="sales-icons bg-cyan-100 p-2 text-[25px] font-semibold text-cyan-600 rounded-md">
            <HiOutlineShoppingBag />
          </p>
          <div>
            <p className="text-[14px]">Total Order</p>
            <p className="text-[22px] font-bold">6</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border p-2 rounded">
          <p className="sales-icons bg-green-100 p-2 text-[25px] font-semibold text-green-600 rounded-md">
            <TbTruckDelivery />
          </p>
          <div>
            <p className="text-[14px]">Delivered</p>
            <p className="text-[22px] font-bold">4</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border p-2 rounded">
          <p className="sales-icons bg-lime-100 p-2 text-[25px] font-semibold text-lime-600 rounded-md">
            <PiHandCoinsFill />
          </p>
          <div>
            <p className="text-[14px]">Delivery Cost</p>
            <p className="text-[22px] font-bold">200</p>
          </div>
        </div>
      </div>
    </div>
  );
}
