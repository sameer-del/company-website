"use client";

const Cards = () => {
  const Data = [
    {
      title: "Drag-and-Drop Template Builder",
      number: "01",
      description:
        "Easily design letter templates with an intuitive drag-and-drop interface. Add text boxes, headers, footers, tables, placeholders, and logos with just a few clicks.",
    },
    {
      title: "Dynamic Data Integration",
      number: "02",
      description:
        "Automatically populate letters with data from your systems (e.g., names, dates, sanction details) using dynamic placeholders. Seamless integration with databases, CRMs, LOS, and ERP systems for real-time data mapping.",
    },
    {
      title: "Predefined Letter Templates",
      number: "03",
      description:
        "Access a library of professionally designed templates for various use cases like sanction letters, appointment letters, and more. Customize templates to align with your brand guidelines.",
    },
    {
      title: "Real-Time Preview",
      number: "04",
      description:
        "View a live preview of the letter while designing, ensuring the final output meets your expectations.",
    },
    {
      title: "Multilingual Support",
      number: "05",
      description:
        "Create letters in multiple languages to cater to diverse audiences, with built-in language translation support.",
    },
    {
      title: "Conditional Logic",
      number: "06",
      description:
        "Use conditional rules to dynamically include or exclude sections of the letter based on the recipient’s data. For example, add specific terms only for customers meeting certain criteria.",
    },
    {
      title: "Rich Text Formatting",
      number: "07",
      description:
        "Use advanced text editing tools to format content with fonts, colors, bullet points, and alignment options. Add watermarks, digital signatures, and other branding elements for a professional touch.",
    },
    {
      title: "Version Control",
      number: "08",
      description:
        "Maintain a version history of all templates, ensuring you can revert to previous versions if needed. Avoid inconsistencies caused by unauthorized changes.",
    },
    {
      title: "Compliance-Ready Documents",
      number: "09",
      description:
        "Ensure all generated letters adhere to regulatory and organizational standards. Embed disclaimers, legal clauses, and approval signatures automatically.",
    },
    {
      title: "Bulk Generation and Distribution",
      number: "10",
      description:
        "Generate letters in bulk with unique recipient data for high-volume processes like loan approvals or appointment communications. Distribute via email, print, or download options directly from the platform.",
    },
    {
      title: "Approval Workflow",
      number: "11",
      description:
        "Integrate approval workflows to review and approve letters before sending them. Notify relevant stakeholders with automated alerts and track the approval status.",
    },
    {
      title: "Analytics and Reporting",
      number: "12",
      description:
        "Gain insights into letter generation and distribution activities. Monitor delivery status, open rates (for email letters), and user engagement.",
    },
  ];

  return (
    <section className="px-5 py-[100px] lg:px-[100px] bg-[#f8f9fa]" id="more">
      <div className="">
        <h1 className="lg:text-[45px] text-[35px] font-raleway font-[600]">
          Key Features of Our Letter Designer
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
