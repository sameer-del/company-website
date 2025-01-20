"use client";

const Cards = () => {
  const Data = [
    {
      title: "User-Friendly Job Designer Screen",
      description:
        "Configure jobs effortlessly with an intuitive drag-and-drop interface. Define job parameters for various task types, including database procedures, class files, and API calls.",
      number: "01",
    },
    {
      title: "Flexible Scheduling Options",
      description:
        "Schedule jobs to run at specific times or intervals (e.g., daily, weekly, or monthly). Configure complex schedules with custom recurrence patterns to match your operational needs.",
      number: "02",
    },
    {
      title: "Adhoc Execution",
      description:
        "Trigger jobs manually as needed, bypassing predefined schedules for on-demand flexibility. Ideal for urgent or one-time tasks requiring immediate attention.",
      number: "03",
    },
    {
      title: "Comprehensive Monitoring and Management",
      description:
        "Track job execution statuses, including success, failure, and in-progress states. View detailed logs for troubleshooting and performance analysis.",
      number: "04",
    },
    {
      title: "Robust Notifications",
      description:
        "Receive email or SMS alerts for job completions, failures, or delays. Stay informed about critical tasks in real time.",
      number: "05",
    },
    {
      title: "Role-Based Access Control",
      description:
        "Define permissions for users, ensuring secure and restricted access to job configurations and schedules.",
      number: "06",
    },
    {
      title: "Audit Trails and Reporting",
      description:
        "Maintain a detailed history of job executions for compliance and performance tracking. Generate reports to analyze trends and optimize task management.",
      number: "07",
    },
  ];

  return (
    <section className="px-5 py-[100px] lg:px-[100px] bg-[#f8f9fa]" id="more">
      <div className="">
        <h1 className="lg:text-[45px] text-[35px] font-raleway font-[600] capitalize">
          Key Features of Our job designer
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
