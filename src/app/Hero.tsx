import Typeanimation from "@/app/components/Typeanimation";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="  pt-5">
      {/* hero Page */}

      <div className="relative flex flex-col justify-center items-center h-full w-full py-10">
        <div className=" text-black w-full flex justify-center items-center flex-col  px-[200px]">
          {/* styling elements */}
          <div className="absolute top-10 left-[100px]">
            <img src="/assests/squiggle-2.svg" alt="" />
            <img src="/assests/lightning.svg" alt="" />
          </div>
          <div className="absolute top-0 right-[100px]">
            <img src="/assests/squiggle-2.svg" alt="" />
            <img src="/assests/lightning.svg" alt="" />
          </div>
          {/* styling elements */}

          <h1 className="text-[70px] text-center font-bold capitalize font-sans">
            Innovating the Future with <br />
            <span className=" inline-block ">
              <Typeanimation />
            </span>
            Software Solutions
          </h1>
          <p className="text-[19px] mt-5 font-mono capitalize text-center max-w-[85%]">
            At Ruduo Technologies, we bring your ideas to life with innovative
            software solutions tailored to your unique needs.
          </p>
        </div>
        <div className=" mt-5 flex justify-center items-center flex-col ">
          <p className="text-[#A880FF] text-center font-serif">
            For Contact us Click here
          </p>
          <Link href="/contact">
            <button
              className="w-[260px] h-[54px] bg-[#A980FE]  text-[18px] tracking-[1px] mt-3  font-sans text-white rounded-[10px]
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
        <div className="w-full   px-[200px] py-10">
          <p className="text-[#A880FF] text-center font-serif">
            More about Spike Teamspace
          </p>
          <p className="text-[21px] mt-5 font-mono capitalize text-center">
            Helping teams of all sizes overcome communication chaos
          </p>
        </div>
      </div>
      <div className="w-full   mt-5">
        <div className=" grid grid-cols-3 gap-[50px] px-[100px] py-10 ">
          <div className="w-[430px] h-[485px] bg-[#d8d8d8] px-[20px] py-3 shadow-2xl   rounded-[15px] flex justify-center items-center flex-col">
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
                sales Marketing
              </h1>
              <p className="max-w-[85%] mx-auto py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae molestias ut iste! Adipisci non recusandae
                reiciendis! Doloremque accusantium laborum, maxime laboriosam
                sapiente blanditiis. Alias maxime unde quia voluptatum optio
                assumenda.
              </p>
            </div>
          </div>
          <div className="w-[430px] h-[485px] bg-[#d8d8d8] px-[20px] py-3 shadow-2xl    rounded-[15px] flex justify-center items-center flex-col">
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
                sales Marketing
              </h1>
              <p className="max-w-[85%] mx-auto py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae molestias ut iste! Adipisci non recusandae
                reiciendis! Doloremque accusantium laborum, maxime laboriosam
                sapiente blanditiis. Alias maxime unde quia voluptatum optio
                assumenda.
              </p>
            </div>
          </div>
          <div className="w-[430px] h-[485px] bg-[#d8d8d8] px-[20px] py-3  shadow-2xl   rounded-[15px] flex justify-center items-center flex-col">
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
                sales Marketing
              </h1>
              <p className="max-w-[85%] mx-auto py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae molestias ut iste! Adipisci non recusandae
                reiciendis! Doloremque accusantium laborum, maxime laboriosam
                sapiente blanditiis. Alias maxime unde quia voluptatum optio
                assumenda.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="w-[260px] h-[54px] bg-[#A980FE]  text-[18px] tracking-[1px] mt-3  font-sans text-white rounded-[10px]">
            View All our products
          </button>
        </div>
      </div>

      {/* another section */}
      <div className="h-[60vh] w-full  mt-[50px] flex justify-between items-center px-[100px]">
        <div className=" w-full h-full flex justify-center flex-col">
          <h1 className="text-[45px] ">
            Try our Product we have a <br /> high quality software with full
            <br />
            time support
          </h1>
          <div className="flex gap-5  mt-5">
            <button className="w-[210px] h-[54px] bg-[#A980FE]  text-[18px] tracking-[1px] mt-3  font-sans text-white rounded-[10px]">
              View All our products
            </button>
            <button className="w-[210px] h-[54px] bg-[#A980FE]  text-[18px] tracking-[1px] mt-3  font-sans text-white rounded-[10px]">
              View All our products
            </button>
          </div>
        </div>
        <div className="  w-full h-full flex justify-center items-center flex-col">
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
      <div className="bg-[#a880ff]   w-full h-[50vh] mt-5 flex justify-center items-center">
        <div className=" h-full max-w-[85%] flex justify-center flex-col items-center gap-5">
          <h1 className="text-[40px] text-white font-bold  capitalize text-center">
            questions? we'll put your right <br /> path.
          </h1>
          <p className="max-w-[75%] mx-auto text-center text-white font-medium capitalize text-[19px]">
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
