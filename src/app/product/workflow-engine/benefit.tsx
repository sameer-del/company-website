"use client";

const Benefits = () => {
  const Data = [
    {
      title: "User-Friendly Interface",
      description:
        "Simplify workflow creation and management with an intuitive visual designer.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "AI-Powered Optimization",
      description:
        "Leverage AI to enhance workflow performance and reduce inefficiencies.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "Scalable and Secure",
      description:
        "Handle high-volume workflows with robust security and scalability.",
      style: "bg-[#e6f7ff] lg:row-span-3 flex flex-col justify-center",
    },
    {
      title: "Seamless Integration",
      description:
        "Connect with your existing systems for end-to-end process automation.",
      style: "bg-[#fff2cc]",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="pb-[50px]">
        <h1 className="lg:text-[45px] text-center text-[28px] font-raleway font-[600]">
          Why Choose Our Workflow Engine?
        </h1>
      </div>
      <section className="">
        <div className="grid lg:grid-cols-2  place-items-center gap-5">
          {Data.map((card, index) => (
            <div
              className={`lg:w-[488px] py-[25px] px-[15px] rounded-[30px]  bg-[#f4ffec]  shadow-md ${card.style}`}
              key={index}
            >
              <p className=" font-raleway text-[18px]">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Benefits;
