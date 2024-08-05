import Image from "next/image";
import React from "react";
import logo from "@/assets/logo0.png";
function AppBar() {
  return (
    <div className=" bg-black">
      <div className="py-4 sm:px-8 px-4 flex  items-center">
        
        <div className="flex justify-center w-full">
          <div className="relative">
            <div className="absolute bg-white/50 w-full top-2 bottom-0 blur-lg"></div>
            <div className="text-white sm:text-3xl text-xl font-bold relative">
              100xResume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
