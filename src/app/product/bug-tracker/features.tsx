"use client";

const Features = () => {
  const Data = [
    {
      title: "Improved Customer Satisfaction",
      description:
        "Customers feel heard with an easy-to-use platform for raising issues.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "Enhanced Transparency",
      description:
        "Real-time updates and status tracking keep stakeholders informed.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "Streamlined Collaboration",
      description:
        "Role-based access and workflows foster collaboration among teams.",
      style: "bg-[#e6f7ff]",
    },
    {
      title: "Faster Issue Resolution",
      description:
        "Screen recordings and evidence uploads drastically reduce debugging time.",
      style: "bg-[#fff2cc]",
    },
    {
      title: "Proactive Management",
      description:
        "SLA tracking and breach alerts ensure issues are resolved within defined timelines.",
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
