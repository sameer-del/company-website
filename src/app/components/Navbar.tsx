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
      <section>
        <div className=" w-full h-[80px]  flex justify-around items-center border-[2px]">
          <div className="flex flex-1 ">
            <div className=" flex items-center justify-center z-40 md:w-auto w-full ">
              <div
                className="sm:hidden absolute  right-[50px] text-3xl top-[60px] "
                onClick={() => setOpen(!open)}
              >
                {open ? <IoCloseSharp /> : <IoMenu />}
              </div>
              <Image
                src="/images/logo-final-transparent.png"
                alt="Example Image"
                width={400}
                height={200}
              />
            </div>
            <div className="w-full flex justify-start items-center px-[50px] ">
              <nav>
                <ul className="hidden sm:flex justify-center space-x-[50px] text-[17px] font-[500] pl-10 capitalize ">
                  <Navlinks />
                </ul>
                {/* mobile menu */}

                <ul
                  className={` md:hidden absolute  w-full h-[110vh] top-0 right-0 z-10 py-24 pl-4 pt-[200px] duration-500 ${open ? "left-0" : "left-[-100%]"}`}
                >
                  <li className="py-7 px-3 inline-block">
                    <Link
                      href="/"
                      className="uppercase font-semibold text-secondary_text px-3 sm:text-black"
                    >
                      Home
                    </Link>
                  </li>
                  <Navlinks />
                  <button className="w-[180px] bg-primary rounded-md py-2 text-[18px] tracking-[1px] text-black mt-10">
                    contact
                  </button>
                </ul>
              </nav>
            </div>
          </div>

          <div className=" hidden md:flex w-[400px]  justify-center items-center">
            <button className="w-[180px] bg-primary py-2 text-[18px] tracking-[1px] text-white rounded-[10px]">
              contact
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
