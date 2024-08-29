import React from "react";
import SalesOverViews from "./SalesOverViews";
import ProductDetails from "./ProductDetails";
import Oderoverviews from './OderOverviews'

export default function Hightlight() {
  return (
    <div className="w-[100%] mt-5">
      <div className="highlights w-[100%] p-2">
        <SalesOverViews />
        <Oderoverviews />
        <ProductDetails />
      </div>
    </div>
  );
}
