"use client";

const Cards = () => {
  const kycData = [
    {
      title: "Universal API Compatibility",
      description_a:
        "Supports REST, SOAP, GraphQL, and WebSocket APIs for comprehensive integration coverage.",
      description_b:
        "Handles different data formats like JSON, XML, and plain text effortlessly.",
    },
    {
      title: "No-Code/Low-Code Integration",
      description_a:
        "Build API connections through a user-friendly interface without requiring extensive coding knowledge.",
      description_b:
        "Drag-and-drop tools to define data flows, transformations, and triggers.",
    },
    {
      title: "Dynamic Authentication Support",
      description_a:
        "Easily integrate with APIs using various authentication methods like OAuth2, API keys, JWT, and Basic Authentication.",
      description_b:
        "Built-in token management for secure and seamless reauthentication.",
    },
    {
      title: "Real-Time Data Synchronization",
      description_a:
        "Enable instant data exchange between systems with real-time API calls.",
      description_b:
        "Schedule batch synchronization for non-time-sensitive operations.",
    },
    {
      title: "Pre-Built API Templates",
      description_a:
        "Access a library of pre-configured templates for popular services like Salesforce, Google APIs, AWS, Microsoft Azure, and more.",
      description_b:
        "Customize templates to match specific business requirements.",
    },
    {
      title: "AI-Driven API Mapping",
      description_a:
        "Leverage AI to automatically map fields between your system and external APIs, reducing manual effort.",
      description_b:
        "AI-powered suggestions to optimize API integration workflows.",
    },
    {
      title: "Error Handling and Retry Mechanism",
      description_a:
        "Built-in error handling to identify and manage API call failures.",
      description_b:
        "Automatic retries with exponential backoff to ensure successful data transmission.",
    },
    {
      title: "Data Transformation",
      description_a:
        "Transform data formats on the fly with drag-and-drop tools for mapping, filtering, and enrichment.",
      description_b:
        "Apply validation rules to ensure data consistency and accuracy.",
    },
    {
      title: "Comprehensive Logging and Monitoring",
      description_a:
        "Monitor API usage, call performance, and data exchange with real-time dashboards.",
      description_b:
        "Detailed logs for debugging, tracking, and compliance reporting.",
    },
    {
      title: "Scalability and High Performance",
      description_a:
        "Support for high-volume API transactions, ensuring performance even during peak loads.",
      description_b:
        "Horizontally scalable architecture to meet growing business needs.",
    },
    {
      title: "Event-Driven Workflows",
      description_a:
        "Trigger actions or workflows in response to API events, enabling automation of complex processes.",
      description_b:
        "Supports webhook-based integration for instant event notifications.",
    },
    {
      title: "Security and Compliance",
      description_a:
        "Ensure secure communication with HTTPS, TLS encryption, and IP whitelisting.",
      description_b:
        "Comply with data privacy regulations like GDPR, CCPA, and HIPAA by managing API data responsibly.",
    },
    {
      title: "Version Management",
      description_a:
        "Support for API versioning to maintain compatibility with evolving third-party services.",
      description_b:
        "Seamlessly migrate to newer API versions without disrupting operations.",
    },
  ];

  return (
    <section
      className="  py-10 rounded-[15px]  px-10 bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/product-assests/product-bg-2.jpg)",
      }}
      id="more"
    >
      <div className="w-full h-[80px] bg-white rounded-[15px] pt-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-[secondary]">
          Key Features of Our External API Connector
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-[35px] py-2 mt-5 font-[secondary]">
        {kycData.map((card, index) => (
          <div
            className="  flex flex-col justify-center items-center bg-cover h-[350px] px-2 py-4 border-black border-b-[1px] border-r-[2px] isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5"
            key={index}
          >
            <h3 className="text-[29px] font-semibold  mb-3 text-center">
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
