"use client";
import React from "react";
import { Button } from "@/app/components/ui/moving-border";
import { Highlight } from "../components/ui/hero-highlight";

const Connect = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto px-4 py-12">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] font-bold text-center text-gray-100 mb-6 leading-tight">
        Ready to Elevate <Highlight>Your Digital Presence</Highlight> to New
        Heights?
      </h1>

      {/* Paragraph */}
      <p className="text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 text-center">
        Reach out to me today and let's discuss how I can help you achieve your
        goals.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg mt-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-200 dark:text-gray-400 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-slate-700"
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-200 dark:text-gray-400 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-slate-700"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-200 dark:text-gray-400 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-slate-700 h-32 resize-none"
              id="message"
              placeholder="Type your message here"
              required
            ></textarea>
          </div>

          <div className="w-full px-3">
            <Button
              borderRadius="1.75rem"
              className="w-full bg-black dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Send Message
            </Button>
          </div>
        </div>
      </form>
     
    </div>
  );
};

export default Connect;
