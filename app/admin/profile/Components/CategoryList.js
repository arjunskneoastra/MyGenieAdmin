"use client";
import ActionButton from "@/app/Components/ActionButton";
import Table from "@/app/Components/Table";
import Link from "next/link";
import API from "@/app/Services/API";
import React, { useEffect, useState } from "react";

export default function CategoryList({ handleShowAdd, handleShowEdit }) {
    const [actionOpen,setActionOpen] = useState(false)
  const [rows, setRows] = useState([]);
  const [rowId,setRowId] = useState()
  const columns = [
    {
      name: "category_Id",
      label: "Category Id",
      padding: "pr-6",
    },
    { name: "category_Name", label: "Category Name", padding: "pr-6" },
    { name: "action", label: "Action", padding: "pr-6" },
  ];

  const handleSetAction = (id) => {
    setRowId(id);
    setActionOpen(!actionOpen);
    console.log({id});
  }
  useEffect(()=>{
    console.log({rowId,actionOpen});
    console.log(actionOpen&&(rowId === 0));
  },[rowId,actionOpen])

  // const rows = [
  //   {
  //     id: 1,
  //     padding: "pr-6",
  //     category_Id: 102013,
  //     category_Name: "Cleaning",
  //     action: (
  //       <div className="relative">
  //         <div onClick={() => {
  //                 handleSetAction(1)
  //               }}>
  //           <ActionButton />
  //         </div>
  //         <div className={`border cursor-pointer rounded-lg bg-white-default z-10 absolute top-6 left-0 ${actionOpen&&rowId==1?"":"hidden"}`}>
  //           <p onClick={()=>handleShowEdit()} className="py-1 pl-2 pr-4 hover:bg-gray-500"><Link href={{
  //                   pathname: "/admin/profile",
  //                   query: {tab:"jobCategories",id:102013},
  //                 }}>Edit</Link></p>
  //           <p className="py-1 pl-2 pr-4 hover:bg-gray-500">Delete</p>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     id: 2,
  //     padding: "pr-6",
  //     category_Id: 102013,
  //     category_Name: "Cleaning",
  //     action: (
  //       <div className="relative">
  //         <div onClick={() => {
  //                 handleSetAction(2)
  //               }}>
  //           <ActionButton />
  //         </div>
  //         <div className={`border rounded-lg bg-white-default p-1 z-10 absolute top-6 left-0 ${actionOpen&&rowId==2?"":"hidden"}`}>
  //         <p>Edit</p>
  //           <p>Delete</p>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     id: 3,
  //     padding: "pr-6",
  //     category_Id: 102013,
  //     category_Name: "Cleaning",
  //     action: (
  //       <div className="relative">
  //         <div onClick={() => {
  //                 handleSetAction(3)
  //               }}>
  //           <ActionButton />
  //         </div>
  //         <div className={`border rounded-lg bg-white-default p-1 z-10 absolute top-6 left-0 ${actionOpen&&rowId==3?"":"hidden"}`}>
  //         <p>Edit</p>
  //           <p>Delete</p>
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];

  const loadCategoryData = () => {
    API.get("admin/job-categories/")
      .then((response) => {
        console.log(response.data.data);
        if (response.data.data) {
          var temp = response.data.data;
          var row = [];
          temp.map((ele, index) => {
            console.log(actionOpen&&(rowId==index));
            row.push({
              id: index,
              padding: "pr-6",
              category_Id: ele._id,
              category_Name: ele.name,
              action: (
                      <div className="relative" key={index}>
                        <div onClick={() => {
                          console.log({index});
                                handleSetAction(index)
                              }}>
                          <ActionButton />
                        </div>
                        <div className={`border cursor-pointer rounded-lg bg-white-default z-10 absolute top-6 left-0 ${actionOpen&&(rowId==index)?"":"hidden"}`}>
                          <p onClick={()=>handleShowEdit()} className="py-1 pl-2 pr-4 hover:bg-gray-500"><Link href={{
                                  pathname: "/admin/profile",
                                  query: {tab:"jobCategories",id:ele._id},
                                }}>Edit</Link></p>
                          <p className="py-1 pl-2 pr-4 hover:bg-gray-500">Delete</p>
                        </div>
                      </div>
                    ),
            });
          });
          setRows(row);
          // setNoDataView(false);
        } else {
          // setNoDataView(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{
    loadCategoryData();
  },[actionOpen])

  return (
    <div className="h-[calc(100vh-13rem)] rounded-2xl border border-gray-500 bg-white-default">
      <div className="flex items-center justify-between border-b px-8 py-6">
        <p className="text-black text-lg">Job Categories</p>
        <button
          className="text-sm rounded-3xl text-white-default bg-blue-500 relative py-1 pl-4 flex justify-center items-center"
          onClick={() => handleShowAdd()}
        >
          Add New
          <div className=" h-6 w-6 rounded-full ml-2 mr-1 bg-white-default flex justify-center items-center">
            <img src="/images/icons/plus.svg" className="w-1/2" alt="" />
          </div>
        </button>
      </div>
      <div className="px-8">
        <Table columns={columns} rows={rows} />
      </div>
    </div>
  );
}
