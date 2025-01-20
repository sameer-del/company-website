import Link from "next/link";
import { Suspense, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export default function navlinks() {
  const [heading, setHeading] = useState("");
  const links = [
    {
      name: "about",
      id: 1,
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "cooperate profile", link: "/about" },
            { name: "new and events", link: "/about" },
            { name: "blog", link: "/about" },
            { name: "career", link: "/about/career" },
          ],
        },
      ],
    },
    {
      name: "product",
      id: 2,
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "report designer", link: "/product/report-designer" },

            { name: "rule engine", link: "/product/rule-engine" },
            {
              name: "loan calculator engine",
              link: "/product/loan-calculater-engine",
            },
            { name: "screen designer", link: "/product/screen-designer" },
            { name: "Aadhaar Data Vault ", link: "/product/aadhar-vault" },
            { name: "KYC Vault Solution ", link: "/product/kyc-vault" },
            { name: "letter designer", link: "/product/letter-designer" },
            {
              name: "external api connecter",
              link: "/product/external-api-connector",
            },
            {
              name: "document management",
              link: "/product/document-management",
            },
            { name: "bug tracker", link: "/product/bug-tracker" },
            { name: "job designer", link: "/product/job-designer" },
            {
              name: "authentication and authorization",
              link: "/product/authentication-authorization",
            },

            { name: "workflow Engine", link: "/product/workflow-engine" },
          ],
        },
      ],
    },
    {
      name: "industries",
      id: 3,
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "financial service", link: "/about" },
            { name: "human resiurces", link: "/about" },
            { name: "manufacturing", link: "/about" },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        {links.map((link, index) => (
          <div key={index}>
            <div className="px-5 text-left group  duration-500">
              <h1
                className="py-7 font-raleway hover:-translate-y-1 hover:scale-10 duration-300  uppercase font-semibold text-black sm:text-black cursor-pointer"
                key={link.id}
                onClick={() =>
                  heading !== link.name ? setHeading(link.name) : setHeading("")
                }
              >
                {link.name}
                <span className="ml-2 inline-block lg:hidden">
                  {heading === link.name ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </h1>

              {link.submenu && (
                <div>
                  <div className="absolute top-[4rem] duration-300  z-10 hidden group-hover:md:block hover:md:block ">
                    <div className="py-3">
                      <div className="w-4 h-4 left-[2.0rem] absolute mt-1 bg-black  rotate-45"></div>
                    </div>
                    <div className=" bg-black  p-5 w-[600px]  rounded-md shadow-slate-950">
                      {link.sublinks.map((mysublinks, index) => (
                        <ul
                          className=" grid grid-cols-3 gap-8 text-white font-serif text-[18px] capitialize "
                          key={index}
                        >
                          {mysublinks.sublink.map((slink, index) => (
                            <li key={index} className="">
                              <Link
                                href={slink.link}
                                className=" hover:text-green-700 duration-150 "
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* mobile menu */}
              <div
                className={`${heading === link.name ? "md:hidden" : "hidden"}`}
              >
                {link.sublinks.map((slinks, index) => (
                  <div key={index}>
                    <div>
                      {slinks.sublink.map((slink, index) => (
                        <h1
                          className="sm:hidden  pl-5 text-[19px] capitalize font-[secondary] font-bold border-b-2 py-2"
                          key={index}
                        >
                          <Link href={slink.link}>{slink.name}</Link>
                        </h1>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Suspense>
    </>
  );
}
function usestate(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
