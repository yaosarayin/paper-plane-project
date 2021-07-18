import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Image from "gatsby-image";
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <SEO title="All posts" />
        {/* <Bio /> */}
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout header={<h1 className='chinese-h1'>博客</h1>}>

      <SEO title="All posts" />
      <div className="section bg-purple-50">
        
        <div className="gallery posts-gallery">
          {posts.map(post => {
            const title = post.title
            return (
              <div key={post.uri} className="gallery-card post-list-card">
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2 className="font-chinese-display">
                      <Link to={post.uri} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h2>
                    {post.featuredImage && (
                      <Image
                        fluid={post.featuredImage?.node?.localFile?.childImageSharp?.fluid}
                        alt={post.featuredImage.node.altText}
                        className="post-list-image"
                      />
                    )}
                    <small>{post.date}</small>
                  </header>
                  <section itemProp="description">
                    {parse(post.excerpt)}
                  </section>
                </article>
                <Link to={post.uri} itemProp="url" className="absolute bottom-8 right-8 text-sm	text-purple-400	">继续阅读</Link>
              </div>
            )
          })}
        </div>
      </div>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query WordPressPostArchive {
    allWpPost(
      sort: { fields: [date], order: DESC }
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Blog"}}}}}
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
