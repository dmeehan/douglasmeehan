import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "components/layout"
import SEO from "components/seo"
import Img from "gatsby-image"
import Helmet from "react-helmet"


const ProjectTemplate = ({ data }) => {
  const {
    category,
    intro,
    title,
    company,
    role,
    date,
    client,
    tags,
    featuredImage
  } = data.markdownRemark.frontmatter
  
  const { html } = data.markdownRemark  
  return (
    <Layout>
      <SEO title={`Work - ${title}`} />
      <Helmet>
      < body className="body--work" />
      </Helmet>
      <div>
        <div className="breadcrumb">
          <ul>
            <li>
                <Link to={`/work/`}>
                  Work
                </Link>
            </li>
          </ul>
        </div>
        <div className="project">
          <h1>{title}</h1>
          <div className="project-image">
            <Img fluid={featuredImage.childImageSharp.fluid} />
          </div>
          <div className="project-description">
              <div className="project-meta">
                <ul>
                  <li>
                    <h4>Client</h4>
                    <div>{ client }</div>
                  </li>
                  <li>
                    <h4>Company</h4>
                    <div>{ company }</div>
                  </li>
                  <li>
                    <h4>Date</h4>
                    <div>{ date }</div>
                  </li>
                  <li>
                    <h4>Role</h4>
                    <div>{ role }</div>
                  </li>
                  <li>
                    <h4>Type</h4>
                    <div>{ category }</div>
                  </li>
                  
                </ul>
              </div>
              <div className="project-content">
                <h2 class="project-intro">{intro}</h2>
                <div className="project-text" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
          </div>
          
        </div>
        <p>
          <Link to={`/work/`}>
          &#8592; Back to all projects
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default ProjectTemplate

export const ProjectTemplateQuery = graphql`
  query ProjectPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        category
        intro
        title
        client
        role
        date(formatString: "YYYY")
        company
        featuredImage {
            childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
        }
      }
      html
    }
  }
`