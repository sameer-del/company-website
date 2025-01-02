import { ContactForm } from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function aboutPage() {
  const card = [
    {
      title: "Expertise Meets Vision",
      description:
        "With a team of like-minded professionals, Ruduo Technologies leverages deep industry knowledge and technical expertise to drive innovation and excellence.",
      imageUrl: "/assests/lightning.svg",
    },
    {
      title: "Empowering Customization",
      description:
        "Our cutting-edge platform offers unmatched adaptability, enabling businesses to create products tailored to their unique requirements effortlessly.",
      imageUrl: "/assests/arrow-grp.svg",
    },
    {
      title: "Redefining Efficiency",
      description:
        "By focusing on simplicity and scalability, we provide solutions that enhance operational efficiency and drive long-term success.",
      imageUrl: "/assests/arrow-grp.svg",
    },
  ];
  const blog = [
    {
      title: "Transforming Business Efficiency with Plug-and-Play Platforms",
      content:
        "In today’s fast-paced world, businesses need tools that simplify operations and enhance productivity. Plug-and-play platforms are revolutionizing the way companies build and deploy products. At Ruduo Technologies, we empower businesses with customizable solutions that reduce development time, streamline processes, and offer unparalleled flexibility. Discover how our platform can help your business stay ahead in an ever-changing market.",
      imageUrl: "/images/blog-1.jpg",
    },
    {
      title: "The Power of Customization: Tailoring Products to Unique Needs",
      content:
        "One-size-fits-all solutions no longer cut it in the modern business landscape. Customization is the key to staying relevant and competitive. Ruduo Technologies’ cutting-edge platform allows businesses to create products tailored to their exact requirements. From enhancing customer experiences to driving operational excellence, learn how customization can be your competitive edge.",
      imageUrl: "/images/blog-2.jpg",
    },
    {
      title:
        "Simplifying Complexity: The Future of Scalable Business Solutions",
      content:
        "Scaling a business often comes with challenges, but advanced platforms can simplify the process. At Ruduo Technologies, we specialize in delivering solutions that prioritize scalability without compromising efficiency. Dive into the future of business solutions and see how our technology transforms complexity into simplicity, empowering businesses to thrive in a competitive world.",
      imageUrl: "/images/blog-3.jpg",
    },
  ];

  return (
    <section>
      {/* navbar */}
      <Navbar />
      {/* navbar */}
      {/* intro */}
      <div className="about w-full h-[50vh]  flex justify-center items-center flex-col gap-9 ">
        <h1 className="text-[45px] uppercase font-semibold font-serif text-white ">
          about us
        </h1>
      </div>

      {/* intro */}
      <section className="mt-5">
        <div className="w-full h-auto ">
          <div className="w-full h-full flex justify-center items-center flex-col gap-[50px]">
            <div className=" w-full px-3 py-5 lg:max-w-[85%] mx-auto lg:h-[450px] lg:flex ">
              <div className="flex-1 flex flex-col flex-start pl-[120px] justify-center gap-5 ">
                <h1 className="text-[30px] uppercase font-serif">
                  Innovating the Future of Business
                </h1>
                <div className="w-[150px] bg-red-800 h-1"></div>
                <p className="max-w-[85%] ">
                  At Ruduo Technologies, innovation meets a passion for
                  excellence. Founded by a team of visionary software experts,
                  we bring together a wealth of experience across diverse fields
                  and domains. Our mission is to empower businesses by
                  delivering a state-of-the-art product platform that is both
                  plug-and-play and fully customizable.
                </p>
                <button className="button ">view more</button>
              </div>
              <div className="flex-1  flex   ">
                <Image
                  src="/images/about-2.jpg"
                  width={500}
                  height={200}
                  alt="image"
                  className=" rounded-[15px]"
                />
              </div>
            </div>
            <div className=" w-full px-3 py-5 lg:max-w-[85%] mx-auto lg:h-[450px] lg:flex ">
              <div className="flex-1  flex justify-end ">
                <Image
                  src="/images/about-1.jpg"
                  width={500}
                  height={200}
                  alt="image"
                  className=" rounded-[15px]"
                />
              </div>
              <div className="flex-1 flex flex-col flex-start pl-5 justify-center gap-5 ">
                <h1 className="text-[29px] uppercase font-serif">
                  Crafting Possibilities, <br /> Simplifying Complexity
                </h1>
                <div className="w-[150px] bg-red-800 h-1"></div>
                <p className="max-w-[85%]">
                  At Ruduo Technologies, we believe in simplifying the complex
                  while delivering unmatched quality. Our collective expertise
                  drives us to redefine efficiency, scalability, and
                  adaptability for our clients. We’re not just building a
                  platform; we’re crafting opportunities for businesses to excel
                  in a dynamic and competitive world.
                </p>
                <button className="button">view more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about heading */}
      {/* card-about */}
      <div className="w-full h-[60vh] ">
        <div className=" h-full  flex justify-center items-center gap-10">
          {card.map((cards) => (
            <div className="h-[60%] w-[400px]  flex justify-center items-center flex-col rounded-[15px] rounded-l-none rounded-t-[15px]  bg-primary text-white">
              <Image
                src={cards.imageUrl}
                width={80}
                height={50}
                alt=""
                className=""
              />
              <h1 className="text-[20px] uppercase py-2 font-serif">
                {cards.title}
              </h1>
              <p className="max-w-[85%] mx-auto text-center">
                {cards.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* card-about */}
      {/* blog component */}
      <section className="pb-10">
        <div className="w-full h-[100vh] px-[100px] ">
          <h1 className="text-center text-[45px] uppercase font-serif">
            our Blog
          </h1>
          <div className=" h-full  flex justify-center items-center gap-10">
            {blog.map((blogs) => (
              <div className="  w-full h-[90vh]  flex justify-center items-center flex-col rounded-[15px] rounded-l-none rounded-t-[15px] px-5 py-[50px]  bg-primary text-white ">
                <div className="w-full  bg-cover py-2 ">
                  <img
                    src={blogs.imageUrl}
                    alt=""
                    className="w-full h-[200px] bg-cover rounded-[15px] "
                  />
                </div>
                <h1 className="text-black text-[26px] text-center font-serif py-2 ">
                  {blogs.title}
                </h1>
                <p className="text-start ">{blogs.content}</p>
                <button className="mt-5 w-[150px] bg-white py-4 rounded-full text-black font-serif ">
                  view more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* blog component */}

      <Footer />
    </section>
  );
}
