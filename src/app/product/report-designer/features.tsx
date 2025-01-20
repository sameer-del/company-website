"use client";

const Features = () => {
  const Data = [
    {
      title: "Customizable for Any Industry",
      style: "bg-[#e8fffb]",
      description:
        "Suitable for finance, retail, healthcare, education, manufacturing, and beyond.",
    },
    {
      title: "AI-Powered Insights",
      style: "bg-[#f4ffec]",
      description:
        "Analyze patterns and trends with built-in AI-driven analytics for deeper business insights.",
    },
    {
      title: "Scalable and Secure",
      style: "bg-[#fdffef]",

      description:
        "Handles increasing data loads effortlessly while ensuring your information stays protected.",
    },
    {
      title: "Cloud-Based Flexibility",
      style: "bg-[#fdffef]",
      description:
        "Access from anywhere with a SaaS-based model, ensuring convenience and real-time collaboration.",
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
