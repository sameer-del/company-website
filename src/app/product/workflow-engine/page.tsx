"use client";
import Link from "next/link";
import React from "react";
import Cards from "./cards";
import Features from "./features";

import Navbar from "@/app/components/Navbar";
import HowCards from "./howCard";
import Howitworks from "./howItWorks";
import Benefits from "./benefit";
import { BlurIn } from "@/app/components/hero-components/textanimation";

const screenDesigner = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <header className="bg-[#ffffff]    ">
        <div className="lg:max-w-5xl lg:mx-auto text-center px-4 h-[70vh] flex flex-col items-center justify-center">
          <BlurIn className="lg:text-[52px] text-[32px]  mb-4 font-[raleway] font-[700]">
            Streamline Processes with Our Advanced Workflow Engine
          </BlurIn>
          <p className="lg:text-[17px] mb-6 font-[raleway]">
            Optimize, automate, and monitor your business processes with our
            Workflow Engine. Designed to increase operational efficiency and
            reduce manual intervention, our Workflow Engine enables businesses
            to define, execute, and track workflows across departments while
            ensuring scalability and adaptability.
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
      <Benefits />
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
