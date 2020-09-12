import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import { Row, Col } from 'antd';
import Layout from '../components/Layout'

const pageQuery = graphql`
{
  gcms {
    posts {
      title
      slug
    }
  }
}`

const Home = () => {
  const {gcms: {posts}} = useStaticQuery(pageQuery)

  return (
    <Layout>
      <h1>纸飞机计划</h1>
        {posts.map(({title,slug}) => (
          <Row>
            <Link key={slug} to={`blog/${slug}`}>
            {/* <img src={coverImage}></img> */}
            {title}
          </Link>
          </Row>
        ))}
    </Layout>
  )
}
export default Home
