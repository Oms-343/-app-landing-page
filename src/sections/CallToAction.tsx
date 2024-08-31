import Image from "next/image";
import ArrowRight from "@/public/arrow-right.svg";
import starImage from "@/public/star.png";
import springImage from "@/public/spring.png";

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="section-heading-container relative ">
          <h2 className="section-title mt-5 ">Sign up for free today</h2>
          <p className="section-description  mt-5 ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={starImage}
            alt="star-image"
            width={360}
            className="hidden md:block absolute  -left-[340px] -top-[137px] rotate-6 "
          />
          <Image
            src={springImage}
            alt="spring-image"
            width={360}
            className="hidden md:block absolute -right-[310px] -top-[19px] "
          />
        </div>
        <div className="flex justify-center items-center mt-10 gap-6">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-2">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5 " />
          </button>
        </div>
      </div>
    </section>
  );
}
