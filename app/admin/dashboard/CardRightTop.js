"use client";
import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

import Chart from "chart.js/auto";

export default function CardRightTop() {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const data = {
    labels: ["jobs created", "jobs in progress", "jobs yet to start"],
    datasets: [
      {
        label: "Issue analytics",
        data: [1, 4, 2],
        backgroundColor: ["#A066CB", "#86C7ED", "#1836B2"],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          // usePointStyle: true,
          boxWidth: 10,
          boxHeight: 10,
          color: '#BABABA'
        },
        // formatter: (value, legendItem) => {
        //   return `${value} - ${legendItem.text}`;
        // },
      },
      title: {
        display: false,
      },
    },
    responsive: true,
    // maintainAspectRatio:false,
    elements: {
      arc: {
        weight: 0.5,
        borderWidth: 0,
      },
    },
    cutout: 90,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  return (
    <div className="h-full">
      <div className="h-full rounded-2xl border border-gray-500 bg-white-default px-5 py-3">
        <div className="head-section-card flex justify-between items-center">
          <p className=" text-gray-light">Jobs analytics</p>
          <div className="relative">
            <button
              className="bg-gray-lighter text-gray-400 font-semibold text-xs py-2 px-4 rounded-xl"
              onClick={() => {
                setDropdownToggle(!dropdownToggle);
              }}
            >
              This month <span className="ml-2">&#9662;</span>
            </button>
            <div
              className={`absolute mt-2 w-48 rounded-xl border border-gray-200 overflow-hidden shadow-lg bg-white-default text-sm transition-max-h transition-opacity ${
                dropdownToggle
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
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
        </div>
        <div className="">
          <div style={{ position: "relative"  }}>
            <div className="m-auto" style={{ width: '350px', height: '350px' }}>
            <Doughnut data={data} options={options} />
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <span className="text-4xl text-blue-300" >60%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
