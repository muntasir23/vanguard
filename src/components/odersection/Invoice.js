import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { BsViewList } from "react-icons/bs";
import { TbCircleDotFilled } from "react-icons/tb";
import OderModal from "./OderModal";

export default function Invoice({ status }) {
  const [statusModal, setStatusModal] = useState(false);
  const modalOpen = () => {
    setStatusModal(true);
  };
  const modalClose = () => {
    setStatusModal(false);
  };

  console.log(statusModal);

  let color = null;

  switch (status) {
    case (status = "Pending"):
      color = "yellow";
      break;
    case (status = "Paid"):
      color = "green";
      break;

    default:
      color = "green";
  }

  return (
    <>
      <div className="p-2 border-b border-zinc-200 hover:bg-zinc-100 flex items-center justify-between">
        <p className="font-semibold md:text-[16px] text-[14px]">
          Mahafuz Ahamed
        </p>
        <div className="flex items-center md:text-[14px] text-[13px] justify-between gap-5">
          <div
            onClick={modalOpen}
            className="price&status cursor-pointer flex items-center"
          >
            <p className={`text-${color}-500`}>
              <TbCircleDotFilled />
            </p>
            <p>$1500</p>
          </div>
          <div className="flex items-center gap-1.5">
            <p>
              <GrView />
            </p>
            <p>
              <CiEdit />
            </p>
            <p>
              <BsViewList />
            </p>
            <p>
              <RxCrossCircled />
            </p>
          </div>
        </div>
      </div>
      {statusModal && <OderModal close={modalClose} />}
    </>
  );
}
