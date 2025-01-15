"use client";

const Cards = () => {
  const letterData = [
    {
      title: "Drag-and-Drop Template Builder",
      description_a:
        "Easily design letter templates with an intuitive drag-and-drop interface.",
      description_b:
        "Add text boxes, headers, footers, tables, placeholders, and logos with just a few clicks.",
    },
    {
      title: "Dynamic Data Integration",
      description_a:
        "Automatically populate letters with data from your systems (e.g., names, dates, sanction details) using dynamic placeholders.",
      description_b:
        "Seamless integration with databases, CRMs, LOS, and ERP systems for real-time data mapping.",
    },
    {
      title: "Predefined Letter Templates",
      description_a:
        "Access a library of professionally designed templates for various use cases like sanction letters, appointment letters, and more.",
      description_b: "Customize templates to align with your brand guidelines.",
    },
    {
      title: "Real-Time Preview",
      description_a:
        "View a live preview of the letter while designing, ensuring the final output meets your expectations.",
      description_b: "",
    },
    {
      title: "Multilingual Support",
      description_a:
        "Create letters in multiple languages to cater to diverse audiences.",
      description_b: "Built-in language translation support.",
    },
    {
      title: "Conditional Logic",
      description_a:
        "Use conditional rules to dynamically include or exclude sections of the letter based on the recipient’s data.",
      description_b:
        "For example, add specific terms only for customers meeting certain criteria.",
    },
    {
      title: "Rich Text Formatting",
      description_a:
        "Use advanced text editing tools to format content with fonts, colors, bullet points, and alignment options.",
      description_b:
        "Add watermarks, digital signatures, and other branding elements for a professional touch.",
    },
    {
      title: "Version Control",
      description_a:
        "Maintain a version history of all templates, ensuring you can revert to previous versions if needed.",
      description_b: "Avoid inconsistencies caused by unauthorized changes.",
    },
    {
      title: "Compliance-Ready Documents",
      description_a:
        "Ensure all generated letters adhere to regulatory and organizational standards.",
      description_b:
        "Embed disclaimers, legal clauses, and approval signatures automatically.",
    },
    {
      title: "Bulk Generation and Distribution",
      description_a:
        "Generate letters in bulk with unique recipient data for high-volume processes like loan approvals or appointment communications.",
      description_b:
        "Distribute via email, print, or download options directly from the platform.",
    },
    {
      title: "Approval Workflow",
      description_a:
        "Integrate approval workflows to review and approve letters before sending them.",
      description_b:
        "Notify relevant stakeholders with automated alerts and track the approval status.",
    },
    {
      title: "Analytics and Reporting",
      description_a:
        "Gain insights into letter generation and distribution activities.",
      description_b:
        "Monitor delivery status, open rates (for email letters), and user engagement.",
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
          Key Features of Our Letter Designer
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-[35px] py-2 mt-5 font-[secondary]">
        {letterData.map((card, index) => (
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
