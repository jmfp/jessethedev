import { getSession, login, logout } from "@/app/auth/auth"
import { LitContainer } from "@/app/components/container/container"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default async function Login(){
    const session = await getSession()
    console.log(session)
    return(
        <div className="flex flex-col m-auto items-center size-full rounded-sm ">
            <div className="w-[90%] h-[90%]">
            <LitContainer>
                {!session ?
                <form action={async (formData) =>{
                    'use server'
                    await login(formData)
                    redirect('/admin/dashboard')
                }} method="post" className="flex flex-col w-[80%] m-auto gap-4">
                    <label htmlFor="email" className="mt-4">Email</label>
                    <input name="email" className="caret-primary h-12 p-2 rounded-sm"/>
                    <label htmlFor="password">Password</label>
                    <input type='password' className="caret-primary h-12 p-2 rounded-sm text-primary" name="password"/>
                    <Button type="submit" className="my-4">Sign In</Button>
                </form>
                 :
                 <form action={async () =>{
                     'use server'
                     await logout()
                     redirect('/')
                 }} className="flex flex-col w-[80%] m-auto gap-4">
                     <Button type='submit' className="my-4">Log Out</Button>
                 </form>
                 }
            </LitContainer>
            </div>
        </div>
    )
}