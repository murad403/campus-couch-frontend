import AboutBanner from "./AboutBanner"
import AboutFeature from "./AboutFeature"
import HowItWorks from "./HowItWorks"

const About = () => {
  return (
    <div className='px-5 md:px-0'>
      <AboutBanner></AboutBanner>
      <AboutFeature></AboutFeature>
      <HowItWorks></HowItWorks>
    </div>
  )
}

export default About
