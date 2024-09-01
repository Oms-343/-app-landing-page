import ArrowRight from "@/public/arrow-right.svg";
import Menu from "@/public/menu.svg";
import logosaas from "@/public/logosaas.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-1 bg-black py-3 text-sm text-white">
        <div className="flex items-center gap-2">
          <p className="hidden text-white/60 lg:block">
            This page is is included in a free Saas Website Kit
          </p>
          <p>View the complete kit</p>
        </div>
        <ArrowRight className="h-4 w-4" />
      </div>

      <div className="container flex items-center justify-between py-5">
        <Image src={logosaas} alt="logo" height={40} width={40} />
        <button>
          <Menu className="h-5 w-5 md:hidden" />
        </button>
        <nav className="hidden items-center gap-6 text-black/60 md:flex">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
          <button className="btn btn-primary">Get for free</button>
        </nav>
      </div>
    </header>
  );
}
