import React from "react";

const workFlowEngine = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-[52px] font-bold mb-4 font-[secondary]">
            Experience the Future of Loan Calculations
          </h1>
          <p className="text-[19px] mb-6 font-[secondary]">
            Transform your financial decisions with our advanced Loan Calculator
            Engine.
          </p>
        </div>
      </header>

      {/* What Makes It Exceptional Section */}
      <section className="py-12 px-6 max-w-[85%] mx-auto ">
        <h2 className="text-3xl font-bold  mb-6 text-center font-[secondary] pb-10">
          Experience the Future of Loan Calculations <br /> with Our Loan
          Calculator Engine
        </h2>
        <div className="grid grid-cols-2 ">
          <div className=" flex flex-col justify-center gap-2  ">
            <h1 className=" text-[35px] uppercase font-serif">
              Your Complete <br /> Loan Planning Solution
            </h1>
            <p className="text-[19px] font-[secondary] max-w-[85%]">
              Transform your financial decisions with our advanced Loan
              Calculator Engine. Whether it's personal loans, mortgages, or
              business financing, our AI-driven, scalable, and SaaS-based
              solution delivers precise amortization schedules while seamlessly
              integrating with your systems for an unparalleled experience.
            </p>
            <button className="mt-5 w-[150px] bg-black py-4 rounded-full text-white font-serif ">
              view more
            </button>
          </div>
          <div className="">
            <img src="/images/loan-pic.png" alt="" className="w-[550px]" />
          </div>
        </div>
      </section>
      {/* What Makes It Exceptional Section */}
      <section className=" max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] px-10">
        <div className="w-full h-[80px] bg-white rounded-[15px] pt-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            What Makes Our Loan Calculator Engine Exceptional?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 py-2  mt-5">
          <div className="bg-white rounded-[15px] flex justify-center items-center px-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Amortization Made Simple
            </h3>
            <p className="text-gray-700">
              Detailed repayment schedules with insights into principal and
              interest for every payment.
            </p>
          </div>
          <div className="bg-white rounded-[15px] flex  py-2 px-2 flex-col justify-center p-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Multiple Repayment Methods
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>EMI (Equated Monthly Installments)</li>
              <li>Balloon Payments</li>
              <li>Step-Up and Step-Down Repayments</li>
              <li>Interest-Only Payments</li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-white text-center text-[19px] font-[secondary] rounded-[15px] py-10 mt-5">
          <p className="max-w-[85%] mx-auto">
            {" "}
            The Loan Calculator Engine is a powerful tool designed to help
            individuals and businesses calculate their loan repayments quickly
            and accurately. Whether you're planning a home loan, car loan, or
            personal loan, our engine simplifies the process by providing clear
            and actionable insights.
          </p>
        </div>

        {/* grid key features */}
        <div className="mt-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow h-[50vh] flex flex-col justify-center gap-5">
              <h3 className="text-[29px] font-[secondary] text-gray-800 ">
                AI-Driven Amortization Engine
              </h3>
              <p className="text-gray-700 text-[19px] font-[secondary]">
                Empowered by advanced machine learning, our Loan Calculator
                Engine analyzes historical data and user preferences to suggest
                the most optimal amortization methods. Its intelligent design
                ensures accuracy and relevance, continuously improving with each
                use.
              </p>
              <button className="mt-5 w-[150px] bg-black py-4 rounded-full text-white font-serif ">
                view more
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-center">
              <h3 className="text-[29px] font-[secondary]  text-gray-800 mb-3">
                Automatic Scaling
              </h3>
              <p className="text-gray-700 text-[19px] font-[secondary]">
                Built on a robust cloud architecture, our engine automatically
                adjusts resources based on application load. Whether during peak
                traffic or high computation demands, it delivers seamless
                performance while minimizing operational overhead.
              </p>
              <button className="mt-5 w-[150px] bg-black py-4 rounded-full text-white font-serif ">
                view more
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-center">
              <h3 className="text-[29px] font-[secondary]  text-gray-800 mb-3">
                SaaS-Based Model
              </h3>
              <p className="text-gray-700 text-[19px] font-[secondary]">
                Experience the freedom of accessing our Loan Calculator Engine
                from anywhere. With regular updates, enhanced features, and
                flexible subscription plans, it’s designed to adapt to the needs
                of businesses of all sizes, ensuring you stay ahead in the
                financial landscape.
              </p>
              <button className="mt-5 w-[150px] bg-black py-4 rounded-full text-white font-serif ">
                view more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow ">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                AI-Driven Amortization Engine
              </h3>
              <p className="text-gray-700">
                Suggests the best amortization method based on historical data
                and user preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Automatic Scaling
              </h3>
              <p className="text-gray-700">
                Robust cloud architecture ensures peak performance during high
                loads.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                SaaS-Based Model
              </h3>
              <p className="text-gray-700">
                Access from anywhere, with regular updates and flexible
                subscription plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "1. Input Loan Details",
              description:
                "Enter loan amount, tenure, interest rate, and select a repayment method.",
            },
            {
              step: "2. AI-Powered Suggestions",
              description:
                "Our engine analyzes your inputs and recommends the best amortization method.",
            },
            {
              step: "3. View Real-Time Results",
              description:
                "Access detailed schedules and visualizations instantly.",
            },
            {
              step: "4. Seamless Integration",
              description:
                "Connect with your systems via APIs and let the engine scale automatically.",
            },
          ].map(({ step, description }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step}
              </h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Revolutionize Loan Planning?
          </h2>
          <p className="text-lg mb-6">
            Our Loan Calculator Engine is trusted by industry leaders. Join them
            and simplify your financial processes today!
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default workFlowEngine;
