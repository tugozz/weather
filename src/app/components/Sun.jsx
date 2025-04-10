import React from "react";
import { House } from "lucide-react";
import { MapPin } from "lucide-react";
import { Heart } from "lucide-react";
import { PersonStanding } from "lucide-react";
import { SearchInput } from "./SearchInput";

export const Sun = ({ weather }) => {
  return (
    <section className=" flex flex-1  justify-center ">
      <div className=" flex w-[567px] mt-24">
        <div className="z-20 w-103 h-202  overflow-hidden shadow-lg bg-white/75 rounded-4xl">
          <div className="space-y-12 px-10 py-14 backdrop-blur-lg ">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h4 className="text-gray-400">{weather.date}</h4>
                <h2 className="h-12 text-5xl font-extrabold text-gray-900">
                  Ulaanbaatar
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src="/sun.png" alt="" className="w-65 h-65" />
            </div>
          </div>
          <div className="px-12">
            <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
              {weather.dayTemperature}
            </div>
            <h6 className="font-extrabold mb-12 h-6">
              {weather.textCondition}
            </h6>
            <div className="flex justify-between">
              <House />
              <MapPin />
              <Heart />
              <PersonStanding />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
