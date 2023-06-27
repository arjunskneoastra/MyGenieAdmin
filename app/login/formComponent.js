"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function FormComponent() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  var logindata
  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // 👉️ can use localStorage here
    logindata = JSON.parse(localStorage.getItem("myGenieAuth"));
  
  } else {
    console.log('You are on the server')
    // 👉️ can't use localStorage
  }
  useEffect(() => {
    if (logindata) {
      router.push("/admin/dashboard");
    }
  }, []);

  const findFormErrors = (loginData) => {
    const { email, password } = loginData;
    const newErrors = {};
    if (!email || email === "") newErrors.email = "Email is required";
    if (!password || password === "")
      newErrors.password = "Password is required";
    // console.log({ newErrors });
    return newErrors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors({});
    const newErrors = findFormErrors(loginData);
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      axios
        .post("http://65.1.234.182/v1/auth/login/", loginData)
        .then((r) => {
          // console.log(r);
          localStorage.setItem("myGenieAuth", JSON.stringify(r.data.data));
          router.push("/admin/dashboard");
        })
        .catch((err) => {
          if (err.message == "Request failed with status code 401") {
            setErrors({ email: "Unauthorized User" });
          }
        });
    }
  };
  return (
    <form className=" w-2/5 h-1/2 mobile:w-full" onSubmit={submitHandler}>
      <div className="flex items-center justify-center font-semibold text-lg mb-6">
        <img src="/images/logo.png" alt="" className=" w-9 mr-2" /> MyGenie
      </div>
      <div className="rounded-2xl bg-white-default p-10">
        <h3 className=" font-semibold text-lg text-center">Login</h3>
        <div className=" mt-4 mobile:px-8">
          <label
            htmlFor="email"
            className=" text-xs font-semibold text-gray-dark"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            value={loginData.email}
            onChange={(e) => {
              setLoginData({
                email: e.target.value,
                password: loginData.password,
              });
            }}
            className=" border rounded-xl text-sm  focus:outline-primary px-2 py-1 w-full h-10"
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email}</p>
          )}
        </div>
        <div className=" mt-4 mobile:px-8">
          <label
            htmlFor="email"
            className=" text-xs font-semibold text-gray-dark"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            value={loginData.password}
            onChange={(e) => {
              setLoginData({
                email: loginData.email,
                password: e.target.value,
              });
            }}
            className=" border rounded-xl text-sm  focus:outline-primary px-2 py-1 w-full h-10"
          />
          {errors.password && (
            <p className="text-xs text-red-400">{errors.password}</p>
          )}
        </div>
        <div className=" mt-7 mobile:px-8">
          <button
            type="submit"
            className=" rounded-3xl text-white-default bg-blue-500 w-full h-10 relative p-2 flex justify-center items-center"
          >
            Login
            <div className=" h-9 w-9 rounded-full absolute bg-white-default right-1 flex justify-center items-center">
              <img
                src="/images/icons/arrow-right.png"
                className=" h-1/2"
                alt=""
              />
            </div>
          </button>
        </div>
      </div>
    </form>
  );
}
