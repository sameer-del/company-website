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
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-[52px] font-bold mb-4 font-[secondary]">
            AI-Powered Business Rule Engine
          </h1>
          <p className="text-[19px] mb-6 font-[secondary]">
            Our Business Rule Engine (BRE) is designed to empower businesses by
            automating decision-making processes, reducing manual interventions,
            and ensuring consistency across operations.
          </p>
        </div>
      </header>

      {/* What Makes It Exceptional Section */}
      <section className="py-12 lg:px-6 px-0 lg:max-w-[85%] lg:mx-auto ">
        <div className="grid lg:grid-cols-2 place-items-center">
          <div className=" flex flex-col justify-center items-center gap-2  ">
            <h1 className=" lg:text-[30px] text-[25px] mb-2 uppercase font-serif text-center ">
              Streamline Decision <br /> Making with Our AI-Powered <br />{" "}
              Business Rule Engine
            </h1>
            <p className="text-[18px] font-[secondary] lg:max-w-[75%] text-center px-5">
              Our Business Rule Engine (BRE) is designed to empower businesses
              by automating decision-making processes, reducing manual
              interventions, and ensuring consistency across operations.
              Enhanced with AI agents, our BRE takes your decision-making to the
              next level by providing intelligent insights, optimization
              suggestions, and real-time adaptability, all while ensuring high
              performance and seamless integration.
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

      {/* How It Works Section */}

      <HowCards />
      {/* How It Works Section */}

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Get Started with Our AI-Powered Business Rule Engine Today
          </h2>
          <p className="text-lg mb-6">
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
