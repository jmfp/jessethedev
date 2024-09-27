import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { deleteBlog, getAllCourses, getAllPosts } from "@/actions/actions"
import { redirect } from "next/navigation"

export default async function Dashboard(){
    
    const [posts, courses] = await Promise.all([getAllPosts(), getAllCourses()])
    //const posts = await getAllPosts()
    //const courses = await getAllCourses()

    return(
        <div className='display: flex flex-col w-full justify-center items-center'>
            <div className='my-2'>
                <p>All Posts</p>
            </div>
            <div className="w-[80%] h-[800px] justify-center rounded-lg border-2 border-purple-500 overflow-y-scroll">
                {!posts.length ? <span/> : 
                    posts.map((post: any, idx: number) =>(
                        <div key={idx} className="display: flex w-[80%] m-auto gap-4 border-2 border-purple-500  justify-between items-center rounded-lg my-4">
                            <Image 
                                src={post.image} 
                                alt={post.slug} 
                                width={200} 
                                height={200}
                                className="h-[100px] w-[100px] rounded-lg object-cover"
                            />
                            <p>{post.title}</p>
                            <div className="display: flex gap-4 m-auto">
                                <form action={async () =>{
                                    'use server'
                                    await deleteBlog(post.slug)
                                    //await deleteBlog
                                }}>
                                    <Button type='submit'>Delete</Button>
                                </form>
                                <Button>Edit</Button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='my-2'>
                <p>All Courses</p>
            </div>
            <div className="w-[80%] h-[800px] justify-center rounded-lg border-2 border-purple-500 overflow-y-scroll">
                {!courses.length ? <span/> : 
                    courses.map((course: any, idx: number) =>(
                        <div key={idx} className="display: flex w-[80%] m-auto gap-4 border-2 border-purple-500  justify-between items-center rounded-lg my-4">
                            <Image 
                                src={course.image} 
                                alt={course.title} 
                                width={200} 
                                height={200}
                                className="h-[100px] w-[100px] rounded-lg object-cover"
                            />
                            <p>{course.title}</p>
                            <div className="display: flex gap-4 m-auto">
                                <form action={async () =>{
                                    'use server'
                                    //edit the course
                                    await redirect(`/admin/courses/edit/${course.id}`)
                                    //await deleteBlog(post.slug)
                                    //await deleteBlog
                                }}>
                                    <Button type='submit'>Edit</Button>
                                </form>
                                <Button>Edit</Button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="my-2 flex-row w-[80%] border border-primary">
                <Button asChild>
                    <Link href="/admin/posts/new">New Post</Link>
                </Button>
                <Button asChild>
                    <Link href="/admin/courses/new">New Course</Link>
                </Button>
            </div>
        </div>
    )
}