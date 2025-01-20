"use client";
import Link from "next/link";
import React from "react";
import Cards from "./cards";
import Features from "./features";
import HowCards from "./howCard";
import Navbar from "@/app/components/Navbar";

const ruleEngine = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <header className="bg-[#ffffff]    ">
        <div className="lg:max-w-5xl lg:mx-auto text-center px-4 h-[70vh] flex flex-col items-center justify-center">
          <h1 className="lg:text-[52px] text-[32px]  mb-4 font-[raleway] font-[700]">
            Streamline Decision Making with Our AI-Powered Business Rule Engine
          </h1>
          <p className="lg:text-[17px] mb-6 font-[raleway]">
            Our Business Rule Engine (BRE) is designed to empower businesses by
            automating decision-making processes, reducing manual interventions,
            and ensuring consistency across operations. Enhanced with AI agents,
            our BRE takes your decision-making to the next level by providing
            intelligent insights, optimization suggestions, and real-time
            adaptability, all while ensuring high performance and seamless
            integration.
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

      {/* What Makes It Exceptional Section */}

      {/* cards section */}
      <Cards />
      {/* cards section */}
      {/* faetures section */}
      <Features />
      {/* faetures section */}

      {/* How It Works Section */}

      <HowCards />
      {/* How It Works Section */}

      {/* Call to Action */}
      <section className="text-center bg-[#e8fffb]  rounded-t-[100px] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-raleway mb-4">
            Get Started with Our AI-Powered Business Rule Engine Today
          </h2>
          <p className="text-lg mb-6 font-raleway">
            Unlock intelligent decision-making, automate complex rules, and
            ensure operational excellence with our AI-powered Business Rule
            Engine.
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
