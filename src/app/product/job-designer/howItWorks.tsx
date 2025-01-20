"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Howitworks = () => {
  const [heading, setHeading] = useState("");
  const Data = [
    {
      title: "Job Configuration",
      description:
        "Define task parameters using the Job Designer interface. Specify the type of job (database procedure, class file, or API call).",
    },
    {
      title: "Schedule Creation",
      description:
        "Set up a schedule with precise timing and recurrence patterns. Use adhoc execution for urgent tasks.",
    },
    {
      title: "Monitoring and Notifications",
      description:
        "Track job execution status and receive real-time alerts for completions or issues.",
    },
    {
      title: "Analysis and Optimization",
      description:
        "Use audit trails and reports to refine workflows and improve efficiency.",
    },
  ];

  return (
    <section className=" relative max-w-[98%] mx-auto text-black py-10 rounded-[15px]  mt-[20px] lg:px-10 px-3 font-raleway">
      <div className="lg:max-w-[98%] lg:mx-auto lg:px-6  ">
        <h2 className="lg:text-[45px] text-center text-[28px] font-raleway font-[600]">
          How It Works
        </h2>
        <div className=" mt-10 flex lg:flex-row flex-col justify-between items-center gap-10  ">
          <div className="flex-1">
            {" "}
            {Data.map((card, index) => (
              <div
                className="realtive group duration-500  p-6 rounded-lg shadow mb-3 hover:cursor-pointer border-white border-b-2 "
                key={index}
              >
                <h3
                  className="text-[30px]  uppercase   transition-all  font-semibold w-full   mb-3"
                  onClick={() =>
                    heading !== card.title
                      ? setHeading(card.title)
                      : setHeading("")
                  }
                >
                  {card.title}
                  <span className="pl-[10px]  inline-block ">
                    {heading === card.title ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </h3>

                <p
                  className={`${heading === card.title ? "group-hover:block w-full text-[19px] capitalize max-w-[88%] " : "hidden"}`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <img src="/images/product-assests/product-how-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
