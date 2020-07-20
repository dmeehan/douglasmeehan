import React from "react"
import { graphql, navigate } from "gatsby"
import { Link } from "gatsby";
import Layout from "components/layout"
import SEO from "components/seo"
import Img from "gatsby-image"

const styles = {
  margin: 10,
  marginLeft: 0,
  border: "2px solid black",
  padding: 10
}

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Pokemon Blog</h2>
      {renderBlogs(data.allMarkdownRemark.edges)}
    </Layout>
  )  
  
  function renderBlogs(posts) {
    return posts.map(item => {
      const { slug } = item.node.fields
      const { title, intro, featuredImage } = item.node.frontmatter
      return (
       <div style={styles}>
         <div style={{ color: "black" }}>
         <h4>{title}</h4>
         <p>{intro}</p>
         <Img fixed={featuredImage.childImageSharp.fixed} />
         <Link to={`/blog/${slug}/`}>
            View this project
        </Link>
         </div>
       </div>
      )
   })
  }
}

export default BlogPage

export const BlogQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            intro
            featuredImage {
                childImageSharp {
                    fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`