"use client";
import Table from "@/app/Components/Table";
import React, { useEffect, useState } from "react";
import API from "@/app/Services/API";

export default function UsersList() {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [userData, setUserData] = useState([]);

  const columns = [
    // {
    //   name: "Notification",
    //   label: <img src="/images/icons/bell.svg" className="w-3" />,
    // },
    { name: "User_id", label: "User Id" },
    { name: "Username", label: "Username" },
    { name: "Email", label: "Email Address" },
    { name: "Role", label: "Role" },
    { name: "Phone_number", label: "Phone Number" },
    { name: "Status", label: "Status" },
  ];

  const rows = [
    {
      id: 1,
      User_id: (
        <div className="underline underline-offset-2 cursor-pointer text-gray-dark">
          12345
        </div>
      ),
      Username: "Elango",
      Email: "yojithvaddadi@telecom.com",
      Role: "Job Owner",
      Phone_number: "+91-7010411894",
      Status: "Active",
    },
    {
      id: 2,
      User_id: (
        <div className="underline underline-offset-2 cursor-pointer text-gray-dark">
          12345
        </div>
      ),
      Username: "Elango2",
      Email: "yojithvaddadi@telecom.com",
      Role: "Job Owner",
      Phone_number: "+91-7010411894",
      Status: "Active",
    },
    {
      id: 3,
      User_id: (
        <div className="underline underline-offset-2 cursor-pointer text-gray-dark">
          12345
        </div>
      ),
      Username: "Elango3",
      Email: "yojithvaddadi@telecom.com",
      Role: "Job Owner",
      Phone_number: "+91-7010411894",
      Status: "Active",
    },
  ];

  const loadUserData = () => {
    API.get("admin/users/")
      .then((response) => {
        if (response.data.data) {
          var temp = response.data.data;
          var users = [];
          var row = [];
          for (const key in temp) {
            if (temp.hasOwnProperty(key) && temp[key].length) {
              temp[key].map((ele) => {
                users.push(ele);
              });
            }
          }
          if (users.length) {
            users.map((ele, index) => {
              row.push({
                id: index + 1,
                User_id: (
                  <>
                    <div
                      data-tooltip-target="tooltip-default"
                      className="relative underline underline-offset-2 text-gray-dark group"
                    >
                      {ele._id.slice(0, 8) + "..."}
                      <div className="absolute bottom-[20px] flex-col items-start hidden mb-6 group-hover:flex">
                        <span className="relative z-20 p-2 text-xs leading-none text-white-default whitespace-no-wrap bg-gray-600 shadow-lg">
                          {ele._id}
                        </span>
                        <div className="w-3 h-3 -mt-2 ml-10 rotate-45 bg-gray-600"></div>
                      </div>
                    </div>
                  </>
                ),
                Username: ele.name,
                Email: ele.email ? ele.email : "-",
                Role: ele.role,
                Phone_number: ele.phoneNumber,
                Status: ele.isActive ? "Active" : "Inactive",
              });
            });
            setUserData(row);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadUserData();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-black text-lg font-semibold pl-2">Users</p>
        <button
          className="text-sm rounded-3xl text-white-default bg-blue-500 relative py-1 pl-4 flex justify-center items-center"
          onClick={() => console.log("add new")}
        >
          Add New
          <div className=" h-6 w-6 rounded-full ml-2 mr-1 bg-white-default flex justify-center items-center">
            <img src="/images/icons/plus.svg" className="w-1/2" alt="" />
          </div>
        </button>
      </div>
      <div className="mt-4 h-full rounded-2xl border border-gray-500 bg-white-default px-5 py-3">
        <div className="mt-3 flex justify-between items-center">
          <div>
            <button
              className="bg-gray-lighter text-gray-400 font-semibold text-xs py-2 px-4 rounded-2xl"
              onClick={() => {
                setDropdownToggle(!dropdownToggle);
              }}
            >
              Filter options <span className="ml-2">&#9662;</span>
            </button>
            <div
              className={`absolute z-10 mt-2 w-48 rounded-xl border border-gray-200 overflow-hidden shadow-lg bg-white-default text-sm transition-opacity ${
                dropdownToggle ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Option 3
              </a>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              id="default-search"
              className="px-4 py-1 text-sm text-gray-900 border border-gray-300 rounded-2xl"
              placeholder="Search jobs"
            />
            <div className="absolute right-0.5 top-[3px] rounded-full h-6 w-6 bg-gray-500 flex items-center justify-center ">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-gray-900 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Table columns={columns} rows={userData} />
        </div>
      </div>
    </div>
  );
}
