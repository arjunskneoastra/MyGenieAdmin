"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const login = JSON.parse(localStorage.getItem('myGenieAuth'))
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
