"use client";

const HowCards = () => {
  const howData = [
    {
      title: "Define Rules",
      description:
        "Business rules are defined using an intuitive interface, which includes conditions, actions, and decision outcomes.",
    },
    {
      title: "AI Agent Optimization",
      description:
        "AI agents analyze historical data and real-time inputs to suggest optimizations for the rules.",
    },
    {
      title: "Deploy & Integrate",
      description:
        "The rules are deployed to the system and integrated into existing workflows, applications, and databases.",
    },
    {
      title: "Execute Rules",
      description:
        "Rules are automatically triggered during business processes, ensuring real-time decision-making with AI-enhanced intelligence ",
    },
    {
      title: "Monitor & Optimize",
      description:
        "continuously monitor the engine's performance with built-in AI analytics, optimizing rules dynamically based on ongoing data.",
    },
  ];

  return (
    <section className=" relative max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] lg:px-10 px-3">
      <div className="lg:max-w-5xl lg:mx-auto lg:px-6 ">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          How It Works
        </h2>
        <div className=" mt-10">
          {howData.map((card, index) => (
            <div
              className="realtive group duration-500 bg-white p-6 rounded-lg shadow hover:border-black    border-blue-600  border-b-4 border-r-4 hover:bg-blue-400 hover:text-white"
              key={index}
            >
              <h3 className="text-xl  font-semibold w-full  mb-3">
                {card.title}
              </h3>

              <p className=" hidden group-hover:block capitalize font-[secondary] text-[19px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden lg:block absolute bottom-[100px] left-[80px]">
          <img src="/images/arrow-grp.svg" alt="das" />
        </div>
      </div>
    </section>
  );
};

export default HowCards;
