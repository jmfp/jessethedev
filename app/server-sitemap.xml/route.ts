// app/server-sitemap.xml/route.ts
import { getAllPosts } from '@/actions/actions'
import { getServerSideSitemap } from 'next-sitemap'

export async function GET(request: Request) {
  // Method to source urls from cms
  const urls = await getAllPosts()
  console.log(urls)
  for(let i = 0; i <= urls.length; i++){
    return getServerSideSitemap([
      {
        loc: `https://JesseTheDev.com/blog/${urls[i].slug}`,
        lastmod: urls[i].updatedAt.toISOString(),
        // changefreq
        // priority
      }
    ])
  }
}