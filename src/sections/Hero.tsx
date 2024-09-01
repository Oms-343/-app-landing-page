"use client";
import ArrowRight from "@/public/arrow-right.svg";
import cogImage from "@/public/cog.png";
import cylinderImage from "@/public/cylinder.png";
import noodleImage from "@/public/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <p className="badge">Version 2.0 is here</p>
            <h1 className="heading-background mt-6 text-5xl font-bold tracking-tighter md:text-7xl">
              Pathway to Productivity
            </h1>
            <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="mt-[30px] flex items-center gap-4">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn More </span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <motion.img
              src={cogImage.src}
              alt="cog-image"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt="cylinder-image"
              width={220}
              height={220}
              className="absolute -left-32 -top-8 hidden md:block"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="cylinder-image"
              width={220}
              height={220}
              className="absolute left-[448px] top-[524px] hidden rotate-[30deg] lg:block"
              style={{
                translateY: translateY,
                rotate: 30,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
