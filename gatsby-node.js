const path = require(`path`);

exports.createPages = async({graphql, actions: {createPage}}) => {
    const {data: {gcms : { posts }}} = await graphql(`
     query {
        gcms {
            posts (stage: PUBLISHED) {
                id
                title
                slug
                tags
                content {
                    html
                    markdown
                }
                author {
                    id
                    name
                }
                date
                excerpt
                coverImage {
                    handle
                    width
                    height
                }
            }
        }
    }
    `);

    // const posts = pageQuery.data.gcms.posts

    const blogTemplates = {
        Article: path.resolve('./src/templates/BlogPosts.js'),
      }

    console.log(posts)
    posts.forEach(post => createPage({
        path: `/blog/${post.slug}`,
        component: blogTemplates.Article,
        context : {
            post : post,
        }
    })
  );
}