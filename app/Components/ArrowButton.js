import React from "react";

export default function ArrowButton() {
  return (
    <button
      type="submit"
      className=" rounded-3xl text-white-default bg-blue-500 w-full h-10 relative p-2 flex justify-center items-center"
    >
      Login
      <div className=" h-9 w-9 rounded-full absolute bg-white-default right-1 flex justify-center items-center">
        <img src="/images/icons/arrow-right.png" className=" h-1/2" alt="" />
      </div>
    </button>
  );
}
