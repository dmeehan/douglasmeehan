import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'


const CaseStudiesPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
      <body className="body--casestudies" />
    </Helmet>
      <SEO title="Case Studies" />
      <div>
      <div className="breadcrumb">
          <ul>
              <li>Case Studies</li>
          </ul>
      </div>
        
      </div>
    </Layout>
  )
}


export default CaseStudiesPage

{/*export const CaseStudiesQuery = graphql`
{
  allMarkdownRemark(
    filter: {
      frontmatter: { isCaseStudy: { eq: true } }
    }
  ) {
    edges {
      node {
        frontmatter {
          title
          description
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}
`*/}