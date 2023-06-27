"use client";
import React, { useState } from "react";

export default function Settings() {
  const [pushNotification, setPushNotification] = useState({
    toggle: false,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(pushNotification);
  };
  return (
    <div className="h-[calc(100vh-13rem)] rounded-2xl border border-gray-500 bg-white-default">
      <div className="flex items-center justify-between border-b px-8 py-6">
        <p className="text-black text-lg">Settings</p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex justify-start items-start px-8 py-7 h-[calc(100vh-13rem-154px)] gap-3">
          <span className="ml-3 text-sm font-medium text-black dark:text-gray-300">
            Push Notifications
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={pushNotification.toggle}
              className="sr-only peer"
              onChange={() => {
                setPushNotification({
                  toggle: !pushNotification.toggle,
                });
              }}
            />
            <div className="w-14 h-7 bg-gray-200 rounded-full peer before:absolute before:text-sm before:content-['off'] after:content-[''] before:top-1 before:left-[30px]  after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:bg-gray-500 after:h-6 after:w-6 after:transition-all  peer-checked:bg-green-light  peer-checked:after:translate-x-full peer-checked:after:bg-green-500 peer-checked:after:border-white peer-checked:before:content-['on'] peer-checked:before:left-[4px]"></div>
          </label>
        </div>
        <div className="flex items-center justify-end border-t px-8 py-6">
          <button
            className="text-sm rounded-3xl text-white-default bg-blue-500 relative px-8 py-1 flex justify-center items-center"
            onClick={() => console.log("add new")}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
