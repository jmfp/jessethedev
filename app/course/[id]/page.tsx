import { getChapters, getCourse } from "@/actions/actions"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default async function CoursePage({params} : {params: {id: string}}){
    const course = await getCourse(params.id)
    const chapters = await getChapters(params.id)
    return(
        <div className="flex flex-col w-full">
            <h1 className="m-auto text-primary text-2xl">{course?.title}</h1>
            <div className="w-[80%] h-[512px] flex flex-col gap 2 border rounded-lg m-auto overflow-y-scroll">
                {chapters?.length === 0 ? null : 
                    chapters.map((chapter: any, idx: number) => (

                    <div className="hover:bg-slate-700 border border-primary m-auto h-36 rounded-lg w-[80%] flex items-center justify-between">
                        <span className="text-primary text-3xl text-center mx-4">{chapter.name}</span>
                        <form action={async() => {
                            'use server'
                            redirect(`/course/${params.id}/${chapter.id}`)
                        }}>
                            <Button type="submit" className="mx-4">Learn</Button>
                        </form>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}