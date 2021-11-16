import * as React from 'react'
import Layout from '/src/components/layout';
import background from "/src/images/lucas.jpeg";

import {
    pageStyles,
    linkLucasStyle,
    headingSentenceStyles
  } from '/src/components/layout.module.css'

// data
const links = [
    { text: "Go to bed", url: "https://www.youtube.com/watch?v=ZzEXobyuyOQ&t=4319s"},
    { text: "How Many Leaves?", url: "https://www.youtube.com/watch?v=GtCiE4aK9QA"},
    { text: "Body Parts Song", url: "https://www.youtube.com/watch?v=QkHQ0CYwjaI"},
    { text: "Good Morning Sond", url: "https://www.youtube.com/watch?v=U9Q7Y3t4m3g"},
]

const Lucas = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, height:"700px"}}>
        <Layout pageTitle="">
        <main className={pageStyles}>
            <br/><br/><br/>
            <span className={headingSentenceStyles}>“Play is a behavior which requires a healthy habitat to thrive.” <br/>~ Dr. Stuart Brown</span>
            <br/><br/><br/>
            {links.map(link_lucas =>
                <span>
                    <a
                    className={linkLucasStyle}
                    href={`${link_lucas.url}`}
                    target="_blank"
                    >
                    {link_lucas.text}
                    </a>
                </span>
            )}
        </main>
        </Layout>
    </div>
  )
}

export default Lucas
