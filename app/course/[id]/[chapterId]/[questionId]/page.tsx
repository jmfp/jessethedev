import { getAnswers, getQuestion, getQuestions } from '@/actions/actions'
import { LitContainer, LitGrid, LitGridOpen } from '@/app/components/container/container'
import TestQuestion from '@/app/components/course/question'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Progress } from "@/components/ui/progress"
import { revalidatePath } from 'next/cache'
import React from 'react'

export default async function CourseQuestion({params} : {params: {id: string, chapterId: string, questionId: string}}) {
    const question = await getQuestion(params.questionId)
    const answers = await getAnswers(params.questionId)
    const questions = await getQuestions(params.chapterId)
    let checked = false
    let progress = 0
  return (
    <div>
        <TestQuestion questions={questions} answers={answers}/>
    </div>
  )
}
