"use client";
import Table from "@/app/Components/Table";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import API from "@/app/Services/API";

export default function JobsList({ OpenCreateView, OpenDetailView }) {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [jobList, setJobList] = useState([]);

  const openJobDetail = () => {
    console.log("job detail open");
  };

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const loadJobList = () => {
    API.get("admin/jobs/")
      .then((response) => {
        console.log(response.data.data);
        const listData = response.data.data;
        const temp = [];
        if (listData) {
          listData.map((ele, index) => {
            temp.push({
              id: index + 1,
              Notification: "false" ? (
                <div className="w-3 h-3 rounded-full bg-red-600 border-2 border-white-default"></div>
              ) : null,
              Job_id: (
                <>
                  <div
                    onClick={() => OpenDetailView()}
                    className="underline underline-offset-2 text-gray-dark group"
                  >
                    <Link
                      href={{
                        pathname: "/admin/jobs",
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
              Job_date: formatDate(ele.startDate),
              Client: ele.clientFocalPoint.name,
              Category: ele.category.name,
              Location: ele.property.pId + "-" + ele.property.name,
              Job_owner: ele.jobOwner.name,
              Assigned_to: ele.jobAssignment.assignedTo.name,
              Job_status: ele.jobAssignment.status,
              Price: ele.price,
            });
          });
          setJobList(temp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const columns = [
    {
      name: "Notification",
      label: <img src="/images/icons/bell.svg" className="w-3" />,
    },
    { name: "Job_id", label: "Job Id" },
    { name: "Job_date", label: "Job Date" },
    { name: "Client", label: "Client" },
    { name: "Category", label: "Category" },
    { name: "Location", label: "Location" },
    { name: "Job_owner", label: "Job Owner" },
    { name: "Assigned_to", label: "Assigned To" },
    { name: "Job_status", label: "Job Status" },
    { name: "Price", label: "Price" },
  ];

  const rows = [
    {
      id: 1,
      Notification: "false" ? (
        <div className="w-3 h-3 rounded-full bg-red-600 border-2 border-white-default"></div>
      ) : null,
      Job_id: (
        <div onClick={() => OpenDetailView()}>
          <Link
            href={{
              pathname: "/admin/jobs",
              query: { id: 1234 },
            }}
            className="underline underline-offset-2 cursor-pointer text-gray-dark"
          >
            12345
          </Link>
        </div>
      ),
      Job_date: "2023-04-21",
      Client: "Abc",
      Category: "Electrical",
      Location: "New York, Ny",
      Job_owner: "John Smith",
      Assigned_to: "Sarah Johnson",
      Job_status: "Requested",
      Price: "1000.00 USD",
    },
    {
      id: 2,
      Notification: false ? (
        <div className="w-3 h-3 rounded-full bg-red-600 border-2 border-white-default"></div>
      ) : null,
      Job_id: (
        <div className="underline underline-offset-2 cursor-pointer text-gray-dark">
          12345
        </div>
      ),
      Job_date: "2023-04-21",
      Client: "Abc",
      Category: "Electrical",
      Location: "New York, Ny",
      Job_owner: "John Smith",
      Assigned_to: "Sarah Johnson",
      Job_status: "Requested",
      Price: "1000.00 USD",
    },
    {
      id: 3,
      Notification: "false" ? (
        <div className="w-3 h-3 rounded-full bg-red-600 border-2 border-white-default"></div>
      ) : null,
      Job_id: (
        <div className="underline underline-offset-2 cursor-pointer text-gray-dark">
          12345
        </div>
      ),
      Job_date: "2023-04-21",
      Client: "Abc",
      Category: "Electrical",
      Location: "New York, Ny",
      Job_owner: "John Smith",
      Assigned_to: "Sarah Johnson",
      Job_status: "Requested",
      Price: "1000.00 USD",
    },
  ];

  useEffect(() => {
    loadJobList();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-black text-lg font-semibold pl-2">Jobs</p>
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
          <Table columns={columns} rows={jobList} />
        </div>
      </div>
    </div>
  );
}
