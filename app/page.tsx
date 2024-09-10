import Image from "next/image";
import Email from "./components/forms/contact";
import { ParallaxHero, ParallaxHeroContainer, ParallaxVideo } from "./components/images/image";
import { LitGrid } from "./components/container/container";
import { serviceInfo } from "./lib/interface";

export default function Services() {
  let grid : serviceInfo[] = []
  grid.push({title: 'Web Design',
    icon: "ff",
    description: "Custom web design services that aim to solve problems unique to each business.",
    destination: "/"
  })
  grid.push({title: 'SEO',
    icon: "ff",
    description: "Search engine optimization to get your business represented locally.",
    destination: "/"
  })

  return (
    <div className="display: flex flex-col text-center">
      <div className="max-sm:hidden">
          <ParallaxHeroContainer image="/images/hero.webp" height={40} text="Hi I'm Jesse Price And I Design Websites.">
            <Image src={"/images/header-img.svg"} alt="Web Design Madison Ohio" width={400} height={400} className="animate-bounce-slow"/>
          </ParallaxHeroContainer>
        <div className="m-16">
        <h1 className="m-auto text-primary text-3xl">Web Design Services In Madison and Northeast Ohio</h1>
          <p className="m-auto text-3xl">
            {"I have over 10 years of experience in the field with a Bachelors degree in computer science. I like to take a laid back approach to communication, and a focused approach to work. "}
          </p>
        </div>
        <LitGrid _info={grid}/>
        <ParallaxHero image="/images/social.webp" height={40}/>
        <ParallaxHero image="/images/wheel.webp" height={40}/>
        <div className="m-16 text-center text-3xl">
        <p>{"I like to overdeliver and produce results that both parties can be proud of. With a focus on solving clients individual needs for each project, I enjoy creating a platform that will make you proud to share your content, services or products."}</p>
        </div>
        
        <ParallaxHero image="/images/solo.webp" height={40}/>
        <ParallaxHero image="/images/poke.webp" height={40}/>
        <div className="m-16 text-center text-3xl">
        <p>{"Offering backend, frontend, or fullstack custom services I am confident I have the ability to increase your businesses presence on the internet in whatever way you need."}</p>
        </div>
        <h2 className="m-auto text-primary text-3xl mt-6">Contact Me</h2>
      </div>
      <div className="md:hidden lg:hidden">
      <h2 className="m-auto text-primary text-3xl">Web Design Services In Madison and Northeast Ohio</h2>
        <div className="m-16">
          <h2 className="m-auto text-primary text-3xl">Why Me?</h2>
          <p className="m-auto text-3xl">
            {"I have over 10 years of experience in the field with a Bachelors degree in computer science. I like to take a laid back approach to communication, and a focused approach to work. "}
          </p>
        </div>
        <Image src={"/images/social.webp"}
          width={800}
          height={800}
          alt="socialsite" className="m-auto scale-150"/>
        <div className="m-16 text-center text-3xl">
        <p>{"I like to overdeliver and produce results that both parties can be proud of. With a focus on solving clients individual needs for each project, I enjoy creating a platform that will make you proud to share your content, services or products."}</p>
        </div>
        <Image src={"/images/solo.webp"}
          width={800}
          height={800}
          alt="socialsite" className="m-auto scale-150"/>
        <div className="m-16 text-center text-3xl">
        <p>{"Offering backend, frontend, or fullstack custom services I am confident I have the ability to increase your businesses presence on the internet in whatever way you need."}</p>
        </div>
        <Image src={"/images/wheel.webp"}
          width={800}
          height={800}
          alt="socialsite" className="m-auto scale-150"/>
        <h2 className="m-auto text-primary text-3xl">Contact Me</h2>
      </div>
        <Email/>
    </div>
  )
}
