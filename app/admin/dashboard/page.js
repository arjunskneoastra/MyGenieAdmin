import React from "react";
import CardLeftTop from "./CardLeftTop";
import CardRightTop from "./CardRightTop";
import CardLeftBottom from "./CardLeftBottom";
import CardRightBottom from "./CardRightBottom";
export const metadata = {
  title: "MyGenie | Dashboard",
  description: "Dashboard",
};
export default function Dashboard() {
  return (
    <div className="container mx-auto py-9">
      <div className="grid grid-cols-2 gap-3">
        <div className="">
          <CardLeftTop />
        </div>
        <div className="">
          <CardRightTop />
        </div>
        <div className="">
          <CardLeftBottom />
        </div>
        <div className="">
          <CardRightBottom />
        </div>
      </div>
    </div>
  );
}
