import parse from 'html-react-parser';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import { ParallaxHero } from "@/app/components/images/image";
import 'highlight.js/styles/base16/pop.css'
import {PrismaClient} from "@/prisma/generated/client"
import MarkdownArea from '@/app/components/markdown/MarkdownArea';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { LitContainer } from '@/app/components/container/container';

hljs.registerLanguage('typescript', typescript);

export const revalidate = 30
const prisma = new PrismaClient()

export const metadata : Metadata = {

}

//fetch posts from mongodb
async function fetchPosts(slug: string){
  //const res = await fetch(`${process.env.API_URL}/api/posts?slug=${slug}`)
  //const posts = await res.json()
  const posts = await prisma.post.findMany({where: {slug: slug}})
  return (posts[0])
}

//useEffect(() => {
//  hljs.initHighlighting();
//}, []);

export default async function Article({params}:{params: {slug: string}}){
    //const data: article = await getData(params.slug)
    const post = await fetchPosts(params.slug)
    let content = parse(post.content)
    return(
      <div className='display: flex h-full flex-col'>
        <ParallaxHero image={post.image} height={50}/>
        <div className='p-1'>
        <LitContainer>
          <div className="w-[100vw] content-center flex-auto p-10 prose-h1:text-violet-500">
          <h1 className="text-3xl font-extrabold text-center">{post.title}</h1>
            <div className="mt-24 prose m-[auto] prose-violet prose-xl dark:prose-invert prose-h2:text-violet-500 prose-li:color-violet-500">
              {/*parse(post.content)*/}
              <MarkdownArea content={post.content}>
              </MarkdownArea>
            </div>
            {!post.previous? <span/> :
              <form action={async () =>{
                'use server'
                redirect(`redirect/${post.previous}`)
              }}>
                <Button type='submit'>Previous</Button>
              </form>
            }
            {!post.next? <span/> :
              <form action={async () =>{
                'use server'
                redirect(`redirect/${post.next}`)
              }}>
                <Button type='submit'>Next</Button>
              </form>
            }
        </div>
        </LitContainer>
        </div>
      </div>
    )
}