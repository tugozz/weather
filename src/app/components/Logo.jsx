import React from "react";

export const Logo = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-400 rounded-full size-[100px]">
        <div className="relative">
          <div className="absolute bg-white w-15 h-15 -top-13 left-[48px]"></div>
          <div className="absolute bg-black w-15 h-[70px] -top-13 left-[49px] rounded-bl-full"></div>
        </div>
        <div className="relative">
          <div className="absolute bg-white w-15 h-13 -bottom-35 left-[48px]"></div>
          <div className="absolute bg-black w-15 h-[70px] -bottom-[150px] left-[49px] rounded-tl-full"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-400 rounded-full size-[270px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-400 rounded-full size-[430px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-400 rounded-full size-[590px]"></div>
      <div className="flex items-center justify-center size-[100px] bg-white rounded-full gap-x-2">
        <div className="flex">
          <img className="w-[30px] h-[60px]" src="/group 4.svg" alt="" />
        </div>
        <div className="flex">
          <img className="w-[30px] h-[60px]" src="/Vector.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
