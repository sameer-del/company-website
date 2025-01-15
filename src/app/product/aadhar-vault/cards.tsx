"use client";

const Cards = () => {
  const aadharVaultData = [
    {
      title: "Tokenization for Enhanced Security",
      description_a:
        "Replace sensitive Aadhaar numbers with secure token values.",
      description_b:
        "Ensure tokenized data maintains the format of the original input for operational ease.",
    },
    {
      title: "Advanced Encryption Standards",
      description_a:
        "Encrypt Aadhaar numbers and associated eKYC data using AES-256 encryption.",
      description_b:
        "Store encryption keys securely in a Hardware Security Module (HSM).",
    },
    {
      title: "Dynamic Integration Capabilities",
      description_a:
        "REST APIs enable secure storage and retrieval of Aadhaar numbers and eKYC data.",
      description_b:
        "Integrates seamlessly with existing applications and databases across various industries.",
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
        "Automatically identify Aadhaar-linked data based on sample patterns.",
      description_b:
        "Streamlines the mapping of Aadhaar numbers to reference keys for improved efficiency.",
    },
  ];

  return (
    <section
      className="max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] px-10"
      id="more"
    >
      <div className="w-full h-[80px] bg-white rounded-[15px] pt-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-[secondary]">
          Key Features of Our AI-Powered Business Rule Engine
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-[35px] py-2 mt-5 font-[secondary]">
        {aadharVaultData.map((card, index) => (
          <div
            className="bg-white rounded-[15px] flex flex-col justify-center items-center h-[350px] px-2 py-4 border-blue-600 border-b-4 border-r-4 hover:bg-blue-400 hover:text-white duration-100 "
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
