import {BrowserRouter} from 'react-router-dom'

import {Navbar, Hero, About, Experience, Tech, Contact, StarsCanvas} from './components'

const  App =()=> {

  return (
    <BrowserRouter>
    <div className='container'>
    <div className="wrapper">
      <Hero/>
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <div className="footer">
      <Contact/>
      <StarsCanvas/>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App
