"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

import CheckIcon from "@/public/check.svg";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading-container">
          <div className="mx-auto w-fit">
            <p className="badge">Boost your productivity</p>
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

        <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={clsx(
                "card",
                tier.inverse && "border-black bg-black text-white",
              )}
            >
              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-[#6F6C90]">
                  {tier.title}
                </h3>
                {tier.popular && (
                  <p className="inline-flex rounded-xl border border-white/20 px-4 py-1.5 text-sm">
                    <motion.span
                      animate={{
                        backgroundPositionX: "-100%",
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] bg-clip-text font-medium text-transparent [background-size:200%]"
                    >
                      Popular
                    </motion.span>
                  </p>
                )}
              </div>
              <div className="mt-[30px] flex items-baseline gap-1">
                <span className="text-4xl font-bold leading-none tracking-tighter">
                  ${tier.monthlyPrice}
                </span>
                <span className="tracking-tight text-[#6F6C90]">/month</span>
              </div>
              <button
                className={clsx(
                  "btn btn-primary mt-[30px] w-full",
                  tier.inverse && "bg-white text-black",
                )}
              >
                {tier.buttonText}
              </button>
              <ul className="mt-8 flex flex-col gap-5">
                {tier.features.map((feature, id) => (
                  <li key={id} className="flex items-center gap-4 text-sm">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
