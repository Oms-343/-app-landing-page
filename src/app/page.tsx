import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Clients from "@/sections/Clients";
import ProductInfo from "@/sections/ProductInfo";
import AdhocFeatures from "@/sections/AdhocFeatures";
import Pricing from "@/sections/Pricing";
import Testimoials from "@/sections/Testimoials";
import CallToAction from "@/sections/CallToAction";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Clients />
      <ProductInfo />
      <AdhocFeatures />
      <Pricing />
      <Testimoials />
      <CallToAction />
    </div>
  );
}
