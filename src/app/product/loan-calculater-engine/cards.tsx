"use client";

const Cards = () => {
  const Data = [
    {
      title: "Amortization Made Simple",
      number: "01",
      description:
        "Detailed repayment schedules with insights into principal and interest for every payment.",
    },
    {
      title: "Multiple Repayment Methods",
      number: "02",
      description:
        "Choose from a wide range of options tailored to your needs:\n\nEMI (Equated Monthly Installments): Fixed monthly payments for predictable budgeting.",
    },
    {
      title: "AI-Driven Amortization Engine",
      number: "03",
      description:
        "Automatically identifies and suggests the best amortization method based on historical data and user preferences.\nLearns from loan samples to provide tailored recommendations for optimal repayment plans.\nContinuously improves accuracy and relevance with machine learning algorithms.",
    },
    {
      title: "Automatic Scaling for Peak Performance",
      number: "04",
      description:
        "Built on a robust cloud architecture that scales automatically based on application load.\nEnsures seamless performance during peak traffic or high computation demands.\nReduces operational overhead by adapting resources dynamically.",
    },
    {
      title: "SaaS-Based Model",
      number: "05",
      description:
        "No complex installations—access the Loan Calculator Engine from anywhere via the cloud.\nRegular updates with new features, ensuring you're always ahead of the curve.\nFlexible subscription plans designed for businesses of all sizes.",
    },
    {
      title: "API Integration with LOS and LMS",
      number: "06",
      description:
        "Seamlessly integrate with your Loan Origination System (LOS) for smooth onboarding and approval workflows.\nConnect with your Loan Management System (LMS) to automate repayment tracking and customer notifications.",
    },
    {
      title: "User-Friendly Configuration Panel",
      number: "07",
      description:
        "Intuitive front-end interface for administrators to customize repayment rules, interest rates, fees, and schedules.\nDrag-and-drop features for setting loan parameters.\nInstant previews to validate configurations before deployment.",
    },
  ];

  return (
    <section className="px-5 py-[100px] lg:px-[100px] bg-[#f8f9fa]" id="more">
      <div className="">
        <h1 className="lg:text-[45px] text-[35px] font-raleway font-[600]">
          What Makes Our <br /> Loan Calculator Engine Exceptional?
        </h1>
        <p className="lg:text-[18px] font-raleway mt-2">
          key features and important points of our Product
        </p>
      </div>
      <section className="mt-5 ">
        <div className="grid lg:grid-cols-3 place-items-center gap-[24px]">
          {Data.map((card, index) => (
            <div key={index} className="lg:w-[465px] px-[24px] py-[10px]">
              <div className="h-[100px] font-para text-[85px] font-[900] text-[#c1f4e1]">
                {card.number}
              </div>
              <h1 className="h-[100px] font-raleway lg:text-[28px] text-[24px] font-[700] max-w-[75%] mt-5 ">
                {card.title}
              </h1>
              <p className="font-para">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Cards;
