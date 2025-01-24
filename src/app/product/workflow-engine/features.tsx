"use client";

const Features = () => {
  const Data = [
    {
      title: "Increased Efficiency",
      description:
        "Automate repetitive tasks to free up valuable resources for strategic work.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "Improved Accuracy",
      description:
        "Eliminate manual errors by enforcing rules and automating processes.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "Faster Turnaround Time",
      description:
        "Streamlined workflows ensure tasks are completed quickly and efficiently.",
      style: "bg-[#e6f7ff] lg:row-span-3 flex flex-col justify-center",
    },
    {
      title: "Enhanced Visibility",
      description:
        "Real-time tracking and analytics provide complete transparency over process performance.",
      style: "bg-[#fff2cc]",
    },
    {
      title: "Scalable Solutions",
      description:
        "Adapt workflows as your business grows or processes become more complex.",
      style: "bg-[#ffebcd]",
    },
  ];

  return (
    <section className=" bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="">
        <h1 className="lg:text-[45px] text-[28px] font-raleway font-[600]">
          Benefits of Using Our Workflow Engine
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
