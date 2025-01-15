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
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-[52px] font-bold mb-4 font-[secondary]">
            Aadhaar Data Vault
          </h1>
          <p className="text-[19px] mb-6 font-[secondary]">
            The Unique Identification Authority of India (UIDAI) mandates the
            use of tokenization to replace sensitive data with secure tokens
            that can be safely stored, processed, and transmitted.
          </p>
        </div>
      </header>

      {/* What Makes It Exceptional Section */}
      <section className="py-12 lg:px-6 px-0 lg:max-w-[85%] lg:mx-auto ">
        <div className="grid lg:grid-cols-2 place-items-center">
          <div className=" flex flex-col justify-center items-center gap-2  ">
            <h1 className=" lg:text-[30px] text-[25px] mb-2 uppercase font-serif text-center ">
              Secure Your Data with Our Aadhaar Data Vault Solution
            </h1>
            <p className="text-[18px] font-[secondary] lg:max-w-[85%] text-center px-2">
              A Complete Software Package for Aadhaar Data Vault Implementation
              Our Aadhaar Data Vault is a comprehensive software package
              designed to meet all requirements for securely storing Aadhaar
              numbers and associated eKYC data. Fully compliant with UIDAI
              guidelines, it empowers organizations to safeguard sensitive data
              through encryption, tokenization, and seamless integration with
              existing systems.
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
        <div className="bg-black p-3 rounded-[15px] mt-5">
          <h1 className="lg:text-[30px] text-black p-2 text-[25px] mb-2 uppercase font-serif text-center bg-white rounded-[15px]">
            overview
          </h1>
          <p className="text-[18px] font-[secondary]  text-center p-4 text-white">
            The Unique Identification Authority of India (UIDAI) mandates the
            use of tokenization to replace sensitive data with secure tokens
            that can be safely stored, processed, and transmitted.
          </p>
          <p className="text-[18px] font-[secondary]  text-center p-4 text-white">
            Our Aadhaar Data Vault solution assists AUAs, KUAs, Sub-AUAs, and
            other agencies in implementing an encrypted vault to securely store
            Aadhaar numbers and eKYC data for specific purposes under the
            Aadhaar Act. With REST API support, the solution facilitates
            seamless storage and retrieval of Aadhaar numbers and associated
            data, ensuring compliance with regulations while maintaining
            operational efficiency.
          </p>
        </div>
      </section>
      {/* cards section */}
      <Cards />
      {/* cards section */}
      {/* faetures section */}
      <Features />
      {/* faetures section */}
      <HowCards />
      <Howitworks />

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
          Get Started with Secure Aadhaar Management
          </h2>
          <p className="text-lg mb-6">
          Streamline compliance and protect sensitive data with our Aadhaar Data Vault solution.
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
