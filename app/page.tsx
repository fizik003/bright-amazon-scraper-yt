import React from "react";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
      <h1 className=" text-center text-3xl mt-2 text-black/50 font-bold mb-5">
        Welcome to the Amazon Web Scraper
      </h1>
      <h2 className="text-lg italic text-center text-black/50">
        To learn how to code from ZERO experience, join to ZERO TO FULL STACK
        HERO
      </h2>
    </div>
  );
};

export default HomePage;
