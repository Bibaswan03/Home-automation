"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { CgMenuGridO, CgClose } from "react-icons/cg";

function Navbar() {
  const [mobile, setmobile] = useState(false);
  return (
    <nav className="bg-[#070911] shadow-sm py-2 z-30">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div
            className="absolute inset-y-0 left-0 flex items-center sm:hidden"
            onClick={() => {
              setmobile(!mobile);
            }}
          >
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-transparent hover:text-white focus:outline-none  "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              {!mobile && <CgMenuGridO className="text-xl text-white" />}
              {mobile && <CgClose className="text-xl text-white" />}

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 relative items-center justify-center sm:items-stretch sm:justify-start">
            <Link href={"/"} className="flex flex-shrink-0 items-center">
              <h1 className="text-white  font-sans  cursor-pointer font-semibold text-3xl">
                <span className="text-yellow-700">Su</span><span className="text-3xl font-bold font-serif">i</span><span className="text-yellow-700">ch</span>
              </h1>
            </Link>
            <div className="absolute lg:block hidden right-[35%] ">
              <div className="flex items-center space-x-4">
                <Link
                  href={"/About"}
                  className="text-white hover:underline hover:underline-offset-4  rounded-md px-3 py-2 text-[1rem] font-medium"
                >
                  About Us
                </Link>
                <Link
                  href={"/Manual"}
                  className="text-white hover:underline hover:underline-offset-4  rounded-md px-3 py-2 text-[1rem] font-medium"
                >
                  Manual
                </Link>
                <Link
                  href={"/FeedBack"}
                  className="text-white hover:underline hover:underline-offset-4  rounded-md px-3 py-2 text-[1rem] font-medium"
                >
                  Feedback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {mobile && (
        <div className="sm:hidden transition-all duration-500" id="mobile-menu" onMouseLeave={()=>setmobile(false)}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href={"/About"}
              className="text-white hover:bg-[#D6F8E7] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href={"/ContactUs"}
              className="text-white hover:bg-[#D6F8E7] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              ContactUs
            </Link>
            <Link
              href={"/FeedBack"}
              className="text-white hover:bg-[#D6F8E7] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Feedback
            </Link>
          </div>
        </div>
      )}

      
    </nav>
  );
}

export default Navbar;
