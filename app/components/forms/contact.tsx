import { Button } from "@/components/ui/button"

export default function Email() {
  return (
    <div className="mx-16 m-auto mb-6">
        <form action={async (formData: FormData) => {
            'use server'
        }} className="display: flex flex-col gap-2">
            <input name="firstName" placeholder="First Name"/>
            <input name="lastName" placeholder="Last Name"/>
            <input type="email" name="email" placeholder="E-mail"/>
            <textarea name="message" placeholder="Message"/>
            <Button type="submit">Send</Button>
        </form>

    </div>
  )
}
