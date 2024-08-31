import Image from "next/image";
import logo from "@/public/logosaas.png";
import SocialX from "@/public/social-x.svg";
import SocialInsta from "@/public/social-insta.svg";
import SocialLinkedin from "@/public/social-linkedin.svg";
import SocialPin from "@/public/social-pin.svg";
import SocialYoutube from "@/public/social-youtube.svg";

export default function Footer() {
  return (
    <footer className="py-10 bg-black text-[#BCBCBC] text-sm text-center">
      <div className="container">
        <div className="inline-flex relative before:contet-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute ">
          <Image src={logo} alt="sass-logo" height={40} className="relative " />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
