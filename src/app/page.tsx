"use clen"
import About from "@/app/about/page";
import Connect from "./connect/page";
import Hero from "./home/page";
import Project from "./project/page";
import Review from "./review/page";


export default function Home() {
  return (
    <div className="w-full h-full box-border overflow-x-hidden p-0 ">
      <Hero/>
      <About/>
      <Project/>
      <Review/>
      <Connect/>
    </div>
  );
}
