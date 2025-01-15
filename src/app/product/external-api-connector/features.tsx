"use client";

const Features = () => {
  const featuresData = [
    {
      title: "Enhanced Interoperability",
      description:
        "Connect your systems with external applications and platforms effortlessly.",
    },
    {
      title: "Time and Cost Savings",
      description:
        "Reduce development time and expenses with pre-built tools and templates.",
    },
    {
      title: "Improved Efficiency",
      description:
        "Automate data exchange and workflows to streamline operations.",
    },
    {
      title: "Scalable Solution",
      description:
        "Handle increasing transaction volumes as your business grows.",
    },
    {
      title: "Robust Security",
      description:
        "Protect sensitive data and ensure compliance with industry standards.",
    },
  ];

  return (
    <section className=" relative max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] lg:px-10">
      <div className="max-w-5xl mx-auto lg:px-6  px-4">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Benefits of Choosing Our KYC Vault
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10 mb-10 text-center">
          {featuresData.map((card, index) => (
            <div
              className="realtive group duration-500 bg-white p-6 rounded-lg shadow   border-blue-600  border-b-4 border-r-4 hover:bg-blue-400 hover:text-white px-5"
              key={index}
            >
              <h3 className="text-xl  font-semibold  mb-3">{card.title}</h3>

              <p className="absolute   hidden group-hover:block capitalize font-[secondary] text-[19px] bg-white text-black text-center  p-3 border-[1px] border-black w-[400px] h-[130px] rounded-xl  ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[100px] left-[80px]">
          <img src="/images/arrow-grp.svg" alt="das" />
        </div>
      </div>
    </section>
  );
};

export default Features;
