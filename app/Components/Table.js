"use client";
import React from "react";

export default function Table({ columns, rows }) {
  return (
    <div className="relative ">
      <table className="w-full text-sm text-left">
        <thead className="text-blue-500">
          <tr>
            {columns.map((col) => {
              return (
                <th key={col.name} scope="col" className={`${col.padding?col.padding:"px-6"} py-5 font-semibold`}>
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id} className="bg-white border-t">
                {columns.map((col)=>{
                    return <td key={col.name} className={`${row.padding?row.padding:"px-6"} py-4`}>{row[col.name]}</td>
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
