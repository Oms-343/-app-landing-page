import ArrowRight from "@/public/arrow-right.svg";
import Menu from "@/public/menu.svg";
import logosaas from "@/public/logosaas.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0">
      <div className="bg-black text-white text-sm flex items-center justify-center gap-1 py-2">
        <p>View the complete kit</p>
        <ArrowRight className="w-4 h-4" />
      </div>

      <div className=" container flex items-center justify-between p-5 ">
        <Image src={logosaas} alt="logo" height={40} width={40} />
        <Menu className="w-5 h-5" />
      </div>
    </header>
  );
}
