"use client";

const Features = () => {
  const Data = [
    {
      title: "Compliance Ready",
      description:
        "Fully adheres to UIDAI guidelines and the Aadhaar Act, ensuring regulatory compliance.",
      style: "bg-[#e8fffb]",
    },
    {
      title: "Secure and Resilient",
      description:
        "Robust encryption and tokenization mechanisms minimize the risk of data breaches.",
      style: "bg-[#f4ffec]",
    },
    {
      title: "Flexible Integration",
      description:
        "Designed to work seamlessly with applications and infrastructures across industries.",
      style: "bg-[#fdffef]",
    },
    {
      title: "Efficient Operations",
      description:
        "Bulk processing and AI-driven automation optimize workflows and reduce manual effort.",
      style: "bg-[#f4ffec]",
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
