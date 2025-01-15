"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Howitworks = () => {
  const [heading, setHeading] = useState("");
  const howData = [
    {
      title: "Upload Documents",
      description:
        "Securely upload files via the user interface, bulk upload, or REST APIs.",
    },
    {
      title: "Encrypt and Store",
      description:
        "Documents are encrypted and stored with unique reference keys in the document vault.",
    },
    {
      title: "Assign Access",
      description:
        "Define user roles and permissions for secure document access and management.",
    },
    {
      title: "Retrieve and Share",
      description:
        "Easily search, retrieve, and share documents with authorized users.",
    },
    {
      title: "Track and Audit",
      description:
        "Monitor document activities and generate compliance-ready audit reports.",
    },
  ];

  return (
    <section className=" relative max-w-[98%] mx-auto bg-black py-10 rounded-[15px] h-[100vh] mt-[20px] lg:px-10 px-3">
      <div className="lg:max-w-[98%] lg:mx-auto lg:px-6  ">
        <h2 className="text-[35px] uppercase font-[secondary] text-white/[0.5] text-center hover:text-white transition-all  font-semibold w-full   mb-1">
          How It Works
        </h2>
        <div className=" mt-10 flex justify-between items-center gap-10  h-[80vh]">
          <div className="flex-1">
            {" "}
            {howData.map((card, index) => (
              <div
                className="realtive group duration-500  p-6 rounded-lg shadow mb-3 border-white border-b-2 "
                key={index}
              >
                <h3
                  className="text-[35px] uppercase font-[secondary] text-white/[0.5] hover:text-white transition-all  font-semibold w-full   mb-3"
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
                  className={`${heading === card.title ? "group-hover:block w-full text-[19px] text-white capitalize max-w-[88%] " : "hidden"}`}
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
