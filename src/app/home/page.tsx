"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/app/components/ui/hero-highlight";
import { Button } from "@/app/components/ui/moving-border";

const Hero = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Hi, Siddhant is here, and I am a{" "}
        <Highlight className="text-black dark:text-white">
          Software Developer.
        </Highlight>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [10, 0] }}
        transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mx-auto"
      >
        "The only way to do great work is to love what you do." –{" "}
        <span className="font-semibold text-black dark:text-white">
          Steve Jobs
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [10, 0] }}
        transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        className="flex justify-center items-center mt-6 gap-6"
      >
        <a
          href="mailto:siddhant123salve@gmail.com"
          className="flex justify-center"
        >
          <Button
            borderRadius="1.75rem"
            className="w-full bg-black "
          >
            Let's Connect 🔥
          </Button>
        </a>
      </motion.div>
    </HeroHighlight>
  );
};

export default Hero;
