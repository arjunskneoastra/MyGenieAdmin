"use client";
import React, { useEffect, useState } from "react";
import './globals.css'
import { Poppins } from 'next/font/google'
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ['latin'],weight:['200','400','600','900'] })



export default function RootLayout({ children }) {
  const router = useRouter();

  var login;
  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // 👉️ can use localStorage here
    login = JSON.parse(localStorage.getItem('myGenieAuth'))
  
  } else {
    console.log('You are on the server')
    // 👉️ can't use localStorage
  }
  useEffect(()=>{
    if(login){
      console.log("login there",login);
      // router.push('/admin/dashboard')
    }
    else{
      console.log("not there",login);
      router.push('/login')
    }
  },[])

  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
