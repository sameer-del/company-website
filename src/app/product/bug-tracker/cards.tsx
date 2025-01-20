"use client";

const Cards = () => {
  const Data = [
    {
      title: "In-App Issue Reporting",
      description:
        "Customers can easily raise production issues while using the application. Intuitive interface for capturing issue details, ensuring a user-friendly experience.",
      number: "01",
    },
    {
      title: "Screen Recording for Easy Debugging",
      description:
        "Integrated screen recording feature to capture the issue in real time. Automatically records steps leading to the issue, reducing ambiguity for the development team.",
      number: "02",
    },
    {
      title: "Comprehensive Issue Tracking Screen",
      description:
        "Dedicated screen to track all issues raised, complete with real-time status updates. Role-based access for customers, supervisors, and management to view and monitor issues.",
      number: "03",
    },
    {
      title: "Full Issue Workflow Management",
      description:
        "Complete visibility of the issue lifecycle, from reporting to resolution. Support for custom workflows to match organizational processes.",
      number: "04",
    },
    {
      title: "Development Team Access",
      description:
        "Development support team can view, update, and manage issue statuses. Assign issues to specific team members or groups for streamlined resolution.",
      number: "05",
    },
    {
      title: "Evidence Upload",
      description:
        "Customers can upload screenshots, logs, or other relevant evidence to support the issue. Ensures detailed information for faster resolution by the support team.",
      number: "06",
    },
    {
      title: "SLA Configuration and Breach Alerts",
      description:
        "Configure SLAs for each issue type and severity level. Automated alerts for SLA breaches to ensure timely resolution.",
      number: "07",
    },
    {
      title: "Notifications for Critical Issues",
      description:
        "Real-time email and SMS notifications for high-priority or critical issues. Keeps stakeholders informed of critical updates and resolutions.",
      number: "08",
    },
    {
      title: "Role-Based Access and Permissions",
      description:
        "Controlled access for customers, supervisors, management, and support teams. Ensures data security and confidentiality while enabling collaboration.",
      number: "09",
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
