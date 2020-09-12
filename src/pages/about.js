import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import { Row, Col } from 'antd';
import Layout from '../components/Layout'

const pageQuery = graphql`
{
gcms {
    authors {
        biography
        id
        name
        picture {
        handle
        height
        width
        }
        title
    }
    }
}`

const About = () => {
  const {gcms: {authors}} = useStaticQuery(pageQuery)

  return (
    <Layout>
      <h1>关于我们</h1>
        {authors.map((author,key) => (
          <Row>
            {/* <Link key={slug} to={`blog/${slug}`}> */}
            {/* <img src={coverImage}></img> */}
            {author.name}
          {/* </Link> */}
          </Row>
        ))}
    </Layout>
  )
}
export default About
