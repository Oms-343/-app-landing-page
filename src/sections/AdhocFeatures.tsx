import Image from "next/image";
import cube from "@/public/cube.png";
import cubeHelix from "@/public/cube-helix.png";

export default function KeyFeatures() {
  return (
    <section className="hidden lg:block py-24 bg-white">
      <div className="container">
        <div className="section-heading-container">
          <div className="w-fit mx-auto">
            <p className="badge">Everything you need</p>
          </div>
          <h2 className="section-title mt-5 ">
            Streamlined for easy management
          </h2>
          <p className="section-description mt-5 ">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="flex justify-center gap-5 pt-14 ">
          <div className="flex flex-col items-center justify-center py-10 px-20   shadow-[0px_7px_14px_#EAEAEA] rounded-3xl  border border-[#1B1B1B/8]  ">
            <Image alt="cube-helix" src={cubeHelix} />
            <p className="text-2xl tracking-tight font-bold">
              Integration ecosystem
            </p>
            <p className="text-center">
              Enhance your productivity by connecting with your favorite tools,
              keeping all your essentials in one place.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-10 px-20  shadow-[0px_7px_24px_#EAEAEA] rounded-3xl border  border-[#1B1B1B/8] ">
            <Image alt="cube" src={cube} />
            <p className="text-2xl tracking-tight font-bold ">
              Goal setting and tracking
            </p>
            <p className="text-center ">
              Define and track your goals, breaking down objectives into
              achievable tasks to keep your targets in sight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

//width={324} height={324}

// border: 1px solid rgba(27, 27, 27, 0.08);
// filter: drop-shadow(0px 7px 24px #24262B);
// border-radius: 20px;
