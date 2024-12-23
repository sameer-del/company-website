import Typeanimation from "@/app/components/Typeanimation";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="">
      {/* hero Page */}

      <div className="relative flex flex-col justify-center items-center h-full w-full py-10">
        <div className=" text-primary_text w-full flex justify-center items-center flex-col  lg:px-[200px]">
          {/* styling elements */}
          <div className="hidden lg:block absolute top-10 left-[100px]">
            <img src="/assests/squiggle-2.svg" alt="" />
            <img src="/assests/lightning.svg" alt="" />
          </div>
          <div className="hidden lg:block  absolute top-0 right-[100px]">
            <img src="/assests/squiggle-2.svg" alt="" />
            <img src="/assests/lightning.svg" alt="" />
          </div>
          {/* styling elements */}

          <h1 className="lg:text-[70px] text-[40px] px-2  text-center font-bold capitalize font-sans">
            Innovating the Future with <br />
            <span className=" inline-block text-[40px] lg:text-[70px] ">
              <Typeanimation />
              Software Solutions
            </span>
          </h1>
          <p className="text-[19px] mt-5 font-mono capitalize text-center  lg:max-w-[85%]">
            At Ruduo Technologies, we bring your ideas to life with innovative
            software solutions tailored to your unique needs.
          </p>
        </div>
        <div className=" mt-5 flex justify-center items-center flex-col ">
          <p className=" text-center font-serif">For Contact us Click here</p>
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
      {/* hero page */}

      {/*  hero-image */}
      <div className="w-full relative  mt-10">
        <div className=" max-w-[95%] mx-auto flex justify-center">
          <div className="absolute bottom-[200px] right-[100px]">
            <img src="/assests/squiggle-1.svg" alt="" />
          </div>
          <video
            width="1200"
            height="475"
            src="/images/hero-video.mp4"
            autoPlay
            muted
            loop
            preload="none"
            className="rounded-[15px] shadow-2xl "
          />
        </div>
        <div className="w-full   lg:px-[200px] py-10">
          <p className=" text-center font-serif">More about Spike Teamspace</p>
          <p className="text-[21px] mt-5 font-mono capitalize text-center">
            Helping teams of all sizes overcome communication chaos
          </p>
        </div>
      </div>

      {/* product grid */}
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
              <h1 className="text-center font-sans uppercase font-bold text-[23px]">
                Workflow Engine
              </h1>
              <p className="max-w-[85%] mx-auto py-2">
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
              <h1 className="text-center font-sans uppercase font-bold text-[23px]">
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
              <h1 className="text-center font-sans uppercase font-bold text-[23px]">
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
