"use client";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";
import { MdDescription } from "react-icons/md";
import Cards from "./cards";
import Features from "./features";
import HowCards from "./howCard";

const loanCalculaterEngine = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <header className="bg-[#ffffff]    ">
        <div className="lg:max-w-5xl lg:mx-auto text-center px-4 h-[70vh] flex flex-col items-center justify-center">
          <h1 className="lg:text-[52px] text-[32px]  mb-4 font-[raleway] font-[700]">
            Revolutionize Your Reporting with Our Report Designer
          </h1>
          <p className="lg:text-[17px] mb-6 font-[raleway]">
            Create, Customize, and Collaborate Empower your business with our
            intuitive Report Designer. Designed to meet the needs of modern
            enterprises, it offers a seamless way to generate insightful,
            visually appealing reports. Whether you need operational insights,
            performance summaries, or custom analytics, our Report Designer is
            the ultimate tool to transform raw data into actionable
            intelligence.
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

      {/* What Makes It Exceptional Section */}
      <Cards />
      {/* What Makes It Exceptional Section */}
      <Features />
      {/* Features Section */}
      <HowCards />
      {/* How It Works Section */}

      {/* Call to Action */}
      <section className="text-center bg-[#e8fffb]  rounded-t-[100px] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-raleway mb-4">Need More Assistance?</h2>
          <p className="text-lg mb-6 font-raleway">
            Our team is ready to assist with customization, integration, and
            support.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100">
            Enquire Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default loanCalculaterEngine;
