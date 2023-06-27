"use client";
import React, { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, children, modalTitle }) {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  useEffect(()=>{
    setModalOpen(isOpen)
  },[isOpen])
  // console.log({isOpen,modalOpen});
  // const toggleModal = () => {
  //   document.getElementById("modal").classList.toggle("hidden");
  // };
  return (
    <>
    {modalOpen && (
      <div className="fixed z-10 top-0 bottom-0 right-0 w-full left-0 " id="modal">
        <div className="flex items-center justify-center h-full min-height-100vh px-4 text-center sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <div
            className="bg-white-default rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
            <div className="flex justify-between px-8 pt-5 mb-5">
              <h3 className="text-black text-2xl font-semibold">
                {modalTitle}
              </h3>
              <div onClick={closeModal}>
                <img src="/images/icons/xmark-solid.svg" className="w-5 cursor-pointer"></img>
              </div>
            </div>
            <div className="overflow-y-scroll hidescrollbar max-h-[calc(100vh-8rem)]">
              {children}{" "}
            </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
