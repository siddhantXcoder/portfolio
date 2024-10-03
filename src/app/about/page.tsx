"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { WobbleCard } from "@/app/components/ui/wobble-card";
import createGlobe from "cobe";
import img1 from "@/images/img1.png";
import { Highlight } from "../components/ui/hero-highlight";
import {Tech} from "../components/Tech";
import Experience from "../components/Experience";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-10 px-4 sm:px-8 w-full">
      {/* Introduction Section */}
      <div className="flex items-center justify-center flex-col text-center mb-10">
        <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
          About Me
        </p>
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-black dark:text-white mb-2">
          A Glimpse into My World
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-xl">
          Learn more about who I am, what I do, and what inspires me.
        </p>
      </div>

      {/* Wobble Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        {/* First Card (Spans 2 columns on larger screens) */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue relative overflow-hidden min-h-[400px] lg:min-h-[500px] rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative z-10 max-w-xs lg:max-w-sm p-6">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              I prioritize building strong, collaborative relationships through
              clear, consistent, and open communication, ensuring alignment and
              mutual success in every partnership.
            </h2>
            <p className="mt-4 text-left text-base text-neutral-200">
              I constantly strive to improve.
            </p>
          </div>
          <Image
            src={img1}
            alt="Background Image"
            layout="fill" // Fill the entire container
            objectFit="cover" // Ensure it covers the container
            className="absolute opacity-50" // Adjust opacity for effect
          />
        </WobbleCard>

        {/* Second Card */}
        <WobbleCard containerClassName="col-span-1 bg-black relative overflow-hidden min-h-[300px] lg:min-h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative z-10 max-w-md p-6">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
               I m highly adaptable with time zone coordination, ensuring smooth
              and effective communication no matter where my collaborators are
              located.
            </h2>
            <p className="mt-4 text-left text-base text-neutral-200">
              Flexibility is key to maintaining strong communication across
              distances.
            </p>
          </div>
          <Image
            src={img1}
            alt="Background Image"
            layout="fill" // Fill the entire container
            objectFit="cover" // Ensure it covers the container
            className="absolute opacity-50" // Adjust opacity for effect
          />
        </WobbleCard>

        {/* Third Card (Spans 3 columns on larger screens) */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-black relative overflow-hidden min-h-[400px] lg:min-h-[500px] xl:min-h-[300px] rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative z-10 max-w-sm lg:max-w-lg p-6">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Tech enthusiast driven by a deep passion for innovation and
              cutting-edge development.
            </h2>
            <p className="mt-4 text-left text-base text-neutral-200">
              Never stop learning new things.
            </p>
          </div>
          <Image
            src={img1}
            alt="Background Image"
            layout="fill" // Fill the entire container
            objectFit="cover" // Ensure it covers the container
            className="absolute opacity-50" // Adjust opacity for effect
          />
          <Globe className="absolute m-auto right-0 bottom-10 top-0" />
        </WobbleCard>
      </div>

      <div className="flex justify-center items-center flex-col">
      <h1 className="mt-4  text-xl text-center w-[80%] text-neutral-200">
      I'm eager to join a dynamic, cross-functional team that shares my passion for making a positive impact by creating accessible and user-centered designs that improve lives.
      </h1>
      <Tech/>
      </div>

      <div className="mt-6 flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 font-bold text-center text-gray-100 mb-8">
          My <Highlight className="">Experience.</Highlight>
        </h1>
      <Experience/>
      </div>
    </div>
  );
}

export default About;
