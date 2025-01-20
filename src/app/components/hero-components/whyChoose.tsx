export default function WhyChoose() {
  const data = [
    {
      title: "Domain Knowledge & Technical Expertise",
      description:
        " Savvycom offers highly skilled professionals with extensive knowledge of trending technologies and frameworks, staying at the forefront of technological advancements  various domains",
    },
    {
      title: "Stable Engineering",

      class: "mt-[100px]",
      description:
        "ResourcesNearly half of the software development team is at the senior level with a high retention rate over the years, ensuring our consistent project delivery.",
    },
    {
      title: "High Customer satisfaction",
      description:
        " SatisfactionAs a leading software development company, Savvycom consistently fosters lasting client relationships, achieving high customer satisfaction.",
    },
    {
      title: "English Language Proficiency",
      class: "mt-[100px]",
      description:
        " Savvycom's IT team demonstrates English proficiency with advanced skills and competencies, facilitating effective communication and collaboration during software development projects.",
    },
  ];
  return (
    <section className="h-[100vh] bg-[#F2F3F4]">
      <div className="w-full text-center">
        <h1 className="text-[55px] max-w-[75%] mx-auto font-[900]  pt-[60px]">
          Why Choose ruduotech As Your <br /> Software Development Company
        </h1>
        <p className="max-w-[75%] mx-auto pt-5 text-[18px]  capitalize">
          Notable for our extensive experience in software development as a
          services, we consistently uphold a commitment to delivering
          exceptional customer satisfaction and maintaining a high retention
          rate.
        </p>
      </div>
      <div className="py-10 flex justify-center items-center gap-5">
        {data.map((box, index) => (
          <div
            className={`${box.class} w-[340px] flex justify-center  items-center text-black border-black border-2 h-[250px] rounded-[15px] bg-white/10 group duration-300 hover:bg-[#D4EBF8]`}
            key={index}
          >
            <h1 className="text-[22px] text-center px-10 group-hover:hidden font-[900]">
              {box.title}
            </h1>
            <div className="group-hover:block group-hover:duration-300 border-black border-b-2 border-t-2 py-3 rounded-[10px]  hidden px-5">
              <div className="flex flex-col">
                <h1 className="mb-5 text-[18px] font-[900]  pt-5">
                  {box.title}
                </h1>
                <p className="text-[14px]">{box.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
