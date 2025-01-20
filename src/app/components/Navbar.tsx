"use client";
import Image from "next/image";
import Link from "next/link";
import Navtop from "@/app/components/Navtop";
import { useState } from "react";
import Navlinks from "./Navlinks";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navtop />
      <section className="sticky z-50 bg-white top-0 ">
        <div className="  w-full h-[90px]  flex justify-around items-center border-[2px]">
          <div className="flex flex-1 ">
            <div className=" flex items-center justify-center z-40 md:w-auto w-full ">
              <div
                className="sm:hidden absolute  right-[50px] text-3xl top-[60px] "
                onClick={() => setOpen(!open)}
              >
                {open ? <IoCloseSharp /> : <IoMenu />}
              </div>
              <img
                src="/images/logo-final-transparent.png"
                alt=""
                className="lg:w-[450px] ] "
              />
            </div>
            <div className="w-full flex justify-center items-center pl-[50px] ">
              <nav>
                <ul className="hidden sm:flex justify-center space-x-[50px] text-[17px] font-[500] pl-10 capitalize ">
                  <Link href="/">
                    <li className="py-7 font-raleway  uppercase font-semibold  sm:text-black cursor-pointer">
                      Home
                    </li>
                  </Link>
                  <Navlinks />
                </ul>
                {/* mobile menu */}

                <div
                  className={` md:hidden absolute bg-white text-black  w-full sm:h-[150vh] top-0 right-0 z-10 py-24 pl-4 pt-[200px] duration-500 ${open ? "left-0" : "left-[-100%]"}`}
                >
                  <h1 className="py-7 px-3 inline-block font-raleway">
                    <Link
                      href="/"
                      className="uppercase font-semibold text-black px-3 sm:text-black  "
                    >
                      Home
                    </Link>
                  </h1>
                  <Navlinks />
                  <button className="w-[180px] font-raleway uppercase bg-primary rounded-md py-2 text-[18px] tracking-[1px] text-black mt-10">
                    contact
                  </button>
                </div>
              </nav>
            </div>
          </div>

          <div className=" hidden md:flex w-[400px]  justify-center items-center">
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-white hover:text-black hover:border-black hover:border-[1px] duration-300  w-[150px] bg-black py-4 rounded-full text-white font-serif  text-[17px]">
              contact
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
