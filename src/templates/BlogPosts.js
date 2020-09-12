import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout'
import GraphImg from "graphcms-image";


function createMarkup() {
    return {__html: 'First &middot; Second'};
  }
  
function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

const BlogPosts = ({ pageContext }) => {
    const post = pageContext.post;
    console.log( html`<a href="/">Hello!</a>`)
    return (
        <Layout>
            <h1>{post.title}</h1>
            <GraphImg image={post.coverImage} maxWidth={800} />
            <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        </Layout>    
    
)};

export default BlogPosts;