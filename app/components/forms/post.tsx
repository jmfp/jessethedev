'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button";
import { addBlog, addCategory, getAllPosts, getCategories } from "@/actions/actions";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { getSession } from "@/app/auth/auth";
import { redirect } from "next/navigation";

export default function AddPost(){
    const [cats, setCats] = useState([{id: "0", name: "Test"}])
    const [posts, setPosts] = useState([{}])

    useEffect(() => {

    async function categories() {
        try {
            setCats(await getCategories());
        } catch (error: any) {
            console.log(error.message)
        }
    }
    async function getPosts(){
        try {
            setPosts(await getAllPosts())
        } catch (error: any) {
            console.log(error.message)
        }
    }
      categories();
      getPosts()
    }, [])

    const formSchema = z.object({
        title: z.string().min(5, {message: 'Minimum title of 5 characters'}),
        image: z.instanceof(File),
        slug: z.string().min(1, {message: 'slug is required'}),
        description: z.string().min(2, {message: 'description is required'}),
        content: z.string().min(1, {message: 'content is required'}),
        category: z.string().min(1, {message: 'category is required'}),
        previous: z.string(),
        next: z.string(),
        keywords: z.array(z.string()),
        keywords_string: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues:{
            title: '',
            image: new File([], ""),
            slug: '',
            description: '',
            content: '',
            category: '',
            previous: '',
            next: '',
            keywords: [''],
            keywords_string: ''
        }
    })
    const fileRef = form.register("image");

    async function onSubmit(values: z.infer<typeof formSchema>){
        //send data to server action to put in database
        const formData : FormData = new FormData()
        formData.append("title", values.title)
        formData.append("description", values.description)
        formData.append("image", values.image)
        formData.append("slug", values.slug)
        formData.append("content", values.content)
        formData.append("category", values.category)
        formData.append("previous", values.previous)
        formData.append("next", values.next)
        formData.append("keywords", values.keywords_string)
        console.log(formData)
        await addBlog(formData)
    }

    function generateSlug(articleTitle: string){
        if(articleTitle !== ''){
            articleTitle.replace(/ /g,"-")
        }
    }

    return(
        <div>
            <main className="p-24">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field: { value, onChange, ...fieldProps } }) =>(
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <Input {...fieldProps} type="file" onChange={(event) => onChange(event.target.files && event.target.files[0])}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="title"
                        render={({field}) =>(
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Article Title" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="slug"
                        render={({field}) =>(
                            <FormItem>
                                <FormLabel>Slug</FormLabel>
                                <FormControl>
                                    <Input placeholder="Article Slug" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({field}) =>(
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Description" onChange={field.onChange}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({field}) =>(
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Content" {...field}/>
                                    {/*<RichText description={field.name} onChange={field.onChange}/>*/}
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({field}) =>(
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger className="w-full">
                                      <SelectValue placeholder="Pick Category" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {cats?.map((cat: any, idx: number) => (
                                        <SelectItem key={idx} value={cat.name.toString()}>{cat.name}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                   { /*<Input placeholder="Category" onChange={field.onChange}/>*/}
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="previous"
                        render={({field}) =>(
                            <FormItem>
                                <FormLabel>Previous Post</FormLabel>
                                <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger className="w-full">
                                      <SelectValue placeholder="Previous Article" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {posts?.map((post: any, idx: number) => (
                                        <SelectItem key={idx} value={post.slug}>{post.slug}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                   { /*<Input placeholder="Category" onChange={field.onChange}/>*/}
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="next"
                        render={({field}) =>(
                            <FormItem>
                                <FormLabel>Next Post</FormLabel>
                                <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger className="w-full">
                                      <SelectValue placeholder="Next Post" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {posts?.map((post: any, idx: number) => (
                                        <SelectItem key={idx} value={post.slug}>{post.slug}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                   { /*<Input placeholder="Category" onChange={field.onChange}/>*/}
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    {/*<FormField
                        control={form.control}
                        name="previous"
                        render={({field}) =>(
                            <FormItem>
                                <FormLabel>Previous Article Slug</FormLabel>
                                <FormControl>
                                    <Input placeholder="Previous Article Slug" onChange={field.onChange}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="next"
                        render={({field}) =>(
                            <FormItem>
                                <FormLabel>Next Article Slug</FormLabel>
                                <FormControl>
                                    <Input placeholder="Next Article Slug" onChange={field.onChange}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />*/}
                    <FormField
                        control={form.control}
                        name="keywords_string"
                        render={({field}) =>(
                            <FormItem>
                                <FormLabel>Keywords</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Keywords Comma Separated, No Spaces Between Keywords" onChange={field.onChange}/>
                                    </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>Submit</Button>
                </form>
            </Form>
            </main>
        </div>
    )
}