import { addChapter, deleteChapter, getChapters, getCourse } from "@/actions/actions"
import Playground from "@/app/components/forms/editor"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"

export default async function EditCourse({params}:{params: {id: string}}) {
  const chapters = await getChapters(params.id)
  const course = await getCourse(params.id)
  return (
    <div className="flex-col">
      <h1>Course: {course?.title}</h1>
        <h2>Course Chapters</h2>
        <div className="flex-row gap-2 items-center m-auto h-96 w-[80%] p-6 border rounded-lg overflow-y-scroll">
          {chapters.length == 0 ? null : 
            chapters.map((chapter: any, idx: number) => (
              <div key={idx} className="flex m-auto hover:bg-slate-700 p-2 text-center rounded-lg justify-between">
                <span className="text-center h-full">{chapter.name}</span>
                <div className="flex gap-2 m-auto text-center justify-between">
                  <form action={async () =>{
                    'use server'
                    redirect(`/admin/courses/chapter/edit/${chapter.id}`)
                  }}>
                    <Button type="submit">Edit</Button>
                  </form>
                  <form action={async () =>{
                    'use server'
                    await deleteChapter(chapter.id, params.id)
                  }}>
                    <Button type="submit">Delete</Button>
                  </form>
                </div>
              </div>
            ))
          }
        </div>
        <form action={async(formData: FormData) =>{
          'use server'
          formData.append("courseId", params.id)
          await addChapter(formData)
        }}>
          <Input name="name" placeholder="New chapter name"/>
          <Button type="submit">Add Chapter</Button>
        </form>
        <div className='display: flex flex-col'>
        <div className="display: flex">
            <div className="border rounded-lg border-primary w-[35%] h-[90%] m-auto">
                <p className='m-auto'>Imagine you have a face with another face on its face</p>
            </div>
            <div className="border rounded-lg border-primary w-[35%] m-auto overflow-hidden">
                <Playground 
                    defaultCode={`
<div>
    <p>Test editor paragraph</p>
</div>`}
                />
            </div>
        </div>
        <div className='m-auto p-4'>
            <form action={async () => {
                'use server'
                console.log("clicked")
            }}>
                <Button type='submit'>Run</Button>
            </form>
        </div>
    </div>
    </div>
  )
}
