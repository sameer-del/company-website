"use client";

const Features = () => {
  const featuresData = [
    {
      title: "Faster Development",
      description:
        "Save time with drag-and-drop functionality and AI-driven optimizations.",
    },
    {
      title: "Easy Customization",
      description:
        "Customize forms and screens with advanced options for dynamic fields and workflows.",
    },
    {
      title: "Stable and Reliable",
      description:
        "Keep your screens safe from disruptions with version control and AI suggestions.",
    },
    {
      title: "Increased Efficiency",
      description:
        "AI agents provide real-time performance suggestions, improving user engagement.",
    },
    {
      title: "Comprehensive Support",
      description:
        "Cross-browser compatibility ensures your forms work flawlessly across platforms.",
    },
  ];
  

  return (
    <section className=" relative max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] lg:px-10">
      <div className="max-w-5xl mx-auto lg:px-6  px-4">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Benefits of Using Our Screen Builder
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
