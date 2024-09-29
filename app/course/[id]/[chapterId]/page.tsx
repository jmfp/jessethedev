import { getChapter, getQuestions } from '@/actions/actions'
import MarkdownArea from '@/app/components/markdown/MarkdownArea'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Chapter({params}:{params:{ chapterId: string}}) {
    const chapter = await getChapter(params.chapterId)
    const questions = await getQuestions(params.chapterId)
  return (
    <div className="flex flex-col w-full">
        <div className="w-[90%] m-auto border p-6 rounded-lg">
            <MarkdownArea content={chapter?.info}/>
        </div>
        <form action={async () => {
            'use server'
            redirect(`/course/${chapter?.courseId}/${params.chapterId}/${questions[0].id}`)
        }} className='w-full flex'>
            <Button type="submit" className="m-auto my-6">Test</Button>
        </form>
    </div>
  )
}
