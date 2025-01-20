import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
export default function Product() {
  return (
    <section>
      <div className="  w-full px-[100px]">
        <h1 className="text-[45px] font-[900]">
          Our Software <br /> Development Services
        </h1>
        <p className="max-w-[75%]">
          As an experienced software development company , our team deploys a
          comprehensive range of specialized services and solutions, allowing us
          to effectively cater to diverse client requirements.
        </p>
      </div>
      <div className="px-[100px] flex justify-between items-center h-[80vh]">
        <div>
          <img src="/images/product-assests/product-1.png" alt="5" />
        </div>
        {/*first product */}
        <div className=" flex-1 flex pt-[100px] px-[50px] h-[500px] flex-col">
          <h1 className="text-[35px] font-[900]">Digital Solutions</h1>
          <p className="pt-[20px]">
            Specializing in Cloud Infrastructure Services, Cloud MSP (Managed
            Service Provider) offerings, and advanced digital solutions.
          </p>
          <ul className=" list-disc pt-[20px] pl-[50px]  text-[18px] ">
            <Link href="/product/aadhar-vault">
              <li className="py-2 hover:-translate-y-1 hover:scale-10 duration-300 hover:text-red-700 ">
                Aadhaar Data Vault
                <span className="pl-3 inline-flex ">
                  <BsArrowUpRight />
                </span>
              </li>
            </Link>
            <Link href="/product/kyc-vault">
              <li className="py-2  hover:-translate-y-1 hover:scale-10 duration-300 hover:text-red-700 ">
                KYC Vault Solution{" "}
                <span className="pl-3  inline-flex  ">
                  <BsArrowUpRight />
                </span>
              </li>
            </Link>
            <Link href="/product/document-management">
              <li className="py-2 hover:-translate-y-1 hover:scale-10 duration-300 hover:text-red-700 ">
                document management
                <span className="pl-3 inline-flex ">
                  <BsArrowUpRight />
                </span>
              </li>
            </Link>
          </ul>
        </div>
        {/*first product */}
      </div>
      <div className="px-[100px] flex justify-between items-center h-[80vh]">
        {/*first product */}
        <div className=" flex-1 flex pt-[100px] px-[50px] h-[500px] flex-col">
          <h1 className="text-[35px] font-[900]">
            Software Outsourcing Services
          </h1>
          <p className="pt-[20px]">
            Providing software outsourcing services by efficiently managing
            essential functions, leveraging expertise to optimize operations.
          </p>
          <ul className=" list-disc pt-[20px] pl-[50px]  text-[18px] capitalize">
            <Link href="/product/report-designer">
              <li className="py-2 hover:-translate-y-1 hover:scale-10 duration-300 hover:text-red-700">
                report designer
                <span className="pl-3 inline-flex ">
                  <BsArrowUpRight />
                </span>
              </li>
            </Link>
            <Link href="/product/rule-engine">
              <li className="py-2 hover:-translate-y-1 hover:scale-10 duration-300 hover:text-red-700">
                rule engine
                <span className="pl-3 inline-flex ">
                  <BsArrowUpRight />
                </span>
              </li>
            </Link>
            <Link href="/product/loan-calculater-engine">
              <li className="py-2 hover:-translate-y-1 hover:scale-10 duration-300 hover:text-red-700">
                loan calculator engine
                <span className="pl-3 inline-flex ">
                  <BsArrowUpRight />
                </span>
              </li>
            </Link>
            <Link href="/product/screen-designer">
              <li className="py-2 hover:-translate-y-1 hover:scale-10 duration-300 hover:text-red-700">
                screen designer
                <span className="pl-3 inline-flex ">
                  <BsArrowUpRight />
                </span>
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <img src="/images/product-assests/product-2.png" alt="5" />
        </div>
        {/*first product */}
      </div>
      {/*second product */}

      {/*second product */}
    </section>
  );
}
