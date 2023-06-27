
import React from 'react'
import FormComponent from './formComponent';

export default function Login() {
    
  return (
    <section className=' flex h-screen bg-white-500 text-black'>
        <div className=" w-1/2 h-full bg-[url('/images/login_bg.png')] bg-cover bg-center flex justify-center items-center visible mobile:hidden">
            {/* <img src="/images/logo.png" alt="logo" className=' w-64' /> */}
        </div>
        <div className=' w-1/2 flex justify-center items-center mobile:w-full'>
            <FormComponent />
        </div>
    </section>
  )
}
