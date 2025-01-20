"use client";

const HowCards = () => {
  const Data = [
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
      style: "col-span-2",
      description:
        "continuously monitor the engine's performance with built-in AI analytics, optimizing rules dynamically based on ongoing data.",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="">
        <h1 className="lg:text-[45px] text-center text-[28px] font-raleway font-[600]">
          Who Can Benefit?
        </h1>
      </div>
      <section className="mt-5">
        <div className="grid lg:grid-cols-2  place-items-center gap-5">
          {Data.map((card, index) => (
            <div
              className={`lg:w-[488px] py-[25px] px-[15px] rounded-[30px]  bg-[#f4ffec]  shadow-md ${card.style}`}
              key={index}
            >
              <h1 className="font-raleway text-[28px]">{card.title}</h1>
              <p className=" font-raleway text-[18px]">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HowCards;
