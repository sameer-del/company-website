import Navbar from "@/app/components/Navbar";

export default function WhoWeAre() {
  return (
    <section>
      <Navbar />
      <section className="w-full h-[100vh]">
        <div className="max-x-[85%] mx-auto mt-[50px]">
          <h1 className="text-center font-raleway text-[45px] pb-3">
            who we are ?
          </h1>
          <p className="text-center max-w-[65%] mx-auto text-[18px]  font-raleway">
            Innovate. Build. Transform. At Ruduo Technologies, we enable
            businesses to deliver cutting-edge financial services and create
            transformative banking solutions. Founded in 2023 by visionaries
            with a deep passion for technology and finance, Ruduo Technologies
            stands at the intersection of innovation and execution. From APIs to
            seamless technology integration, settlement, and operational
            support, we are shaping the future of financial ecosystems with
            expertise and a commitment to excellence.
          </p>
        </div>
        <div className="w-full h-[40vh]  flex justify-center  items-start">
          <img
            src="/assests/about/who-we-are.png"
            alt=""
            className="w-[500px] "
          />
        </div>
      </section>
      <section className="h-[100vh]">
        <div className="max-w-[85%] mx-auto flex justify-between items-center">
          <div className="flex-1">
            <h1>Life at Ruduo Technologies</h1>
            <h3>Is working in fintech mundane? Not at Ruduo!</h3>
            <p>
              At Ruduo Technologies, every day is a blend of innovation,
              collaboration, and excitement. Our vibrant culture balances
              focused work with moments of fun, fueling creativity and
              camaraderie. Ruduo team members are curious, constantly evolving,
              and open to learning — whether mastering the latest fintech trends
              or perfecting a backhand at the Table Tennis table.
            </p>
            <p>
              We are a diverse group, unified by our shared values, commitment
              to excellence, and relentless drive to create impactful solutions.
              Ruduo Technologies is a haven for aspiring entrepreneurs,
              providing a nurturing space for fintech startups to flourish. For
              passionate individuals, we offer opportunities to explore ideas,
              collaborate on moonlighting projects, and unlock their full
              potential.
            </p>
          </div>
          <div className="flex-1 flex justify-end items-end">
            <img
              src="/assests/about/about-life.jpg"
              alt=""
              className="w-[400px]"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
