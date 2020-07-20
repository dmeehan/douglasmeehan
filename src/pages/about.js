import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Helmet from "react-helmet"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Helmet>
      < body className="body--about" />
      </Helmet>
    <div>
      <h2>I am a designer and craftsman with 20 years of experience in organizing and visually representing complex systems through user interface design, 
        data visualization, mapping, and visual representation of space.</h2>
        
        <p>I'm able to take designs from concept, to mockup, to engaging, discoverable, and responsive HTML/CSS/JavaScript user interfaces. 
          I have experience managing projects, leading design teams, and communicating design concepts to business managers and clients. 
          I enjoy working in teams to create things that are greater than the sum of their parts. I understand that the only way to solve 
          design problems is through iteration: drawing, communicating, critiquing, building, testing, listening, and more drawing.</p>
        
        <p>I have a dual master degrees from the University of Pennsylvania School of Design and have worked professionally as a designer
           in both the virtual realm of the web and the physical realm of landscape architecture and urban design.</p>
        
        <p>I’m driven by a desire to develop equitable interfaces between the virtual and physical worlds that empower individuals and 
          communities to imagine and create sustaining and sustainable living environments.</p>

        <p>Outside of work life, I’m a percussionist/multi-instrumentalist in a 7-piece original rock/funk/soul band and a father to a magical 4 year old girl.</p>
        <div className="resume">
          <div class="resume-meta">

          </div>
          <div className="resume-content">

          </div>
        </div>
    
    </div>
  </Layout>
)

export default IndexPage
