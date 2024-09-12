import { serviceInfo } from "@/app/lib/interface";
import Link from "next/link";

export async function LitGrid(props: {_info: serviceInfo[]}){
    return(
        <div className="display: flex">
        <div className="m-auto display: flex grid-cols-* gap-4 my-6">
            {props._info?.map((info: serviceInfo, idx: number) => (
                <div key={idx} className="transform border w-96 h-64 rounded-sm border-primary animate-in hover:animate-bounce">
                    <Link href={info.destination}>
                    <div className="m-auto h-full">
                        <p className="m-auto text-primary">{info.title}</p>
                        <p>{info.description}</p>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
        </div>
    )
}

export async function LitContainer(props: {children?: React.ReactNode}){
    return(
        <div className="flex relative bg-slate-900 w-full h-full rounded-lg m-auto">
            <div className={`${"after:blur-md after:absolute after:size-full after:z-[-2] after:top-[50%] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:p-6 after:bg-gradient-conic-spin from-primary via-green-600 to-primary after:saturate-200 after:animate-pulse"} ${"rgbGradient"}`}>
            </div>
            {props.children}
        </div>
    )
}