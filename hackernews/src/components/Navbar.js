import { useState, useRef, useEffect } from 'react'
import { social, links } from '../data';
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);
  const containerRef = useRef(null);

  const Navtoggle = () => {
    setShowLinks(!showLinks)
  };

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      containerRef.current.style.height = `${linkHeight}px`;
    } else {
      containerRef.current.style.height = `0px`;
    }
  },[showLinks])
  
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h4>sky<span>coding</span></h4>
          <button className="nav-toggle" onClick={Navtoggle}>
            <FaBars/>
          </button>
        </div>
        <div ref={containerRef} className="links-container">
          <ul ref={linksRef} className="links">
            {links.map((link) => {
              const { text, url, id } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-links">
          {social.map((icons) => {
            const { icon, url, id } = icons;
            return (
              <a href={url} key={id}>
                {icon}
              </a>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
