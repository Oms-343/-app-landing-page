import Image from "next/image";
import ProductImage from "@/public/product-image.png";
import pyramidImage from "@/public/pyramid.png";
import tubeImage from "@/public/tube.png";
import ArrowRight from "@/public/arrow-right.svg";
import Leaf from "@/public/leaf.svg";
import Lock from "@/public/lock.svg";
import Goal from "@/public/goal.svg";
import Bell from "@/public/bell.svg";

export default function ProductInfo() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="w-fit mx-auto">
            <p className="badge">Boost Your Productivity</p>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px]  font-bold tracking-tighter heading-background mt-5 ">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#010D3E] mt-5 ">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>

        <div className="relative">
          <Image src={ProductImage} alt="product-image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="pyramid-image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="tube-image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-32"
          />
        </div>

        <div className="mt-10">
          <div className="max-w-[240px] md:max-w-[520px] md:grid md:grid-cols-2 md:gap-x-4 lg:max-w-none lg:flex lg:flex-row   mx-auto  flex flex-col ">
            <div className="py-10 flex flex-col  gap-2  ">
              <Leaf />
              <p className="tracking-tight font-bold text-lg ">
                Integrating ecosystem
              </p>
              <p className="tracking-tight ">
                Track your progress and motivate your efforts everyday
              </p>
              <button className="btn btn-text gap-1 ">
                <span>Lear More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="py-10  flex flex-col  gap-2 ">
              <Goal />
              <p className="tracking-tight font-bold text-lg ">
                Goal setting and tracking
              </p>
              <p className="tracking-tight ">
                Set and track goals with manageable task breakdowns.
              </p>
              <button className="btn btn-text gap-1 pl-0">
                <span>Lear More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="py-10  flex flex-col  gap-2 ">
              <Lock />
              <p className="tracking-tight font-bold text-lg ">
                Secure data encryption
              </p>
              <p className="tracking-tight ">
                Ensure your data’s safety with top-tier encryption.
              </p>
              <button className="btn btn-text gap-1 pl-0">
                <span>Lear More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="py-10  flex flex-col  gap-2 ">
              <Bell />
              <p className="tracking-tight font-bold text-lg ">
                Customizable notifications
              </p>
              <p className="tracking-tight   ">
                Get alerts on tasks and deadlines that matter most.
              </p>
              <button className="btn btn-text gap-1 pl-0">
                <span>Lear More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
