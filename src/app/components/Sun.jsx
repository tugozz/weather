import React from "react";
import { Search } from "./Search";

export const Sun = () => {
  return (
    <div className=" relative flex flex-1  bg-[#f2f4f6] ">
      <div className=" flex w-103 h-412 bg-amber-800">
        <Search />
        <div className="absolute size-[110px] mr-[260px] mb-[425px]">
          <img src="/Group 2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
