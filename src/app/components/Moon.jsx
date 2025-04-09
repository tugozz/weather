import React from "react";
import { House } from "lucide-react";
import { MapPin } from "lucide-react";
import { Heart } from "lucide-react";
import { PersonStanding } from "lucide-react";
import { Search } from "./SearchInput";

export const Moon = () => {
  return (
    <div className="flex-1 bg-black pt-24">
      <section className="relative flex flex-1 items-center justify-center ">
        <div className="relative flex w-[567px] ">
          <div className="z-20 w-103 h-202  overflow-hidden shadow-lg bg-[#111827]/75  rounded-4xl top-50px">
            <div className="space-y-12 px-10 py-14 backdrop-blur-lg ">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <h4 className="text-gray-400">April 9, 2025</h4>
                  <h2 className="h-12 text-5xl font-extrabold text-white">
                    Ulaanbaatar
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img src="/moon.png" alt="" className="w-65 h-65" />
              </div>
            </div>
            <div className="px-12">
              <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
                12°
              </div>
              <h6 className="font-extrabold mb-12 h-6 text-[#777CCE]">Moony</h6>
              <div className="flex justify-between text-[#F9FAFB]">
                <House />
                <MapPin />
                <Heart />
                <PersonStanding />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
