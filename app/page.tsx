"use client"
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const [plan,setPlan] = useState("Annually")
  return (
    <div className=" w-screen md:space-y-10   h-screen flex flex-col items-center justify-center">
      <div className=" flex md:pt-0 pt-[1000px] flex-col space-y-10 justify-center items-center">
        <div className="  text-custom-300 text-3xl font-bold">
          Our Pricing
        </div>
        <div className=" flex flex-row space-x-5">
          <div className=" text-custom-200 font-bold">
            Annually
          </div>
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" onClick={()=>{ plan === "Annually" ? setPlan("Monthly") : setPlan("Annually"),console.log(plan) }}  className="sr-only peer"/>
              <div className="w-11 h-6 hover:to-custom-linear-start bg-custom-linear-start bg-gradient-to-r from-custom-linear-start to-custom-linear-end peer-focus:outline-  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
            </label>
          </div>
          <div className=" text-custom-200 font-bold">
            Monthly
          </div>
        </div>
      </div>

      <div className=" md:px-6 lg:px-20  md:space-y-0 space-y-7 md:pt-0 pt-10 md:pb-0 pb-10  xl:px-40 w-full flex flex-col md:flex-row items-center"> 
        <div className=" space-y-5 w-11/12 md:w-1/3 shadow-xl h-min bg-white  items-center p-10 rounded-lg flex flex-col">
          <div className=" text-custom-300 text-xl font-bold">
            Basic
          </div>
          <div className=" text-custom-400 text-7xl md:text-5xl lg:text-7xl flex  items-center font-bold">
            <span className=" mr-3 text-custom-400 text-5xl  md:text-3xl lg:text-5xl font-bold">$</span> {plan === "Annually"  ? 199.99 : 19.99}
          </div>
          <div className=" py-5 space-y-3 w-full">
            <hr className=" h-[1px] bg-gray-300 border border-gray-300" />
            <div className=" text-center text-custom-300 font-bold">
              500 GB Storage
            </div>
            <hr className=" h-[1px] bg-gray-300 border border-gray-300" />
            <div className=" text-center text-custom-300 font-bold">
              2 Users Allowed
            </div>
            <hr className=" h-[1px] bg-gray-300 border border-gray-300" />
            <div className=" text-center text-custom-300 font-bold">
              Send up to 3 GB
            </div>
            <hr className=" h-[1px] bg-gray-300 border border-gray-300" />
          </div>
          <button className=" bg-gradient-to-r from-custom-linear-start to-custom-linear-end w-full p-3  text-white font-bold rounded-lg tracking-wide border-transparent border hover:border-custom-linear-end hover:from-white hover:to-white hover:text-custom-linear-end">
            LEARN MORE
          </button>
        </div>
        <div className=" space-y-5 w-11/12 md:w-1/3 shadow-xl bg-gradient-to-b px-10 py-20 from-custom-linear-start to-custom-linear-end  items-center p-10 rounded-lg flex flex-col">
          <div className=" text-white text-xl font-bold">
            Professional
          </div>
          <div className=" text-white text-7xl md:text-5xl lg:text-7xl flex  items-center font-bold">
            <span className=" mr-3 text-white text-5xl  md:text-3xl lg:text-5xl font-bold">$</span> {plan === "Annually"  ? 249.99 : 24.99}
          </div>
          <div className=" py-5 space-y-3 w-full">
            <hr className=" h-[1px] bg-gray-200 border border-gray-300" />
            <div className=" text-center text-white font-bold">
              1 TB Storage
            </div>
            <hr className=" h-[1px] bg-gray-200 border border-gray-300" />
            <div className=" text-center text-white font-bold">
              5 Users Allowed
            </div>
            <hr className=" h-[1px] bg-gray-200 border border-gray-300" />
            <div className=" text-center text-white font-bold">
              Send up to 10 GB
            </div>
            <hr className=" h-[1px] bg-gray-200 border border-gray-300" />
          </div>
          <button className=" bg-white w-full p-3 text-custom-linear-end font-bold rounded-lg tracking-wide border-white border  hover:from-white hover:bg-transparent hover:text-white">
            LEARN MORE
          </button>
        </div>
        <div className=" space-y-5 w-11/12 md:w-1/3 shadow-xl h-min bg-white  items-center p-10 rounded-lg flex flex-col">
          <div className=" text-custom-300 text-xl font-bold">
            Master
          </div>
          <div className=" text-custom-400  text-7xl md:text-5xl lg:text-7xl flex  items-center font-bold">
            <span className=" mr-3 text-custom-400  text-5xl md:text-3xl lg:text-5xl font-bold">$</span> {plan === "Annually"  ? 399.99 : 39.99}
          </div>
          <div className=" py-5 space-y-3 w-full">
            <hr className=" h-[1px] bg-gray-300 border border-gray-300" />
            <div className=" text-center text-custom-300 font-bold">
              2 TB Storage
            </div>
            <hr className=" h-[1px] bg-gray-300 border border-gray-300" />
            <div className=" text-center text-custom-300 font-bold">
              10 Users Allowed
            </div>
            <hr className=" h-[1px] bg-gray-300 border border-gray-300" />
            <div className=" text-center text-custom-300 font-bold">
              Send up to 20 GB
            </div>
            <hr className=" h-[1px] bg-gray-300 border border-gray-300" />
          </div>
          <button className=" bg-gradient-to-r from-custom-linear-start to-custom-linear-end w-full p-3  text-white font-bold rounded-lg tracking-wide border-transparent border hover:border-custom-linear-end hover:from-white hover:to-white hover:text-custom-linear-end">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  )}
    