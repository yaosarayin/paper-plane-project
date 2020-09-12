import React from "react"
import {graphql , useStaticQuery, Link} from "gatsby"
import { Row, Col } from 'antd';
import Layout from '../components/Layout'
import BlogPreview from '../components/BlogPreview'

const pageQuery = graphql`
{
  gcms {
    posts {
      title
      slug
      date
      excerpt
      coverImage {
        handle
        width
        height
      }
      tags
    }
  }
}`

const Blog = () => {
  const {gcms: {posts}} = useStaticQuery(pageQuery)
    console.log(posts)
  return (
    <Layout>
      <h1>博客</h1>
        {posts.map((post,key) => (
            <BlogPreview post={post} />
        ))}
    </Layout>
  )
}
export default Blog
