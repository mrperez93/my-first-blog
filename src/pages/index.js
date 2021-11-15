import * as React from "react"

import background from "/src/images/back1.jpg";


import Layout from '/src/components/layout';
import {
  headingAccentStyles,
  center,
} from '/src/components/layout.module.css'

import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

// markup
const IndexPage = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, height:'700px' }}>
      <Desktop>
        <Layout headingAccentStyles="You can learn and play here!">
          <span className={headingAccentStyles}>You can learn and play here!</span>
        </Layout>
        <div className={center}>
          <img style={{ height:'250px', marginTop: '90px'}} src="https://media.giphy.com/media/BhbJdm4nUrmg/giphy.gif" 
              alt="react-gif-player pocoyo">
          </img>
          <img style={{ height:'250px', marginTop: '90px'}} src="https://media.giphy.com/media/khHeelOsc2uUZOAbFu/giphy.gif" 
              alt="react-gif-player blippi">
          </img>
        </div>
      </Desktop>
      <Tablet>
        <Layout headingAccentStyles="You can learn and play here!">
          <span className={headingAccentStyles}>You can learn and play here!</span>
        </Layout>
        <div className={center}>
          <img style={{ height:'100px', marginTop: '90px'}} src="https://media.giphy.com/media/BhbJdm4nUrmg/giphy.gif" 
              alt="react-gif-player pocoyo">
          </img>
          <img style={{ height:'100px', marginTop: '90px'}} src="https://media.giphy.com/media/khHeelOsc2uUZOAbFu/giphy.gif" 
              alt="react-gif-player blippi">
          </img>
        </div>
      </Tablet>
      <Mobile>
        <Layout headingAccentStyles="You can learn and play here!">
        <span className={headingAccentStyles}>You can learn and play here!</span>
        </Layout>
        <div className={center}>
          <img style={{ height:'80px', marginTop: '90px'}} src="https://media.giphy.com/media/BhbJdm4nUrmg/giphy.gif" 
              alt="react-gif-player pocoyo">
          </img>
          <img style={{ height:'80px', marginTop: '90px'}} src="https://media.giphy.com/media/khHeelOsc2uUZOAbFu/giphy.gif" 
              alt="react-gif-player blippi">
          </img>
        </div>
      </Mobile>
      </div>
  );
}

export default IndexPage