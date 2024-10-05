"use client";

import React from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import { Highlight } from "../components/ui/hero-highlight";
import { CardSpotlight } from "@/app/components/ui/card-spotlight";

const Review = () => {

  const Step = ({ title }: { title: string }) => {
    return (
      <li className="flex gap-2 items-start">
        <CheckIcon />
        <p className="text-white">{title}</p>
      </li>
    );
  };

  const CheckIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2c-.218 0-.432.002-.642.005l-.616.017l-.299.013l-.579.034l-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553l-.034.579c-.005.098-.01.198-.013.299l-.017.616l-.004.318l-.001.324c0 .218.002.432.005.642l.017.616l.013.299l.034.579l.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046l.579.034c.098.005.198.01.299.013l.616.017l.642.005l.642-.005l.616-.017l.299-.013l.579-.034l.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553l.034-.579c.005-.098.01-.198.013-.299l.017-.616l.005-.642l-.005-.642l-.017-.616l-.013-.299l-.034-.579l-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046l-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017l-.318-.004l-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094l-4 4a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1 1.32-1.497l.094.083l1.293 1.292l3.293-3.292z"
          fill="currentColor"
          strokeWidth="0"
        />
      </svg>
    );
  };

  const testimonials = [
    {
      quote: "It's great to see your dedication, Siddhant! You always push boundaries and aim for perfection.",
      name: "Deepanshu Sahu",
      title: "Software Developer",
    },
    {
      quote: "Siddhant's attention to detail and passion for coding make him a standout developer. His commitment to his work is truly inspiring.",
      name: "Ayush Chouksey",
      title: "Software Developer",
    },
    {
      quote: "Siddhant is the kind of developer who never settles for average. His drive to constantly improve is admirable.",
      name: "Shivendra Singh Chandel",
      title: "Full Stack Developer",
    },
    {
      quote: "Siddhant's work ethic is unmatched. His dedication as a software developer sets him apart from the rest.",
      name: "Sachin Pal",
      title: "Electronic Communication Engineer",
    },
    {
      quote: "Siddhant's passion for software development shines through in everything he does. He is constantly learning and pushing the envelope.",
      name: "Sheryansh Patel",
      title: "Software Engineer",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 font-bold text-center text-gray-100 mb-8">
        Kind Words From{" "}
        <Highlight className="">
          People I Worked With.
        </Highlight>
      </h1>

      {/* Infinite Moving Cards */}
      <div className="h-[30rem] w-full flex flex-col items-center justify-center relative overflow-hidden rounded-md shadow-lg bg-black/50">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>

      {/* Section Title */}
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-10 font-bold text-center text-gray-100">
        How I Build Intuitions?
      </p>

      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {/* First Card */}
        <CardSpotlight className="h-96 w-full lg:w-80 mx-auto rounded-xl">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Discovery and Planning
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Initial Start
            <ul className="list-none mt-2">
              <Step title="Engaging in Discussions" />
              <Step title="Understanding Specific Requirements" />
              <Step title="Gathering Insights" />
              <Step title="Defining the Project Scope" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            I set clear expectations regarding timelines, deliverables, and outcomes to ensure alignment throughout the project.
          </p>
        </CardSpotlight>

        {/* Second Card */}
        <CardSpotlight className="h-96 w-full lg:w-80 mx-auto rounded-xl">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Design and Development
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Turning the project's goals 
            <ul className="list-none mt-2">
              <Step title="Translating Goals into Design" />
              <Step title="Creating Wireframes and Prototypes" />
              <Step title="Aligning with Brand Identity" />
              <Step title="Resonating with the Target Audience" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            The design is crafted to resonate with the target audience..
          </p>
        </CardSpotlight>

        {/* Third Card */}
        <CardSpotlight className="h-96 w-full lg:w-80 mx-auto rounded-xl">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Development & Launch
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Product's security, ability to scale, and optimal performance.
            <ul className="list-none mt-2">
              <Step title="Final Client Review" />
              <Step title="Ensuring Client Satisfaction" />
              <Step title="Product Deployment" />
              <Step title="Focus on Security" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            I conduct a thorough review with the client to ensure all requirements have been met.
          </p>
        </CardSpotlight>
      </div>
    </div>
  );
};

export default Review;
