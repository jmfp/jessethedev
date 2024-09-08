import { Button } from "@/components/ui/button"

export default function Email() {
  return (
    <div className="lg:mx-32 max-sm:mx-6 m-auto mb-12 mt-12">
        <form action={async (formData: FormData) => {
            'use server'
        }} className="display: flex flex-col gap-2 from-primary to-purple-300">
            <input className="h-[50px] rounded-lg p-4 hover:border hover:border-primary" name="firstName" placeholder="First Name"/>
            <input className="h-[50px] rounded-lg p-4 hover:border hover:border-primary" name="lastName" placeholder="Last Name"/>
            <input className="h-[50px] rounded-lg p-4 hover:border hover:border-primary" type="email" name="email" placeholder="E-mail"/>
            <textarea className="h-[150px] rounded-lg p-4 hover:border hover:border-primary resize-none" name="message" placeholder="Message"/>
            <Button type="submit">Send</Button>
        </form>

    </div>
  )
}
