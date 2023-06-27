"use client";
import React, { useState } from "react";
import ActionButton from "@/app/Components/ActionButton";

export default function UserProfile() {
  const emailAddress = JSON.parse(localStorage.getItem("myGenieAuth")).userData
    .email;
  const [profileData, setProfileData] = useState({
    profileImage: null,
    fullName: "",
    email: JSON.parse(localStorage.getItem("myGenieAuth")).userData.email,
  });
  const [errors, setErrors] = useState({});

  const findFormErrors = (loginData) => {
    const { profileImage, fullName, email } = loginData;
    const newErrors = {};
    if (!profileImage || profileImage === "")
      newErrors.profileImage = "Image is required";
    if (!fullName || fullName === "")
      newErrors.fullName = "Full Name is required";
    return newErrors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors({});
    console.log(profileData);
    const newErrors = findFormErrors(profileData);
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      //   axios
      //     .post("http://65.1.234.182/v1/auth/login/", loginData)
      //     .then((r) => {
      //       // console.log(r);
      //       localStorage.setItem("myGenieAuth", JSON.stringify(r.data.data));
      //       router.push("/admin/dashboard");
      //     })
      //     .catch((err) => {
      //       if (err.message == "Request failed with status code 401") {
      //         setErrors({ email: "Unauthorized User" });
      //       }
      //     });
    }
  };
  return (
    <div className="h-[calc(100vh-13rem)] rounded-2xl border border-gray-500 bg-white-default">
      <div className="flex items-center justify-between border-b px-8 py-6">
        <p className="text-gray-dark text-lg">Profile</p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col justify-start items-start px-8 py-7 h-[calc(100vh-13rem-154px)]">
          <div className="flex flex-col">
            <label for="" className="text-gray-dark text-sm">
              Profile Picture
            </label>
            <div className="flex justify-start items-center gap-3">
              <div className="h-[80px] w-[80px]">
                <img
                  className="h-full w-full object-cover rounded-full mt-2"
                  src={
                    profileData.profileImage
                      ? URL.createObjectURL(profileData.profileImage)
                      : "/images/avatar.jpg"
                  }
                ></img>
              </div>
              <label for="profileImage" className="text-gray-dark text-sm">
                <ActionButton />
              </label>
            </div>
            <input
              hidden
              type="file"
              id="profileImage"
              name="profileImage"
              onChange={(e) => {
                setProfileData({
                  profileImage: e.target.files[0],
                  fullName: profileData.fullName,
                });
              }}
            />
            {errors.profileImage && (
              <p className="text-xs text-red-400 mt-3">{errors.profileImage}</p>
            )}
          </div>
          <div className="flex justify-start items-center mt-8 gap-8">
            <div className="flex flex-col items-start gap-3">
              <label className="text-gray-dark text-sm" for="fullName">
                Full Name
              </label>
              <input
                value={profileData.fullName}
                type="text"
                id="fullName"
                name="fullName"
                className=" border rounded-xl text-xs  focus:outline-primary px-2 py-1 w-full h-10"
                onChange={(e) => {
                  setProfileData({
                    fullName: e.target.value,
                    profileImage: profileData.profileImage,
                  });
                }}
              />
              {errors.fullName && (
                <p className="text-xs text-red-400">{errors.fullName}</p>
              )}
            </div>
            <div className="flex flex-col items-start gap-3">
              <label className="text-gray-dark text-sm" for="emailAddress">
                Email Address
              </label>
              <input
                value={profileData.email}
                disabled
                type="text"
                id="emailAddress"
                name="emailAddress"
                className=" border rounded-xl text-xs  focus:outline-primary px-2 py-1 w-full h-10 bg-gray-500"
              />
              {errors.fullName && (
                <p className="text-xs text-red-400 opacity-0">
                  {errors.fullName}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end border-t px-8 py-6">
          <button
            className="text-sm rounded-3xl text-white-default bg-blue-500 relative px-8 py-1 flex justify-center items-center"
            onClick={() => console.log("add new")}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

{
  /* <label for="last">Last name:</label>
          <input type="text" id="last" name="last" />
          <button type="submit">Submit</button> */
}
