"use client";

const Cards = () => {
  const Data = [
    {
      title: "Drag-and-Drop Interface",
      number: "01",
      description:
        "Easily build and customize screens with a simple drag-and-drop interface. Add, arrange, and configure components without writing any code.",
    },
    {
      title: "AI-Powered Screen Development",
      number: "02",
      description:
        "Leverage an AI agent that helps you design new screens faster. AI suggests design elements and layouts based on user inputs to improve form functionality and user experience.",
    },
    {
      title: "AI-Based Optimization Suggestions",
      number: "03",
      description:
        "Based on user Time-to-Action (TAT), the AI agent offers suggestions to optimize or redesign screens for faster performance and better user engagement.",
    },
    {
      title: "Screen Versioning",
      number: "04",
      description:
        "Keep track of screen changes with version control to avoid disruptions caused by new updates. Ensure stability and maintainability while implementing new features.",
    },
    {
      title: "Seamless Integration",
      number: "05",
      description:
        "Integrate your screens with existing applications seamlessly using our APIs and flexible configurations. Supports modern frontend frameworks like React, Angular, and Vue.js.",
    },
    {
      title: "Real-Time Collaboration",
      number: "06",
      description:
        "Work collaboratively with your team in real time. Share and review designs instantly with version control and rollback features to track changes.",
    },
    {
      title: "Responsive Design Out-of-the-Box",
      number: "07",
      description:
        "Automatically generate responsive screens that work flawlessly across devices—desktops, tablets, and smartphones.",
    },
    {
      title: "Advanced Customization Options",
      number: "08",
      description:
        "Add complex validations, dynamic fields, and conditional logic to forms with a few clicks. Configure actions and workflows directly within the builder to define form behavior.",
    },
    {
      title: "Cloud-Based Solution",
      number: "09",
      description:
        "Store your screen designs in the cloud for easy access from anywhere. Enjoy scalability and reliability with cloud infrastructure.",
    },
    {
      title: "Pre-Built Templates",
      number: "10",
      description:
        "Choose from a library of pre-designed templates to get started quickly. Customize templates to match your brand and functionality needs.",
    },
    {
      title: "Cross-Browser Compatibility",
      number: "11",
      description:
        "Build screens that work seamlessly across all major browsers, ensuring a consistent user experience.",
    },
    {
      title: "Analytics and Performance Monitoring",
      number: "12",
      description:
        "Track form performance and user interactions with built-in analytics tools. Monitor load times, form completion rates, and user behavior to continuously optimize screens.",
    },
  ];

  return (
    <section className="px-5 py-[100px] lg:px-[100px] bg-[#f8f9fa]" id="more">
      <div className="">
        <h1 className="lg:text-[45px] text-[35px] font-raleway font-[600]">
          Key Features of Our Screen Builder
        </h1>
        <p className="lg:text-[18px] font-raleway mt-2">
          key features and important points of our Product
        </p>
      </div>
      <section className="mt-5 ">
        <div className="grid lg:grid-cols-3 place-items-center gap-[24px]">
          {Data.map((card, index) => (
            <div key={index} className="lg:w-[465px] px-[24px] py-[10px]">
              <div className="h-[100px] font-para text-[85px] font-[900] text-[#c1f4e1]">
                {card.number}
              </div>
              <h1 className="h-[100px] font-raleway lg:text-[28px] text-[24px] font-[700] max-w-[85%] mt-5 ">
                {card.title}
              </h1>
              <p className="font-para">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Cards;
