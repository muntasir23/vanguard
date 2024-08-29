import React from "react";
import Filter from "../components/sideItem/Filter";
import Sort from "../components/sideItem/Sort";
import Blogs from "../components/blogs/Blogs";

export default function Home() {
  return (
    <div className="w-[100%] grid place-items-center">
      <div className="md:w-[1100px] w-[95%] flex md:flex-row flex-col items-start md:mt-[80px] mt-[50px]">
        <div className="filter-sort md:w-[20%] md:gap-0 gap-[10px] flex md:flex-col justify-between w-[95%] p-2">
          <Sort />
          <Filter />
        </div>
        <div className="Blogs md:w-[80%] w-[100%] p-2">
          <Blogs />
        </div>
      </div>
    </div>
  );
}
