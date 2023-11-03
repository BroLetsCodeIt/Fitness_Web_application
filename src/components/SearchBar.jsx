import React, { useState } from "react";

const Searchbar = ({
  type,
  placeholder,
  required = false,
  value,
  name,
  handleInputChange,

  rightIcon,
}) => {
  return (
    <div className="flex items-center space-x-20 w-full justify-between">
      <div className='relative w-full'>
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`bg-black border border-gray-800
         text-gray-300 text-md rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block
           w-full p-2.5 outline-none px-5 placeholder:text-sm shadow-xl`}
        />
        {rightIcon && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer'>
            {rightIcon}
          </div>
        )}
       
       
      </div>
      <select className=" bg-black text-white  p-2.5 px-5 rounded-md w-[12rem]">
          <option value="veg">Vegite</option>
          <option value="nonveg">Non-ver</option>
        </select>
    </div>
  );
};

export default Searchbar;