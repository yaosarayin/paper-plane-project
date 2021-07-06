import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Image from "gatsby-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import paperPlane from "../../static/home/832.svg"
import mentalHealth from "../../static/home/4.svg"
import event3 from "../../static/home/3.svg"
import event2 from "../../static/home/2.svg"
import event1 from "../../static/home/1.svg"
import team from "../../static/home/5.svg"
import lionsClub from "../../static/home/深圳狮子会.jpg"
import iLab from "../../static/home/哈佛创新实验室.png"
import elaLogo from "../../static/home/睿语国际教育.jpg"

const Home = ({ data }) => {
  console.log(data)
  return (
    <Layout isHomePage>
      <div className="section flex bg-purple-100">
        <div>
          <p className="mb-4 body-text">
            纸飞机计划（纸飞机）是一个通过哈佛创新实验室（Harvard Innovation
            Labs）、由青少年发起，并针对青少年和学生心理健康的非盈利组织。纸飞机希望能够打破社会中对许多心理健康问题闭口不谈的现象，广泛普及心理健康知识，为任何年龄段的学生提供免费资源，并提高家属与学校老师对学生、孩子的身心健康的关注度。
          </p>
          <p className="body-text">
            The Paper Plan Project (PPP) is a Harvard Innovation Labs venture
            team comprised of teenagers and young adults of Chinese descent
            across the globe. The organization started as a response to the
            exacerbating mental health crisis in China during the coronavirus
            pandemic. The lack of attention directed towards student mental and
            emotional health in Chinese society is troubling: and it’s time to
            do something about it.
          </p>
        </div>
        <img src={paperPlane} className="w-1/3 px-16 pb-8"></img>
      </div>
      <div className="section bg-purple-50 flex">
      <img src={mentalHealth} className="w-1/3 px-16 pb-8"></img>
        <div>
          {" "}
          <p className="text-3xl font-english-sans">
            The Paper Plane Project is created by teens, for teens.
          </p>
          <p className="text-xl font-semi-bold font-english-sans my-4">
            We aim to{" "}
            <span className="font-bold">
              destigmatize the topic of mental and emotional health
            </span>{" "}
            by creating a <span className="font-bold">safe space</span> for
            experiences and feelings, spreading well-founded information through
            blog posts and expert columns, and connecting international and
            local resources to those in need.
          </p>
        </div>
      </div>

      <SEO title="All posts" />

      {/* <Bio /> */}

      <div className="section bg-purple-100 pb-64">
        <h2 className="chinese-h2">近期活动</h2>
        <div className='gallery'>
          <div className="gallery-card">
          <img src={event1} className="h-64 pb-8"></img>

          <h3>心心相印</h3>
          </div>
          <div className="gallery-card">
          <img src={event2} className="h-64 pb-8"></img>

          <h3>跳蚤市场</h3>
          </div>
          <div className="gallery-card">
          <img src={event3} className="h-64 pb-8"></img>

          <h3>做最好的自己</h3>
          </div>
        </div>
        <Link to='/events' itemProp="url" className="text-purple-400">更多活动</Link>
      </div>
      <div className="section bg-white">
        <h2 className="chinese-h2">合作项目</h2>
        <div className='flex'>
          <img src={lionsClub} className="max-h-36 pr-16 pb-8"></img>
          <img src={iLab} className="max-h-36 pr-16 pb-8"></img>
          <img src={elaLogo} className="max-h-36 pr-16 pb-8"></img>

        </div>
      </div>
      <div className="section flex bg-purple-100">
        <div><h2 className="chinese-h2">团队</h2>
        <p className="leading-relaxed">纸飞机的创始人Yao和Li是在美留学的土生土长的深圳人。2020年的暑假在隔离中的她们决定开始为这个很重要的话题开始做些力所能及的事。纸飞机现在在深圳以及海外有20个左右的年轻人为我们的博客，项目，活动，以及日常工作忙前忙后。想认识他们请看<Link to='/about' className="font-bold text-purple-400">这里</Link>。如果你支持我们的理念可以在<Link to='/join' className="font-bold text-purple-400">这里</Link>联系我们。我们随时都会欢迎有激情和动力的新成员！</p></div>
        <img src={team} className="w-1/2 px-16 pb-8"></img>
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query whyPPP {
    wpPost(id: { eq: "cG9zdDox" }) {
      excerpt
      uri
      date(formatString: "MMMM DD, YYYY")
      title
      excerpt
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
