"use client";

const Features = () => {
  const Data = [
    {
      title: "Enhanced Productivity",
      description:
        "Automate the creation and distribution of letters, saving time and reducing manual effort.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "Customizable and Scalable",
      description:
        "Design templates that align with your unique branding and scale to meet growing business needs.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "Error-Free Documents",
      description:
        "Minimize errors with dynamic placeholders and predefined templates.",
      style: "bg-[#e6f7ff]",
    },
    {
      title: "Improved Compliance",
      description:
        "Ensure regulatory requirements are embedded in every letter automatically.",
      style: "bg-[#fff2cc]",
    },
    {
      title: "Streamlined Communication",
      description:
        "Deliver personalized and professional letters to recipients efficiently.",
      style: "bg-[#ffebcd]",
    },
  ];

  return (
    <section className=" bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="">
        <h1 className="lg:text-[45px] text-[28px] font-raleway font-[600]">
          Benefits of Choosing Our Aadhaar Data Vault
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
