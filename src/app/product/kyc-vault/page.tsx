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
      <header
        className="  py-16 justify-center  bg-no-repeat bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: "url(/images/product-assests/product-header.jpg)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-[52px] font-bold mb-4 font-[secondary]">
            Secure Your Customer Data with Our KYC Vault Solution
          </h1>
          <p className="text-[19px] mb-6 font-[secondary]">
            Our KYC Vault is a comprehensive software package designed to meet
            all requirements for securely storing and managing KYC data.
          </p>
        </div>
      </header>

      {/* What Makes It Exceptional Section */}
      <section
        className="py-12 lg:px-[150px] px-0  bg-no-repeat bg-cover bg-center  "
        style={{
          backgroundImage: "url(/images/product-assests/product-bg.jpg)",
        }}
      >
        <div className="grid lg:grid-cols-2 place-items-center">
          <div className=" flex flex-col justify-center items-center gap-2  ">
            <h1 className=" lg:text-[30px] font-bold text-[25px] mb-2 uppercase font-serif text-center ">
              A Complete Software Package for KYC Vault Implementation
            </h1>
            <p className="text-[18px] font-[secondary] lg:max-w-[85%] text-center px-2">
              A Complete Software Package for KYC Vault Implementation Our KYC
              Vault is a comprehensive software package designed to meet all
              requirements for securely storing and managing KYC data. Fully
              compliant with regulatory guidelines, it empowers organizations to
              safeguard sensitive customer information through encryption,
              tokenization, and seamless integration with existing systems.
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
        <div
          className=" p-3 rounded-[15px] mt-5"
          style={{
            backgroundImage: "url(/images/product-assests/product-cards.jpg)",
          }}
        >
          <h1 className="lg:text-[30px] text-black p-2 text-[25px] mb-2 uppercase font-serif text-center bg-white rounded-[15px]">
            overview
          </h1>
          <p className="text-[18px] font-[secondary]  text-center p-4 text-black">
            KYC (Know Your Customer) data contains personal and financial
            information crucial for identity verification. Ensuring secure
            storage, processing, and transmission of KYC data is a priority for
            businesses, especially in the financial and banking sectors. Our KYC
            Vault solution helps organizations implement secure data storage,
            retrieval, and management of KYC information, ensuring compliance
            with industry regulations while maintaining operational efficiency.
            The solution includes support for REST APIs to seamlessly integrate
            with your existing applications and systems.
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
            Get Started with Secure KYC Management
          </h2>
          <p className="text-lg mb-6">
            Streamline compliance and protect sensitive customer data with our
            KYC Vault solution.
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
