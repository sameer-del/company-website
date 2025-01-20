"use client";

const Cards = () => {
  const Data = [
    {
      title: "AI-Driven Rule Optimization",
      number: "01",
      description:
        "AI agents continuously analyze historical data to optimize business rules for improved decision-making and performance. Suggest rule adjustments in real-time based on user behaviors, market trends, and system performance.",
    },
    {
      title: "AI-Powered Predictive Analytics",
      number: "02",
      description:
        "AI agents predict the outcome of certain business decisions based on past data, enabling more accurate rule creation and adjustments. Help forecast demand, market shifts, or operational issues, improving proactive decision-making.",
    },
    {
      title: "Flexible Rule Definition",
      number: "03",
      description:
        "Define rules using a simple, intuitive interface with support for condition-based logic. Easily incorporate business logic without complex coding, making it accessible to both technical and non-technical users.",
    },
    {
      title: "Real-Time Rule Execution",
      number: "04",
      description:
        "Execute business rules instantly during transactions or workflows to make real-time decisions. Minimize delays and improve response times for better customer experiences.",
    },
    {
      title: "Version Control & Auditing",
      number: "05",
      description:
        "Keep track of rule changes with versioning, ensuring that updates don’t disrupt operations. Maintain a detailed audit trail for compliance and traceability, recording when, why, and how rules were modified.",
    },
    {
      title: "Seamless Integration with Applications",
      number: "06",
      description:
        "Integrate the Business Rule Engine with existing applications and databases through REST APIs and connectors. Supports easy integration with legacy systems, ERPs, CRMs, and third-party applications.",
    },
    {
      title: "Rule Hierarchy & Prioritization",
      number: "07",
      description:
        "Organize rules into hierarchies, ensuring more critical rules are evaluated first. Implement rule prioritization to define which rules should override others.",
    },
    {
      title: "AI-Enhanced Decision Tables",
      number: "08",
      description:
        "Use decision tables powered by AI to organize and evaluate multiple rule conditions in a tabular format, making it easy to visualize and manage complex rules. AI agents assist in generating optimized decision table entries based on real-time data insights.",
    },
    {
      title: "Dynamic Rule Management",
      number: "09",
      description:
        "Enable business users to modify, add, or remove rules dynamically without needing a developer, allowing for quick adaptations to changing business needs.",
    },
    {
      title: "Rule Testing & Simulation",
      number: "10",
      description:
        "Test business rules before implementation with built-in simulators and validation tools. Run simulations to see how rules perform in different scenarios, ensuring accuracy before going live.",
    },
    {
      title: "Error Handling & Fallback Mechanisms",
      number: "11",
      description:
        "Define custom error handling procedures and fallback actions for when rules fail, ensuring business continuity and minimizing operational disruptions. Ensure stability even in unexpected situations with robust fallback mechanisms.",
    },
    {
      title: "Scalable and High-Performance",
      number: "12",
      description:
        "The engine is designed to handle large-scale rule processing, capable of supporting high transaction volumes without performance degradation. Built to scale horizontally to meet growing business needs.",
    },
    {
      title: "Compliance and Governance",
      number: "13",
      description:
        "Ensure compliance with industry standards and regulations by embedding legal and regulatory rules into business processes. Monitor and log all rule-related activity for governance and compliance reporting.",
    },
  ];

  return (
    <section className="px-5 py-[100px] lg:px-[100px] bg-[#f8f9fa]" id="more">
      <div className="">
        <h1 className="lg:text-[45px] text-[35px] font-raleway font-[600]">
          Key Features of Our <br /> Report Designer
        </h1>
        <p className="lg:text-[18px] font-raleway mt-2">
          key features and important points of our Product
        </p>
      </div>
      <section className="mt-5 ">
        <div className="grid lg:grid-cols-3 place-items-center gap-[24px]">
          {Data.map((card, index) => (
            <div key={index} className="lg:w-[465px] px-[24px] py-[10px]">
              <div className="h-[100px] font-para text-[85px] font-[900] text-[#c1f4e1]">
                {card.number}
              </div>
              <h1 className="h-[100px] font-raleway lg:text-[28px] text-[24px] font-[700] max-w-[75%] mt-5 ">
                {card.title}
              </h1>
              <p className="font-para">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Cards;
