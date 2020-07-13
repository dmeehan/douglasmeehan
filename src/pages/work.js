import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from 'gatsby-image'

const WorkPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="work">
    <div className="breadcrumb">
        <ul>
            <li>Work</li>
        </ul>
    </div>
      <h1>HFO Home Visiting Interface</h1>
      <div>
          <Img fluid={data.testImage.childImageSharp.fluid}
          alt="Test Image" />
      </div>
    </div>
  </Layout>
)

export default WorkPage

export const query = graphql`
  query MyQuery {
    testImage: file(relativePath: {eq: "test.png"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`