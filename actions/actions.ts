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

    const newChapter = await prisma.chapter.create({
        data:{
            name,
            courseId
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

export const addQuestion = async(formData: any) => {
    const id = formData.get("chapterId")

    const newQuestion = await prisma.question.create({
        data:{
            chapterId: id,
            question: formData.get("question"),
            answer: formData.get("answer")
        }
    })
    revalidatePath(`/admin/courses/chapter/edit/${formData.get("chapterId")}`)
}
//get questions from chapter id
export const getQuestions = async(id: string) => {
    const questions = await prisma.question.findMany({where: {
        chapterId: id
    }})
    return questions
}

export const deleteQuestion = async(id: string, chapterId: string) => {
    await prisma.question.delete({where: {
        id
    }})
    revalidatePath(`/admin/courses/chapter/edit/${chapterId}`)
}

export const addBlog = async (formData: any) => {
    const title = formData["title"]
    const image = formData["image"]
    const slug = formData["slug"]
    const description = formData["description"]
    const content = formData["content"]
    const category = formData["category"]
    const new_blog = await prisma.post.create({
        data:{
            image: image,
            title: title,
            slug: slug,
            description: description,
            content: content, 
            category: category
        }
    })

    //revalidate cache for server action
    revalidatePath('/admin/posts/new')
    redirect('/')
}

export const deleteBlog = async(slug: any) =>{
    prisma.post.delete({where: {slug: slug}})
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