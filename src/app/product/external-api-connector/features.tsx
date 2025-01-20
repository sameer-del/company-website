"use client";

const Features = () => {
  const Data = [
    {
      title: "Enhanced Interoperability",
      description:
        "Connect your systems with external applications and platforms effortlessly.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "Time and Cost Savings",
      description:
        "Reduce development time and expenses with pre-built tools and templates.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "Improved Efficiency",
      description:
        "Automate data exchange and workflows to streamline operations.",
      style: "bg-[#e6f7ff]",
    },
    {
      title: "Scalable Solution",
      description:
        "Handle increasing transaction volumes as your business grows.",
      style: "bg-[#fff2cc]",
    },
    {
      title: "Robust Security",
      description:
        "Protect sensitive data and ensure compliance with industry standards.",
      style: "bg-[#ffebcd]",
    },
  ];

  return (
    <section className=" bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="">
        <h1 className="lg:text-[45px] text-[28px] font-raleway font-[600]">
        Benefits of Using Our External API Connector
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
