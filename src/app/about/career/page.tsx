import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { SiLinkedin } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function career() {
  return (
    <section>
      <Navbar />
      <section className="h-full  bg-secondary w-full">
        <section className="h-[80vh] w-full px-[200px] flex justify-between items-center text-primary_text">
          <div className=" flex-1 h-[80%] flex justify-center items-start flex-col">
            <h1 className="uppercase  text-[42px]">join Our team</h1>
            <p className="text-start max-w-[85%] py-2 text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus nostrum, atque dolorum quo at fugit enim minus, saepe
              nihil reiciendis in possimus praesentium explicabo molestias, non
              eveniet quaerat vel ea.
            </p>
            <p className="py-2 capitalize text-[18px]">
              navigate below to See Our Current Openings
            </p>
            <button className="button mt-2">open positions</button>
          </div>
          <div className="bg-secondary flex-1 h-[80%] flex justify-center items-center">
            <img src="/images/career-1.png" alt="" />
          </div>
        </section>
        <section className="w-full h-[100vh] bg-secondary">
          <div className="h-[20vh]">
            <h1 className="text-center text-[42px] font-serif">
              we have 0 Openings right Now
            </h1>
          </div>
          <div className="bg-slate-300 rounded-xl m-10 h-[60vh] flex justify-between items-center pl-10">
            <div className=" flex flex-col justify-start items-start ">
              <h1 className="text-[35px] font-serif uppercase py-2">
                follow Us On Social Media
              </h1>
              <div className="flex  gap-5 text-[32px] ">
                <SiLinkedin /> <FaWhatsapp />
                <FaSquareInstagram />
              </div>
              <button className="bg-black text-white mt-5 w-[125px] py-3 rounded-full font-serif">
                contact us
              </button>
            </div>
            <div>
              <img
                src="/images/career-4.png"
                alt="ds"
                className="w-[550px] pr-10"
              />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
}
