"use client";
import React, { useEffect, useState } from "react";
import './globals.css'
import { Poppins } from 'next/font/google'
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ['latin'],weight:['200','400','600','900'] })

export const metadata = {
  title: 'MyGenie',
  description: 'MyGenie admin panel',
}

export default function RootLayout({ children }) {
  const router = useRouter();
  // const login = JSON.parse(localStorage.getItem('myGenieAuth'))
  useEffect(()=>{
    // if(login){
    //   console.log("login there",login);
    //   // router.push('/admin/dashboard')
    // }
    // else{
    //   console.log("not there",login);
    //   router.push('/login')
    // }
  },[])

  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
