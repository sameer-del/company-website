import VideoMask from "../components/about-components/videoMask";
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
      {/* hero section */}
      <section className="  px-[100px] h-[80vh] pb-[10px] ">
        <div className="w-full max-w-[95%] mx-auto gap-[30px] h-full   flex justify-between items-center ">
          <div className=" font-raleway pb-3 ">
            <h3 className=" uppercase text-[27px] font-[900]">about us</h3>
            <h1 className="text-[40px] pb-3 lg:max-w-[85%]">
              Elevating Excellence with Innovative Products & Services
            </h1>
            <p className="max-w-[85%]">
              we are committed to delivering exceptional products and services
              that set new standards in quality and innovation. Our passion for
              excellence drives us to continuously refine our offerings,
              ensuring that each product and service we provide not only meets
              but exceeds the expectations of our customers
            </p>
            <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black hover:border-black hover:border-[1px] duration-300 mt-5 w-[150px] bg-black py-4 rounded-full text-white font-serif ">
              view more
            </button>
          </div>
          <div>
            <img src="/assests/about/about-pic.jpg" alt="" />
          </div>
        </div>
      </section>
      {/* hero section */}
      {/* about founder*/}
      <section className="lg:max-w-[85%] mx-auto  ">
        <div>
          <h3 className="font-raleway text-[30px] capitalize">our story</h3>
          <h1 className="font-raleway text-[40px] capitalize">
            The company was more than a business
          </h1>
        </div>
        <div className="mt-[40px] flex     justify-between items-center bg-gray-800/10  backdrop-blur  p-[20px] rounded-t-[15px]">
          <div className="flex flex-col flex-1  text-[18px] p-[40px] gap-4 font-raleway ">
            <p>
              <strong>
                Mohammed Younus is a highly experienced professional
              </strong>{" "}
              with an extensive background in the software industry, having
              spent many years shaping innovative and impactful software
              products. His deep expertise in software development, combined
              with his passion for technology, has enabled him to contribute
              significantly to the success of numerous projects throughout his
              career.
            </p>
            <p>
              As a visionary leader and one of the directors in his
              organization, Mohammed plays a pivotal role in driving the
              strategic direction and growth of the company. His ability to
              identify market opportunities and translate them into actionable,
              cutting-edge software solutions has made him a key player in the
              development of innovative products that meet the evolving needs of
              clients and industries alike.
            </p>
          </div>
          <div className="relative flex-1 flex flex-col justify-center items-center ">
            <img
              src="assests/about/founder.jpg"
              alt=""
              className="w-[450px] h-[450px] rounded-full"
            />
            <h1 className="font-raleway text-[24px] mt-[30px] uppercase">
              Mohammed Younus
            </h1>
          </div>
        </div>
        <div className="  bg-gray-800/10 rounded-b-[15px] backdrop-blur p-[30px]">
          <p className="font-raleway text-center max-w-[75%] mx-auto text-[18px]">
            {" "}
            With a strong commitment to excellence, Mohammed continues to be a
            guiding force, fostering a culture of innovation, collaboration, and
            continuous improvement within his team. His leadership and technical
            acumen make him an invaluable asset to the organization, ensuring it
            remains at the forefront of the ever-changing technology landscape.
          </p>
        </div>
      </section>
      {/* about founder*/}
      {/* about key contribute*/}
      <section className="lg:max-w-[85%] mx-auto pt-[100px] font-raleway">
        <h1 className="text-[45px] text-center">Key Contributions</h1>
        <div className="grid grid-cols-2 place-items-center gap-[30px] pt-[20px]">
          <div className="w-[610px] h-[326px] bg-gray-800/10 backdrop-blur  flex justify-center items-center flex-col rounded-[15px]">
            <img
              src="/assests/about/about-icon-2.png"
              alt=""
              className="w-[120px] pb-3"
            />

            <h1 className="text-[40px] pb-3">Strategic Leadership</h1>
            <p className="text-[17px] text-center px-[45px]">
              Mohammed excels in driving the organization’s growth by aligning
              business goals with technological innovations. His leadership has
              been pivotal in crafting solutions that are both scalable and
              forward-looking.
            </p>
          </div>
          <div className="w-[610px] h-[326px] bg-gray-800/10 backdrop-blur   flex justify-center items-center flex-col rounded-[15px]">
            <img
              src="/assests/about/about-icon-3.png"
              alt=""
              className="w-[100px] pb-3"
            />

            <h1 className="text-[40px] pb-3">Technical Prowess</h1>
            <p className="text-[17px] text-center px-[45px]">
              With a strong foundation in software development and an innate
              ability to solve complex challenges, Mohammed ensures the delivery
              of high-quality, reliable, and user-centric products.
            </p>
          </div>
          <div className="w-[610px] h-[326px] bg-gray-800/10 backdrop-blur   flex justify-center items-center flex-col rounded-[15px] col-span-2">
            <img
              src="/assests/about/about-icon-1.png"
              alt=""
              className="w-[60px] pb-3"
            />
            <h1 className="text-[40px] pb-3">Market Insight</h1>
            <p className="text-[17px] text-center px-[45px]">
              His deep understanding of market dynamics enables him to
              anticipate industry shifts and develop products that stay ahead of
              the curve, addressing both present and future client needs.
            </p>
          </div>
        </div>
      </section>
      {/* about key contribute*/}
      {/* about extra*/}
      <section className="lg:max-w-[65%] mx-auto pt-[100px] font-raleway ">
        <h1 className="text-[40px] pb-3 text-center font-[700] capitalize ">
          Beyond his technical and strategic achievements
        </h1>
        <p className="text-center max-w-[85%] mx-auto pb-3 ">
          Mohammed is deeply committed to fostering a culture of innovation,
          collaboration, and continuous learning. Under his leadership, teams
          are inspired to push boundaries, embrace challenges, and deliver
          excellence in every project they undertake.
        </p>
        <div className=" h-[70vh]  flex justify-center items-center gap-5">
          <div className="group hover:border-black shadow-md text-gray-500 bg-[#d2d2d2]/20 backdrop-blur rounded-[20px]  bg-[#effffd] w-[556px] h-[392px]  p-5 flex flex-col justify-center">
            <h1 className=" group-hover:text-black text-[32px] pb-3">
              Personal Philosophy
            </h1>
            <div className="hidden group-hover:block w-[150px] h-[2px] bg-black"></div>
            <p className=" group-hover:text-black  transition-all duration-300 relative p-3  text-[19px]">
              Mohammed believes in the transformative power of technology and
              its potential to make a meaningful impact on businesses and
              society. His passion for innovation, combined with his unwavering
              commitment to excellence, positions him as a thought leader and a
              driving force in the ever-evolving technology landscape.
            </p>
          </div>
          <div className="group  w-[556px] h-[392px]  text-gray-500 bg-[#d2d2d2]/20 backdrop-blur rounded-[20px] p-5 flex flex-col justify-center">
            <h1 className="group-hover:text-black  text-[32px] pb-3">
              Vision for the Future
            </h1>
            <div className="hidden group-hover:block w-[150px] h-[2px] bg-black"></div>
            <p className="group-hover:text-black  transition-all duration-300 relative p-3  text-[19px]">
              As the industry continues to evolve, Mohammed remains steadfast in
              his mission to lead the development of groundbreaking solutions
              that redefine industry standards and empower clients to achieve
              greater success. Through his guidance, the organization is
              well-equipped to navigate the complexities of the digital age and
              seize new opportunities for growth and innovation.
            </p>
          </div>
        </div>
      </section>
      {/* about extra*/}

      {/* intro */}
      <section className="pt-[100px]">
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
          {card.map((cards, index) => (
            <div
              className="h-[60%] w-[400px]  flex justify-center items-center flex-col rounded-[15px] rounded-l-none rounded-t-[15px]  bg-primary text-white"
              key={index}
            >
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
            {blog.map((blogs, index) => (
              <div
                className="  w-full h-[90vh]  flex justify-center items-center flex-col rounded-[15px] rounded-l-none rounded-t-[15px] px-5 py-[50px]  bg-primary text-white "
                key={index}
              >
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
