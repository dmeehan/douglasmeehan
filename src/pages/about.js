import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import { FaEnvelope, FaWrench, FaFilePdf, FaLinkedin} from 'react-icons/fa'
import resume from "../files/DouglasMeehan_Resume_2020.pdf"

const AboutPage = ( { data }) => (
  <Layout>
    <SEO title="About" />
    <Helmet>
      < body className="body--about" />
      </Helmet>
    <div className="page">
      <div className="page-header">
          <div className="page-header-title">
            <h1 className="page-title">I design products that help people navigate complex systems.</h1>
          </div>
          <div className="page-header-image">
            <Img fluid={ data.myImage.childImageSharp.fluid } />
          </div>
        </div>
        
        <h3 className="page-callout">
  I've spent my career working on <strong>complex design problems</strong> across software, 
  data visualization, mapping, and the built environment. Today I lead product design at 
  Citrine Informatics, where I work with scientists, engineers, and product teams to design 
  AI software for materials research. I like working on problems that <strong>don't have obvious 
  answers.</strong> I work iteratively: understanding the system, drawing, prototyping, communicating, critiquing, building, testing, listening, and refining.

<p className="page-text">
  Moving between digital and physical design has shaped how I think about systems, relationships, 
  scale, and the ways people understand and move through complex environments.
</p>

<p className="page-text">
  Outside of work, I'm a percussionist and multi-instrumentalist in a seven-piece original 
  rock/funk/soul band, and a dad.
</p>
        <div className="page-actions">
          <ul>
            <li><Link to="/work" className="button button--alt"><FaWrench /> <span>View My Work</span></Link></li>
            <li><a href={ resume } target="_blank" className="button button--alt"><FaFilePdf /> <span>Download Resume</span></a></li>
            <li><Link to="/contact" className="button button--alt"><FaEnvelope /> <span>Contact Me</span></Link></li>
          </ul>
        </div>
    </div>
  </Layout>
)

export default AboutPage

export const query =  graphql`
  query {
    myImage: file(relativePath: {eq: "IMG_0370.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
` 
