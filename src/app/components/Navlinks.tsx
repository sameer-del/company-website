import Link from "next/link";
export default function navlinks() {
  const links = [
    {
      name: "about",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "cooperate profile", link: "/about" },
            { name: "new and events", link: "/about" },
            { name: "blog", link: "/about" },
            { name: "career", link: "/about" },
          ],
        },
      ],
    },
    {
      name: "product",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "workflow Engine", link: "/about" },
            { name: "rule engine", link: "/about" },
            { name: "amortization engine", link: "/about" },
            { name: "report designer", link: "/about" },
            { name: "letter designer", link: "/about" },
            { name: "bug tracker", link: "/about" },
            { name: "screen designer", link: "/about" },
            { name: "document management", link: "/about" },
            { name: "job designer", link: "/about" },
            { name: "external api connecter", link: "/about" },
            { name: "Aunthentication and authorization", link: "/about" },
          ],
        },
      ],
    },
    {
      name: "industries",
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
              key={link.name}
            >
              {link.name}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-[6rem] z-10 hidden group-hover:block hover:block ">
                  <div className="py-3">
                    <div className="w-4 h-4 left-[2.0rem] absolute mt-1 bg-[#A980FE]  rotate-45"></div>
                  </div>
                  <div className=" bg-[#A980FE]  p-5 w-[600px] rounded-md shadow-slate-950">
                    {link.sublinks.map((mysublinks) => (
                      <ul className=" grid grid-cols-3 gap-8 text-white font-serif text-[18px] capitialize">
                        {mysublinks.sublink.map((slink) => (
                          <li>
                            <Link
                              href={slink.link}
                              className=" hover:text-black duration-150 "
                            >
                              {" "}
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
          </div>
        </div>
      ))}
    </>
  );
}
