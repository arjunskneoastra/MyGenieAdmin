"use client";
import React, { useState } from "react";
// import Right from "../../../public/images/icons/chevron-right.svg"

export default function CardRightBottom() {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  return (
    <div className="h-full">
      <div className="h-full rounded-2xl border border-gray-500 bg-white-default px-5 py-3">
        <div className="flex justify-between items-center">
          <p className=" text-gray-light">Recent issues</p>
        </div>

        <div className="mt-8 ">
          <dl className=" text-gray-900 border border-gray-500 divide-y divide-gray-500 overflow-y-auto h-72 hidescrollbar">
            <div className="flex items-center justify-between">
              <div className="flex flex-col py-3 px-4">
                <dt className="mb-1 text-gray-light text-xs">Job id: 101001</dt>
                <dd className="text-sm">
                  <span className="font-bold">Prakash</span> added a{" "}
                  <span className="font-bold">remark</span> on task 1
                </dd>
                <dt className="mb-1 text-gray-light text-xs">today 10:00 am</dt>
              </div>
              <div className="mr-4">
                <img src="/images/icons/chevron-right.svg" width="15px"/>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col py-3 px-4">
                <dt className="mb-1 text-gray-light text-xs">Job id: 101001</dt>
                <dd className="text-sm">
                  <span className="font-bold">Prakash</span> added a{" "}
                  <span className="font-bold">remark</span> on task 1
                </dd>
                <dt className="mb-1 text-gray-light text-xs">today 10:00 am</dt>
              </div>
              <div className="mr-4">
                <img src="/images/icons/chevron-right.svg" width="15px"/>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col py-3 px-4">
                <dt className="mb-1 text-gray-light text-xs">Job id: 101001</dt>
                <dd className="text-sm">
                  <span className="font-bold">Prakash</span> added a{" "}
                  <span className="font-bold">remark</span> on task 1
                </dd>
                <dt className="mb-1 text-gray-light text-xs">today 10:00 am</dt>
              </div>
              <div className="mr-4">
                <img src="/images/icons/chevron-right.svg" width="15px"/>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col py-3 px-4">
                <dt className="mb-1 text-gray-light text-xs">Job id: 101001</dt>
                <dd className="text-sm">
                  <span className="font-bold">Prakash</span> added a{" "}
                  <span className="font-bold">remark</span> on task 1
                </dd>
                <dt className="mb-1 text-gray-light text-xs">today 10:00 am</dt>
              </div>
              <div className="mr-4">
                <img src="/images/icons/chevron-right.svg" width="15px"/>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col py-3 px-4">
                <dt className="mb-1 text-gray-light text-xs">Job id: 101001</dt>
                <dd className="text-sm">
                  <span className="font-bold">Prakash</span> added a{" "}
                  <span className="font-bold">remark</span> on task 1
                </dd>
                <dt className="mb-1 text-gray-light text-xs">today 10:00 am</dt>
              </div>
              <div className="mr-4">
                <img src="/images/icons/chevron-right.svg" width="15px"/>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col py-3 px-4">
                <dt className="mb-1 text-gray-light text-xs">Job id: 101001</dt>
                <dd className="text-sm">
                  <span className="font-bold">Prakash</span> added a{" "}
                  <span className="font-bold">remark</span> on task 1
                </dd>
                <dt className="mb-1 text-gray-light text-xs">today 10:00 am</dt>
              </div>
              <div className="mr-4">
                <img src="/images/icons/chevron-right.svg" width="15px"/>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
