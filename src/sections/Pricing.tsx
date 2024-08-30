import CheckIcon from "@/public/check.svg";
import clsx from "clsx";

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
    <section className="py-24 bg-white ">
      <div className="container">
        <div className="section-heading-container">
          <div className="w-fit mx-auto">
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

        <div className="mt-10 flex flex-col gap-6 items-center lg:flex-row lg:items-end lg:justify-center ">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={clsx(
                "p-10 max-w-xs w-full rounded-3xl border  border-[#F1F1F1] shadow-[0px_7px_14px_#EAEAEA]",
                tier.inverse && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-[#6F6C90]">
                  {tier.title}
                </h3>
                {tier.popular && (
                  <p className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </p>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${tier.monthlyPrice}
                </span>
                <span className="tracking-tight text-[#6F6C90] ">/month</span>
              </div>
              <button
                className={clsx(
                  "btn btn-primary w-full mt-[30px]",
                  tier.inverse && "bg-white text-black"
                )}
              >
                {tier.buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {tier.features.map((feature, id) => (
                  <li key={id} className="text-sm flex items-center gap-4">
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
