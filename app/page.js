"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  var login 
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
      router.push('/admin/dashboard')
    }
    else{
      console.log("not there",login);
      router.push('/login')
    }
  },[])
  return (
    <div className=' h-screen bg-primaryWhite bg-white text-black m-4'>Loading...</div>
  )
}
