import { getAllPosts } from '@/actions/actions'
import { getServerSideSitemap } from 'next-sitemap'

export async function GET(request: Request) {
  // Method to source urls from cms
  const urls = await getAllPosts()

  const post = urls?.map((post:any) =>{
    return{
        loc: `https://www.jessethedev.com/blog/${post?.slug}`,
        lastmod: post?.updatedAt.toISOString()
    }
  })
  return getServerSideSitemap([
    {
      loc: `https://JesseTheDev.com`,
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    ...post
  ])
}