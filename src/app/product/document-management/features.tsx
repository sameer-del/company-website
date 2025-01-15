"use client";

const Features = () => {
  const featuresData = [
    {
      title: "Enhanced Security",
      description:
        "Protect critical documents with advanced encryption and secure storage mechanisms.",
    },
    {
      title: "Improved Productivity",
      description:
        "Streamline workflows, automate processes, and enable quick document retrieval.",
    },
    {
      title: "Compliance Assurance",
      description:
        "Stay compliant with global and industry-specific data management regulations.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce manual efforts and storage costs with automated document handling.",
    },
    {
      title: "Scalability",
      description:
        "Easily scale to accommodate increasing document volumes and user demands.",
    },
  ];

  return (
    <section className=" relative max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] lg:px-10">
      <div className="max-w-5xl mx-auto lg:px-6  px-4">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Benefits of Using Our Document Management System
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10 mb-10 text-center">
          {featuresData.map((card, index) => (
            <div
              className="realtive group duration-500 bg-white p-6 rounded-lg shadow   border-blue-600  border-b-4 border-r-4 hover:bg-blue-400 hover:text-white px-5"
              key={index}
            >
              <h3 className="text-xl  font-semibold  mb-3">{card.title}</h3>

              <p className="absolute   hidden group-hover:block capitalize font-[secondary] text-[19px] bg-white text-black text-center  p-3 border-[1px] border-black w-[400px] h-[130px] rounded-xl  ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[100px] left-[80px]">
          <img src="/images/arrow-grp.svg" alt="das" />
        </div>
      </div>
    </section>
  );
};

export default Features;
