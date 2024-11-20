'use server'

import { course } from "@/app/lib/interface"
import { PrismaClient } from "@/prisma/generated/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

//convert file to base64
const toBase64 = async (file: File) => {
    const bufferFile = await file.arrayBuffer()
    const fileBase64 = Buffer.from(bufferFile).toString('base64')
    const finalString = `data:${file.type};base64,${fileBase64}`
    return finalString
  };

export async function validateUser(user: any){
    try {
        const res = await prisma.user.findUnique({where:{email:user.email}})
        if (res && user.password === res.password){
            console.log(res)
            return (true)
        }
    } catch (error: any) {
        console.log(error.message)
    }
    return false
}

export const addChapter = async(formData: any) => {
    const courseId = formData.get("courseId")
    const name = formData.get("name")
    const info = formData.get("info")

    const newChapter = await prisma.chapter.create({
        data:{
            name,
            courseId,
            info
        }
    })
    revalidatePath(`/admin/courses/edit/${courseId}`)
}

export const deleteChapter = async(id: string, courseId: string) => {
    await prisma.chapter.delete({where: {
        id
    }})
    revalidatePath(`/admin/courses/edit/${courseId}`)
}
//get chapters from a course id
export const getChapters = async(id: string) => {
    const chapters = await prisma.chapter.findMany({where: {
        courseId: id
    }})
    return chapters
}

//get chapter by id
export const getChapter = async(id: string) => {
    const chapter = await prisma.chapter.findFirst({where: {
        id
    }
    })
    return chapter
}

export const addQuestion = async(formData: any) => {
    const id = formData.get("chapterId")

    const newQuestion = await prisma.question.create({
        data:{
            chapterId: id,
            question: formData.get("question"),
            //answers: formData.get("answers")
        }
    })
    revalidatePath(`/admin/courses/chapter/edit/${formData.get("chapterId")}`)
}
//get answers from question id
export const getAnswers = async(id: string) => {
    const answers = await prisma.answer.findMany({where: {
        questionId: id
    }})
    return answers
}
//get questions from chapter id
export const getQuestions = async(id: string) => {
    const questions = await prisma.question.findMany({where: {
        chapterId: id
    }})
    return questions
}

export const getQuestion = async(id: string) => {
    const question = await prisma.question.findFirst({where: {
        id
    }})
    return question
}

export const deleteQuestion = async(id: string, chapterId: string) => {
    await prisma.question.delete({where: {
        id
    }})
    revalidatePath(`/admin/courses/chapter/edit/${chapterId}`)
}

export const addAnswer = async(formData: any) => {
    const id = formData.get("questionId")

    const newQuestion = await prisma.answer.create({
        data:{
            questionId: id,
            answer: formData.get("answer")
        }
    })
    revalidatePath(`/admin/courses/chapter/edit/${formData.get("chapterId")}`)
}

export const addBlog = async (formData: any) => {
    const title = formData.get("title")
    const image = formData.get("image")
    const slug = formData.get("slug")
    const description = formData.get("description")
    const content = formData.get("content")
    const category = formData.get("category")
    const new_blog = await prisma.post.create({
        data:{
            image: await toBase64(image),
            title: title,
            slug: slug,
            description: description,
            content: content, 
            category
        }
    })

    //revalidate cache for server action
    revalidatePath('/admin/posts/new')
    redirect('/')
}

export const addCategory = async(name: any) =>{
    const cat = name.get("newcat")
    const newCat = await prisma.category.create({data:{name: cat}})
    console.log(newCat)
    revalidatePath("/admin/posts/new")
}

export const getCategories = async(id?: string) =>{
    return await prisma.category.findMany({where:{id}})
}

export const deleteBlog = async(slug: any) =>{
    await prisma.post.delete({where: {slug: slug}})
    revalidatePath('/admin/dashboard')
}

export const getAllPosts = async() => {
    revalidatePath('/admin/dashboard')
    return await prisma.post.findMany({})
}

export const addCourse = async(course: any) => {
    console.log(`course image is ${course.get("image")}`)
    const imageFile = await toBase64(course.get("image"))
    try {
        const newCourse = await prisma.course.create({
            data:{
                title: course.get("title"),
                description: course.get("description"),
                image: imageFile,
                price: 0,//course["price"],
                categoryId: course.get("categoryId")
            }
        })
    } catch (error: any) {
        console.log(error)
    }
    redirect("/admin/dashboard")
}

export const getAllCourses = async() => {
    revalidatePath('/admin/dashboard')
    return await prisma.course.findMany({})
}

export const getCourse = async(id: string) => {
    revalidatePath('/admin/dashboard')
    return await prisma.course.findFirst({where: {
        id
    }})
}