"use client";

const Features = () => {
  const Data = [
    {
      title: "Streamlined Workflows",
      description:
        "Simplify complex processes by automating repetitive tasks and ensuring timely execution.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "Enhanced Efficiency",
      description:
        "Reduce manual intervention with automated scheduling and adhoc execution options.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "Flexibility and Control",
      description:
        "Customize job parameters and schedules to meet unique operational requirements.",
      style: "bg-[#e6f7ff] lg:row-span-3 flex flex-col justify-center",
    },
    {
      title: "Real-Time Monitoring",
      description:
        "Gain insights into task execution with live status updates and detailed logs.",
      style: "bg-[#fff2cc]",
    },
    {
      title: "Scalable and Secure",
      description:
        "Suitable for businesses of all sizes, with robust security features to protect sensitive operations.",
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
