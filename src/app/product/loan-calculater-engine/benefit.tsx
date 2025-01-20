"use client";

const Benefits = () => {
  const Data = [
    {
      description:
        "Banks and Financial Institutions looking to enhance their loan processing systems.",
    },
    {
      description: "Enterprises needing accurate financial planning tools.",
    },
    {
      description:
        "Home Buyers, Entrepreneurs, and Students exploring loan options.",
      style: "col-span-2",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] pb-[100px] lg:px-[100px] px-5">
      <div className="pb-[50px]">
        <h1 className="lg:text-[45px] text-center text-[28px] font-raleway font-[600]">
          Who Can Benefit?
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
