import {motion} from 'framer-motion'

import {ComputersCanvas,} from '../canvas'
import './hero.css'

const Hero = () => {
  return (
    <div className='wrapper'>
      <div className="detailsContainer">
        <h1>Hi, I am <span className='name'>Jacob</span></h1>
        <p>I am a developer looking forward to evolve</p>
      </div>
      <ComputersCanvas/>
    </div>
  )
}

export default Hero