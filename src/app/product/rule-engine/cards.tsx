"use client";

const Cards = () => {
  const cardData = [
    {
      title: "AI-Driven Rule Optimization",
      description_a:
        "AI agents continuously analyze historical data to optimize business rules for improved decision-making and performance.",
      description_b:
        "Suggest rule adjustments in real-time based on user behaviors, market trends, and system performance.",
    },
    {
      title: "AI-Powered Predictive Analytics",
      description_a:
        "AI agents predict the outcome of certain business decisions based on past data, enabling more accurate rule creation and adjustments.",
      description_b:
        "Help forecast demand, market shifts, or operational issues, improving proactive decision-making.",
    },
    {
      title: "Flexible Rule Definition",
      description_a:
        "Define rules using a simple, intuitive interface with support for condition-based logic.",
      description_b:
        "Easily incorporate business logic without complex coding, making it accessible to both technical and non-technical users.",
    },
    {
      title: "Real-Time Rule Execution",
      description_a:
        "Execute business rules instantly during transactions or workflows to make real-time decisions.",
      description_b:
        "Minimize delays and improve response times for better customer experiences.",
    },
    {
      title: "Version Control & Auditing",
      description_a:
        "Keep track of rule changes with versioning, ensuring that updates don’t disrupt operations.",
      description_b:
        "Maintain a detailed audit trail for compliance and traceability, recording when, why, and how rules were modified.",
    },
    {
      title: "Seamless Integration with Applications",
      description_a:
        "Integrate the Business Rule Engine with existing applications and databases through REST APIs and connectors.",
      description_b:
        "Supports easy integration with legacy systems, ERPs, CRMs, and third-party applications.",
    },
    {
      title: "Rule Hierarchy & Prioritization",
      description_a:
        "Organize rules into hierarchies, ensuring more critical rules are evaluated first.",
      description_b:
        "Implement rule prioritization to define which rules should override others.",
    },
    {
      title: "AI-Enhanced Decision Tables",
      description_a:
        "Use decision tables powered by AI to organize and evaluate multiple rule conditions in a tabular format, making it easy to visualize and manage complex rules.",
      description_b:
        "AI agents assist in generating optimized decision table entries based on real-time data insights.",
    },
    {
      title: "Dynamic Rule Management",
      description_a:
        "Enable business users to modify, add, or remove rules dynamically without needing a developer, allowing for quick adaptations to changing business needs.",
      description_b:
        "Easily adapt to business changes with minimal effort and developer intervention.",
    },
    {
      title: "Rule Testing & Simulation",
      description_a:
        "Test business rules before implementation with built-in simulators and validation tools.",
      description_b:
        "Run simulations to see how rules perform in different scenarios, ensuring accuracy before going live.",
    },
    {
      title: "Error Handling & Fallback Mechanisms",
      description_a:
        "Define custom error handling procedures and fallback actions for when rules fail, ensuring business continuity and minimizing operational disruptions.",
      description_b:
        "Ensure stability even in unexpected situations with robust fallback mechanisms.",
    },
    {
      title: "Scalable and High-Performance",
      description_a:
        "The engine is designed to handle large-scale rule processing, capable of supporting high transaction volumes without performance degradation.",
      description_b:
        "Built to scale horizontally to meet growing business needs.",
    },
  ];

  return (
    <section
      className="max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] px-10"
      id="more"
    >
      <div className="w-full h-[80px] bg-white rounded-[15px] pt-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-[secondary]">
          Key Features of Our AI-Powered Business Rule Engine
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-[35px] py-2 mt-5 font-[secondary]">
        {cardData.map((card, index) => (
          <div
            className="bg-white rounded-[15px] flex flex-col justify-center items-center h-[350px] px-2 py-4 border-blue-600 border-b-4 border-r-4 hover:bg-blue-400 hover:text-white duration-100 "
            key={index}
          >
            <h3 className="text-[27px] font-semibold  mb-3 text-center">
              {card.title}
            </h3>
            <ul className="text-center pl-5  space-y-2">
              <li className="text-[19px]">{card.description_a}</li>
              <li className="text-[19px]">{card.description_b}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
