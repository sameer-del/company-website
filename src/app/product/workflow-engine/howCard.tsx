"use client";

const HowCards = () => {
  const Data = [
    {
      title: "Loan Origination",
      description:
        "Automate application reviews, approvals, and document verification.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "Customer Support",
      description:
        "Streamline ticket assignment, escalation, and resolution workflows.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "HR Processes",
      description:
        "Manage employee onboarding, leave requests, and performance evaluations.",
      style: "bg-[#e6f7ff] lg:row-span-3 flex flex-col justify-center",
    },
    {
      title: "E-Commerce",
      description:
        "Automate order processing, inventory updates, and shipment tracking.",
      style: "bg-[#fff2cc]",
    },
    {
      title: "Compliance and Audit",
      description:
        "Ensure consistent workflows for compliance checks and audits.",
      style: "bg-[#ffebcd]",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="pb-[50px]">
        <h1 className="lg:text-[45px] text-center text-[28px] font-raleway font-[600]">
          Use Cases for Our Workflow Engine
        </h1>
      </div>
      <section className="">
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-5">
          {Data.map((card, index) => (
            <div
              className={`lg:w-[488px]  p-[25px] rounded-[30px]  bg-[#f4ffec]  shadow-md ${card.style}`}
              key={index}
            >
              <h1 className="font-raleway text-[25px] pb-3">{card.title}</h1>
              <p className=" font-raleway text-[17px] max-w-[85%] ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HowCards;
