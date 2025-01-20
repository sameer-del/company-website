"use client";

const HowCards = () => {
  const Data = [
    {
      title: "Payment Gateways",
      description:
        "Integrate with third-party payment providers to process transactions securely.",
      style: "bg-[#f2f2f2]",
    },
    {
      title: "CRM and ERP Integration",
      description:
        "Synchronize customer and operational data across platforms like Salesforce or SAP.",
      style: "bg-[#d6f5d6]",
    },
    {
      title: "Social Media and Marketing",
      description:
        "Connect with APIs from Facebook, Twitter, or Mailchimp for campaign automation.",
      style: "bg-[#e6f7ff]",
    },
    {
      title: "E-Commerce Platforms",
      description:
        "Link with marketplaces like Amazon or Shopify for order and inventory management.",
      style: "bg-[#fff2cc]",
    },
    {
      title: "Financial Services",
      description:
        "Integrate with external systems for loan processing, credit checks, or real-time financial data.",
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
