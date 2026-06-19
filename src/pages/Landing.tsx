import Header from "../components/Header";
import About from "./About.tsx";
import Logan from "../components/Slogan.tsx";
import slogans from "../resources/slogans.json";
import { useEffect, useState } from "react";
import { Abilities } from "./Abilities.tsx";

export function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handSlogans = setInterval(() => {
      setIndex((i) => {
        if (i >= slogans.length -1) {
          return 0;
        }
        return i + 1;
      });

      return index;
    }, 4000);

    return () => clearInterval(handSlogans);
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="">
        <video
          autoPlay
          loop
          className=" max-h-96 w-full object-fill"
          src="/public/videos/background.mp4"
        ></video>

        <Logan logan={slogans[index].msg} />

        <About />

        <Abilities />
      </div>
    </div>
  );
}
