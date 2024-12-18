import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section className="bg-slate-100 w-full h-[50vh]">
      <div className="grid grid-cols-3 grid-rows-1 h-full">
        <div className=" w-full flex flex-col items-center">
          <div>
            <Image
              src="/images/logo-final-transparent.png"
              alt="Example Image"
              width={300}
              height={100}
            />
          </div>
          <p className="  max-w-[85%] mx-auto text-center">
            Ruduo Technologies is committed to delivering innovative software
            solutions designed for performance, security, and scalability. Need
            help or have feedback? We're here to assist you every step of the
            way. Stay connected with us!"
          </p>
        </div>
        <div className=" w-full flex flex-col  justify-center pl-[100px] ">
          <h1 className=" uppercase font-bold text-[25px] mb-5">About</h1>
          <ul>
            <li className="py-1"> New to Ruduo?</li>
            <li className="py-1"> Why Ruduo</li>
            <li className="py-1">Explore All Products</li>
            <li className="py-1">Saas</li>
            <li className="py-1">Customer Success</li>
          </ul>
        </div>
        <div className=" w-full flex flex-col  justify-center pl-[100px] ">
          <h1 className=" uppercase font-bold text-[25px] mb-5">company</h1>
          <ul>
            <li className="py-1"> About Ruduo</li>
            <li className="py-1"> Our Story</li>
            <li className="py-1">
              <Link href="/about/career">career</Link>
            </li>
            <li className="py-1">Security and Performance</li>
            <li className="py-1">Give your feedback </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
