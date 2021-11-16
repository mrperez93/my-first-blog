import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Button from 'react-bootstrap/Button'

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              <Button variant="warning">
                Home
              </Button>{' '}
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/alvaro" className={navLinkText}>
              <Button variant="warning">
                Álvaro Subirats Ramírez
              </Button>{' '}
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/lucas" className={navLinkText}>
              <Button variant="warning">
                Lucas Subirats Ramírez
              </Button>{' '}
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
