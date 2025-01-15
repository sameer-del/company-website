"use client";

const HowCards = () => {
  const howData = [
    {
      title: "Sanction Letters",
      description:
        "Automatically generate and send approval letters for loans, credit cards, or other financial sanctions.",
    },
    {
      title: "Offer Letters",
      description:
        "Create personalized offer letters for job applicants or business proposals.",
    },
    {
      title: "Acknowledgment Letters",
      description:
        "Send acknowledgment letters for payments, receipts, or inquiries.",
    },
    {
      title: "Appointment Letters",
      description:
        "Simplify onboarding by automating appointment letters for new hires.",
    },
    {
      title: "Customer Communication",
      description:
        "Generate and send customized letters for policy updates, renewals, or promotions.",
    },
  ];

  return (
    <section className=" relative max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] lg:px-10 px-3">
      <div className="lg:max-w-5xl lg:mx-auto lg:px-6 ">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Use Cases for the Letter Designer
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
