import * as React from "react"

import background from "/src/images/back2.jpg";


const pageStyles = {
  color: "#232129",
  padding: 250,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: -50,
  marginLeft: 150,
  marginBottom: 64,
  maxWidth: 900,
  color: "#0000FF",
  fontFamily: "Monaco",
  fontSize: 38,
}

const headingAccentStyles = {
  marginLeft: 300,
  color: "#0000FF",
  maxWidth: 600,
  fontFamily: "Papyrus",
  fontSize: 20,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 40,
  marginBottom: 30,
}

const linkStyle = {
  color: "#006600",
  fontWeight: "bold",
  fontSize: 25,
  verticalAlign: "5%",
  marginLeft: 10,
  fontFamily: "Monaco",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "probando",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
 {
    text: "Letters",
    url: "https://www.cokogames.com/snow-letters-typing/",
    color: "#000000",
  },
  {
    text: "Numbers",
    url: "https://www.cokogames.com/wooden-numbers-matching-game/",
    color: "#000000",
  },
  {
    text: "Games",
    url: "https://www.cokogames.com/category/games-for-3-years-old/",
    color: "#000000",
  },
  {
    text: "Blippi",
    url: "https://www.youtube.com/channel/UC5PYHgAzJ1wLEidB58SK6Xw",
    color: "#000000",
  },
]

// markup
const IndexPage = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', }}>
      <main style={pageStyles}>
        <title>Home Page</title>
        <h1 style={headingStyles}>
          Álvaro Subirats Ramírez
          <br/>
          <span style={headingAccentStyles}>You can learn and play here! </span>
          <span style={{ fontSize: 21 }} role="img" aria-label="party emojis">
            😄🎉
          </span>
        </h1>
        <br/><br/><br/><br/><br/>
          {links.map(link => (
            <span key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a>{link.icon}</a>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                >
                {link.text}
                </a>
                <br/>
              </span>
            </span>
          ))}
      </main>
      </div>
  );
}

export default IndexPage