import Link from "next/link";
import { useState } from "react";
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
            { name: "workflow Engine", link: "/product/workflow-engine" },
            { name: "rule engine", link: "/product/rule-engine" },
            {
              name: "loan calculator engine",
              link: "/product/loan-calculator-engine",
            },
            { name: "report designer", link: "/product/report-designer" },
            { name: "letter designer", link: "/product/letter-designer" },
            { name: "bug tracker", link: "/product/bug-tracker" },
            { name: "screen designer", link: "/product/screen-designer" },
            {
              name: "document management",
              link: "/product/document-management",
            },
            { name: "job designer", link: "/product/job-designer" },
            {
              name: "external api connecter",
              link: "/product/external-api-connector",
            },
            {
              name: "authentication and authorization",
              link: "/product/authentication-authorization",
            },
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
      {links.map((link) => (
        <div>
          <div className="px-5 text-left group duration-500">
            <h1
              className="py-7  uppercase font-semibold text-white sm:text-black cursor-pointer"
              key={link.id}
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              {link.name}
            </h1>

            {link.submenu && (
              <div>
                <div className="absolute top-[6rem] z-10 hidden group-hover:md:block hover:md:block ">
                  <div className="py-3">
                    <div className="w-4 h-4 left-[2.0rem] absolute mt-1 bg-primary  rotate-45"></div>
                  </div>
                  <div className=" bg-primary  p-5 w-[600px] rounded-md shadow-slate-950">
                    {link.sublinks.map((mysublinks) => (
                      <ul className=" grid grid-cols-3 gap-8 text-white font-serif text-[18px] capitialize">
                        {mysublinks.sublink.map((slink) => (
                          <li>
                            <Link
                              href={slink.link}
                              className=" hover:text-black duration-150 "
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
              {link.sublinks.map((slinks) => (
                <div>
                  <div>
                    {slinks.sublink.map((slink) => (
                      <h1 className="sm:hidden py-1 pl-5">
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
    </>
  );
}
function usestate(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
