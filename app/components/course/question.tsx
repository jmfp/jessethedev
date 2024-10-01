'use client'

import React, { useState } from 'react'
import { LitContainer } from '../container/container'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export default function TestQuestion(props:{questions: any, answers: any}) {
    const [progress, setProgress] = useState(0)

    const handleSubmit = () =>{
        if(props.questions.length > progress){
            setProgress(progress + 1)
            console.log(progress)
        }
    }

  return (
    <div>
        <div className='h-96 flex flex-col text-primary text-2xl w-[80%] m-auto'>
            <LitContainer >
                <p className='m-auto'>{props.questions[0].question}</p>
            </LitContainer>
        </div>
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <div className='flex w-full'>
                    <div className="m-auto display: flex grid-cols-2 gap-4 my-6 ">
                        {props.answers.map((answer: any, idx: number) => (
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
            <Progress value={progress / 100} className='w-[40%] m-auto'/>
        </div>
    </div>
  )
}
