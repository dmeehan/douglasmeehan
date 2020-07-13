import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div>
      <h1>Hello! I'm Douglas Meehan.</h1>
      <h2>UI/UX Design, Data Visualization, Mapping.</h2>
      <p>I am a designer and craftsman with 20 years of experience in organizing and visually representing complex systems through user interface design, 
        data visualization, mapping, and visual representation of space.</p>
        <p>I'm able to take designs from concept, to mockup, to engaging, discoverable, and responsive HTML/CSS/JavaScript user interfaces. 
          I have experience managing projects, leading design teams, and communicating design concepts to business managers and clients. 
          I enjoy working in teams to create things that are greater than the sum of their parts. I understand that the only way to solve 
          design problems is through iteration: drawing, communicating, critiquing, building, testing, listening, and more drawing.</p>
        <p>I’m driven by a desire to develop interfaces between the virtual and physical worlds that empower individuals and communities 
          to imagine and create sustaining and sustainable living environments.</p>
          <p>Outside of work life, I’m a percussionist/multi-instrumentalist in a 7-piece original rock/funk/soul band and a father to a magical 4 year old girl.</p>
    </div>
  </Layout>
)

export default IndexPage
