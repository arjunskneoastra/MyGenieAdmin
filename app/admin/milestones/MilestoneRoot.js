"use client";
import React, { useState } from 'react'
import MilestoneList from './MilestoneList';
import MilestoneDetail from './MilestoneDetail';
import CreateMilestone from './CreateMilestone';

export default function MilestoneRoot() {
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
        <MilestoneList OpenCreateView={OpenCreateView} OpenDetailView={OpenDetailView} />
      ) : !listView && detailView ? (
        <MilestoneDetail OpenListView={OpenListView} />
      ) : (
        <CreateMilestone OpenListView={OpenListView} />
      )}
    </div>
  )
}
