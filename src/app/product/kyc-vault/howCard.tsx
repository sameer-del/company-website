"use client";

const HowCards = () => {
  const howData = [
    {
      title: "Seamless API Integration",
      description:
        "Easily integrate the KYC Vault with existing systems through secure and simple REST APIs.",
    },
    {
      title: "Comprehensive Access Logs",
      description:
        "View detailed API access logs with advanced search capabilities via an intuitive web interface.",
    },
    {
      title: "End-to-End Data Security",
      description:
        "Benefit from strong database encryption, ensuring data remains protected even in the event of a security breach.",
    },
    {
      title: "Compliance with Regulatory Standards",
      description:
        "Leverage encryption with leading HSM models to meet mandatory compliance and regulatory encryption guidelines.",
    },
    {
      title: "UUID-Based Reference Keys",
      description:
        "Protect sensitive customer data with computationally infeasible reference keys, ensuring secure and private mapping.",
    },
    {
      title: "Role-Based Access Control",
      description:
        "Manage user access effectively with a role-based administration console for secure viewing of reference key mappings and access logs.",
    },
    {
      title: "Real-Time Alerts",
      description:
        "Stay alerted with instant notifications for any unauthorized transactions to safeguard your data.",
    },
  ];

  return (
    <section className=" relative max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] lg:px-10 px-3">
      <div className="lg:max-w-5xl lg:mx-auto lg:px-6 ">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          KYC Vault: Secure, Efficient, and Trustworthy
        </h2>
        <div className=" mt-10">
          {howData.map((card, index) => (
            <div
              className="realtive group duration-500 bg-white p-6 rounded-lg shadow hover:border-black    border-blue-600  border-b-4 border-r-4 hover:bg-blue-400 hover:text-white"
              key={index}
            >
              <h3 className="text-xl  font-semibold w-full  mb-3">
                {card.title}
              </h3>

              <p className=" hidden group-hover:block capitalize font-[secondary] text-[19px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden lg:block absolute bottom-[100px] left-[80px]">
          <img src="/images/arrow-grp.svg" alt="das" />
        </div>
      </div>
    </section>
  );
};

export default HowCards;
