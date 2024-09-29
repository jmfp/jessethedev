import { getAllCourses } from "@/actions/actions"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default async function Courses() {
    const courses = await getAllCourses()
  return (
    <div className="flex flex-col">
        {courses.length == 0? null : 
            courses.map((course: any, idx: number) => (
                <div key={idx} className="flex m-auto rounded-lg hover:bg-slate-700">
                    <span>{course.title}</span>
                    <form action={async () =>{
                        'use server'
                        redirect(`/course/${course.id}`)
                    }}>
                        <Button type="submit">Learn</Button>
                    </form>
                </div>
            )
            )
        }
    </div>
  )
}
