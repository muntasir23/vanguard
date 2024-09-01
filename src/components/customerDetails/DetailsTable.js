import React from "react";

export default function DetailsTable() {
  return (
    <div className="md:w-[800px] w-[95%] mt-4 bg-white mb-[20px] rounded shadow p-2 tableclass">
      <table className="table-auto w-[100%]">
        <thead className="mb-3">
          <tr className="text-left text-[14px] md:text-[16px] w-[100%] bg-zinc-100 rounded-md text-[#344029]">
            <th>Name</th>
            <th>Invoice NO</th>
            <th>Price</th>
            <th>Number</th>
            <th>Facebook link</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-[14px] md:text-[16px]">
            <td>Mahafuz</td>
            <td>#1</td>
            <td>BDT 3200</td>
            <td>+8801882372807</td>
            <td>
              <a href="/">Link</a>
            </td>
          </tr>
          <tr className="text-[14px] md:text-[16px]">
            <td>Mahafuz</td>
            <td>#1</td>
            <td>BDT 3200</td>
            <td>+8801882372807</td>
            <td>
              <a href="/">Link</a>
            </td>
          </tr>
          <tr className="text-[14px] md:text-[16px]">
            <td>Mahafuz</td>
            <td>#1</td>
            <td>BDT 3200</td>
            <td>+8801882372807</td>
            <td>
              <a href="/">Link</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
