'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

//form schema for validation
const formSchema = z.object({
  title: z.string().min(12, {
    message: "Title is Required"
  }),
  description: z.string().min(50, {
    message: "Description is Required"
  }),
  image: z.instanceof(File),
  price: z.number(),
  categoryId: z.string()

})

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import Link from 'next/link'
import { addCourse } from '@/actions/actions'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'

export default function NewCourse() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: new File([], ""),
      price: 0,
      categoryId: ""
    }
  })

  const fileRef = form.register("image");

  const {isSubmitting, isValid} = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) =>{
    try {
      //send data to server action to put in database
      const formData : FormData = new FormData()
      formData.append("title", values.title)
      formData.append("description", values.description)
      formData.append("image", values.image)
      formData.append("price", values.price.toString())
      formData.append("categoryId", values.categoryId)
      console.log(formData)
      await addCourse(formData);
    } catch (error: any) {
      console.log(`Error when submitting form - ${error}`)
    }
  }

  return (
    <div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80%]">
          <FormField 
            control={form.control}
            name="title"
            render={({field}) =>(
              <FormItem>
                <FormLabel>
                  Course Title
                </FormLabel>
                <FormControl>
                  <Input className="caret-primary" disabled={isSubmitting} placeholder='e.g. "Python For Beginners"' {...field}/>
                </FormControl>
                <FormDescription>
                  What will you teach in this course
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="description"
            render={({field}) =>(
              <FormItem>
                <FormLabel>
                  Course Description
                </FormLabel>
                <FormControl>
                  <Textarea className="caret-primary h-28" disabled={isSubmitting} placeholder='e.g. "This course will take you through learning..."' {...field}/>
                </FormControl>
                <FormDescription>
                  Longer Description of Course
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="image"
            render={({ field: { value, onChange, ...fieldProps } }) =>(
              <FormItem>
                <FormLabel>
                  Course Image
                </FormLabel>
                <FormControl>
                  <Input {...fieldProps} type='file' className="accent-primary" disabled={isSubmitting} onChange={(event) =>
            onChange(event.target.files && event.target.files[0])
        }/>
                </FormControl>
                <FormDescription>
                  Thumbnail For Course
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="price"
            render={({field}) =>(
              <FormItem>
                <FormLabel>
                  Course Price
                </FormLabel>
                <FormControl>
                  <Input type='number' className="caret-primary" disabled={isSubmitting} {...field}/>
                </FormControl>
                <FormDescription>
                  How Much Will You Charge
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="categoryId"
            render={({field}) =>(
              <FormItem>
                <FormLabel>
                  Course Category
                </FormLabel>
                <FormControl>
                  <Input className="caret-primary" disabled={isSubmitting} placeholder="Category" {...field}/>
                </FormControl>
                <FormDescription>
                  Which Category
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Link href={"/admin/dashboard"}>
              <Button type="button" variant="ghost">Cancel</Button>
            </Link>
            <Button type="submit" disabled={!isValid || isSubmitting}>Continue</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
