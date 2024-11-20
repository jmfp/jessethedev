import React from "react";
import Link from "next/link";
import { ModeToggle } from "../../button/ModeToggle";
import Logo from "../../logo/Logo";
//import Logo from "../../logo";
//import Button from "../../button";
import { PiGithubLogoThin, PiLinkedinLogoThin } from "react-icons/pi";

const NavBar = () =>{
    return(
    <>
    <div className="w-full flex lg:h-24 max-sm:h-0 lg:sticky top-0 z-50 bg-slate-900 bg-opacity-20 backdrop-filter backdrop-blur-md overflow-hidden">
      <div className="container m-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo/>
          <SocialLinks/>
        </div>
      </div>
    </div>
  </>
    );
};

function SocialLinks(){
  return(
    <div className="flex items-center gap-2">
      <Link href="/blog">Blog</Link>
      <Link
        href="https://github.com/jmfp"
        target="_blank"
      ><PiGithubLogoThin size={42}/></Link>
      <Link
        href="https://www.linkedin.com/in/jessie-price-629167245/"
        target="_blank"
      ><PiLinkedinLogoThin size={42}/></Link>
      <ModeToggle/>
    </div>
  )
  
}

export default NavBar;