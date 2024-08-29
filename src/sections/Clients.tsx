import React from "react";
import Image from "next/image";

import acmeLogo from "@/public/logo-acme.png";
import quantamLogo from "@/public/logo-quantum.png";
import echoLogo from "@/public/logo-echo.png";
import celestialLogo from "@/public/logo-celestial.png";
import pulseLogo from "@/public/logo-pulse.png";
import apexLogo from "@/public/logo-apex.png";

export default function Clients() {
  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_left,transparent,black,transparent)]">
          <ul className="flex gap-14 flex-none">
            <li>
              <Image src={acmeLogo} alt="acme-logo" className="client-image" />
            </li>
            <li>
              <Image
                src={quantamLogo}
                alt="quantam-logo"
                className="client-image"
              />
            </li>
            <li>
              <Image src={echoLogo} alt="echo-logo" className="client-image" />
            </li>
            <li>
              <Image
                src={celestialLogo}
                alt="celestial-logo"
                className="client-image"
              />
            </li>
            <li>
              <Image
                src={pulseLogo}
                alt="pulse-logo"
                className="client-image"
              />
            </li>
            <li>
              <Image src={apexLogo} alt="apex-logo" className="client-image" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
