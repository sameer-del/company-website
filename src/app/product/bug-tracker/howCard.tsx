"use client";

const HowCards = () => {
  const Data = [
    {
      title: "Issue Reporting",
      description:
        "Customers report issues through an in-app form, upload evidence, or use the screen recorder to document the issue.",
      style: "bg-[#ffcccc]",
    },
    {
      title: "Issue Assignment",
      description:
        "Issues are automatically assigned to the appropriate team or manually allocated.",
      style: "bg-[#cce5ff]",
    },
    {
      title: "Notification and Acknowledgment",
      description:
        "Notifications are sent to the development team and critical stakeholders.",
      style: "bg-[#d9f9d9]",
    },
    {
      title: "Status Updates",
      description:
        "Development team updates the issue status as 'In Progress,' 'Resolved,' or 'Closed.'",
      style: "bg-[#fff2cc]",
    },
    {
      title: "Monitoring",
      description:
        "Supervisors and management monitor the workflow through a dedicated dashboard.",
      style: "bg-[#e6f7ff]",
    },
    {
      title: "SLA Compliance",
      description:
        "Automated alerts for SLA breaches ensure timely escalations.",
      style: "bg-[#ffebcd]",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="pb-[50px]">
        <h1 className="lg:text-[45px] text-center text-[28px] font-raleway font-[600]">
          KYC Vault: Secure, Efficient, and Trustworthy
        </h1>
      </div>
      <section className="">
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-5">
          {Data.map((card, index) => (
            <div
              className={`lg:w-[488px]  p-[25px] rounded-[30px]  bg-[#f4ffec]  shadow-md ${card.style}`}
              key={index}
            >
              <h1 className="font-raleway text-[25px] pb-3">{card.title}</h1>
              <p className=" font-raleway text-[17px] max-w-[85%] ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HowCards;
