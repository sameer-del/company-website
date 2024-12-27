"use client";
import Typeanimation from "@/app/components/Typeanimation";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="">
      {/* hero Page */}

      <div className="relative flex flex-col justify-center items-center  w-full py-10">
        <div className=" text-primary_text w-full flex justify-center items-center flex-col  h-[60vh] pt-5 lg:px-[200px]">
          {/* styling elements */}
          <div className="hidden overflow-hidden lg:block absolute top-10 left-[-350px]">
            <img
              src="/images/heropage-element-1.png"
              className="w-[100%] h-[400px]"
              alt=""
            />
          </div>
          <div className="hidden lg:block  absolute top-10 right-[-400px]">
            <img
              src="/images/heropage-element-1.png"
              className="w-[100%] h-[400px]"
              alt=""
            />
          </div>
          {/* styling elements */}

          <h1 className="lg:text-[60px] text-[40px] px-2  text-center font-[900] capitalize font-serif">
            Innovating the Future with <br />
            <span className=" inline-block text-[40px] lg:text-[60px] ">
              <Typeanimation />
              Software Solutions
            </span>
          </h1>
          <p className="text-[19px] mt-5 font-[primary] capitalize text-center font-[600]  lg:max-w-[85%]">
            At Ruduo Technologies, we bring your ideas to life with innovative
            software solutions tailored to your unique needs.
          </p>
          <div className=" mt-5 flex justify-center items-center flex-col ">
            <p className=" text-center font-[primary]">
              For Contact us Click here
            </p>
            <Link href="/contact">
              <button
                className="w-[260px] h-[54px] bg-primary  text-[18px] tracking-[1px] mt-3  font-sans text-white rounded-[10px]
                    "
              >
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* hero page */}

      {/*  hero-image */}
      <div className="w-full relative  mt-10">
        <div className=" max-w-[95%] mx-auto flex justify-center flex-col">
          {/* about heading */}
          <div className="flex justify-center items-center">
            <span className="w-[43px] h-[3.5px] bg-[#3cb9d1] text-center flex justify-center items-center "></span>
            <h1 className="lg:text-[30px] text-[30px] px-2  text-center  capitalize font-primary">
              about us
            </h1>
            <span className="w-[43px] h-[3.5px] bg-[#3cb9d1] text-center flex justify-center items-center "></span>
          </div>
          {/* about heading */}
          {/* about paragraph */}
          <div
            className="flex lg:flex-row flex-col w-full   lg:px-[100px] justify-center items-center gap-5 pt-[50px]"
            ref={ref}
          >
            <p className="flex-1  text-[19px] text-start  font-[secondary]">
              At Ruduo Technologies, we are driven by innovation and a shared
              passion for technology. Founded by a team of like-minded software
              experts, each with deep expertise in diverse fields and domains,
              we are committed to revolutionizing the way businesses build and
              deploy products.
            </p>

            <p className="flex-1 text-[19px] text-start    font-[secondary]">
              As a startup, our mission is to empower businesses with a
              cutting-edge product platform that is both plug-and-play and
              highly customizable. Our platform allows customers to seamlessly
              create new products tailored to their unique requirements,
              enabling faster time-to-market and enhanced flexibility.
            </p>
          </div>
          {/* about paragraph */}
          {/* about achievement */}
          <div
            className="  flex lg:flex-row flex-col justify-between lg:px-[50px] pt-[50px]"
            ref={ref}
          >
            <div className="w-[40%] ">
              <img
                src="/images/heropage-element.png"
                alt=""
                className="w-[450px]"
              />
            </div>
            <div className="flex-1 grid lg:grid-cols-2 grid-rows-2 gap-2  py-10 ">
              <div className=" bg-slate-500/10 rounded-[15px] flex  justify-around items-center">
                <div className="w-[100px] flex justify-center items-start ml-3">
                  <img
                    src="/assests/about/happys.gif"
                    alt=""
                    className="w-[80px]"
                  />
                </div>
                <div className="flex  flex-1 justify-center items-center flex-col">
                  <p className="text-[18px] text-start px-1">
                    <span className="text-[28px] tracking-[2px] text-start font-bold">
                      {inView ? (
                        <CountUp start={0} end={100} duration={2.5} />
                      ) : null}
                    </span>
                    %
                    <br />
                    Happy Clients A satisfied customer is the best bussiness
                    goal.
                  </p>
                </div>
              </div>
              <div className=" bg-slate-500/10 rounded-[15px] flex  justify-around items-center">
                <div className="w-[100px] flex justify-center items-start ml-3">
                  <img
                    src="/assests/about/project.gif"
                    alt=""
                    className="w-[80px]"
                  />
                </div>
                <div className="flex  flex-1 justify-center items-center flex-col">
                  <p className="text-[17px] text-start px-1">
                    <span className="text-[28px] tracking-[2px] text-start font-bold">
                      {inView ? (
                        <CountUp start={0} end={100} duration={2.5} />
                      ) : null}
                    </span>
                    %
                    <br />
                    We pride ourselves on delivering top-notch solutions that
                    meet and exceed expectations, making every project a
                    success.
                  </p>
                </div>
              </div>
              <div className=" bg-slate-500/10 rounded-[15px] flex  justify-around items-center">
                <div className="w-[100px] flex justify-center items-start ml-3">
                  <img
                    src="/assests/about/workflow.gif"
                    alt=""
                    className="w-[80px]"
                  />
                </div>
                <div className="flex  flex-1 justify-center items-center flex-col">
                  <p className="text-[17px] text-start px-1">
                    <span className="text-[28px] tracking-[2px] text-start font-bold">
                      {inView ? (
                        <CountUp start={0} end={100} duration={2.5} />
                      ) : null}
                    </span>
                    %
                    <br />
                    Building long-term relationships with our clients is at the
                    core of what we do, ensuring trust and mutual growth.
                  </p>
                </div>
              </div>
              <div className=" bg-slate-500/10 rounded-[15px] flex  justify-around items-center">
                <div className="w-[100px] flex justify-center items-start ml-3">
                  <img
                    src="/assests/about/achieve.gif"
                    alt=""
                    className="w-[80px]"
                  />
                </div>
                <div className="flex  flex-1 justify-center items-center flex-col">
                  <p className="text-[17px] text-start px-1">
                    <span className="text-[28px] tracking-[2px] text-start font-bold">
                      {inView ? (
                        <CountUp start={0} end={100} duration={2.5} />
                      ) : null}
                    </span>
                    %
                    <br />
                    Through creativity and innovation, we solve challenges and
                    help our clients stay ahead in their industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* about achievement */}
        </div>
      </div>

      {/* product grid */}
      <h1 className="text-center text-[40px] uppercase text-[primary]">
        our product
      </h1>
      <div className="w-full   mt-5">
        <div className="w-full  grid grid-cols-1 lg:grid-cols-3 items-center gap-[50px] lg:px-[100px] px-5 py-10 ">
          <div className="lg:w-[430px] w-auto   h-[485px] bg-[#d8d8d8] lg:px-[20px] py-3 shadow-2xl   rounded-[15px] flex justify-center items-center flex-col">
            <div className="flex-1  w-full   ">
              <Image
                src="/assests/pm-card-1.webp"
                width={1000}
                height={1000}
                alt="star"
                className=""
              />
            </div>
            <div className="h-[210px]  w-full ">
              <h1 className="text-center font-[primary] uppercase font-bold text-[23px]">
                Workflow Engine
              </h1>
              <p className="max-w-[85%] mx-auto py-2 ">
                A Workflow Engine is a powerful software tool designed to
                automate, streamline, and manage complex business processes. It
                ensures tasks are executed in a logical, sequential manner while
                coordinating between people, systems, and data.
              </p>
            </div>
          </div>
          {/* grid-2 */}
          <div className="lg:w-[430px] w-auto  h-[485px] bg-[#d8d8d8] px-[20px] py-3 shadow-2xl    rounded-[15px] flex justify-center items-center flex-col">
            <div className="flex-1  w-full  ">
              <Image
                src="/assests/pm-card-2.webp"
                width={1000}
                height={1000}
                alt="star"
                className=""
              />
            </div>
            <div className="h-[210px]  w-full ">
              <h1 className="text-center  uppercase font-bold  text-[24px] font-[primary]">
                Rule Engine
              </h1>
              <p className="max-w-[85%] mx-auto py-2">
                A Rule Engine is a software system that evaluates and executes
                predefined rules or conditions to make automated decisions. It
                separates the logic of decision-making from the main
                application.
              </p>
            </div>
          </div>
          {/* grid-3 */}
          <div className="lg:w-[430px] w-auto  h-[485px] bg-[#d8d8d8] px-[20px] py-3  shadow-2xl   rounded-[15px] flex justify-center items-center flex-col">
            <div className="flex-1  w-full  ">
              <Image
                src="/assests/pm-card-3.webp"
                width={1000}
                height={1000}
                alt="star"
                className=""
              />
            </div>
            <div className="h-[210px]  w-full ">
              <h1 className="text-center  uppercase font-bold text-[23px] font-[primary]">
                Bug Tracker
              </h1>
              <p className="max-w-[85%] mx-auto py-2">
                A Bug Tracker is a tool or software used by development teams to
                identify, document, prioritize, and resolve software bugs or
                issues throughout the development lifecycle. It centralizes bug
                reporting and tracking.
              </p>
            </div>
          </div>
        </div>
        {/* grid end */}
        <div className="flex justify-center items-center">
          <button className="w-[260px] h-[54px] bg-primary  text-[18px] tracking-[1px] mt-3  font-sans text-white rounded-[10px]">
            View All our products
          </button>
        </div>
      </div>

      {/* another section */}
      <div className="h-full w-full  mt-[50px] flex justify-between items-center flex-col gap-5 lg:flex-row lg:px-[100px]">
        <div className=" w-full h-full flex justify-center flex-col">
          <h1 className="text-[45px] lg:text-start text-center px-2 lg:px-0">
            Try our Product we have a <br /> high quality software with full
            <br />
            time support
          </h1>
          <div className="flex gap-5  mt-5">
            <button className="w-[210px] h-[54px] bg-primary  text-[18px] tracking-[1px] mt-3  font-sans text-white rounded-[10px]">
              View All our products
            </button>
            <button className="w-[210px] h-[54px] bg-primary  text-[18px] tracking-[1px] mt-3  font-sans text-white rounded-[10px]">
              View All our products
            </button>
          </div>
        </div>
        <div className="  w-full h-full flex justify-center items-center flex-col px-2">
          <Image
            src="/images/software-developer1.jpg"
            width={450}
            height={100}
            alt="star"
            className=""
          />
        </div>
      </div>
      {/* another section */}
      <div className="bg-primary   w-full lg:h-[50vh] h-full py-5 mt-5 flex justify-center items-center">
        <div className=" h-full max-w-[85%] flex justify-center flex-col items-center gap-5">
          <h1 className="text-[40px] text-white font-bold  capitalize text-center">
            questions? we'll put your right <br /> path.
          </h1>
          <p className="lg:max-w-[75%] mx-auto text-center text-white font-medium capitalize text-[19px]">
            Have questions, need assistance, or ready to start your next big
            project? We're here to help! Get in touch with our expert team to
            discuss your software development needs, share your vision, or
            simply say hello.
          </p>
          <button className="w-[210px] h-[54px] bg-white border-b-2  text-[19px]  font-semibold uppercase  mt-3  font-sans  rounded-[10px]">
            contact
          </button>
        </div>
      </div>
    </section>
  );
}
