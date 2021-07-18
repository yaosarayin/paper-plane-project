import React from "react"
import event4 from "../../static/home/834.svg"
import event3 from "../../static/home/3.svg"
import event2 from "../../static/home/2.svg"
import event1 from "../../static/home/1.svg"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image";
import parse from "html-react-parser"

const EventsGallery = ({ data }) => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        const events = data?.allWpPost.nodes
        return (
          <div className="gallery">
            {events?.map(event => {
              return (
                <div className="gallery-card">
                  <Link to={"/2021/07/18/events-xinxinxiangyin/"}>
                    {event.featuredImage && (
                      <Image
                        fluid={
                          event.featuredImage?.node?.localFile?.childImageSharp
                            ?.fluid
                        }
                        alt={event.featuredImage.node.altText}
                        className="h-64 pb-8"
                      />
                    )}
                    <h3>{event.title}</h3>
                    <section itemProp="description">
                    {parse(event.excerpt)}
                  </section>
                  </Link>
                </div>
              )
            })}
            {/* <div className="gallery-card">
        <Link to={"/2021/07/18/events-market/"}>
          <img src={event2} className="h-64 pb-8"></img>
          <h3>跳蚤市场</h3>
        </Link>
      </div>
      <div className="gallery-card">
        <Link to={"/2021/07/18/events-shalong/"}>
          <img src={event3} className="h-64 pb-8"></img>
          <h3>做最好的自己</h3>
        </Link>
      </div>
      <div className="gallery-card">
        <Link to={"/2021/07/18/events-huiben/"}>
          <img src={event4} className="h-64 pb-8"></img>
          <h3>绘本讲堂</h3>
        </Link>
      </div> */}
          </div>
        )
      }}
    />
  )
}

export default EventsGallery

export const pageQuery = graphql`
  query events {
    allWpPost(
      sort: { fields: [date], order: DESC }
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Events" } } } }
      }
    ) {
      nodes {
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
  }
`
