import { sendEmail } from "@/actions/actions"
import { Button } from "@/components/ui/button"

export default function Email() {
  return (
    <div className="lg:mx-32 max-sm:mx-6 m-auto w-full">
        <form action={async (formData: FormData) => {
            'use server'
            await sendEmail(formData)
        }} className="display: flex flex-col gap-2">
            <input className="h-[50px] w-[80%] rounded-lg p-4 hover:border hover:border-primary m-auto" name="firstName" placeholder="First Name"/>
            <input className="h-[50px] w-[80%] rounded-lg p-4 hover:border hover:border-primary m-auto" name="lastName" placeholder="Last Name"/>
            <input className="h-[50px] w-[80%] rounded-lg p-4 hover:border hover:border-primary m-auto" type="email" name="email" placeholder="E-mail"/>
            <textarea className="h-[150px] w-[80%] rounded-lg p-4 hover:border hover:border-primary resize-none m-auto" name="message" placeholder="Message"/>
            <Button type="submit" className="w-[80%] m-auto">Send</Button>
        </form>
        <div className="hover:cursor-pointer border border-primary hover:bg-primary hover:text-white rounded-lg m-auto w-[80%] my-6 text-center">
            <a href="tel:2162704930" className="m-auto text-center h-12">Call</a>
        </div>

    </div>
  )
}
