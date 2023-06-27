"use client";
import Table from "@/app/Components/Table";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import API from "@/app/Services/API";

export default function MilestoneList({ OpenCreateView, OpenDetailView }) {
    const [dropdownToggle, setDropdownToggle] = useState(false);
    const [milestoneList, setMilestoneList] = useState([]);

  const columns = [
    { name: "Milestone_Id", label: "Milestone Id" },
    { name: "Milestone_Name", label: "Milestone Name" },
    { name: "Category", label: "Category" },
    { name: "Steps", label: "No.Of Steps" },
    { name: "Status", label: "Status" },
  ];

  const rows = [
    {
      id: 1,
      Milestone_Id: (
        <div 
        onClick={()=>OpenDetailView()}>
          <Link
          href={{
            pathname: "/admin/milestones",
            query: { id: 1234 },
          }}
          className="underline underline-offset-2 cursor-pointer text-gray-dark"
        >
          12345
        </Link>
        </div>
      ),
      Milestone_Name: "General Cleaning Level 1",
      Category: "Cleaning",
      Steps: 4,
      Status: "Active",
    },
  ];

  const loadMilestoneList = () => {
    API.get("admin/milestone-templates/")
      .then((response) => {
        console.log(response.data.data);
        const listData = response.data.data;
        const temp = [];
        if (listData) {
          listData.map((ele, index) => {
            temp.push({
              id: index + 1,
              Milestone_Id: (
                <>
                  <div
                    onClick={() => OpenDetailView()}
                    className="underline underline-offset-2 text-gray-dark group"
                  >
                    <Link
                      href={{
                        pathname: "/admin/milestones",
                        query: { id: ele._id },
                      }}
                      className="relative underline underline-offset-2 cursor-pointer text-gray-dark"
                    >
                      {ele._id.slice(0, 8) + "..."}
                      <div className="absolute bottom-[20px] flex-col items-start hidden mb-6 group-hover:flex">
                        <span className="relative z-20 p-2 text-xs leading-none text-white-default whitespace-no-wrap bg-gray-600 shadow-lg">
                          {ele._id}
                        </span>
                        <div className="w-3 h-3 -mt-2 ml-10 rotate-45 bg-gray-600"></div>
                      </div>
                    </Link>
                  </div>
                </>
              ),
              Milestone_Name: ele.name,
              Category: ele.category.name,
              Steps: ele.start.length+ele.end.length,
              Status: ele.isActive?"Active":"InActive",
            });
          });
          setMilestoneList(temp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadMilestoneList();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-black text-lg font-semibold pl-2">Milestones</p>
        <button
          className="text-sm rounded-3xl text-white-default bg-blue-500 relative py-1 pl-4 flex justify-center items-center"
          onClick={() => OpenCreateView()}
        >
          Create New
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
        <div className="mt-3 overflow-x-scroll hidescrollbar">
          <Table columns={columns} rows={milestoneList} />
        </div>
      </div>
    </div>
  )
}
