// Write your code here

import Header from '../Header'
import './index.css'

const About = () => (
  <div>
    <Header />

    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about-lg"
        className="about-lg"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about-sm"
        className="about-sm"
      />
    </div>
  </div>
)
export default About
