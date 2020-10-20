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
            <h1 className="page-title">I am a designer and craftsman with extensive training and experience organizing 
            and visually representing complex systems through user interface design, 
          data visualization, mapping, and visual representation of space.</h1>
          </div>
          <div className="page-header-image">
            <Img fluid={ data.myImage.childImageSharp.fluid } />
          </div>
        </div>
        
        <h3 className="page-callout">I'm able to take designs from concept, to mockup, to 
        engaging, discoverable, and responsive <strong>HTML/CSS/JavaScript</strong> user interfaces. I have 
        successfully built design systems, <strong>managed</strong> projects, <strong>lead</strong> design teams, and 
         <strong>communicated</strong> design concepts to business managers and clients. 
        I enjoy working in teams to create things that are greater than the sum of their parts. I understand that <strong>the only way to solve 
          design problems is through iteration</strong>: drawing, communicating, critiquing, building, testing, listening, and more drawing.</h3>
        
        <p className="page-text">I have dual master degrees from the University of Pennsylvania School of Design and have worked professionally 
        as a designer in both the virtual realm of the web and the physical realm of landscape architecture and urban design.</p>
        
        <p className="page-text">I’m driven by a desire to develop equitable interfaces between the virtual and physical worlds that empower individuals and 
          communities to imagine and create sustaining and sustainable living environments.</p>

        <p className="page-text"> Outside of work life, I’m a percussionist/multi-instrumentalist in a 7-piece original rock/funk/soul band and a father to a magical 4 year old girl.</p>
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