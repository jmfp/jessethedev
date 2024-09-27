import { addQuestion, deleteQuestion, getQuestions } from "@/actions/actions"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default async function EditChapter({params}:{params: {id: string}}) {
    const questions = await getQuestions(params.id)
  return (
    <div className="flex flex-col gap-2">
        <div className="h-96 overflow-y-scroll border rounded-lg mx-6 p-6 flex-col gap-2">
            {questions.length == 0 ? null :
                questions.map((question: any, idx: number) => (
                    <div key={idx} className="w-[80%] flex hover:bg-slate-700 my-3 border rounded-lg m-auto p-2 justify-around">
                        <p className="m-auto">{question.question}</p>
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
                formData.append("chapterId", params.id)
                await addQuestion(formData)
            }}>
                <Textarea name="question" placeholder="question"/>
                <Textarea name="answer" placeholder="answer"/>
                <Button type="submit" className="m-auto">Add Question</Button>
            </form>
        </div>
    </div>
  )
}
