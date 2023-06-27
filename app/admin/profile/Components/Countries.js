"use client";
import Table from "@/app/Components/Table";
import React, { useEffect, useState } from "react";
import API from "@/app/Services/API";

export default function Countries() {
  const [rows, setRows] = useState([]);
  const [noDataView, setNoDataView] = useState(false);

  const columns = [
    {
      name: "country_Id",
      label: "Serial No",
      padding: "pr-6",
    },
    { name: "country", label: "Country", padding: "pr-6" },
    // { name: "action", label: "Action", padding: "pr-6" },
  ];

  const loadCountriesData = () => {
    API.get("admin/countries/")
      .then((response) => {
        console.log(response.data.data);
        if (response.data.data) {
          var temp = response.data.data;
          var row = [];
          temp.map((ele, index) => {
            row.push({
              id: 2,
              padding: "pr-6",
              country_Id: index + 1,
              country: ele.name,
              action: "",
            });
          });
          setRows(row);
          setNoDataView(false);
        } else {
          setNoDataView(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadCountriesData();
  },[]);

  return (
    <div className="h-[calc(100vh-13rem)] rounded-2xl border border-gray-500 bg-white-default">
      <div className="flex items-center justify-between border-b px-8 py-6">
        <p className="text-black text-lg">Countries</p>
        <button
          className="text-sm rounded-3xl text-white-default bg-blue-500 relative py-1 pl-4 flex justify-center items-center hidden"
          onClick={() => console.log("add new")}
        >
          Add New
          <div className=" h-6 w-6 rounded-full ml-2 mr-1 bg-white-default flex justify-center items-center">
            <img src="/images/icons/plus.svg" className="w-1/2" alt="" />
          </div>
        </button>
      </div>
      <div className="px-8">
        {!noDataView ? (
          <Table columns={columns} rows={rows} />
        ) : (
          <p>No Countries to show</p>
        )}
      </div>
    </div>
  );
}
