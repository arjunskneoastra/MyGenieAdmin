import React from "react";

export default function ActionButton() {
  return (
    <div className="bg-gray-500 flex gap-1.5 w-fit rounded-2xl px-2 py-1.5 cursor-pointer">
      <div className="w-1.5 h-1.5 bg-white-default rounded-full"></div>
      <div className="w-1.5 h-1.5 bg-white-default rounded-full"></div>
      <div className="w-1.5 h-1.5 bg-white-default rounded-full"></div>
    </div>
  );
}
