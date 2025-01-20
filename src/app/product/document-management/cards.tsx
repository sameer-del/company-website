"use client";

const Cards = () => {
  const Data = [
    {
      title: "Advanced Encryption for Data Security",
      description:
        "Protect documents at rest and in transit with AES-256 encryption. Store encryption keys securely using a Hardware Security Module (HSM) to comply with strict security standards.",
      number: "01",
    },
    {
      title: "Secure Storage with Vault-Like Protection",
      description:
        "Implement a document vault that ensures restricted access to sensitive files. UUID-based reference keys replace document identifiers, ensuring original document mapping remains computationally infeasible.",
      number: "02",
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description:
        "Assign granular permissions to users based on roles to control document access. Manage permissions dynamically to accommodate changing user roles and responsibilities.",
      number: "03",
    },
    {
      title: "Version Control and Audit Logs",
      description:
        "Maintain version history for every document, enabling easy rollback to previous versions. Comprehensive audit logs track all document activities, such as uploads, downloads, edits, and deletions.",
      number: "04",
    },
    {
      title: "Intelligent Document Search",
      description:
        "Use metadata, keywords, or advanced filters to quickly locate documents. AI-powered search suggestions improve search accuracy and speed.",
      number: "05",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate approval processes, notifications, and document routing based on predefined rules. Support for multi-step workflows with real-time tracking.",
      number: "06",
    },
    {
      title: "Seamless Integration",
      description:
        "Integrate with existing enterprise systems like CRMs, ERPs, and HRMS. REST APIs enable dynamic document retrieval and upload from third-party applications.",
      number: "07",
    },
    {
      title: "Bulk Document Handling",
      description:
        "Support batch uploads and downloads to manage large volumes of documents efficiently. Automated indexing and tagging for easy organization and retrieval.",
      number: "08",
    },
    {
      title: "Secure Sharing and Collaboration",
      description:
        "Share documents securely with internal or external stakeholders through encrypted links. Allow real-time collaboration with activity tracking and role-specific permissions.",
      number: "09",
    },
    {
      title: "Real-Time Alerts and Notifications",
      description:
        "Get notified about unauthorized access attempts, document changes, or pending approvals. Ensure data security and workflow compliance with instant alerts.",
      number: "10",
    },
    {
      title: "Compliance-Ready Architecture",
      description:
        "Meet industry regulations like GDPR, HIPAA, and ISO standards for data management. Enable audit-ready reports for regulatory inspections.",
      number: "11",
    },
    {
      title: "AI-Driven Insights and Optimization",
      description:
        "Leverage AI to analyze document usage patterns and suggest improvements. AI-based recommendations for document categorization and folder organization.",
      number: "12",
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
