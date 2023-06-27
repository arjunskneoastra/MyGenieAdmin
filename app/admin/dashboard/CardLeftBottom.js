"use client";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

export default function CardLeftBottom() {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const data = {
    labels: [
        'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
    ],
    datasets: [
        {
            label: "Issue analytics",
            data:[1,4,2,3,7,4,8,2,6,4,1,8],
            backgroundColor: [
                '#A066CB',
                '#A066CB',
                '#A066CB',
                '#A066CB',
                '#86C7ED',
                '#86C7ED',
                '#86C7ED',
                '#86C7ED',
                '#1836B2',
                '#1836B2',
                '#1836B2',
                '#1836B2',
              ],
            barThickness: 20
        }
    ]
  }
  const options = {
    plugins: {
        legend: {
            display:false
        },
        title: {
            display:false,
        }
    },
    elements: {
        bar: {
            // barPercentage: 5,
            // categoryPercentage: 1,
        },
    },
    scales: {
        xAxis: {
            display: false,
        },
        yAxis: {
            display: false
        },
        x: {
          grid: {
            display: false,
          },
        },
        y: {
            display: false,
        },
      },
  }
  return (
      <div className="h-full">
        <div className="h-full rounded-2xl border border-gray-500 bg-white-default px-5 py-3">
          <div className="head-section-card flex justify-between items-center">
            <p className=" text-gray-light">Issue analytics</p>
            <div className="relative">
              <button
                className="bg-gray-lighter text-gray-400 font-semibold text-xs py-2 px-4 rounded-xl"
                onClick={() => {
                  setDropdownToggle(!dropdownToggle);
                }}
              >
                This year <span className="ml-2">&#9662;</span>
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
          <div className="mt-8">
            <Bar data={data}  options={options}/>
          </div>
        </div>
      </div>
  );
}
