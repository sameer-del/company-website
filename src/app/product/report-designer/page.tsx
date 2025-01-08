"use client";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";
import { MdDescription } from "react-icons/md";

const reportDesigner = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-[52px] font-bold mb-4 font-[secondary]">
            Revolutionize Your Reporting with Our Report Designer
          </h1>
          <p className="text-[19px] mb-6 font-[secondary]">
            Create, Customize, and Collaborate Empower your business with our
            intuitive Report Designer. Designed to meet the needs of modern
            enterprises, it offers a seamless way to generate insightful,
            visually appealing reports.
          </p>
        </div>
      </header>

      {/* What Makes It Exceptional Section */}
      <section className="py-12 lg:px-6 px-0 lg:max-w-[85%] lg:mx-auto ">
        <div className="grid lg:grid-cols-2 place-items-center">
          <div className="flex flex-col justify-center items-center gap-2  ">
            <h1 className="lg:text-[30px] text-[25px] mb-2 uppercase font-serif text-center">
              Revolutionize Your <br /> Reporting with Our Report Designer
            </h1>
            <p className="text-[18px] font-[secondary] lg:max-w-[75%] text-center px-5">
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
          <div className="">
            <img src="/images/loan-pic.png" alt="" className="w-[550px]" />
          </div>
        </div>
      </section>
      {/* What Makes It Exceptional Section */}
      <section
        className=" max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] px-10"
        id="more"
      >
        <div className="w-full h-[80px] bg-white rounded-[15px] pt-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-[secondary]">
            Key Features of Our Report Designer
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 py-2  mt-5 font-[secondary]">
          <div className="bg-white rounded-[15px] flex flex-col justify-center items-center px-2  py-4 border-blue-600  border-b-4 border-r-4">
            <h3 className="text-[27px] font-semibold text-gray-800 mb-3">
              User-Friendly Interface
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 ">
              <li className="text-[19px]">
                Drag-and-drop elements to design reports effortlessly.
              </li>
              <li className="text-[19px]">
                Pre-built templates for quick and professional-looking reports.
              </li>
              <li className="text-[19px]">
                Intuitive tools for formatting, filtering, and sorting data.
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-[15px] flex  py-2 px-2 flex-col justify-center items-center p-10  border-blue-600  border-b-4 border-r-4">
            <h3 className="text-[27px] font-semibold text-gray-800 mb-3">
              Advanced Customization
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li className="text-[19px]">
                Design charts, graphs, and tables with ease.
              </li>
              <li className="text-[19px]">
                Add branding elements like logos, headers, and footers.
              </li>
              <li className="text-[19px]">
                Define custom KPIs and metrics tailored to your business needs.
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-[15px] flex  py-2 px-2 flex-col justify-center items-center p-10  border-blue-600  border-b-4 border-r-4">
            <h3 className="text-[27px] font-semibold text-gray-800 mb-3">
              Dynamic Data Integration
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li className="text-[19px]">
                Seamlessly connect with any system or database to fetch the
                required data.
              </li>
              <li className="text-[19px]">
                Access real-time data for up-to-date and accurate reporting.
              </li>
              <li className="text-[19px]">
                Support for multiple data formats and sources for maximum
                compatibility.
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-[15px] flex  py-10 px-2 flex-col justify-center items-center p-10  border-blue-600  border-b-4 border-r-4">
            <h3 className="text-[27px] font-semibold text-gray-800 mb-3">
              Powerful Scheduling and Automation
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-[19px]">
              <li>
                Schedule report generation and delivery to stakeholders
                automatically.
              </li>
              <li>
                Configure triggers for generating reports based on specific
                events or thresholds.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-[15px] flex  py-10 px-2 flex-col justify-center items-center p-10  border-blue-600  border-b-4 border-r-4 font-[secondary]">
          <h3 className="text-[27px] font-semibold text-gray-800 mb-3">
            Comprehensive Export Options
          </h3>
          <ul className=" pl-5 text-gray-700 space-y-2 text-[19px] text-center">
            <li className="text-center">
              Export reports in multiple formats such as PDF, Excel, and CSV.
            </li>
            <li className="text-center">
              Share reports via email or integrate them with your business
              platforms for seamless distribution.
            </li>
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] px-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Why Choose Our Report Designer?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10 mb-10 text-center">
            <div className="bg-white p-6 rounded-lg shadow   border-blue-600  border-b-4 border-r-4 hover:bg-blue-400 hover:text-white">
              <h3 className="text-xl font-semibold  mb-3">
                Customizable for Any Industry
              </h3>
              <p className="">
                Suitable for finance, retail, healthcare, education,
                manufacturing, and beyond.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center  border-blue-600  border-b-4 border-r-4 hover:bg-blue-400 hover:text-white">
              <h3 className="text-xl font-semibold  mb-3">
                AI-Powered Insights
              </h3>
              <p className="">
                Analyze patterns and trends with built-in AI-driven analytics
                for deeper business insights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow  border-blue-600  border-b-4 border-r-4 hover:bg-blue-400 hover:text-white">
              <h3 className="text-xl font-semibold  mb-3 text-center">
                Scalable and Secure
              </h3>
              <p className=" text-center">
                Handles increasing data loads effortlessly while ensuring your
                information stays protected.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow  border-blue-600  border-b-4 border-r-4 hover:bg-blue-400 hover:text-white">
              <h3 className="text-xl font-semibold mb-3 text-center">
                Cloud-Based Flexibility
              </h3>
              <p className=" text-center">
                Access from anywhere with a SaaS-based model, ensuring
                convenience and real-time collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Who Can Benefit?
        </h2>
        <div className="grid md:grid-cols-2 gap-[40px]  place-items-center mt-10">
          {[
            {
              description:
                "Enterprises needing streamlined reporting solutions.",
            },
            {
              description:
                "Small Businesses looking for cost-effective, professional reporting tools.",
            },
            {
              description:
                "Data Analysts and Managers seeking dynamic visualization and insights.",
            },
            {
              description:
                "Connect with your systems via APIs and let the engine scale automatically.",
            },
          ].map(({ description }, index) => (
            <div
              key={index}
              className="h-[150px] w-[350px] p-6 rounded-lg shadow-sm  border-black border-b-4"
            >
              <p className="text-xl font-semibold text-gray-800 mb-3">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need More Assistance?</h2>
          <p className="text-lg mb-6">
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

export default reportDesigner;
