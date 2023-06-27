"use client";
import React, { useEffect, useState } from "react";
import JobsList from "./JobsList";
import CreateJob from "./CreateJob";
import JobDetail from "./JobDetail";

export default function JobsRoot() {
  const [listView, setListView] = useState(true);
  const [detailView, setDetailView] = useState(false);

  const OpenListView = () => {
    setListView(true);
    setDetailView(false)
  };

  const OpenDetailView = () => {
    setListView(false);
    setDetailView(true)
  };

  const OpenCreateView = () => {
    setListView(false);
    setDetailView(false)
  };

  return (
    <div>
      {listView && !detailView ? (
        <JobsList OpenCreateView={OpenCreateView} OpenDetailView={OpenDetailView} />
      ) : !listView && detailView ? (
        <JobDetail OpenListView={OpenListView} />
      ) : (
        <CreateJob OpenListView={OpenListView} />
      )}
    </div>
  );
}
