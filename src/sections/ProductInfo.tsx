"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import ProductImage from "@/public/product-image.png";
import pyramidImage from "@/public/pyramid.png";
import tubeImage from "@/public/tube.png";
import ArrowRight from "@/public/arrow-right.svg";
import Leaf from "@/public/leaf.svg";
import Lock from "@/public/lock.svg";
import Goal from "@/public/goal.svg";
import Bell from "@/public/bell.svg";
import { useRef } from "react";

export default function ProductInfo() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24"
    >
      <div className="container">
        <div className="section-heading-container">
          <div className="mx-auto w-fit">
            <p className="badge">Boost Your Productivity</p>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>

        <div className="relative">
          <Image src={ProductImage} alt="product-image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid-image"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube-image"
            height={248}
            width={248}
            className="absolute -left-32 bottom-24 hidden md:block"
            style={{
              translateY,
            }}
          />
        </div>

        <div className="mt-10">
          <div className="mx-auto flex max-w-[240px] flex-col md:grid md:max-w-[520px] md:grid-cols-2 md:gap-x-4 lg:flex lg:max-w-none lg:flex-row">
            <div className="flex flex-col gap-2 py-10">
              <Leaf />
              <p className="text-lg font-bold tracking-tight">
                Integrating ecosystem
              </p>
              <p className="tracking-tight">
                Track your progress and motivate your efforts everyday
              </p>
              <button className="btn btn-text gap-1">
                <span>Lear more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-2 py-10">
              <Goal />
              <p className="text-lg font-bold tracking-tight">
                Goal setting and tracking
              </p>
              <p className="tracking-tight">
                Set and track goals with manageable task breakdowns.
              </p>
              <button className="btn btn-text gap-1 pl-0">
                <span>Lear more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2 py-10">
              <Lock />
              <p className="text-lg font-bold tracking-tight">
                Secure data encryption
              </p>
              <p className="tracking-tight">
                Ensure your data’s safety with top-tier encryption.
              </p>
              <button className="btn btn-text gap-1 pl-0">
                <span>Lear more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2 py-10">
              <Bell />
              <p className="text-lg font-bold tracking-tight">
                Customizable notifications
              </p>
              <p className="tracking-tight">
                Get alerts on tasks and deadlines that matter most.
              </p>
              <button className="btn btn-text gap-1 pl-0">
                <span>Lear more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
