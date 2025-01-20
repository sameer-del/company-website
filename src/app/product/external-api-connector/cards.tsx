"use client";

const Cards = () => {
  const Data = [
    {
      title: "Universal API Compatibility",
      number: "01",
      description:
        "Supports REST, SOAP, GraphQL, and WebSocket APIs for comprehensive integration coverage. Handles different data formats like JSON, XML, and plain text effortlessly.",
    },
    {
      title: "No-Code/Low-Code Integration",
      number: "02",
      description:
        "Build API connections through a user-friendly interface without requiring extensive coding knowledge. Drag-and-drop tools to define data flows, transformations, and triggers.",
    },
    {
      title: "Dynamic Authentication Support",
      number: "03",
      description:
        "Easily integrate with APIs using various authentication methods like OAuth2, API keys, JWT, and Basic Authentication. Built-in token management for secure and seamless reauthentication.",
    },
    {
      title: "Real-Time Data Synchronization",
      number: "04",
      description:
        "Enable instant data exchange between systems with real-time API calls. Schedule batch synchronization for non-time-sensitive operations.",
    },
    {
      title: "Pre-Built API Templates",
      number: "05",
      description:
        "Access a library of pre-configured templates for popular services like Salesforce, Google APIs, AWS, Microsoft Azure, and more. Customize templates to match specific business requirements.",
    },
    {
      title: "AI-Driven API Mapping",
      number: "06",
      description:
        "Leverage AI to automatically map fields between your system and external APIs, reducing manual effort. AI-powered suggestions to optimize API integration workflows.",
    },
    {
      title: "Error Handling and Retry Mechanism",
      number: "07",
      description:
        "Built-in error handling to identify and manage API call failures. Automatic retries with exponential backoff to ensure successful data transmission.",
    },
    {
      title: "Data Transformation",
      number: "08",
      description:
        "Transform data formats on the fly with drag-and-drop tools for mapping, filtering, and enrichment. Apply validation rules to ensure data consistency and accuracy.",
    },
    {
      title: "Comprehensive Logging and Monitoring",
      number: "09",
      description:
        "Monitor API usage, call performance, and data exchange with real-time dashboards. Detailed logs for debugging, tracking, and compliance reporting.",
    },
    {
      title: "Scalability and High Performance",
      number: "10",
      description:
        "Support for high-volume API transactions, ensuring performance even during peak loads. Horizontally scalable architecture to meet growing business needs.",
    },
    {
      title: "Event-Driven Workflows",
      number: "11",
      description:
        "Trigger actions or workflows in response to API events, enabling automation of complex processes. Supports webhook-based integration for instant event notifications.",
    },
    {
      title: "Security and Compliance",
      number: "12",
      description:
        "Ensure secure communication with HTTPS, TLS encryption, and IP whitelisting. Comply with data privacy regulations like GDPR, CCPA, and HIPAA by managing API data responsibly.",
    },
    {
      title: "Version Management",
      number: "13",
      description:
        "Support for API versioning to maintain compatibility with evolving third-party services. Seamlessly migrate to newer API versions without disrupting operations.",
    },
  ];

  return (
    <section className="px-5 py-[100px] lg:px-[100px] bg-[#f8f9fa]" id="more">
      <div className="">
        <h1 className="lg:text-[45px] text-[35px] font-raleway font-[600] capitalize">
          Key Features of Our external api connecter
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
