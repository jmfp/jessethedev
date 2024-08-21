import {MetadataRoute} from 'next'

export default function robot(): MetadataRoute.Robots {
  return {
    rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/admin'
    },
    sitemap: 'https://www.jessethedev.com/sitemap2.xml/'
  }
}
