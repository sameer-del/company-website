"use client";

const Cards = () => {
  const Data = [
    {
      title: "User-Friendly Interface",
      number: "01",
      description:
        "Drag-and-drop elements to design reports effortlessly. Pre-built templates for quick and professional-looking reports. Intuitive tools for formatting, filtering, and sorting data.",
    },
    {
      title: "Advanced Customization",
      number: "02",
      description:
        "Design charts, graphs, and tables with ease. Add branding elements like logos, headers, and footers. Define custom KPIs and metrics tailored to your business needs.",
    },
    {
      title: "Dynamic Data Integration",
      number: "03",
      description:
        "Seamlessly connect with any system or database to fetch the required data. Access real-time data for up-to-date and accurate reporting. Support for multiple data formats and sources for maximum compatibility.",
    },
    {
      title: "Powerful Scheduling and Automation",
      number: "04",
      description:
        "Schedule report generation and delivery to stakeholders automatically. Configure triggers for generating reports based on specific events or thresholds.",
    },
    {
      title: "Comprehensive Export Options",
      number: "05",
      description:
        "Export reports in multiple formats such as PDF, Excel, and CSV. Share reports via email or integrate them with your business platforms for seamless distribution.",
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
