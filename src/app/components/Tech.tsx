"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import { IconBrandCpp, IconBrandFigma, IconBrandGithub, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandRedux, IconBrandTypescript, IconHtml } from "@tabler/icons-react";

export function Tech() {
  return (
    <CardContainer className="inter-var flex justify-center gap-2 flex-wrap items-center">
      <CardBody className="bg-gray-50 relative group/card rounded-full w-20 h-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-6">
        <IconBrandReact className="w-10 h-10" />
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-20 h-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-6">
        <IconBrandNextjs className="w-10 h-10"/>
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-20 h-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-6">
        <IconBrandTypescript className="w-10 h-10"/>
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-20 h-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-6">
        <IconBrandJavascript className="w-10 h-10"/>
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-20 h-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-6">
        <IconBrandFigma className="w-10 h-10"/>
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-20 h-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-6">
        <IconBrandRedux className="w-10 h-10"/>
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-20 h-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-6">
        <IconBrandCpp className="w-10 h-10"/>
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-20 h-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-6">
        <IconBrandMongodb className="w-10 h-10"/>
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-20 h-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-6">
        <IconBrandNodejs className="w-10 h-10"/>
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card rounded-full w-20 h-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] flex justify-center items-center p-6">
        <IconBrandGithub className="w-10 h-10"/>
      </CardBody>
    </CardContainer>
  );
}
