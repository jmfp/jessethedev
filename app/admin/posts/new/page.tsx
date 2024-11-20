import { addCategory } from "@/actions/actions";
import AddPost from "@/app/components/forms/post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewPost() {
  return (
    <div>
        <AddPost />
        <form action={async(formData: FormData) => {
            'use server'
            await addCategory(formData)
        }} className="flex flex-col gap-2 w-[80%] m-auto my-6">
            <Input placeholder="Add New Category" name="newcat"/>
            <Button type="submit" className="w-[20%] m-auto">
                Add Category
            </Button>
        </form>
    </div>
  )
}
