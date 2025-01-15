"use client";

const Cards = () => {
  const kycData = [
    {
      title: "Advanced Encryption for Data Security",
      description_a:
        "Protect documents at rest and in transit with AES-256 encryption.",
      description_b:
        "Store encryption keys securely using a Hardware Security Module (HSM) to comply with strict security standards.",
    },
    {
      title: "Secure Storage with Vault-Like Protection",
      description_a:
        "Implement a document vault that ensures restricted access to sensitive files.",
      description_b:
        "UUID-based reference keys replace document identifiers, ensuring original document mapping remains computationally infeasible.",
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description_a:
        "Assign granular permissions to users based on roles to control document access.",
      description_b:
        "Manage permissions dynamically to accommodate changing user roles and responsibilities.",
    },
    {
      title: "Version Control and Audit Logs",
      description_a:
        "Maintain version history for every document, enabling easy rollback to previous versions.",
      description_b:
        "Comprehensive audit logs track all document activities, such as uploads, downloads, edits, and deletions.",
    },
    {
      title: "Intelligent Document Search",
      description_a:
        "Use metadata, keywords, or advanced filters to quickly locate documents.",
      description_b:
        "AI-powered search suggestions improve search accuracy and speed.",
    },
    {
      title: "Workflow Automation",
      description_a:
        "Automate approval processes, notifications, and document routing based on predefined rules.",
      description_b:
        "Support for multi-step workflows with real-time tracking.",
    },
    {
      title: "Seamless Integration",
      description_a:
        "Integrate with existing enterprise systems like CRMs, ERPs, and HRMS.",
      description_b:
        "REST APIs enable dynamic document retrieval and upload from third-party applications.",
    },
    {
      title: "Bulk Document Handling",
      description_a:
        "Support batch uploads and downloads to manage large volumes of documents efficiently.",
      description_b:
        "Automated indexing and tagging for easy organization and retrieval.",
    },
    {
      title: "Secure Sharing and Collaboration",
      description_a:
        "Share documents securely with internal or external stakeholders through encrypted links.",
      description_b:
        "Allow real-time collaboration with activity tracking and role-specific permissions.",
    },
    {
      title: "Real-Time Alerts and Notifications",
      description_a:
        "Get notified about unauthorized access attempts, document changes, or pending approvals.",
      description_b:
        "Ensure data security and workflow compliance with instant alerts.",
    },
    {
      title: "Compliance-Ready Architecture",
      description_a:
        "Meet industry regulations like GDPR, HIPAA, and ISO standards for data management.",
      description_b: "Enable audit-ready reports for regulatory inspections.",
    },
    {
      title: "AI-Driven Insights and Optimization",
      description_a:
        "Leverage AI to analyze document usage patterns and suggest improvements.",
      description_b:
        "AI-based recommendations for document categorization and folder organization.",
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
        Key Features of Our Document Management System
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
