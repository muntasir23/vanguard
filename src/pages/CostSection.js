import React, { useEffect } from "react";
import AddCost from "../components/allcost/AddCost";
import CostDetails from "../components/allcost/CostDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchCosts } from "../features/costs/costSlice";

export default function CostSection() {
  const { costs, isError, isLoading, error } = useSelector(
    (state) => state.costs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCosts());
  }, [dispatch]);

  let content;

  if (isLoading) content = <p className="text-[14px] font-bold">Loading...</p>;
  if (!isLoading && isError)
    content = <p className="text-[14px] font-bold">{error}</p>;

  if (!isLoading && !isError && costs?.length === 0) {
    content = <p className="text-[14px] font-bold">No Cost Details Found</p>;
  }
  if (!isLoading && !isError && costs?.length > 0) {
    content = costs.map((c) => <CostDetails c={c} />);
  }

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
          {content}
        </div>
      </div>
    </div>
  );
}
