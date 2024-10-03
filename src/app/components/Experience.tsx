"use client";
import React from "react";
import img from "@/images/achieve1.png";
import img2 from "@/images/achieve2.png";
import img3 from "@/images/achieve3.png";
import img4 from "@/images/memoji-computer.png";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="bg-black min-h-screen py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Card 1 - Web Development */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 flex items-center space-x-6 border border-white/20">
          <div className="w-[15%]">
            <Image
              src={img}
              alt="Web Development"
              className="rounded-lg w-full"
            />
          </div>
          <div className="w-3/4">
            <h1 className="text-2xl font-bold text-white mb-2">
              Web Development
            </h1>
            <p className="text-gray-300">
              Contributed to the development of a web-based platform utilizing
              React.js, significantly enhancing user interactivity.
            </p>
          </div>
        </div>

        {/* Card 2 - Team Projects */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 flex items-center space-x-6 border border-white/20">
          <div className="w-[15%]">
            <Image
              src={img3}
              alt="Team Projects"
              className="rounded-lg w-full"
            />
          </div>
          <div className="w-3/4">
            <h1 className="text-2xl font-bold text-white mb-2">
              Team Projects
            </h1>
            <p className="text-gray-300">
              Working on a team project fosters collaboration, communication,
              and the ability to leverage diverse skill sets to achieve a common
              goal.
            </p>
          </div>
        </div>

        {/* Card 3 - Mentoring */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 flex items-center space-x-6 border border-white/20">
          <div className="w-[15%]">
            <Image src={img2} alt="Mentoring" className="rounded-lg w-full" />
          </div>
          <div className="w-3/4">
            <h1 className="text-2xl font-bold text-white mb-2">Mentoring</h1>
            <p className="text-gray-300">
              Mentoring fosters personal and professional growth through
              guidance, support, and knowledge sharing.
            </p>
          </div>
        </div>

        {/* Card 4 - Runner-up */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 flex items-center space-x-6 border border-white/20">
          <div className="w-[20%]">
            <Image src={img4} alt="Runner-up" className="rounded-lg w-full" />
          </div>
          <div className="w-3/4">
            <h1 className="text-2xl font-bold text-white mb-2">
              Runner-up in Development Competition
            </h1>
            <p className="text-gray-300">
              Being a runner-up in a development competition is a significant
              achievement that highlights both technical expertise and
              creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
