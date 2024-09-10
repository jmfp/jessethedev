'use server'

import { PrismaClient } from "@/prisma/generated/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import Mail from 'nodemailer/lib/mailer'
import nodemailer from 'nodemailer';

const prisma = new PrismaClient()

//email settings

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

export async function sendEmail(formData: FormData){
  const name = formData.get("firstName")
  const lastName = formData.get("lastName")
  const message = formData.get("message")
  const email = formData.get("email")
  console.log(name)
  const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
  });
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} ${lastName} (${email})`,
    text: message,
  };
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  await sendMailPromise()
  revalidatePath("/")
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
