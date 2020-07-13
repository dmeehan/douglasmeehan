import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
//import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaEnvelope, FaGithub, FaDribbble, FaLinkedin} from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <h1>
        <Link to="/">
          <span className="logo">dm</span>
          <span className="title">{siteTitle}</span>
        </Link>
      </h1>
      <ul className="menu">
        <li>
          <Link to="/about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <AniLink fade to="/work">
            <span>Work</span>
          </AniLink>
        </li>
        <li>
          <Link to="/work">
            <span>Case Studies</span>
          </Link>
        </li>
        <li>
          <Link to="/work">
            <span>Contact</span>
          </Link>
        </li>
    </ul>
      <ul className="social">
        <li>
          <a href="mailto:dmeehan@gmail.com">
          <FaEnvelope />
            <span className="label">Email</span>
          </a>
        </li>
        <li>
          <Link to="">
          <FaGithub />
            <span className="label">Github</span>
          </Link>
        </li>
        <li>
          <Link to="">
          <FaDribbble />
            <span className="label">Dribbble</span>
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/douglasmeehan/">
          <FaLinkedin />
            <span className="label">LinkedIn</span>
          </Link>
        </li>
    </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
