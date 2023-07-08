import React, { useState } from "react";

export const ColorModeToggle = ({toggle, toggleMode}) => {


  return (
    <div>
      <div
        onClick={toggleMode}
        className={`${toggle ? "bg-yellow-400" : "bg-slate-200"}  flex items-center justify-between w-[80px] cursor-pointer text-2xl rounded-xl px-2 py-1`}
      >
        <i
          className={`text-black-500 transition ${
            toggle ? "transform translate-x-10 fa-solid fa-moon text-black" : "fa-solid fa-sun text-orange-500"
          } `}
        ></i>
      </div>
    </div>
  );
};
