"use client";

import React from "react";
import SelectBox from "./selectBox";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-around bg-[#A12621] items-center">
        <div className="text-[#fff]">Call Us: 1300 099529</div>
        <div className="self-end">
          <SelectBox />
        </div>
      </div>
    </div>
  );
};

export default Header;
