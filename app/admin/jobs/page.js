import React from 'react'
import JobsRoot from './JobsRoot';
export const metadata = {
  title: "MyGenie | Jobs",
  description: "Jobs",
};

export default function Jobs() {
  return (
    <div className="container mx-auto py-9">
      <JobsRoot />
    </div>
  )
}
