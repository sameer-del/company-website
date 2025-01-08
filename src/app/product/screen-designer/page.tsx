"use client";
import Link from "next/link";
import React from "react";
import Cards from "./cards";
import Features from "./features";

import Navbar from "@/app/components/Navbar";

const ruleEngine = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-[52px] font-bold mb-4 font-[secondary]">
            Advanced Screen Builder
          </h1>
          <p className="text-[19px] mb-6 font-[secondary]">
            Our screen builder offers a high-performance, user-friendly platform
            to create customized forms with minimal effort.
          </p>
        </div>
      </header>

      {/* What Makes It Exceptional Section */}
      <section className="py-12 lg:px-6 px-0 lg:max-w-[85%] lg:mx-auto ">
        <div className="grid lg:grid-cols-2 place-items-center">
          <div className=" flex flex-col justify-center items-center gap-2  ">
            <h1 className=" lg:text-[30px] text-[25px] mb-2 uppercase font-serif text-center ">
              Build Custom Forms with Ease Using Our Advanced Screen Builder
            </h1>
            <p className="text-[18px] font-[secondary] lg:max-w-[75%] text-center px-5">
              Our screen builder offers a high-performance, user-friendly
              platform to create customized forms with minimal effort. Powered
              by the latest technologies, it provides an intuitive interface and
              smart features designed to streamline your design process.
            </p>
            <Link href="#more">
              <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black hover:border-black hover:border-[1px] duration-300 mt-5 w-[150px] bg-black py-4 rounded-full text-white font-serif ">
                view more
              </button>
            </Link>
          </div>
          <div className="">
            <img src="/images/loan-pic.png" alt="" className="w-[550px]" />
          </div>
        </div>
      </section>
      {/* cards section */}
      <Cards />
      {/* cards section */}
      {/* faetures section */}
      <Features />
      {/* faetures section */}

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Get Started with Our Screen Builder Today
          </h2>
          <p className="text-lg mb-6">
            Build beautiful, responsive, and high-performance screens in
            minutes. Try it now and experience the future of form building.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100">
            Request a Demo
          </button>
          <button className=" ml-5 bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100">
            Contact Us for Integration
          </button>
        </div>
      </section>
    </div>
  );
};

export default ruleEngine;
