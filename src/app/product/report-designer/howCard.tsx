"use client";

const HowCards = () => {
  const Data = [
    {
      description: "Enterprises needing streamlined reporting solutions.",
    },
    {
      description:
        "Small Businesses looking for cost-effective, professional reporting tools.",
    },
    {
      description:
        "Data Analysts and Managers seeking dynamic visualization and insights.",
    },
    {
      description:
        "Connect with your systems via APIs and let the engine scale automatically.",
    },
  ];
  return (
    <section className="bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="">
        <h1 className="lg:text-[45px] text-center text-[28px] font-raleway font-[600]">
          Who Can Benefit?
        </h1>
      </div>
      <section className="mt-5">
        <div className="grid lg:grid-cols-3 gap-5">
          {Data.map((card, index) => (
            <div
              className="lg:w-[408px] py-[25px] px-[15px] rounded-[30px] h-[150px] bg-[#f4ffec] flex justify-center items-center shadow-md"
              key={index}
            >
              <p className="text-center font-raleway text-[20px]">
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
