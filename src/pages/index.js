import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectPreview from "../components/project-preview";
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>

  <SEO title="Home" />
    <div className="page">
        <h1><span>Hello!&nbsp;</span><span>I'm Douglas Meehan.</span></h1>
        <h2 className="page-subtitle">I'm a <strong>User Interface Designer and Developer</strong> with 20 years experience 
        in organizing and visually representing complex systems through UI/UX, 
        data visualization, mapping, and visual representation of space.</h2>
      <div className="page-projects">
        {renderProjects(data.allMarkdownRemark.edges)}
      </div>
    </div>
    
  </Layout>
);


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
                View project &#8594;
                </Link>
            </p>
        </div>
      </div>
    )
 })
}

export const ProjectQuery = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {isPublished: {eq: true}, isFeatured: {eq: true}}}) {
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