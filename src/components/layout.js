/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/global.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <input type="checkbox" id="nav-toggle-trigger" class="nav-toggle-trigger" />
      <label for="nav-toggle-trigger" class="nav-toggle">
          <span>Toggle Navigation</span>
      </label>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main">{children}</main> 
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
