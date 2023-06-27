"use client";
import { useSearchParams } from "next/navigation";
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import Countries from "./Components/Countries";
import JobCategories from "./Components/JobCategories";
import UserProfile from "./Components/UserProfile";
import Settings from "./Components/Settings";

export default function ProfileRoot({}) {
  const [activeTab, setActiveTab] = useState("profile");
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  return (
    <div className="h-[calc(100vh-13rem)]">
      {/* Tab content */}
      <div className={`${activeTab === "profile" ? "" : "hidden"}`}>
        <UserProfile />
      </div>
      <div className={`${activeTab === "countries" ? "" : "hidden"}`}>
        <Countries />
      </div>
      <div className={`${activeTab === "jobCategories" ? "" : "hidden"}`}>
        <JobCategories />
      </div>
      <div className={`${activeTab === "settings" ? "" : "hidden"}`}>
        <Settings />
      </div>
    </div>
  );
}
