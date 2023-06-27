"use client";
import Modal from "@/app/Components/Modal";
import React, { useState } from "react";

export default function CreateJob({ OpenListView }) {
  const [activeTab, setActiveTab] = useState("tab1");
  const [tabOneCompleted, setTabOneCompleted] = useState(false);
  const [tabTwoCompleted, setTabTwoCompleted] = useState(false);
  const [milestoneFlag, setMilestoneFlag] = useState(false);
  const [priceFlag, setPriceFlag] = useState(false);

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  const handleMilestoneChange = (e) => {
    if (e.target.value == "custom") {
      setMilestoneFlag(true);
    }
  };

  const onPriceChange = (e) => {
    if (e.target.value == "custom") {
      setPriceFlag(true);
    }
  };

  const openModal = (e, fieldName) => {
    if (fieldName == "milestoneStart") {
      openModal(e.target.value, fieldName);
    }
  };
  return (
    <div>
      <div className="flex">
        <img
          onClick={() => OpenListView()}
          src="/images/icons/angle-left.svg"
          className="w-2 mr-2 cursor-pointer"
        />
        <p>Create a job proposal</p>
      </div>
      <div className="mt-3 rounded-2xl border border-gray-500 bg-white-default py-3">
        <div className="w-full">
          <div className="flex justify-around px-5">
            {/* Tab buttons */}
            <div
              className={`py-2 px-4 cursor-pointer text-center w-full ${
                activeTab === "tab1" ? "" : ""
              }`}
              onClick={() => openTab("tab1")}
            >
              <p
                className={` text-sm ${
                  activeTab === "tab1" || tabOneCompleted
                    ? "text-blue-500"
                    : "text-gray-light"
                }`}
              >
                Step 1
              </p>
              <p className="text-black text-base">Job Details</p>
              <div
                className={` rounded-2xl py-1   ${
                  activeTab === "tab1" || tabOneCompleted
                    ? "bg-blue-500"
                    : "bg-gray-500"
                }`}
              ></div>
            </div>
            <div
              className={`py-2 px-4 cursor-pointer text-center w-full ${
                activeTab === "tab2" || tabTwoCompleted ? "" : ""
              }`}
              onClick={() => openTab("tab2")}
            >
              <p
                className={` text-sm ${
                  activeTab === "tab2" || tabTwoCompleted
                    ? "text-blue-500"
                    : "text-gray-light"
                }`}
              >
                Step 2
              </p>
              <p className="text-black text-base">Milestone</p>
              <div
                className={` rounded-2xl py-1   ${
                  activeTab === "tab2" || tabTwoCompleted
                    ? "bg-blue-500"
                    : "bg-gray-500"
                }`}
              ></div>
            </div>
            <div
              className={`py-2 px-4 cursor-pointer text-center w-full ${
                activeTab === "tab3" ? "" : ""
              }`}
              onClick={() => openTab("tab3")}
            >
              <p
                className={` text-sm ${
                  activeTab === "tab3" ? "text-blue-500" : "text-gray-light"
                }`}
              >
                Step 3
              </p>
              <p className="text-black text-base">Assign & Pricing</p>
              <div
                className={` rounded-2xl py-1   ${
                  activeTab === "tab3" ? "bg-blue-500" : "bg-gray-500"
                }`}
              ></div>
            </div>
          </div>
          <form className="mt-5">
            <div className="py-4">
              {/* Tab content */}
              <div
                className={`${
                  activeTab === "tab1" ? "" : "hidden"
                } grid grid-cols-12 gap-10`}
                id="tabContent1"
              >
                <div className="col-span-3 px-9">
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label className="text-gray-dark text-sm" for="jobOwner">
                      Job Owner
                    </label>
                    <select
                      id="jobOwner"
                      name="jobOwner"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    >
                      <option value="">Select</option>
                    </select>
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label className="text-gray-dark text-sm" for="jobOwner">
                      Job Owner
                    </label>
                    <select
                      id="jobOwner"
                      name="jobOwner"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    >
                      <option value="">Select</option>
                    </select>
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label className="text-gray-dark text-sm" for="address">
                      Full Address
                    </label>
                    <textarea
                      rows={4}
                      id="address"
                      name="address"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full text-gray-light h-[140px]"
                    />
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                </div>
                <div className="col-span-3 px-9">
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label className="text-gray-dark text-sm" for="propertyId">
                      Property Id
                    </label>
                    <select
                      id="propertyId"
                      name="propertyId"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    >
                      <option value="">Select</option>
                    </select>
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label
                      className="text-gray-dark text-sm"
                      for="startDateTime"
                    >
                      Start Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      id="startDateTime"
                      name="startDateTime"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    />
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                </div>
                <div className="col-span-3 px-9">
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label className="text-gray-dark text-sm" for="fullName">
                      Client
                    </label>
                    <select
                      id="jobOwner"
                      name="jobOwner"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    >
                      <option value="">Select</option>
                    </select>
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label className="text-gray-dark text-sm" for="endDateTime">
                      Due Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      id="endDateTime"
                      name="endDateTime"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    />
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label
                      className="text-gray-dark text-sm"
                      for="instructions"
                    >
                      Additional Instructions
                    </label>
                    <textarea
                      rows={4}
                      id="instructions"
                      name="instructions"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full text-gray-light h-[140px]"
                    />
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                </div>
                <div className="col-span-3 px-9">
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label className="text-gray-dark text-sm" for="fullName">
                      Category
                    </label>
                    <select
                      id="jobOwner"
                      name="jobOwner"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    >
                      <option value="">Select</option>
                    </select>
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label
                      className="text-gray-dark text-sm"
                      for="googleMapLink"
                    >
                      Google Map Link
                    </label>
                    <input
                      type="text"
                      id="googleMapLink"
                      name="googleMapLink"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    />
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="flex items-center justify-end border-t py-6 px-9 gap-5">
                    <button
                      type="button"
                      className="text-sm rounded-3xl text-white-default bg-gray-light relative px-8 py-1 flex justify-center items-center w-[100px]"
                      onClick={() => OpenListView()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="text-sm rounded-3xl text-white-default bg-blue-500 relative px-8 py-1 flex justify-center items-center w-[100px]"
                      onClick={() => {
                        openTab("tab2");
                        setTabOneCompleted(true);
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  activeTab === "tab2" ? "" : "hidden"
                } grid grid-cols-12 gap-10`}
                id="tabContent2"
              >
                <div className="col-span-3 px-9">
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label className="text-gray-dark text-sm" for="milestone">
                      Chose a milestone
                    </label>
                    <select
                      id="milestone"
                      name="milestone"
                      onChange={handleMilestoneChange}
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    >
                      <option value="">Select</option>
                      <option value="custom">Custom</option>
                    </select>
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                  {milestoneFlag && (
                    <div className="flex flex-col items-start gap-3 mb-8">
                      <label
                        className="text-gray-light text-sm"
                        for="milestoneStart"
                      >
                        Start Milestone
                      </label>
                      <div className="py-12 px-4 relative border-2 border-x-gray-light border-dashed rounded-xl">
                        <select
                          id="milestoneStart"
                          name="milestoneStart"
                          className="relative border text-xs rounded-full  focus:outline-primary pl-4 pr-10 py-1 w-full h-8 text-gray-light bg-blue-500 appearance-none"
                          onChange={(e) => {
                            openModal(e, "milestoneStart");
                          }}
                        >
                          <option className="bg-white-default" value="">
                            Add new
                          </option>
                          <option className="bg-white-default" value="code">
                            Code
                          </option>
                          <option className="bg-white-default" value="photo">
                            Photo
                          </option>
                          <option className="bg-white-default" value="video">
                            Video
                          </option>
                          <option
                            className="bg-white-default"
                            value="checklist"
                          >
                            Checklist
                          </option>
                          <option className="bg-white-default" value="checkbox">
                            Checkbox
                          </option>
                        </select>
                        <div className="p-3 z-20 mt-[-4px] absolute top-14 right-5 pointer-events-none w-2 rounded-full bg-blue-950"></div>
                        <img
                          className="z-50 mt-[-3px] mr-[5px] absolute top-14 right-5 w-3 bg-transparent pointer-events-none"
                          src="/images/icons/caret-down-solid.svg"
                        ></img>
                      </div>
                      {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                    </div>
                  )}
                  {milestoneFlag && (
                    <div className="flex flex-col items-start gap-3 mb-8">
                      <label
                        className="text-gray-light text-sm"
                        for="milestoneEnd"
                      >
                        End Milestone
                      </label>
                      <div className="py-12 px-4 relative border-2 border-x-gray-light border-dashed rounded-xl">
                        <select
                          id="milestoneEnd"
                          name="milestoneEnd"
                          className=" border text-xs rounded-full  focus:outline-primary pl-4 pr-10 py-1 w-full h-8 text-gray-light bg-blue-500 appearance-none
                          "
                          onChange={(e) => {
                            openModal(e, "milestoneEnd");
                          }}
                        >
                          <option className="bg-white-default" value="">
                            Add new
                          </option>
                          <option className="bg-white-default" value="code">
                            Code
                          </option>
                          <option className="bg-white-default" value="photo">
                            Photo
                          </option>
                          <option className="bg-white-default" value="video">
                            Video
                          </option>
                          <option
                            className="bg-white-default"
                            value="checklist"
                          >
                            Checklist
                          </option>
                          <option className="bg-white-default" value="checkbox">
                            Checkbox
                          </option>
                        </select>
                        <div className="p-3 z-20 mt-[-4px] absolute top-14 right-5 pointer-events-none w-2 rounded-full bg-blue-950"></div>
                        <img
                          className="z-50 mt-[-3px] mr-[5px] absolute top-14 right-5 w-3 bg-transparent pointer-events-none"
                          src="/images/icons/caret-down-solid.svg"
                        ></img>
                      </div>
                      {/* {errors.fullName && (
                  <p className="text-xs text-red-400">{errors.fullName}</p>
                )} */}
                    </div>
                  )}
                </div>
                <div className="col-span-3 px-9">
                  {milestoneFlag && (
                    <div className="flex flex-col items-start gap-3 mb-8">
                      <label
                        className="text-gray-dark text-sm"
                        for="milestoneName"
                      >
                        Name of Milestone
                      </label>
                      <select
                        id="milestoneName"
                        name="milestoneName"
                        className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                      >
                        <option value="">Select</option>
                        <option value="custom">Custom</option>
                      </select>
                      {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                    </div>
                  )}
                </div>
                <div className="col-span-12">
                  <div className="flex items-center justify-end border-t py-6 px-9 gap-5">
                    <button
                      type="button"
                      className="text-sm rounded-3xl text-white-default bg-gray-light relative px-8 py-1 flex justify-center items-center w-[100px]"
                      onClick={() => OpenListView()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="text-sm rounded-3xl text-white-default bg-blue-500 relative px-8 py-1 flex justify-center items-center w-[100px]"
                      onClick={() => {
                        openTab("tab1");
                        setTabOneCompleted(true);
                        setTabTwoCompleted(false);
                      }}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="text-sm rounded-3xl text-white-default bg-blue-500 relative px-8 py-1 flex justify-center items-center w-[100px]"
                      onClick={() => {
                        openTab("tab3");
                        setTabTwoCompleted(true);
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  activeTab === "tab3" ? "" : "hidden"
                } grid grid-cols-12 gap-10`}
                id="tabContent3"
              >
                <div className="col-span-3 px-9">
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label className="text-gray-dark text-sm" for="jobOwner">
                      Price
                    </label>
                    <select
                      onChange={(e) => {
                        onPriceChange(e);
                      }}
                      id="jobOwner"
                      name="jobOwner"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    >
                      <option value="">Select</option>
                      <option value="custom">Custom</option>
                    </select>
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                  <div className="flex flex-col items-start gap-3 mb-8">
                    <label className="text-gray-dark text-sm" for="jobOwner">
                      Assign To
                    </label>
                    <select
                      id="jobOwner"
                      name="jobOwner"
                      className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                    >
                      <option value="">Select</option>
                    </select>
                    {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                  </div>
                </div>
                {priceFlag ? (
                  <div className="col-span-3 px-9">
                    <div className="flex flex-col items-start gap-3 mb-8">
                      <label
                        className="text-gray-dark text-sm"
                        for="propertyId"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        className=" border rounded-xl text-xs  focus:outline-primary px-3 py-1 w-full h-10 text-gray-light"
                      />
                      {/* {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )} */}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="col-span-12">
                  <div className="flex items-center justify-end border-t py-6 px-9 gap-5">
                    <button
                      type="button"
                      className="text-sm rounded-3xl text-white-default bg-gray-light relative px-8 py-1 flex justify-center items-center w-[100px]"
                      onClick={() => OpenListView()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="text-sm rounded-3xl text-white-default bg-blue-500 relative px-8 py-1 flex justify-center items-center w-[100px]"
                      onClick={() => {
                        openTab("tab2");
                        setTabTwoCompleted(true);
                      }}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="text-sm rounded-3xl text-white-default bg-blue-500 relative px-8 py-1 flex justify-center items-center w-[100px]"
                      onClick={() => OpenListView()}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <label>Name</label>
          <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" />
          <label>Url</label>
          <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" />
        </div>
        <div className="bg-gray-200 px-4 py-3 text-right">
          <button
            type="button"
            className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
            // onClick={toggleModal}
          >
            <i className="fas fa-times"></i> Cancel
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
          >
            <i className="fas fa-plus"></i> Create
          </button>
        </div>
      </Modal>
    </div>
  );
}
