"use client";

const Cards = () => {
  const Data = [
    {
      title: "Tokenization for Enhanced Security",
      number: "01",
      description:
        "Replace sensitive Aadhaar numbers with secure token values. Ensure tokenized data maintains the format of the original input for operational ease.",
    },
    {
      title: "Advanced Encryption Standards",
      number: "02",
      description:
        "Encrypt Aadhaar numbers and associated eKYC data using AES-256 encryption. Store encryption keys securely in a Hardware Security Module (HSM).",
    },
    {
      title: "Dynamic Integration Capabilities",
      number: "03",
      description:
        "REST APIs enable secure storage and retrieval of Aadhaar numbers and eKYC data. Integrates seamlessly with existing applications and databases across various industries.",
    },
    {
      title: "Comprehensive System Management",
      number: "04",
      description:
        "Create and manage policies for client access and allowed operations. Monitor user access and application operations through detailed audit logs.",
    },
    {
      title: "Bulk and Real-Time Processing",
      number: "05",
      description:
        "Support for both single and bulk requests for efficient data handling.",
    },
    {
      title: "AI-Driven Data Mapping",
      number: "06",
      description:
        "Automatically identify Aadhaar-linked data based on sample patterns. Streamlines the mapping of Aadhaar numbers to reference keys for improved efficiency.",
    },
    {
      title: "Scalable and Secure Architecture",
      number: "07",
      description:
        "Automatically scales to handle high transaction volumes and peak loads. Built-in alerts for unauthorized access attempts to ensure data security.",
    },
  ];

  return (
    <section className="px-5 py-[100px] lg:px-[100px] bg-[#f8f9fa]" id="more">
      <div className="">
        <h1 className="lg:text-[45px] text-[35px] font-raleway font-[600]">
          Key Features of Our Aadhaar Data Vault
        </h1>
        <p className="lg:text-[18px] font-raleway mt-2">
          key features and important points of our Product
        </p>
      </div>
      <section className="mt-5 ">
        <div className="grid lg:grid-cols-3 place-items-center gap-[24px]">
          {Data.map((card, index) => (
            <div key={index} className="lg:w-[465px] px-[24px] py-[10px]">
              <div className="h-[100px] font-para text-[85px] font-[900] text-[#c1f4e1]">
                {card.number}
              </div>
              <h1 className="h-[100px] font-raleway lg:text-[28px] text-[24px] font-[700] max-w-[75%] mt-5 ">
                {card.title}
              </h1>
              <p className="font-para">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Cards;
