import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section className="bg-slate-100 w-full h-full">
      <div className="grid grid-col-1 lg:grid-cols-4 grid-rows-1 h-full ">
        {/*  first grid */}
        <div className="flex justify-center items-center">
          <img
            src="/images/logo-final-transparent.png"
            className="w-[450px]"
            alt=""
          />
        </div>
        {/*  first grid */}
        {/*  second grid */}
        <div className=" w-full flex  justify-center items-center">
          <p className="   mx-auto text-center py-2">
            Ruduo Technologies is committed to delivering innovative software
            solutions designed for performance, security, and scalability. Need
            help or have feedback? We're here to assist you every step of the
            way. Stay connected with us!"
          </p>
        </div>
        {/*  second grid */}
        {/*  third grid  */}
        <div className=" flex flex-col  justify-center py-5  pl-[100px]">
          <h1 className=" uppercase font-bold text-[20px] mb-2">About</h1>
          <ul>
            <li className="">
              <Link href="/about/career">New to Ruduo?</Link>
            </li>
            <li className="">
              <Link href="/about/career">Why Ruduo</Link>
            </li>
            <li className="">
              <Link href="/about/career">Explore All Products</Link>
            </li>
            <li className="">
              <Link href="/about/career">Saas</Link>
            </li>
            <li className="">
              <Link href="/about/career">Customer Success</Link>
            </li>
          </ul>
        </div>
        {/*  third grid */}
        {/*  four grid */}
        <div className="flex flex-col  justify-center py-5  pl-[100px]">
          <h1 className=" uppercase font-bold text-[20px] mb-2">company</h1>
          <ul>
            <li className="">
              <Link href="/about/career">About Ruduo</Link>
            </li>
            <li className="">
              <Link href="/about/career">Our Story</Link>
            </li>
            <li className="">
              <Link href="/about/career">career</Link>
            </li>
            <li className="">
              <Link href="/about/career">Security and Performance</Link>
            </li>
            <li className="">
              <Link href="/about/career">Give your feedback</Link>
            </li>
          </ul>
        </div>
        {/*  four grid */}
      </div>
      <div className=" border-t-2"></div>
      <div className=" py-0">
        <p className="text-center mt-1">
          @2024 designed and developed by ruduotech
        </p>
      </div>
    </section>
  );
}
