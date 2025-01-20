"use client";

const HowCards = () => {
  const Data = [
    {
      title: "Seamless API Integration",
      description:
        "Easily integrate Aadhaar Data Vault with existing systems through secure and simple REST APIs.",
      style: "bg-[#e8fffb]",
    },
    {
      title: "Comprehensive Access Logs",
      description:
        "View detailed API access logs with advanced search capabilities via an intuitive web interface.",
      style: "bg-[#f4ffec]",
    },
    {
      title: "End-to-End Data Security",
      description:
        "Benefit from strong database encryption, ensuring data remains protected even in the event of a security breach.",
      style: "bg-[#fdffef]",
    },
    {
      title: "Compliance with UIDAI Standards",
      description:
        "Leverage encryption with leading HSM models to meet UIDAI’s mandatory encryption guidelines.",
      style: "bg-[#f4ffec]",
    },
    {
      title: "UUID-Based Reference Keys",
      description:
        "Protect Aadhaar numbers with computationally infeasible reference keys, ensuring secure and private mapping.",
      style: "bg-[#e8fffb]",
    },
    {
      title: "Role-Based Access Control",
      description:
        "Manage user access effectively with a role-based administration console for secure viewing of reference key mappings and access logs.",
      style: "bg-[#fdffef]",
    },
    {
      title: "Real-Time Alerts",
      description:
        "Stay alerted with instant notifications for any unauthorized transactions to safeguard your data.",
      style: "bg-[#f4ffec] lg:col-span-2",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="pb-[50px]">
        <h1 className="lg:text-[45px] text-center text-[28px] font-raleway font-[600]">
          Aadhaar Data Vault: Secure, Efficient, and Trustworthy
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
