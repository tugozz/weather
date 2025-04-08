import React from "react";

export const Search = () => {
  return (
    <div className=" flex-1 bg-[#f2f4f6]">
      <div className=" flex flex-1 absolute top-10 left-20 rounded-full text-[19px] bg-white">
        <img src="/search.svg" alt="" className="w-12 h-12" />
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2.5 pl-4 pr-3 outline-none font-bold opacity-25"
        />
      </div>
    </div>
  );
};
