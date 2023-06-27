"use client";
import { useSearchParams } from "next/navigation";
import ProfileTabs from "../../Components/ProfileTabs";
import Profile from "./page";
import { useState } from "react";

export default function ProfileLayout({children}) {
  return (
    <section className=" bg-white h-full text-black">
      {/* Include shared UI here e.g. a header or sidebar */}

      <div className="container mx-auto pt-9 pb-2">
        <div className="flex pb-4">
          <img src="/images/icons/angle-left.svg" className="w-2 " />
          <p className="text-black text-lg font-semibold pl-2">
            Back
          </p>
        </div>
        <div className=" grid grid-cols-10 gap-4">
          <div className="col-span-2">
            <ProfileTabs />
          </div>
          <div className="col-span-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
