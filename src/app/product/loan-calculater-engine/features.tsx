"use client";

const Features = () => {
  const Data = [
    {
      title: "Input Loan Details",
      style: "bg-[#e8fffb]",
      description:
        "Enter loan amount, tenure, interest rate, and select a repayment method.",
    },
    {
      title: "AI-Powered Suggestions",
      style: "bg-[#f4ffec]",
      description:
        "Let the system analyze your inputs and historical data to recommend the best amortization method.",
    },
    {
      title: "View Real-Time Results",
      style: "bg-[#fdffef]",
      description: "Instantly access repayment schedules and visualizations.",
    },
    {
      title: "Seamless Integration and Scaling",
      style: "bg-[#fdffef]",
      description:
        "Connect with your systems via APIs and let the engine scale automatically to handle your workload.",
    },
    {
      title: "Plan with Confidence",
      style: "bg-[#f4ffec]",
      description:
        "Use the insights to negotiate better terms or align your finances for future goals.",
    },
  ];

  return (
    <section className=" bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="">
        <h1 className="lg:text-[45px] text-[28px] font-raleway font-[600]">
          How It Works?
        </h1>
      </div>
      <section className="mt-5">
        <div className="grid lg:grid-cols-3 gap-[13px] ">
          {Data.map((card, index) => (
            <div
              className={`lg:w-[408px] py-[25px] px-[15px] rounded-[30px] shadow-md  ${card.style} `}
              key={index}
            >
              <h1 className="text-[29px] font-raleway font-[600] max-w-[65%] mt-3 ">
                {card.title}
              </h1>
              <p className="mt-3 font-raleway">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Features;
