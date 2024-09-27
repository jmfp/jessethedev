import { addAnswer, getAnswers, getQuestion } from "@/actions/actions"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default async function AddAnswer({params}:{params: {id: string}}) {
    const question = await getQuestion(params.id)
    const answers = await getAnswers(params.id)
  return (
    <div className="flex flex-col">
        <Link href={`/admin/courses/chapter/edit/${question?.chapterId}`}>
            <h1 className="m-auto text-primary text-3xl">{question?.question.toUpperCase()}</h1>
        </Link>
            <h2 className="text-primary m-auto">Answers</h2>
            <br className="w-[80%] border border-primary"/>
        <div className="w-[80%] h-96 border rounded-lg m-auto flex flex-col overflow-y-scroll my-6 p-2">
            {answers.map((answer: any, idx: number) => (
                <div key={idx} className="hover:bg-slate-700 p-2 rounded-lg border flex flex-col justify-evenly">
                    <p>{answer.answer}</p>
                </div>
            ))}
        </div>
         <form action={async (formData: FormData) =>{
                'use server'
                formData.append("questionId", params.id)
                await addAnswer(formData)
            }} className="flex flex-col gap-2 items-center">
                <Textarea name="answer" placeholder="answer" className="resize-none h-36 w-[80%]"/>
                <Checkbox id="isCorrect" name="correct" />
                <Label htmlFor="isCorrect">Correct</Label>
                <Button type="submit" className="m-auto my-2">Add Answer</Button>
            </form>
    </div>
  )
}
