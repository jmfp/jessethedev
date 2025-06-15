// "use client";
import Image from "next/image";
import Email from "./components/forms/contact";
import { ParallaxHero, ParallaxHeroContainer } from "./components/images/image";
import { LitContainer, LitGrid } from "./components/container/container";
import { serviceInfo } from "./lib/interface";
import { BiLogoTypescript } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { DiPython } from "react-icons/di";
import { RiWordpressFill } from "react-icons/ri";
import { DiSwift } from "react-icons/di";

export default function Services() {
  // const [currentWord, setCurrentWord] = useState("Websites");
  let grid: serviceInfo[] = [];
  grid.push({
    title: "Typescript",
    icon: <BiLogoTypescript />,
    iconColor: "rgb(68, 118, 192)",
    description:
      "I am proficient in Typescript and have used it in a variety of projects.",
  });
  grid.push({
    title: "React/React Native",
    icon: <DiReact />,
    iconColor: "rgb(113, 187, 210",
    description:
      "I have built fullstack applications using React and React Native.",
  });
  grid.push({
    title: "Next.js",
    icon: <RiNextjsFill />,
    description:
      "I've used Next.js to build many websites and applications for full SEO benefits.",
  });
  grid.push({
    title: "Python",
    icon: <DiPython />,
    iconColor: "rgb(249, 219, 102)",
    description:
      "I've built everything from web applications, server applications, AI, and games in python.",
  });
  grid.push({
    title: "Wordpress",
    icon: <RiWordpressFill />,
    iconColor: "rgb(67, 91, 226)",
    description:
      "I've used Wordpress for fully responsive SEO friendly websites for clients small and large.",
  });
  grid.push({
    title: "Swift",
    icon: <DiSwift />,
    iconColor: "rgb(222, 93, 68)",
    description:
      "Swift offers a great way to build native applications for macOS, iOS, and watchOS.",
  });

  return (
    <div className="display: flex flex-col text-center overflow-hidden">
      <div>
        <ParallaxHeroContainer
          image="/images/hero.webp"
          height={40}
          text={"Hi, I'm Jesse And I Build Websites"}
        >
          <Image
            src={"/images/header-img.svg"}
            alt="Web Design Ohio"
            width={400}
            height={400}
            className="animate-bounce-slow"
          />
        </ParallaxHeroContainer>
        <div className="m-16">
          <h1 className="m-auto text-primary text-3xl">
            Web Design Services In Ohio
          </h1>
          <p className="m-auto text-3xl">
            {
              "I have over 10 years of experience in the field with a Bachelors degree in computer science. I like to take a laid back approach to communication, and a focused approach to work. "
            }
          </p>
        </div>
        <ParallaxHero image="/images/social.webp" height={40} />
        <ParallaxHero image="/images/wheel.webp" height={40} />
        <div className="m-16 text-center text-3xl">
          <p className="my-4">
            {
              "I like to overdeliver and produce results that both parties can be proud of. With a focus on solving clients individual needs for each project, I enjoy creating a platform that will make you proud to share your content, services or products. Here are some of the technologies I use."
            }
          </p>
        </div>
        <LitGrid _info={grid} />
        <ParallaxHero image="/images/solo.webp" height={40} />
        <ParallaxHero image="/images/poke.webp" height={40} />
        <div className="m-16 text-center text-3xl">
          <p>
            {
              "Offering backend, frontend, or fullstack custom services I am confident I have the ability to increase your businesses presence on the internet in whatever way you need."
            }
          </p>
        </div>
        <h2 className="m-auto text-primary text-3xl mt-6">Contact Me</h2>
      </div>
      <div className="w-[80%] m-auto my-6">
        <LitContainer>
          <Email />
        </LitContainer>
      </div>
    </div>
  );
}
