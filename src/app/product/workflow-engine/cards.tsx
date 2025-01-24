"use client";

const Cards = () => {
  const Data = [
    {
      title: "Visual Workflow Designer",
      description:
        "Build workflows using an intuitive drag-and-drop interface. Define tasks, conditions, and transitions without the need for complex coding.",
      number: "01",
    },
    {
      title: "Dynamic Rule Integration",
      description:
        "Easily integrate business rules to dynamically route tasks or trigger actions. Supports real-time rule evaluation for decision-based workflows.",
      number: "02",
    },
    {
      title: "AI-Driven Optimization",
      description:
        "AI-powered recommendations to optimize workflow efficiency and identify bottlenecks. Predictive analytics for forecasting workflow outcomes and resource allocation.",
      number: "03",
    },
    {
      title: "Multi-Step Process Automation",
      description:
        "Automate multi-step processes across teams, departments, or applications. Support for sequential, parallel, or conditional workflows based on business needs.",
      number: "04",
    },
    {
      title: "Role-Based Access and Approvals",
      description:
        "Assign specific roles and permissions to ensure secure and efficient task execution. Integrate approval hierarchies for task validation before progression.",
      number: "05",
    },
    {
      title: "Real-Time Monitoring and Dashboards",
      description:
        "Monitor the status of workflows in real-time using intuitive dashboards. Gain actionable insights with key metrics like task completion rates, SLA adherence, and workflow duration.",
      number: "06",
    },
    {
      title: "Event-Driven Triggers",
      description:
        "Automate task initiation based on specific events or triggers (e.g., new customer sign-up, order placed). Supports webhook and API-based triggers for seamless integration.",
      number: "07",
    },
    {
      title: "Seamless Integration with Systems",
      description:
        "Connect your workflows with existing applications, databases, and services through REST APIs. Compatible with CRMs, ERPs, and third-party platforms for end-to-end process automation.",
      number: "08",
    },
    {
      title: "Scalability and High Performance",
      description:
        "Handle high-volume workflows efficiently with scalable architecture. Suitable for organizations of any size or complexity.",
      number: "09",
    },
    {
      title: "Version Control and Audit Trails",
      description:
        "Keep track of workflow updates with versioning to ensure seamless rollbacks. Maintain detailed logs of workflow execution for compliance and traceability.",
      number: "10",
    },
    {
      title: "SLA Management",
      description:
        "Set and track Service Level Agreements (SLAs) for tasks or processes. Automatic escalation for tasks nearing SLA breaches.",
      number: "11",
    },
    {
      title: "Notifications and Alerts",
      description:
        "Notify stakeholders of task assignments, escalations, or updates via email, SMS, or system notifications. Real-time alerts for delayed or failed tasks to ensure quick resolution.",
      number: "12",
    },
  ];

  return (
    <section className="px-5 py-[100px] lg:px-[100px] bg-[#f8f9fa]" id="more">
      <div className="">
        <h1 className="lg:text-[45px] text-[35px] font-raleway font-[600] capitalize">
          Key Features of Our Workflow Engine
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
