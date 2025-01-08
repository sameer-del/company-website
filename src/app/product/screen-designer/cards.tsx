"use client";

const Cards = () => {
  const screenBuilderData = [
    {
      title: "Drag-and-Drop Interface",
      description_a:
        "Easily build and customize screens with a simple drag-and-drop interface.",
      description_b:
        "Add, arrange, and configure components without writing any code.",
    },
    {
      title: "AI-Powered Screen Development",
      description_a:
        "Leverage an AI agent that helps you design new screens faster.",
      description_b:
        "AI suggests design elements and layouts based on user inputs to improve form functionality and user experience.",
    },
    {
      title: "AI-Based Optimization Suggestions",
      description_a:
        "Based on user Time-to-Action (TAT), the AI agent offers suggestions to optimize or redesign screens for faster performance and better user engagement.",
      description_b: "",
    },
    {
      title: "Screen Versioning",
      description_a:
        "Keep track of screen changes with version control to avoid disruptions caused by new updates.",
      description_b:
        "Ensure stability and maintainability while implementing new features.",
    },
    {
      title: "Seamless Integration",
      description_a:
        "Integrate your screens with existing applications seamlessly using our APIs and flexible configurations.",
      description_b:
        "Supports modern frontend frameworks like React, Angular, and Vue.js.",
    },
    {
      title: "Real-Time Collaboration",
      description_a: "Work collaboratively with your team in real time.",
      description_b:
        "Share and review designs instantly with version control and rollback features to track changes.",
    },
    {
      title: "Responsive Design Out-of-the-Box",
      description_a:
        "Automatically generate responsive screens that work flawlessly across devices—desktops, tablets, and smartphones.",
      description_b: "",
    },
    {
      title: "Advanced Customization Options",
      description_a:
        "Add complex validations, dynamic fields, and conditional logic to forms with a few clicks.",
      description_b:
        "Configure actions and workflows directly within the builder to define form behavior.",
    },
    {
      title: "Cloud-Based Solution",
      description_a:
        "Store your screen designs in the cloud for easy access from anywhere.",
      description_b:
        "Enjoy scalability and reliability with cloud infrastructure.",
    },
    {
      title: "Pre-Built Templates",
      description_a:
        "Choose from a library of pre-designed templates to get started quickly.",
      description_b:
        "Customize templates to match your brand and functionality needs.",
    },
    {
      title: "Cross-Browser Compatibility",
      description_a:
        "Build screens that work seamlessly across all major browsers, ensuring a consistent user experience.",
      description_b: "",
    },
    {
      title: "Analytics and Performance Monitoring",
      description_a:
        "Track form performance and user interactions with built-in analytics tools.",
      description_b:
        "Monitor load times, form completion rates, and user behavior to continuously optimize screens.",
    },
  ];

  return (
    <section
      className="max-w-[98%] mx-auto bg-black py-10 rounded-[15px] mt-[20px] px-10"
      id="more"
    >
      <div className="w-full h-[80px] bg-white rounded-[15px] pt-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-[secondary]">
          Key Features of Our AI-Powered Business Rule Engine
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-[35px] py-2 mt-5 font-[secondary]">
        {screenBuilderData.map((card, index) => (
          <div
            className="bg-white rounded-[15px] flex flex-col justify-center items-center h-[350px] px-2 py-4 border-blue-600 border-b-4 border-r-4 hover:bg-blue-400 hover:text-white duration-100 "
            key={index}
          >
            <h3 className="text-[27px] font-semibold  mb-3 text-center">
              {card.title}
            </h3>
            <ul className="text-center pl-5  space-y-2">
              <li className="text-[19px]">{card.description_a}</li>
              <li className="text-[19px]">{card.description_b}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
