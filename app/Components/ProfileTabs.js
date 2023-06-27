"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { getTabValue, setTabValue } from "../admin/Navbar";

export default function ArrowButton() {
  const [activeTab, setActiveTab] = useState("profile");
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab')

  useEffect(()=>{
    setActiveTab(tab);
  },[tab])

  return (
    <div className="h-full flex flex-col justify-between border border-gray-500 bg-white-default">
      <div className="w-full">
        <div className="flex flex-col justify-start items-start ">
          {/* Tab buttons */}
          <Link
            className={`px-4 py-3 cursor-pointer text-left w-full hover:bg-blue-50 border-l-4 ${
              activeTab === "profile"
                ? "border-l-black bg-blue-50"
                : "border-l-transparent bg-transparent"
            }`}
            href={{
              pathname: "/admin/profile",
              query: {tab:"profile"},
            }}
          >
            <p className="text-black text-sm">Profile</p>
          </Link>
          <Link
            className={`px-4 py-3 cursor-pointer text-left w-full hover:bg-blue-50 border-l-4 ${
              activeTab === "countries"
                ? "border-l-black bg-blue-50"
                : "border-l-transparent bg-transparent"
            }`}
            href={{
              pathname: "/admin/profile",
              query: {tab:"countries"},
            }}
          >
            <p className="text-black text-sm">Countries</p>
          </Link>
          <Link
            className={`px-4 py-3 cursor-pointer text-left w-full hover:bg-blue-50 border-l-4 ${
              activeTab === "jobCategories"
                ? "border-l-black bg-blue-50"
                : "border-l-transparent bg-transparent"
            }`}
            href={{
              pathname: "/admin/profile",
              query: {tab:"jobCategories"},
            }}
          >
            <p className="text-black text-sm">Job Categories</p>
          </Link>
          <Link
            className={`px-4 py-3 cursor-pointer text-left w-full hover:bg-blue-50 border-l-4 ${
              activeTab === "settings"
                ? "border-l-black bg-blue-50"
                : "border-l-transparent bg-transparent"
            }`}
            href={{
              pathname: "/admin/profile",
              query: {tab:"settings"},
            }}
          >
            <p className="text-black text-sm">Settings</p>
          </Link>
        </div>
        <div className="p-4">
          {/* Tab content */}
          {/* <div
            className={`${activeTab === "profile" ? "" : "hidden"}`}
            id="tabContent1"
          >
            Tab 1 content goes here.
          </div> */}
        </div>
      </div>
    </div>
  );
}
