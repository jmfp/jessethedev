
import { ReactNode } from "react";
import {Parallax, ParallaxBanner} from 'react-scroll-parallax'

{/*export default function ParallaxImage(props: {image: string, alt:string, width:number, height:number, style:string, text:string}){
    return(
        <ParallaxBanner layers={[{ image: props.image, speed: -20 }]} className="aspect-[2/1] object-cover z-0 items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center m-[auto]">
                <h1 className="text-8xl text-white font-thin text-center">{props.text}</h1>
            </div>
        </ParallaxBanner>
    )
}*/}

export async function ParallaxHero(props:{image: string, height: number, children?: ReactNode, style?: string}) {
    return(
        <div className={`h-full`}>
            <div
            className={`relative h-0 w-full bg-cover bg-center bg-fixed bg-no-repeat max-sm:bg-contain`}
            style={{
              backgroundImage: `url(${props.image})`,
              paddingTop: `${props.height}%`
            }}
        >
            <div className={`${props.style}`}>
                {props.children}
            </div>
        </div>
            
        </div>
    )
}

export async function ParallaxVideo(props: {text?: string}) {
    return(
        <div className={`h-full`}>
            <video src={require("../../code.mp4")} autoPlay muted loop>

            </video>
        </div>
    )
}