"use client";
import Link from "next/link";
import React from "react";
import Cards from "./cards";
import Features from "./features";

import Navbar from "@/app/components/Navbar";
import HowCards from "./howCard";
import Howitworks from "./howItWorks";

const screenDesigner = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <header className="bg-[#ffffff]    ">
        <div className="lg:max-w-5xl lg:mx-auto text-center px-4 h-[70vh] flex flex-col items-center justify-center">
          <h1 className="lg:text-[52px] text-[32px]  mb-4 font-[raleway] font-[700]">
            Optimize Task Management with Our Job Designer and Scheduler
          </h1>
          <p className="lg:text-[17px] mb-6 font-[raleway]">
            Design, Automate, and Control Your Workflow Our Job Designer and
            Scheduler software empowers users to configure, automate, and manage
            tasks effortlessly. With an intuitive interface and robust
            scheduling capabilities, it simplifies the orchestration of critical
            operations, ensuring precision and efficiency in task execution.
          </p>
          <Link href="#more">
            <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black hover:border-black hover:border-[1px] duration-300 mt-5 w-[150px] bg-black py-4 rounded-full text-white font-serif ">
              view more
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center bg-blue-300/5">
          <img
            src="/images/product-assests/Bank-Hero.png"
            alt=""
            className=""
          />
        </div>
      </header>
      {/* Hero Section */}

      {/* cards section */}
      <Cards />
      {/* cards section */}
      {/* faetures section */}
      <Features />
      {/* faetures section */}
      <HowCards />
      <Howitworks />

      {/* Call to Action */}

      <section className="text-center bg-[#e8fffb]  rounded-t-[100px] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-raleway mb-4 capitalize">
            get started today!
          </h2>
          <p className="text-lg mb-6 font-raleway">
            Effortlessly design and schedule tasks to optimize your workflows.
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

export default screenDesigner;
