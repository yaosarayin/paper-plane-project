// import React from "react";
// import styled from "styled-components";

// import BlogIndex from "../templates/blog-post-archive";

// const Blog = ({ data }) => {
//   return <BlogIndex />;
// };

// export default Blog;

// export const pageQuery = graphql`
//   query WordPressBlogPage($offset: Int!, $postsPerPage: Int!) {
//     allWpPost(
//       sort: { fields: [date], order: DESC }
//       limit: $postsPerPage
//       skip: $offset
//     ) {
//       nodes {
//         excerpt
//         uri
//         date(formatString: "MMMM DD, YYYY")
//         title
//         excerpt
//       }
//     }
//   }
// `;
