import { serviceInfo } from "@/app/lib/interface";
import Link from "next/link";

export async function LitGrid(props: {_info: serviceInfo[]}){
    return(
        <div className="display: flex">
        <div className="m-auto display: flex grid-cols-* gap-4 my-6">
            {props._info?.map((info: serviceInfo, idx: number) => (
                <div className="transform border w-96 h-64 rounded-sm border-primary animate-in hover:animate-bounce">
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