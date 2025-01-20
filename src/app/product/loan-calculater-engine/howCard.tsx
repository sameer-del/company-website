"use client";

const HowCards = () => {
  const Data = [
    {
      title: "Customer-Centric Design",
      description:
        "Built for simplicity and usability, even complex calculations feel intuitive.",
    },
    {
      title: "Future-Ready Technology",
      description:
        "AI-driven recommendations and automatic scaling ensure you’re prepared for any challenge.",
    },
    {
      title: "Flexible and Accessible",
      description:
        "Access from anywhere with our SaaS-based model and enjoy seamless updates.",
    },
    {
      title: "Trusted by Industry Leaders",

      description:
        "Backed by businesses to enhance customer satisfaction and operational efficiency.",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="pb-[50px]">
        <h1 className="lg:text-[45px] text-center text-[28px] font-raleway font-[600]">
          Why Choose Our Loan Calculator Engine?
        </h1>
      </div>
      <section className="">
        <div className="grid lg:grid-cols-2  place-items-center gap-5">
          {Data.map((card, index) => (
            <div
              className={`lg:w-[488px] py-[25px] px-[15px] rounded-[30px]  bg-[#f4ffec]  shadow-md `}
              key={index}
            >
              <h1 className="font-raleway text-[28px]">{card.title}</h1>
              <p className=" font-raleway text-[18px]">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HowCards;
