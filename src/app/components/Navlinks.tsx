import Link from "next/link";
export default function navlinks() {
  const links = [
    {
      name: "about",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "cooperate profile", link: "/" },
            { name: "new and events", link: "/" },
            { name: "blog", link: "/" },
            { name: "career", link: "/about/career" },
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
            { name: "workflow Engine", link: "/" },
            { name: "rule engine", link: "/" },
            { name: "amortization engine", link: "/" },
            { name: "report designer", link: "/" },
            { name: "letter designer", link: "/" },
            { name: "bug tracker", link: "/" },
            { name: "screen designer", link: "/" },
            { name: "document management", link: "/" },
            { name: "job designer", link: "/" },
            { name: "external api connecter", link: "/" },
            { name: "Aunthentication and authorization", link: "/" },
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
            { name: "financial service", link: "/" },
            { name: "human resiurces", link: "/" },
            { name: "manufacturing", link: "/" },
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
                              className=" hover:underline duration-150 "
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
