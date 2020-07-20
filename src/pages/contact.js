import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Helmet>
      < body className="body--contact" />
    </Helmet>
    <div>
        <h1>How can I help you?</h1>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
                Name
                <input type="text" name="name" id="name" />
            </label>
            <label>
                Email
                <input type="email" name="email" id="email" />
            </label>
            <label>
                Subject
                <input type="text" name="subject" id="subject" />
            </label>
            <label>
                Message
                <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
        </form>
    </div>
  </Layout>
)

export default IndexPage