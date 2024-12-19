import React, { useState } from "react";
import { TbCircleDotFilled } from "react-icons/tb";

export default function OderModal({ close }) {
  const [statusUpdate, setStatusUpdate] = useState({
    state:false,
    id:null
  });

  const handleStatus = (id) => {
    setStatusUpdate({
        id,
        state:true
    });
  };

  return (
    <div
      onClick={close}
      className="fixed  inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative"
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="grid items-center gap-1">
          <button
            onClick={() => handleStatus(1)}
            className={`flex items-center py-2 rounded-md font-bold  bg-green-${statusUpdate.id===1 && statusUpdate.state ?"600" : "200"} text-green-${statusUpdate.id===1 && statusUpdate.state ?"200" : "800"} justify-center gap-2`}
          >
            <TbCircleDotFilled />
            <p>Paid</p>
          </button>
          <button
            onClick={() => handleStatus(2)}
            className={`flex items-center py-2 rounded-md font-bold bg-yellow-${statusUpdate.id===2 && statusUpdate.state ?"600" : "200"} text-yellow-${statusUpdate.id===2 && statusUpdate.state ?"200" : "800"} justify-center gap-2`}
          >
            <TbCircleDotFilled />
            <p>Pending</p>
          </button>
        </div>
      </div>
    </div>
  );
}
