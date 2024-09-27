import { getAnswers, getQuestion } from '@/actions/actions'
import { LitContainer, LitGrid, LitGridOpen } from '@/app/components/container/container'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'

export default async function CourseQuestion({params} : {params: {id: string, chapterId: string, questionId: string}}) {
    const question = await getQuestion(params.questionId)
    const answers = await getAnswers(params.questionId)
    let checked = false
  return (
    <div>
        <div className='h-96 flex flex-col text-primary text-2xl w-[80%] m-auto'>

        <LitContainer >
            <p className='m-auto'>{question?.question}</p>
        </LitContainer>
        </div>
        <div>
            
            <form action={async(formData: FormData) => {
                'use server'
                console.log(formData)
            }} className="flex flex-col w-full">
                <div className='flex w-full'>
                <div className="m-auto display: flex grid-cols-2 gap-4 my-6">
                    
                {answers.map((answer: any, idx: number) => (
                    <LitContainer key={idx}>
                        <div className='size-64 flex h-full p-2 flex-col-reverse items-center text-center'>
                          <Checkbox id={`answer${idx}`} name={`answer${idx}`} className="m-auto"/>
                          <Label htmlFor={`answer${idx}`} className="m-auto size-48">{answer.answer}</Label>
                        </div>
                    </LitContainer>
                ))}
                </div>
                </div>
                <Button type='submit' className="m-auto my-6">Answer</Button>
            </form>
        </div>
    </div>
  )
}
