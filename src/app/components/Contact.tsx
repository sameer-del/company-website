import React from "react";

export const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col w-full text-xl text-zinc-400 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-4xl font-bold text-blue-700">
        Contact Us
      </h2>

      <div className="mt-20 max-md:mt-10">
        <label htmlFor="fullName" className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          className="w-full px-5 py-3.5 mt-4 bg-white rounded-md border border-solid border-neutral-200"
          placeholder="Full Name"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-5 py-3.5 bg-white rounded-md border border-solid border-neutral-200"
          placeholder="Email Address"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-5 py-3.5 bg-white rounded-md border border-solid border-neutral-200"
          placeholder="Phone Number"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          className="w-full px-5 pt-3.5 pb-32 bg-white rounded-md border border-solid border-neutral-200"
          placeholder="Have anything to say?"
        />
      </div>

      <button
        type="submit"
        className="gap-2.5 self-center px-24 py-2.5 mt-4 font-medium text-white whitespace-nowrap bg-blue-700 rounded-md max-md:px-5"
      >
        Send
      </button>
    </form>
  );
};
