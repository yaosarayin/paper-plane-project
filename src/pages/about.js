import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

const About = ({ data }) => {
  const authors = data.allWpPost.nodes
  console.log("authors", data.allWpPost)
  return (
    <Layout header={<h1 className="chinese-h1">关于我们</h1>}>
      <div className="section bg-purple-100">
        <p>
          “纸飞机计划“是一个通过哈佛创新实验室（Harvard Innovation
          Labs）、由青少年发起，并针对青少年和学生心理健康的非盈利组织。纸飞机希望能够打破社会中对许多心理健康问题闭口不谈的现象，广泛普及心理健康知识，为任何年龄段的学生提供免费资源，并提高家属与学校老师对学生、孩子的身心健康的关注度。
        </p>
      </div>
      {/* <div className='section bg-purple-50'>
        <h2 className='chinese-h2'>创始人 Founders</h2>
      </div> */}
      <div className="section bg-purple-50">
        <h2 className="chinese-h2">团队</h2>
        <div className="gallery">
          {authors.map(author => (
            <div className="gallery-card">
              <div style={{ height: "300px", width: "300px" }}>
                <GatsbyImage
                  style={{ height: "300px", width: "300px" }}
                  image={
                    author.featuredImage?.node?.localFile?.childImageSharp
                      .gatsbyImageData
                  }
                  alt={author.title}
                />
              </div>
              <h1>{author.title}</h1>
              <p>{parse(author.excerpt)}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default About

export const pageQuery = graphql`
  query Users {
    allWpPost(
      sort: { fields: [date], order: DESC }
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Users" } } } }
      }
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 300)
              }
            }
          }
        }
      }
    }
  }
`
