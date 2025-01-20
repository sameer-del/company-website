import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Cards from "./cards";
import Features from "./features";
import HowCards from "./howCard";
import Benefits from "./benefit";

const LoanCalculatorEngine = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <header className="bg-[#ffffff]    ">
        <div className="lg:max-w-5xl lg:mx-auto text-center px-4 h-[70vh] flex flex-col items-center justify-center">
          <h1 className="lg:text-[52px] text-[32px]  mb-4 font-[raleway] font-[700]">
            Experience the Future of Loan Calculations with Our Loan Calculator
            Engine
          </h1>
          <p className="lg:text-[17px] mb-6 font-[raleway]">
            Transform your financial decisions with our advanced Loan Calculator
            Engine. Whether it's personal loans, mortgages, or business
            financing, our AI-driven, scalable, and SaaS-based solution delivers
            precise amortization schedules while seamlessly integrating with
            your systems for an unparalleled experience.
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
      <Cards />
      {/* What Makes It Exceptional Section */}
      <Features />
      <HowCards />
      <Benefits />

      <section className="text-center bg-[#e8fffb]  rounded-t-[100px] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-raleway mb-4">
            Ready to Revolutionize Loan Planning?
          </h2>
          <p className="text-lg mb-6 font-raleway">
            Our Loan Calculator Engine is trusted by industry leaders. Join them
            and simplify your financial processes today!
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100">
            Request a Demo
          </button>
          <button className=" ml-5 bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100">
            Contact Us for Integration
          </button>
        </div>
      </section>
      {/* Call to Action */}
    </div>
  );
};

export default LoanCalculatorEngine;
