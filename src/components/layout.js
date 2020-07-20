/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import Header from "./header"
import "../styles/global.scss"

const Layout = ({ children }) => (
  <>
    <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/vfs0une.css" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet" /> 
    </Helmet>
      <input type="checkbox" id="nav-toggle-trigger" class="nav-toggle-trigger" />
      <label for="nav-toggle-trigger" class="nav-toggle">
          <span>Toggle Navigation</span>
      </label>
      <Header />
      <main className="main">{children}</main> 
  </>
)

export default Layout
