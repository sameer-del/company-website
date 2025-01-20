"use client";

const WhoCard = () => {
  const Data = [
    {
      title: "Aadhaar Data Management for AUAs, KUAs, and Sub-AUAs",
      style:
        "bg-[#e8fffb] row-span-2 h-[500px] flex justify-center items-center flex-col text-center",
      description:
        "Designed for AUAs, KUAs, and Sub-AUAs managing Aadhaar data for identification or transactions, ensuring secure and compliant handling of sensitive information.",
    },
    {
      title: "Secure Aadhaar Data Storage for Organizations",
      style: "bg-[#f4ffec]",
      description:
        "Tailored for organizations storing Aadhaar numbers and eKYC data for regulatory or operational purposes, offering a robust solution for data protection and compliance.",
    },
    {
      title: "Compliant Data Management for Businesses",
      style: "bg-[#fdffef]",
      description:
        "A perfect fit for businesses looking for secure and compliant data management solutions, ensuring Aadhaar data is handled with the utmost security and regulatory adherence.",
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
        <div className="grid lg:grid-cols-2  place-items-center gap-5">
          {Data.map((card, index) => (
            <div
              className={`lg:w-[488px]  p-[25px] rounded-[30px]  bg-[#f4ffec]  shadow-md ${card.style}`}
              key={index}
            >
              <h1 className="font-raleway text-[25px] pb-3">{card.title}</h1>
              <p className=" font-raleway text-[17px]">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default WhoCard;
