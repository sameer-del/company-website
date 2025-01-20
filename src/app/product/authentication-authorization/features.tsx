"use client";

const Features = () => {
  const Data = [
    {
      title: "Enhanced Security",
      description:
        "Protect applications with robust authentication mechanisms and enforce granular access control.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "Improved User Experience",
      description:
        "Simplify login processes with SSO and self-service portals.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "Scalability and Flexibility",
      description:
        "Designed to scale with your organization, supporting thousands of users and applications.",
      style: "bg-[#e6f7ff] col-span-2",
    },
    {
      title: "Compliance Ready",
      description:
        "Meet industry regulations and standards like GDPR, HIPAA, and PCI-DSS with built-in auditing and policies.",
      style: "bg-[#fff2cc] ",
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
