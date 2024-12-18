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
            <li className="py-1">
              <Link href="/about/career">New to Ruduo?</Link>
            </li>
            <li className="py-1">
              <Link href="/about/career">Why Ruduo</Link>
            </li>
            <li className="py-1">
              <Link href="/about/career">Explore All Products</Link>
            </li>
            <li className="py-1">
              <Link href="/about/career">Saas</Link>
            </li>
            <li className="py-1">
              <Link href="/about/career">Customer Success</Link>
            </li>
          </ul>
        </div>
        <div className=" w-full flex flex-col  justify-center pl-[100px] ">
          <h1 className=" uppercase font-bold text-[25px] mb-5">company</h1>
          <ul>
            <li className="py-1">
              <Link href="/about/career">About Ruduo</Link>
            </li>
            <li className="py-1">
              <Link href="/about/career">Our Story</Link>
            </li>
            <li className="py-1">
              <Link href="/about/career">career</Link>
            </li>
            <li className="py-1">
              <Link href="/about/career">Security and Performance</Link>
            </li>
            <li className="py-1">
              <Link href="/about/career">Give your feedback</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
