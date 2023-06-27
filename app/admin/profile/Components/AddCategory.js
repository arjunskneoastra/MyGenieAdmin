"use client";
import React, { useEffect, useState } from "react";

export default function AddCategory({ handleShowList }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    materials: [],
    pricing: [],
    issues: [],
  });
  const [material, setMaterial] = useState("");
  const [issue, setIssue] = useState("");
  const [price, setPrice] = useState({
    country: "",
    price: "",
  });
  const [errors, setErrors] = useState({});

  const handleForm = (name, value) => {
    console.log({ value });
    if (name == "materials") {
      console.log("coming inside");
      setForm({
        ...form,
        materials: [...form.materials, value],
      });
    } else if (name == "pricing") {
      console.log("coming inside pricing");
      var a = [...form.pricing];
      console.log({ a });
      a.push(value);
      setForm({
        ...form,
        pricing: [...form.pricing, value],
      });
    } else if (name == "issues") {
      console.log("coming inside issues");
      setForm({
        ...form,
        issues: [...form.issues, value],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
    if (!!errors[name])
      setErrors({
        ...errors,
        [name]: null,
      });
  };

  useEffect(() => {
    console.log({ form });
  }, [form]);

  const removeFormItem = (name, i) => {
    if (name == "materials") {
      const a = [...form.materials];
      a.splice(i, 1);
      setForm({
        ...form,
        materials: a,
      });
    }
    if (name == "pricing") {
      const a = [...form.pricing];
      a.splice(i, 1);
      setForm({
        ...form,
        pricing: a,
      });
    }
    if (name == "issues") {
      const a = [...form.issues];
      a.splice(i, 1);
      setForm({
        ...form,
        issues: a,
      });
    }
  };

  //   const findErrors = (formObject) => {
  //     const {
  //       eventName,
  //       eventBanner,
  //       eventDate,
  //       eventStartTime,
  //       eventEndTime,
  //       eventDescription,
  //       eventLink,
  //     } = formObject
  //     const newErrors = {}
  //     if (!eventName || eventName === '') newErrors.eventName = 'Event Name is required'
  //     if (!eventBanner || eventBanner === '') newErrors.eventBanner = 'Event Banner is required'
  //     if (!eventDate || eventDate === '') newErrors.eventDate = 'Event Date is required'
  //     if (!eventStartTime || eventStartTime === '')
  //       newErrors.eventStartTime = 'Event Start Time is required'
  //     if (!eventEndTime || eventEndTime === '') newErrors.eventEndTime = 'Event End Time is required'
  //     if (!eventDescription || eventDescription === '')
  //       newErrors.eventDescription = 'Event Description is required'
  //     if (!eventLink || eventLink === '') newErrors.eventLink = 'Event Link is required'
  //     return newErrors
  //   }

  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     const {
  //       eventName,
  //       eventBanner,
  //       eventDate,
  //       eventStartTime,
  //       eventEndTime,
  //       eventDescription,
  //       eventLink,
  //     } = eventForm
  //     console.log({ eventForm, eventBanner })
  //     const newErrors = findErrors(eventForm)
  //     // Conditional logic:

  //     if (Object.keys(newErrors).length > 0) {
  //       // We got errors!
  //       setEventErrors(newErrors)
  //       return
  //     } else {
  //       const formData = new FormData()
  //       formData.append('name', eventName)
  //       formData.append('description', eventDescription)
  //       formData.append('banner', eventBanner)
  //       formData.append('date', eventDate)
  //       formData.append('start_time', eventStartTime)
  //       formData.append('end_time', eventEndTime)
  //       formData.append('event_link', eventLink)
  //       formData.append('is_active', true)
  //       API.post('manage-event/', formData, {
  //         headers: { 'Content-Type': 'multipart/form-data' },
  //       })
  //         .then((r) => {
  //           console.log(r)
  //           setEventCreatedID(r.data.id)
  //           setEventForm({
  //             eventName: '',
  //             eventDate: '',
  //             eventStartTime: '',
  //             eventEndTime: '',
  //             eventDescription: '',
  //             eventLink: '',
  //           })
  //           setActiveKey(2)
  //         })
  //         .catch((error) => {
  //           console.log(error)
  //         })
  //       // setActiveKey(2)
  //     }
  //   }

  return (
    <div className="relative h-[calc(100vh-13rem)] rounded-2xl border border-gray-500 bg-white-default">
      <div className="flex items-center justify-between border-b px-8 py-6">
        <div className="flex cursor-pointer" onClick={() => handleShowList()}>
          <img src="/images/icons/angle-left.svg" className="w-2 mr-2" />
          <p className="underline text-blue-500">Categories</p>
        </div>
      </div>
      <div className="px-8 overflow-y-scroll hidescrollbar h-[calc(100%-10rem)]">
        <form className=" mobile:w-full">
          {/* top form */}
          <div className="grid grid-cols-3 gap-3">
            <div className="row-span-1">
              <div className=" mt-4 ">
                <label className=" text-sm font-medium text-gray-dark">
                  Category Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    handleForm("name", e.target.value);
                  }}
                  className="mt-4 border rounded-xl text-sm  focus:outline-primary px-2 py-1 w-full h-10"
                />
                {errors.name && (
                  <p className="text-xs text-red-400">{errors.name}</p>
                )}
              </div>
            </div>
            <div className="row-span-4">
              <div className="mt-4 h-[calc(100%-4rem)] ">
                <label className=" text-sm text-gray-dark">
                  Materials To Bring
                </label>
                <div className="mt-4 h-full border rounded-xl p-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type here"
                      value={material}
                      onChange={(e) => {
                        setMaterial(e.target.value);
                      }}
                      className="border rounded-lg text-sm  focus:outline-primary pl-2 pr-9 py-1 w-full h-10"
                    />
                    <div
                      className="absolute right-1 top-3 h-4 w-4 rounded-full ml-2 mr-3 border-2 border-blue-500 bg-white-default flex justify-center items-center cursor-pointer"
                      onClick={() => {
                        if (material != "") {
                          handleForm("materials", material);
                          setMaterial("");
                        }
                      }}
                    >
                      <img
                        src="/images/icons/plus.svg"
                        className="w-2/3"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="my-1 h-[10rem] overflow-y-scroll hidescrollbar">
                    {form.materials.map((m, i) => (
                      <div
                        key={i}
                        className="my-1 py-2 px-3 h-10 bg-gray-500 rounded-lg flex items-center justify-between"
                      >
                        <p className=" hidescrollbar-full overflow-x-scroll">
                          {m}
                        </p>
                        <img
                          src="/images/icons/circle-minus.svg"
                          className=" ml-2 w-4 cursor-pointer"
                          alt=""
                          onClick={() => removeFormItem("materials", i)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-4">
              <div className="mt-4 h-[calc(100%-4rem)] ">
                <label className=" text-sm text-gray-dark">Pricing</label>
                <div className="mt-4 h-full border rounded-xl p-1">
                  <div className="flex">
                    <div className="relative w-1/2">
                      <select
                        value={price.country}
                        onChange={(e) =>
                          setPrice({
                            country: e.target.value,
                            price: price.price,
                          })
                        }
                        className="appearance-none border rounded-l-lg text-sm text-white-default bg-blue-500 focus:outline-primary pl-2 mr-2 h-10 w-full"
                      >
                        <option className="h-10 px-2 bg-white-default text-black">
                          Select
                        </option>
                        <option
                          value="select2"
                          className="h-10 px-2 bg-white-default text-black"
                        >
                          Select 2
                        </option>
                        <option
                          value="select3"
                          className="h-10 px-2 bg-white-default text-black"
                        >
                          Select 3
                        </option>
                      </select>
                      <img
                        src="/images/icons/caret-down.svg"
                        className="pointer-events-none absolute top-3 right-2 w-2.5"
                      />
                    </div>
                    <div className="relative w-1/2">
                      <input
                        type="text"
                        placeholder="Type here"
                        value={price.price}
                        onChange={(e) =>
                          setPrice({
                            country: price.country,
                            price: e.target.value,
                          })
                        }
                        className="border rounded-r-lg text-sm  focus:outline-primary pl-2 pr-9 py-1 w-full h-10"
                      />
                      <div
                        className="absolute right-1 top-3 h-4 w-4 rounded-full ml-2 mr-3 border-2 border-blue-500 bg-white-default flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          if (price.country!="" && price.price!="") {
                            handleForm("pricing", price);
                            setPrice({
                              country: "",
                              price: "",
                            });
                          }
                        }}
                      >
                        <img
                          src="/images/icons/plus.svg"
                          className="w-2/3"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-1 h-[10rem] overflow-y-scroll hidescrollbar">
                    {form.pricing.map((m, i) => (
                      <div
                        key={i}
                        className="my-1 py-2 px-3 h-10 bg-gray-500 rounded-lg flex items-center justify-between hidescrollbar-full overflow-x-scroll"
                      >
                        <p className="w-full overflow-x-scroll hidescrollbar-full">
                          {m.country}
                        </p>
                        <p className="w-full overflow-x-scroll hidescrollbar-full">
                          {m.price}
                        </p>
                        <img
                          src="/images/icons/circle-minus.svg"
                          className=" ml-2 w-4 cursor-pointer"
                          alt=""
                          onClick={() => removeFormItem("pricing", i)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-3">
              <div className=" mt-4 ">
                <label className=" text-sm text-gray-dark">
                  Category Description
                </label>
                <textarea
                  rows="5"
                  value={form.description}
                  onChange={(e) => {
                    handleForm("description", e.target.value);
                  }}
                  className="mt-4 border rounded-xl text-sm  focus:outline-primary px-2 py-1 w-full"
                />
                {errors.description && (
                  <p className="text-xs text-red-400">{errors.description}</p>
                )}
              </div>
            </div>
          </div>
          {/* bottom form */}
          <div className="mb-2">
            <div className="mt-4 h-[calc(100%-4rem)] ">
              <label className=" text-sm text-gray-dark">Issues</label>
              <div className="mt-4 h-full border rounded-xl p-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type here"
                    value={issue}
                    onChange={(e) => {
                      setIssue(e.target.value);
                    }}
                    className="border rounded-lg text-sm  focus:outline-primary pl-2 pr-9 py-1 w-full h-10"
                  />
                  <div
                    className="absolute right-1 top-3 h-4 w-4 rounded-full ml-2 mr-3 border-2 border-blue-500 bg-white-default flex justify-center items-center cursor-pointer"
                    onClick={() => {
                      if (issue) {
                        handleForm("issues", issue);
                        setIssue("");
                      }
                    }}
                  >
                    <img
                      src="/images/icons/plus.svg"
                      className="w-2/3"
                      alt=""
                    />
                  </div>
                </div>
                <div className="my-1 h-[10rem] overflow-y-scroll hidescrollbar">
                  {form.issues.map((m, i) => (
                    <div
                      key={i}
                      className="my-1 py-2 px-3 h-10 bg-gray-500 rounded-lg flex items-center justify-between hidescrollbar-full overflow-x-scroll"
                    >
                      <p>{m}</p>
                      <img
                        src="/images/icons/circle-minus.svg"
                        className=" ml-2 w-4 cursor-pointer"
                        alt=""
                        onClick={() => removeFormItem("issues", i)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* footer */}
      <div className="px-8 py-6 bottom-0 border-t w-full">
        <button className="bg-blue-500 rounded-2xl py-1.5 px-10 text-white-default text-sm float-right">
          Save
        </button>
      </div>
    </div>
  );
}
