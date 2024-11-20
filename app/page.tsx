import Image from "next/image";
import Email from "./components/forms/contact";
import { ParallaxHero, ParallaxHeroContainer, ParallaxVideo } from "./components/images/image";
import { LitContainer, LitGrid } from "./components/container/container";
import { serviceInfo } from "./lib/interface";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <div className="display: flex flex-col text-center overflow-hidden">
      <div className="max-sm:hidden">
          <ParallaxHeroContainer image="/images/hero.webp" height={40} text="Hi I'm Jesse And I Build Websites.">
            <Image src={"/images/header-img.svg"} alt="Web Design Madison Ohio" width={400} height={400} className="animate-bounce-slow"/>
          </ParallaxHeroContainer>
        <div className="m-16">
        <h1 className="m-auto text-primary text-3xl">Web Design Madison and Northeast Ohio</h1>
          <p className="m-auto text-3xl">
            {"I have over 10 years of experience in the field with a Bachelors degree in computer science. I like to take a laid back approach to communication, and a focused approach to work. "}
          </p>
        </div>
        <LitGrid _info={grid}/>
        <ParallaxHero image="/images/social.webp" height={40}/>
        <ParallaxHero image="/images/wheel.webp" height={40}/>
        <div className="m-16 text-center text-3xl">
        <p className="my-4">{"I like to overdeliver and produce results that both parties can be proud of. With a focus on solving clients individual needs for each project, I enjoy creating a platform that will make you proud to share your content, services or products."}</p>
        <LitContainer>
          <div className="flex flex-col items-center text-center m-auto p-12">
            <h2 className="text-primary text-3xl mb-6">Read My Blog</h2>
            <p>{"My blog contains some of the knowledge I've used to build web applications and websites that scale. If you would like to see more about my process or the technology I use, or you would just like to know more about me, that's the place to go. Also, it's pretty fun 😊"}</p>
            <Link href={"/blog"} className="my-4 w-[45%]">
              <Button>Blog</Button>
            </Link>
          </div>
        </LitContainer>
        </div>
        
        <ParallaxHero image="/images/solo.webp" height={40}/>
        <ParallaxHero image="/images/poke.webp" height={40}/>
        <div className="m-16 text-center text-3xl">
        <p>{"Offering backend, frontend, or fullstack custom services I am confident I have the ability to increase your businesses presence on the internet in whatever way you need."}</p>
        </div>
        <h2 className="m-auto text-primary text-3xl mt-6">Contact Me</h2>
      </div>
      <div className="md:hidden lg:hidden">
        <div className="w-full">
          <Image 
            src={"/images/hero.webp"}
            alt="Web design madison ohio"
            width={250}
            height={250}
            className="w-full"
          />
        </div>
        <div className="m-16">
        <h1 className="m-auto text-primary text-3xl">Web Design Madison and Northeast Ohio</h1>
          <p className="m-auto text-3xl">
            {"I have over 10 years of experience in the field with a Bachelors degree in computer science. I like to take a laid back approach to communication, and a focused approach to work. "}
          </p>
          <LitContainer>
            <div className="flex flex-col items-center text-center m-auto p-12">
              <h2 className="text-primary text-3xl mb-6">Read My Blog</h2>
              <p>{"My blog contains some of the knowledge I've used to build web applications and websites that scale. If you would like to see more about my process or the technology I use, or you would just like to know more about me, that's the place to go. Also, it's pretty fun 😊"}</p>
              <Link href={"/blog"} className="my-4 w-[45%]">
                <Button>Blog</Button>
              </Link>
            </div>
          </LitContainer>
        </div>
        <Image src={"/images/social.webp"}
          width={400}
          height={400}
          alt="socialsite" className="m-auto scale-150 overflow-hidden"/>
        <div className="m-16 text-center text-3xl">
        <p>{"I like to overdeliver and produce results that both parties can be proud of. With a focus on solving clients individual needs for each project, I enjoy creating a platform that will make you proud to share your content, services or products."}</p>
        </div>
        <Image src={"/images/solo.webp"}
          width={400}
          height={400}
          alt="socialsite" className="m-auto scale-150 overflow-hidden"/>
        <div className="m-16 text-center text-3xl">
        <p>{"Offering backend, frontend, or fullstack custom services I am confident I have the ability to increase your businesses presence on the internet in whatever way you need."}</p>
        </div>
        <Image src={"/images/wheel.webp"}
          width={400}
          height={400}
          alt="socialsite" className="m-auto scale-150 overflow-hidden"/>
        <h2 className="m-auto text-primary text-3xl">Contact Me</h2>
      </div>
      <div className="w-[80%] m-auto my-6">
        <LitContainer>
          <Email/>
        </LitContainer>
      </div>
    </div>
  )
}
