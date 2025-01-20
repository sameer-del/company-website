"use client";

const Features = () => {
  const Data = [
    {
      title: "Faster Development",
      style: "bg-[#e8fffb]",
      description:
        "Save time with drag-and-drop functionality and AI-driven optimizations.",
    },
    {
      title: "Easy Customization",
      style: "bg-[#f4ffec]",
      description:
        "Customize forms and screens with advanced options for dynamic fields and workflows.",
    },
    {
      title: "Stable and Reliable",
      style: "bg-[#fdffef]",
      description:
        "Keep your screens safe from disruptions with version control and AI suggestions.",
    },
    {
      title: "Increased Efficiency",
      style: "bg-[#fdffef]",
      description:
        "AI agents provide real-time performance suggestions, improving user engagement.",
    },
    {
      title: "Comprehensive Support",
      style: "bg-[#e8fffb]",
      description:
        "Cross-browser compatibility ensures your forms work flawlessly across platforms.",
    },
  ];

  return (
    <section className=" bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="">
        <h1 className="lg:text-[45px] text-[28px] font-raleway font-[600]">
          Benefits of Using Our Screen Builder
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
