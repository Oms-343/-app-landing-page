import ArrowRight from "@/public/arrow-right.svg";
import Menu from "@/public/menu.svg";
import logosaas from "@/public/logosaas.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="bg-black text-white text-sm flex items-center justify-center gap-1 py-3">
        <div className="flex items-center gap-2">
          <p className="hidden lg:block text-white/60 ">
            This page is is included in a free Saas Website Kit
          </p>
          <p>View the complete kit</p>
        </div>
        <ArrowRight className="w-4 h-4" />
      </div>

      <div className="container py-5 flex items-center justify-between  ">
        <Image src={logosaas} alt="logo" height={40} width={40} />
        <Menu className="w-5 h-5 md:hidden" />
        <nav className="hidden md:flex items-center text-black/60  gap-6">
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/customers">Customers</a>
          <a href="/updates">Updates</a>
          <a href="/help">Help</a>
          <button className="btn btn-primary">Get for free</button>
        </nav>
      </div>
    </header>
  );
}
