"use client";

const Features = () => {
  const Data = [
    {
      title: "Enhanced Security",
      description:
        "Protect critical documents with advanced encryption and secure storage mechanisms.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "Improved Productivity",
      style: "bg-[#d6f5d6]",
      description:
        "Streamline workflows, automate processes, and enable quick document retrieval.",
    },
    {
      title: "Compliance Assurance",
      style: "bg-[#e6f7ff]",
      description:
        "Stay compliant with global and industry-specific data management regulations.",
    },
    {
      title: "Cost Efficiency",
      style: "bg-[#fff2cc]",
      description:
        "Reduce manual efforts and storage costs with automated document handling.",
    },
    {
      title: "Scalability",
      style: "bg-[#ffebcd]",
      description:
        "Easily scale to accommodate increasing document volumes and user demands.",
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
