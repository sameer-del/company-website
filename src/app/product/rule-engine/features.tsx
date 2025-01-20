"use client";

const Features = () => {
  const Data = [
    {
      title: "Smarter Decision-Making",
      style: "bg-[#e8fffb]",
      description:
        "AI agents continuously analyze and optimize business rules, enabling smarter, data-driven decision-making.",
    },
    {
      title: "Predictive Insights",
      style: "bg-[#f4ffec]",
      description:
        "Leverage AI to predict future outcomes, helping businesses make proactive, strategic decisions.",
    },
    {
      title: "Enhanced Efficiency",
      style: "bg-[#fdffef]",
      description:
        "Eliminate manual interventions, reduce errors, and speed up operations by automating complex rules and workflows.",
    },
    {
      title: "Agility and Flexibility",
      style: "bg-[#fdffef]",
      description:
        "Quickly adapt to changing business needs and regulations by modifying rules dynamically without requiring code changes.",
    },
    {
      title: "Scalability",
      style: "bg-[#f4ffec]",
      description:
        "Handle large-scale transactions and complex rule logic with ease, ensuring smooth operations as your business grows.",
    },
    {
      title: "Improved Compliance",
      style: "bg-[#e8fffb]",

      description:
        "Embed regulatory rules directly into business processes, ensuring adherence to industry standards and reducing the risk of non-compliance.",
    },
  ];

  return (
    <section className=" bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="">
        <h1 className="lg:text-[45px] text-[28px] font-raleway font-[600]">
          Why Choose Our <br /> Report Designer?
        </h1>
        <p className="text-[18px] font-raleway mt-4 lg:max-w-[65%]">
          we are committed to delivering exceptional services that cater to your
          unique needs. With a focus on quality, reliability, and customer
          satisfaction, we strive to exceed expectations in every project we
          undertake
        </p>
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
