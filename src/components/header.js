import React from "react"
import { Link } from "gatsby"
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
      <li class="menu-work">
          <Link to="/work">
            <span>Work</span>
          </Link>
        </li>
        <li class="menu-about">
          <Link to="/about">
            <span>About</span>
          </Link>
        </li>
        {/*<li class="menu-casestudies">
          <Link to="/casestudies">
            <span>Case Studies</span>
          </Link>
</li>*/}
        <li class="menu-contact">
          <Link to="/contact">
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
          <a href="https://github.com/dmeehan" target="_blank">
            <FaGithub />
              <span className="label">Github</span>
            </a>
        </li>
        <li>
          <a href="https://dribbble.com/dmeehan" target="_blank">
          <FaDribbble />
            <span className="label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/douglasmeehan/" target="_blank">
            <FaLinkedin />
            <span className="label">LinkedIn</span>
          </a>
        </li>
    </ul>

    
    </div>
  </header>
)

export default Header
