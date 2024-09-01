"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ArrowRight from "@/public/arrow-right.svg";
import starImage from "@/public/star.png";
import springImage from "@/public/spring.png";

export default function CallToAction() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24"
    >
      <div className="container">
        <div className="section-heading-container relative">
          <h2 className="section-title mt-5">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt="star-image"
            width={360}
            className="absolute -left-[340px] -top-[137px] hidden rotate-6 md:block"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="spring-image"
            width={360}
            className="absolute -right-[310px] -top-[19px] hidden md:block"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="mt-10 flex items-center justify-center gap-6">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-2">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
