import { addQuestion, deleteQuestion, getChapter, getQuestions } from "@/actions/actions"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function EditChapter({params}:{params: {id: string}}) {
    const questions = await getQuestions(params.id)
    const chapter = await getChapter(params.id)
    console.log(chapter)
  return (
    <div className="flex flex-col gap-2">
        <Link href={`/admin/courses/edit/${chapter?.courseId}`}>
            <h1>{chapter?.name}</h1>
        </Link>
        <div className="h-96 overflow-y-scroll border rounded-lg mx-6 p-6 flex-col gap-2">
            {questions.length == 0 ? null :
                questions.map((question: any, idx: number) => (
                    <div key={idx} className="w-[80%] flex hover:bg-slate-700 my-3 border rounded-lg m-auto p-2 gap-2 justify-around">
                        <p className="m-auto">{question.question}</p>
                        <form action={async () =>{
                            'use server'
                            await redirect(`/admin/courses/question/edit/${question.id}`)
                        }}>
                            <Button type="submit">Edit</Button>
                        </form>
                        <form action={async () =>{
                            'use server'
                            await deleteQuestion(question.id, params.id)
                        }}>
                            <Button type="submit">Delete</Button>
                        </form>
                    </div>
                ))
            }
        </div>
        <div className="w-[80%] m-auto flex-col gap-2 items-center">
            <form action={async (formData: FormData) =>{
                'use server'
                //formData.append("correct", "answer1")
                formData.append("chapterId", params.id)
                await addQuestion(formData)
            }} className="flex flex-col gap-2 items-center">
                <Textarea name="question" placeholder="question" className="resize-none h-36"/>
                <Button type="submit" className="m-auto my-2">Add Question</Button>
            </form>
        </div>
    </div>
  )
}
