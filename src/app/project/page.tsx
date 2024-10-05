"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
import web1 from "@/images/web1.png";
import web2 from "@/images/studyplan.png"
import web3 from "@/images/dashboard.png"
import web4 from "@/images/web4.png"
import { IconBrandGithub, IconBrandJavascript, IconBrandMongodb, IconBrandNodejs, IconBrandReact, IconBrandTailwind } from "@tabler/icons-react";
import { FaJava } from "react-icons/fa";
import { Highlight } from "../components/ui/hero-highlight";

function Hero() {
  return (
    <div className="flex flex-col justify-center  items-center">
      <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 font-bold text-center text-gray-100 mb-8">
          Some Of My{ " "} <Highlight className="">Project.</Highlight>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-6 overflow-x-hidden flex-wrap w-11/12">
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
        >
         JobGrab
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Through this platfrom people find and upload job.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={web1}
            height="1000"
            width="1000"
            className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex justify-start mt-6">
        <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandReact className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandTailwind className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandJavascript className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandNodejs className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandMongodb className="w-10 h-10" />
      </CardBody>
        </div>

        <div className="flex justify-between items-center mt-12 sm:mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://jobportal.onoto.tech/"
            target="__blank"
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white"
          >
            Link 🔗
          </CardItem>
          <a href="https://github.com/siddhantXcoder/JobGrab">
          <CardItem
            translateZ={20}
            as="button"
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold"
          >
            <IconBrandGithub className="w-4 h-4 sm:w-5 sm:h-5" />
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
        >
         StudyPlan
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          A Edtech platfrom, aims to provide education at low cost.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={web2}
            height="1000"
            width="1000"
            className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex justify-start mt-6">
        <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandReact className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandTailwind className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandJavascript className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandNodejs className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandMongodb className="w-10 h-10" />
      </CardBody>
        </div>

        <div className="flex justify-between items-center mt-12 sm:mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://tubular-madeleine-874e73.netlify.app/"
            target="__blank"
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white"
          >
            Link 🔗
          </CardItem>
          <a href="https://github.com/siddhantXcoder/Study-Plan">
          <CardItem
            translateZ={20}
            as="button"
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold"
          >
            <IconBrandGithub className="w-4 h-4 sm:w-5 sm:h-5" />
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
        >
          DashBoard Application
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         Build a DashBoard Appliaction with multiple tools.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={web3}
            height="1000"
            width="1000"
            className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex justify-start mt-6">
        <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandReact className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandTailwind className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <IconBrandJavascript className="w-10 h-10" />
      </CardBody>
        </div>

        <div className="flex justify-between items-center mt-12 sm:mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://dynamic-gumdrop-900878.netlify.app/"
            target="__blank"
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white"
          >
            Link 🔗
          </CardItem>
          <a href="https://github.com/siddhantXcoder">
          <CardItem
            translateZ={20}
            as="button"
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold"
          >
            <IconBrandGithub className="w-4 h-4 sm:w-5 sm:h-5" />
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
        >
          Java Chat Application.
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Build a chatting application with swing and AWT.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={web4}
            height="1000"
            width="1000"
            className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex justify-start mt-6">
        <CardBody className="bg-gray-50 relative group/card rounded-full w-10 h-10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-2">
        <FaJava className="w-10 h-10"/>
      </CardBody>

        </div>

        <div className="flex justify-between items-center mt-12 sm:mt-20">
          <CardItem
            translateZ={20}
            href=""
            target="__blank"
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white"
          >
            Link 🔗
          </CardItem>
          <a href="https://github.com/siddhantXcoder/Chatting_Application">
          <CardItem
            translateZ={20}
            as="button"
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold"
          >
            <IconBrandGithub className="w-4 h-4 sm:w-5 sm:h-5" />
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
      </div>
      <h1>More Project Coming Soon..</h1>
    </div>
  );
}

export default Hero;


