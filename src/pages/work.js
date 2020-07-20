import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby";
import Layout from "components/layout"
import SEO from "components/seo"
import Img from "gatsby-image"
import Helmet from "react-helmet"

const ProjectPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
      < body className="body--work" />
      </Helmet>
      <SEO title="Home" />
      <div className="page">
        <div className="page-projects">
          {renderProjects(data.allMarkdownRemark.edges)}
        </div>
      </div>
    </Layout>
  )  
  
  function renderProjects(projects) {
    return projects.map(item => {
      const { slug } = item.node.fields
      const { title, intro, category, featuredImage } = item.node.frontmatter
      return (
        <div className="project-preview">
          <div class="project-preview-image">
            <Link to={`/work/${slug}/`}>
                <Img fluid={featuredImage.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="project-preview-text">
              <h2 className="project-preview-title">
                { title }
              </h2>
              <p className="project-preview-intro">{ intro }</p>
              <p className="project-preview-category">{ category }</p>
              <p className="project-preview-category">
                <Link to={`/work/${slug}/`}>
                  View project &raquo;
                  </Link>
              </p>
          </div>
      </div>
      )
    })
  }
}

export default ProjectPage

export const ProjectQuery = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {isFeatured: {eq: true}}}) {
      edges {
        node {
          frontmatter {
            title
            intro
            category
            featuredImage {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid
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