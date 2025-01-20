"use client";

const HowCards = () => {
  const Data = [
    {
      title: "Legal and Regulatory Compliance",
      description:
        "Manage contracts, policies, and compliance-related documents securely.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "HR and Recruitment",
      description:
        "Store and manage employee records, resumes, and onboarding documents.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "Finance and Banking",
      description:
        "Handle loan applications, customer agreements, and audit reports.",
      style: "bg-[#e6f7ff]",
    },
    {
      title: "Healthcare",
      description:
        "Securely store patient records, prescriptions, and medical reports.",
      style: "bg-[#fff2cc]",
    },
    {
      title: "Education",
      description:
        "Organize student records, certificates, and course materials.",
      style: "bg-[#ffebcd] lg:col-span-2",
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
