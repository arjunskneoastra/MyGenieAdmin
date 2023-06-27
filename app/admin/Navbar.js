"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("myGenieAuth");
    router.push("/login");
  }

  // const handleClick = () => {
  //   localStorage.removeItem("myGenieAuth");
  //   router.push("/login");
  // }
  return (
    <nav className="bg-white-default text-black h-16 shadow-md">
      <div className="container mx-auto h-full flex justify-between">
        <div className="h-full flex items-center justify-start gap-3">
          <Link href={"/admin/dashboard"} className="px-3">
            <img src="/images/logo.png" alt="logo" className="h-7" />
          </Link>
          <Link
            href={"/admin/dashboard"}
            className=" h-full px-3 relative flex items-center justify-center "
          >
            Dashboard
            <div
              className={`w-0 h-1 bg-black absolute bottom-0 transition-width duration-500 ${
                pathname == "/admin/dashboard" ? "w-full" : ""
              }`}
            ></div>
          </Link>
          <a
            href=
            {"/admin/jobs"}
            className=" h-full px-3 relative flex items-center justify-center "
          >
            Jobs
            <div
              className={`w-0 h-1 bg-black absolute bottom-0 transition-width duration-500 ${
                pathname == "/admin/jobs" ? "w-full" : ""
              }`}
            ></div>
          </a>
          <a
            href={"/admin/users"}
            className=" h-full px-3 relative flex items-center justify-center "
          >
            Users
            <div
              className={`w-0 h-1 bg-black absolute bottom-0 transition-width duration-500 ${
                pathname == "/admin/users" ? "w-full" : ""
              }`}
            ></div>
          </a>
          <a
            href={"/admin/milestones"}
            className=" h-full px-3 relative flex items-center justify-center "
          >
            Milestones
            <div
              className={`w-0 h-1 bg-black absolute bottom-0 transition-width duration-500 ${
                pathname == "/admin/milestones" ? "w-full" : ""
              }`}
            ></div>
          </a>
        </div>
        <div className="flex items-center">
          <div className="profile h-9 w-9 rounded-full gradient-bg">
            <div className="relative">
              <button
                className="bg-gray-lighter text-gray-400 font-semibold text-xs py-2 px-4 profile h-9 w-9 rounded-full gradient-bg"
                onClick={() => {
                  setDropdownToggle(!dropdownToggle);
                }}
              ></button>
              <div
                className={`absolute -right-10 top-12 z-10 mt-2 w-48 rounded-2xl border border-gray-200 overflow-hidden shadow-lg bg-white-default text-sm transition-opacity ${
                  dropdownToggle ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <Link
                  href={{
                    pathname: "/admin/profile",
                    query: {tab:"profile"},
                  }}
                  // onClick={() => handleClick("profile")}
                  className="block px-4 py-2 mt-1 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  My Profile
                </Link>
                <Link
                  href={{
                    pathname: "/admin/profile",
                    query: {tab:"countries"},
                  }}
                  className="block px-4 py-2 mt-1 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  Countries
                </Link>
                <Link
                  href={{
                    pathname: "/admin/profile",
                    query: {tab:"jobCategories"},
                  }}
                  className="block px-4 py-2 mt-1 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  Job Categories
                </Link>
                <Link
                  href={{
                    pathname: "/admin/profile",
                    query: {tab:"settings"},
                  }}
                  className="block px-4 py-2 mt-1 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  Settings
                </Link>
                <div
                  // href={"/admin/profile"}
                  onClick={()=>handleLogout()}
                  className="block mt-3 px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
