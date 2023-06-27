"use client";
import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import { useSearchParams } from "next/navigation";

export default function JobCategories({}) {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    if(tab=="jobCategories"){
        handleShowList();
    }
  }, [tab]);

  useEffect(() => {
    setShowAdd(false);
    setShowEdit(false);
  }, []);

  const handleShowAdd = () => {
    setShowAdd(true);
    setShowEdit(false);
  };

  const handleShowEdit = () => {
    setShowAdd(false);
    setShowEdit(true);
  };

  const handleShowList = () => {
    setShowAdd(false);
    setShowEdit(false);
  };

  return (
    <div>
      {showAdd && !showEdit ? (
        <AddCategory handleShowList={handleShowList} />
      ) : !showAdd && !showEdit ? (
        <CategoryList
          handleShowAdd={handleShowAdd}
          handleShowEdit={handleShowEdit}
        />
      ) : !showAdd && showEdit ? (
        <EditCategory handleShowList={handleShowList} />
      ) : (
        ""
      )}
    </div>
  );
}
