import Email from "../components/forms/contact";
import { ParallaxHero, ParallaxVideo } from "../components/images/image";

export default function Services() {
  return (
    <div className="display: flex flex-col text-center">
        <h2 className="m-auto text-primary text-3xl">Web Design Services</h2>
        <ParallaxVideo text={"JesseTheDev"}/>
        <div className="m-16">
          <h2 className="m-auto text-primary text-3xl">Why Me?</h2>
          <p className="m-auto text-xl">
            {"I have over 10 years of experience in the field with a Bachelors degree in computer science. I like to take a laid back approach to communication, and a focused approach to work. I like to overdeliver and produce results that both parties can be proud of. With a focus on solving clients individual needs for each project, I enjoy creating a platform that will make you proud to share your content, services or products. Offering backend, frontend, or fullstack custom services I am confident I have the ability to increase your businesses presence on the internet in whatever way you need. If you want someone who takes a template from the internet and puts your logo on it and charges you money, that's not me. If you want someone to write custom software and engineer solutions to help grow your business, I'm your person."}
          </p>
        </div>
        <ParallaxHero image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" height={40}/>
        <h2 className="m-auto text-primary text-3xl">Contact Me</h2>
        <Email/>
    </div>
  )
}
