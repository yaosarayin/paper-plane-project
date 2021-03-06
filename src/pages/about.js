import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image";

const About = ({data}) => {
  const authors = data.allWpUser.nodes
  console.log('authors',authors)
  return (
    <Layout header={<h1 className='chinese-h1'>关于我们</h1>}>
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
      <h2 className='chinese-h2'>团队</h2>
        <div className="gallery">
          {authors.map(author => {
            if (author.avatar.foundAvatar) {
              return (
                <div className="gallery-card">
                  <div
                    className="name-avatar"
                  >
                    
                    <img src={author.avatar.url}
                      className="avatar"
                   />
                      <h2 className="font-bold text-xl">
                        {author.firstName} {author.lastName}
                      </h2>
                  </div>
                  {/* <p>{author.email}</p> */}
                  <p>{author.description}</p>
                </div>
              )
            }
            return (
              <div>
                <h2>
                  {author.firstName} {author.lastName}
                </h2>
                <p>{author.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
export default About

export const pageQuery = graphql`
query authors {  
allWpUser {
  nodes {
    avatar {
      height
      size
      url
      width
      foundAvatar
    }
    firstName
    lastName
    id
    email
    description
    roles {
      nodes {
        name
      }
    }
    uri
    slug
  }
}
}
`