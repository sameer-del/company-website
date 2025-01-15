"use client";

const Cards = () => {
  const kycData = [
    {
      title: "Tokenization for Enhanced Security",
      description_a: "Replace sensitive KYC data with secure token values.",
      description_b:
        "Ensure tokenized data maintains the format of the original input for operational ease.",
    },
    {
      title: "Advanced Encryption Standards",
      description_a: "Encrypt KYC data using AES-256 encryption.",
      description_b:
        "Store encryption keys securely in a Hardware Security Module (HSM).",
    },
    {
      title: "Dynamic Integration Capabilities",
      description_a:
        "REST APIs enable secure storage and retrieval of KYC data.",
      description_b:
        "Seamlessly integrates with existing applications and databases across various industries.",
    },
    {
      title: "Comprehensive System Management",
      description_a:
        "Create and manage policies for client access and allowed operations.",
      description_b:
        "Monitor user access and application operations through detailed audit logs.",
    },
    {
      title: "Bulk and Real-Time Processing",
      description_a:
        "Support for both single and bulk requests for efficient data handling.",
      description_b: "",
    },
    {
      title: "AI-Driven Data Mapping",
      description_a:
        "Automatically identify KYC-linked data based on sample patterns.",
      description_b:
        "Streamline the mapping of customer information to reference keys for improved efficiency.",
    },
    {
      title: "Scalable and Secure Architecture",
      description_a:
        "Automatically scales to handle high transaction volumes and peak loads.",
      description_b:
        "Built-in alerts for unauthorized access attempts to ensure data security.",
    },
  ];

  return (
    <section
      className="  py-10 rounded-[15px]  px-10 bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/product-assests/product-bg-2.jpg)",
      }}
      id="more"
    >
      <div className="w-full h-[80px] bg-white rounded-[15px] pt-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-[secondary]">
          Key Features of Our KYC Vault
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-[35px] py-2 mt-5 font-[secondary]">
        {kycData.map((card, index) => (
          <div
            className="  flex flex-col justify-center items-center bg-cover h-[350px] px-2 py-4 border-black border-b-[1px] border-r-[2px] isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5"
            key={index}
          >
            <h3 className="text-[29px] font-semibold  mb-3 text-center">
              {card.title}
            </h3>
            <ul className="text-center pl-5  space-y-2">
              <li className="text-[19px]">{card.description_a}</li>
              <li className="text-[19px]">{card.description_b}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
