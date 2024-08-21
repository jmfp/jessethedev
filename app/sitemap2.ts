import { getAllPosts } from "@/actions/actions";

export default async function sitemap() {
  const posts = await getAllPosts()
  const post = posts?.map((post:any) =>{
    return{
        url: `https://www.jessethedev.com/blog/${post.slug}`,
        lastModified: post.updatedAt
    }
  })
  return[{
    url: 'https://www.jessethedev.com',
    lastModified: new Date()
  },
    ...post
]
}
