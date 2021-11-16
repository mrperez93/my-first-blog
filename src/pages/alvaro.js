import * as React from 'react'
import Layout from '/src/components/layout';
import background from "/src/images/alvaro.jpeg";

import {
    pageStyles,
    linkStyle,
    headingSentenceStyles
  } from '/src/components/layout.module.css'

// data
const links = [
  { text: "Letters", url: "https://www.cokogames.com/snow-letters-typing/"},
  { text: "Numbers", url: "https://www.cokogames.com/wooden-numbers-matching-game/"},
  { text: "Games", url: "https://www.cokogames.com/category/games-for-3-years-old/"},
  { text: "Blippi", url: "https://www.youtube.com/channel/UC5PYHgAzJ1wLEidB58SK6Xw"},
]

const Alvaro = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, height:"700px"}}>
        <Layout pageTitle="">
        <main className={pageStyles}>
            <br/><br/><br/>
            <span className={headingSentenceStyles}>“Nothing lights up a child’s brain like play.” <br/>~ Dr. Stuart Brown</span>
            <br/><br/><br/><br/><br/><br/><br/>
            {links.map(link_alvaro =>
                <span>
                    <a
                    className={linkStyle}
                    href={`${link_alvaro.url}`}
                    target="_blank"
                    >
                    {link_alvaro.text}
                    </a>
                </span>
            )}
        </main>
        </Layout>
    </div>
  )
}

export default Alvaro
