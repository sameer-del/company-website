"use client";

const HowCards = () => {
  const Data = [
    {
      title: "Sanction Letters",
      description:
        "Automatically generate and send approval letters for loans, credit cards, or other financial sanctions.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "Offer Letters",
      description:
        "Create personalized offer letters for job applicants or business proposals.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "Acknowledgment Letters",
      description:
        "Send acknowledgment letters for payments, receipts, or inquiries.",
      style: "bg-[#e6f7ff]",
    },
    {
      title: "Appointment Letters",
      description:
        "Simplify onboarding by automating appointment letters for new hires.",
      style: "bg-[#fff2cc]",
    },
    {
      title: "Customer Communication",
      description:
        "Generate and send customized letters for policy updates, renewals, or promotions.",
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
