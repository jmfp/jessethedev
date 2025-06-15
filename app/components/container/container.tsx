import { serviceInfo } from "@/app/lib/interface";
import Link from "next/link";

export async function LitGrid(props: { _info: serviceInfo[] }) {
  return (
    <div className="flex">
      <div className="m-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 my-6">
        {props._info?.map((info: serviceInfo, idx: number) => (
          <div
            key={idx}
            className="transform border w-96 h-64 rounded-sm border-primary animate-in"
          >
            {info.destination ? (
              <Link href={info.destination}>
                <div className="flex relative bg-slate-900 sm:w-[80%] sm:h-[80%] md:w-full md:h-full rounded-lg m-auto">
                  <div
                    className={
                      "after:blur-md after:absolute after:size-full after:z-[-2] after:top-[50%] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:p-6 after:bg-gradient-conic-spin from-primary via-yellow-600 to-primary after:saturate-200 after:animate-pulse"
                    }
                  ></div>
                  <div className="flex flex-col p-6">
                    <h2 className="text-2xl text-primary my-4">{info.title}</h2>
                    <div className="justify-center items-center flex flex-col">
                      {info.icon && (
                        <div
                          className={`text-8xl`}
                          style={{ color: info.iconColor }}
                        >
                          {info.icon}
                        </div>
                      )}
                    </div>
                    {info.description && <p>{info.description}</p>}
                  </div>
                </div>
              </Link>
            ) : (
              <div className="flex relative bg-slate-900 w-full h-full rounded-lg m-auto">
                <div
                  className={
                    "after:blur-md after:absolute after:size-full after:z-[-2] after:top-[50%] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:p-6 after:bg-gradient-conic-spin from-primary via-yellow-600 to-primary after:saturate-200 after:animate-pulse"
                  }
                ></div>
                <div className="flex flex-col p-6">
                  <h2 className="text-2xl text-primary my-4">{info.title}</h2>
                  <div className="justify-center items-center flex flex-col">
                    {info.icon && (
                      <div
                        className={`text-8xl`}
                        style={{ color: info.iconColor }}
                      >
                        {info.icon}
                      </div>
                    )}
                  </div>
                  {info.description && <p>{info.description}</p>}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function LitGridOpen(props: { array: any[] }) {
  return (
    <div className="display: flex">
      <div className="m-auto display: flex grid-cols-* gap-4 my-6">
        {props.array?.map((text: string, idx: number) => (
          <div
            key={idx}
            className="transform border w-96 h-64 rounded-sm border-primary animate-in hover:animate-bounce"
          >
            <div className="flex relative bg-slate-900 w-full h-full rounded-lg m-auto">
              <div
                className={
                  "after:blur-md after:absolute after:size-full after:z-[-2] after:top-[50%] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:p-6 after:bg-gradient-conic-spin from-primary via-yellow-600 to-primary after:saturate-200 after:animate-pulse"
                }
              ></div>
              <div className="flex flex-col p-6">
                <p>{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function LitContainer(props: { children?: React.ReactNode }) {
  return (
    <div className="flex relative bg-slate-900 w-full h-full rounded-lg m-auto">
      <div
        className={`${"after:blur-md after:absolute after:size-full after:z-[-2] after:top-[50%] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:p-6 after:bg-gradient-conic-spin from-primary via-green-600 to-primary after:saturate-200 after:animate-pulse"} ${"rgbGradient"}`}
      ></div>
      {props.children}
    </div>
  );
}
